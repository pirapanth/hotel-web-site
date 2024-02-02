import React, { useState } from 'react';
import './destinations.css';
import LeoGrandColombo from './hotels/hotel1';
import LeoLakesiteColombo from './hotels/hotel2';
import LeoRedColombo from './hotels/hotel3';
import LeoLifeIntergetedResort from './hotels/hotel4';
import LeoBentotaBeach from './hotels/hotel5';
import LeoWildYala from './hotels/hotel6';
import TrincoBluByLeo from './hotels/hotel7';
import EllaidhooMaldivesByLeo from './hotels/hotel8';
import MaldivesDhonveliByLeo from './hotels/hotel9';

const Destinations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      label: 'Sri lanka',
      submenu: [
        {
          label: 'Colombo',
          subsubmenu: [
            'Leo Grand Colombo', 
            'Leo Lakesite Colombo',
            'Leo Red Colombo',
            'Leo Life Intergeted Resort',
          ],
        },
        {
          label: 'Resort',
          subsubmenu: [
            'Leo Bentota Beach',
             'Leo Wild Yala',
             'Trinco Blu By Leo',
          ],
        },
      ],
    },
    {
      label: 'Maldives',
      submenu: [
        {
          label: 'Maldives',
          subsubmenu: [
            'Ellaidhoo Maldives By Leo',
             'Maldives Dhonveli By Leo',
          ],
        },
      ],
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderSelectedDestination = () => {
    console.log(selectedOption);
    const selectedHotel = options
      .flatMap(option => option.submenu || [])
      .flatMap(submenu => submenu.subsubmenu || [])
      .find(hotel => hotel === selectedOption);

      switch (selectedHotel) {
        case 'Leo Grand Colombo':
          return <LeoGrandColombo />;
        case 'Leo Lakesite Colombo':
          return <LeoLakesiteColombo />;
        case 'Leo Red Colombo':
          return <LeoRedColombo />;
        case 'Leo Life Intergeted Resort':
          return <LeoLifeIntergetedResort />;
        case 'Leo Bentota Beach':
          return <LeoBentotaBeach />;
        case 'Leo Wild Yala':
          return <LeoWildYala />;
        case 'Trinco Blu By Leo':
          return <TrincoBluByLeo />;
        case 'Ellaidhoo Maldives By Leo':
          return <EllaidhooMaldivesByLeo />;
        case 'Maldives Dhonveli By Leo':
          return <MaldivesDhonveliByLeo />;
        default:
          return <LeoGrandColombo />;
      }
  };

  return (
    <div className='destination'>
      <br />
      <h1>Our Destinations</h1>
      <div className="dropdown-container">
        <div className="centered-dropdown">
          <div className="dropdown-header" onClick={handleToggleMenu}>
            {selectedOption ? selectedOption : 'LEO Grand Colombo'}
            <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
          </div>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className={selectedOption === option.label ? 'selected' : ''}
              >
                <div onClick={() => handleOptionClick(option.label)}>
                  {option.label}
                </div>
                {option.submenu && (
                  <ul className="submenu">
                    {option.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex}>
                        <div onClick={() => handleOptionClick(submenuItem.label)}>
                          {submenuItem.label}
                        </div>
                        {submenuItem.subsubmenu && (
                          <ul className="subsubmenu">
                            {submenuItem.subsubmenu.map(
                              (subsubmenuItem, subsubIndex) => (
                                <li key={subsubIndex} onClick={() => handleOptionClick(subsubmenuItem)}>
                                  {subsubmenuItem}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <br />
      {renderSelectedDestination()}
    </div>
  );
};

export default Destinations;
