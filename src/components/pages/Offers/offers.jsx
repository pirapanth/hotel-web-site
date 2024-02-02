import React from 'react';
import './offers.css';

const offers = [
  {
    id: 1,
    title: 'Rooms & Suites',
    date:'01 Feb 2021-31 Dec 2021',
    description: 'Book Earlty and Save with Flexibility',
    details:'Book in advance and sace up to 20% with complimentary',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ABLVV85BO-DZXlZdC51jl29D5kInO7h0vVztni8ZJJ3CGPI5l_UznSx8lFeqbOGp2Q4MhsS04FyYEjXglKAXvMg_LQj9badD-9Jp_dLMST0te8vP8w_NffFm1QGBHXBdWc-II-M5l67OiCtSkGt4YAY9hwRoFW5HZ_ni2EMnUDzuNNMCl78ZjETQpQ21EHGOcb3aBA7tz3wKymWKYdwhRsHg4eMpmp0alW2Q-WwnMpL9e3GOBst0_gOG9Pq8wy3cxVhWX8_cJLZjX_RPZXemsetQHMnk22a7OfvygWTv1clSsdcbZipoC9YyNx757KMwgK-kvXNJT4NaY001v0Aq6uRcDTbhYZ41I3UFq8RPOBYkLpQd2NL_CyEclIKmtX3f9a89fEj9RwQxPcu00_9toihElvW2korQj2Q_wjSuxnbsNR7Amban6Mkxd39GqfRhWywS7xl49jAFZwG67aoXp07AtGDVG0iFtoOcLofAjJn2HSyj61KVnNMyaNFbvDjLiZ7OpEtGkgsT4KoNW2pKWkMlE4ump2JMtJTiehxRLaFv8CNvqor5Q9TEc3_VoO6vZo4WvqWhlAb7DmhebTgzIii_ToBA_Ufexo4T5JuqLUooDio5f1Qww8BifTMXrK0q54Cn86-lbDuWUW917emDCSN_OLnioDqI4sWECN3ysxqBM6Po1lpdN2nn09X7b-eSigxWa0wjkPgkjUQm_4pQ5mj5O8bAWpRetxYhXbXJklW0AZyb5mGrivRQfGiJoY7Q6Hj8jWrG0jcObfXnwvu5AgGwLO-Fhmp98pj6Y7hb-OApeZ1He__tugSmgLjpJRC2OZ2ah5hsm8mBJRn33LRTHzfqDvd9T19dW0BJbPHiGOlZvGzsje5f73s6CSEYamTK4wfplr6WkGmS1S8uTp5OujblMQC9inQ=w718-h404-no?authuser=0',
    price:'From LKR 25,000.00 Average Per Night',
    btn:'View Details',
  },
  {
    id: 2,
    title: 'Rooms & Suites',
    date:'.',
    description: 'Adventure Zone Family Package',
    details:'Enjoy a memorable family getaway in Colombo',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ABLVV85nAMiDu0XJZ9QMY7juTRz6S2uwvbnh9EYcRaycIhgkKlG3s_uLYhQ0-kCa9ypJMhPLlzt6cf43pQ6iNygmJ5Phzx_Syoedno1aYWgUxfl0Ki4eyjFnUE3Iv9mLXeZIAYp9neJ2n0bHVyGnDB5CPZGBB1RblelQ3MlrWAJEBdY01sre0YUPqGwssTPFYF90PMK8agLcSsrZ3g25XtbaLa6uQWVk1UIwHeM7tn02G6RimPOLvCjJyqH-n5Mun3cYjnlivK48gglocN4lIdPOJPfv5NotzmsfkqxwJJucA9TYotTvKkSVQf1valAFI7vFGR5t5ADtIqGIBsBAvW5kurSlvur7vDab3qYcizNZEv1eqHh1rLFTo5ZE-61t1pkZfl9WAdCBuTZFqIBirdQ12rfxisq1BYDt5oeqFxTDb4woFcWFLPsVq7AklUMFS4WuEqgxaLGicpFRgg99pjxXXfH-R3dY3eWIF2J69nhIKBsvlOfT-mOVzEAU38h3z302RED0NBm0HRFC820izIWEyAcE1sTkM1NAc9jKI0agM_cXN8HhEHZuHqAQ_plSzh_DVsvRMTCBXVcoRH1szQp7iND37jnpEG1vjYcIUqSHQXDdszwj4atCmkX0MGqAi_nwIdFYsKXezNq8X-mMwUXwfwz00b86KLXuGV2abXvzAZLbuL9EowkR30QYiZ9Mm4U4Apb0w8Fy--OWKu2QEI6CqMA-B1pA-Jxi-LDyZpUza5Vp5C7WHUW2ogmN6ZGyhkyMuWEBMHDqoOgRnqQMFEFnHA7qP4HtBFXph-QA_1ug3Rrz_ORVXE29sFA7VDHiqmbeWCh3MxSxzhwPP9fyhg6TGrOP2yGJWodZwx4FE6PXKPVSP_pSKZ_ty2-pMOJyHrJNP8dTka4FO6BnIuJYK6iH_E5lRvk=w1649-h928-s-no-gm?authuser=0',
    price:'From LKR 31,756.80 Average Per Night',
    btn:'View Details',
  },
  {
    id: 3,
    title: 'Rooms & Suites',
    date:'.',
    description: 'Bed & Breakfast',
    details:'Start your day with stunning view of Colombo and daily breakfast',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ABLVV87yMLAq4a8ItnHZmCsnrM7hfdXdMTu73pf4c0oZKKzu5S2CZ2jXBvdDJ8beVE-dy1bUYLhPEsY73CZcIQ3n1pQxgeOfO7qhKG3EsrqNa2BBEjsGpd3vPGQ4d0V_cJO9GLiYLChZgN4SrLf4FkKozaU5WhT7lUC_cSA82lQ_b-vVEJQhuZ8In6ED3jULojs-V5fz_6zy9sd9_-MeD09AGbe2R7BiqPoaT-PpJWIs_ZP4n9BjsH6MX0PlwWLjAoK0xCNCkazyXNQb8dRdJXl2_ORPdin9fnNkBdCj7c1SxtBfh_7K6ovtQgz39bkwSfyUCHqtvQL8jht5hDhOnetTGR9OIRCCNZvBLHqpyjoHAVFOJsmLeSfz_tuTz-f1dcfrg428giVpdXTU1nzZSKFj2MLORH2TF1rU7r1zWfxUhgYPRbEvRNLqHX6Drog1TzSE6d-h5urNuzrpCtkfT8ws-DkVLC2cA_tjTqdndpUjlcI1MW2SiK50S18lv3mJ3LzPygQAaJzPp-rHVLS2uf70m1GOwxQ23JA34ijP9ho59SoiHlNctxpLjdpUtAcfBHaROZdM2yHIVSi9591VREAHCAeAv5zBvbMLK9CpnPlLEyI_NS5nPLrrc-CYGWLQApS8dEmGfmXJRAnwNXXtV2Yf28MUw856rUZYow7Zrw_kOmyGjxM_KDMV1YMUAfr-CJMR20ht-FAIh8zauwX4-dENkz62EzHf9fYZTULP8YE66uQXx7Yp9OBJXpMTLF3VFBK_KKISEczLAuSL9gvcrWlJWqCRVmgREhYKVxPcCtFg_dQD0YuFMBdWO8qvUNatMk6WqaZnyXYkE67MeZnWsoOHZ9LlXDFl_NBPbIL4_uPwu2sCbCceyeHKHkTf13ikuVnjKYMWL64n5A0cS-Cu6W--CPdJ1UU=w1649-h928-s-no-gm?authuser=0',
    price:'.',
    btn:'View Details',
  },
];

const Offers = () => {
  return (
    <div className='offer-head'>
        <br />
        <h1>Offers</h1>
    <div className="offer-section">
      <div className="offer-cards">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p>{offer.date}</p>
              <h2>{offer.description}</h2>
              <p>{offer.details}</p>
              <h2>{offer.price}</h2>
            </div>
            <div className="more-button">
                <button>{offer.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="view-a">
            <a href="http://">View All</a>
        </div>
    </div>
  );
};

export default Offers;
