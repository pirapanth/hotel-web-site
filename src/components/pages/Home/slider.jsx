import React, { useState, useEffect } from 'react';
import './slider.css';

const images = [
"https://lh3.googleusercontent.com/pw/ABLVV84AvWjrwWBH7F6RWVSsmNwEpR_qHLmQwGtaUCAaflqU_b1MSeUOW1oZBgGiESv1Tp8QVebRQiB7yP8uZJ5uyEnD6gZfOgITWpSoN4e4cZFAgz2OP5i0ZZItUV8YRKenI-jXM8NP34vXZPNvUt3dw4tEWTY2FEet4Lxl8BkXdsr5_A2Pb6z0LCGWrRbPmWgJRcCic9STeABCB2uUiWML8dipgH-BzoeDvqH3PN7D8vRuCg-xNBrUeaZ-qW97yGxSPn7ZU1bCKVWJstngJ7uf1y1sJIPgnwfK1E9RSxg5jrlyrP7GmKtdu2ph_L9bh8Mn0Bt9VpKBl2iyB6oPWiQAA9tm5kqVyL7Yc9Ywhs8N7ip0WHV0MLp7094nyvpPbg-MAn7xCGkx_Mgi31iD8ika7D3nZ-cTu3-BKubdheTgcjJySOr2XbbH2V1OrgnlW4mJLsHScfWqSiVCXmkDQoO2vfq4KNrh8IJrleUHx4NPLQf-AgqBK3ZBVYZEoojhkzb1o3pzjqTU5IVBY_INQelehXsW2cWKPQJd_1C5RGRSB75aXTbChpEUBPAnwx-e8B4bYoMEaGXnpeJKWWDLKQbe0mt1JScqF8ap24OyZyYY91fZ7l2WdKIqY7ML5lCpb5u9zNCbW_cFZ-SIbB7SzTBqG_NfcQqKW0cLokCQH1Nn9HW8kfh-VeTqvNqWd7tRR6Dw3k4Ob_IOp5pe0DVTFwsuvka6SGNBkUpOi96_IeDfeZK1baJ3BHv09FLUFNdiC3fU-eJ0lwCmapC3o6INLCFe6KOm9RNVWkJRd9GFG6Hw_f8lAvzF2-jUybZYjhIZ-6enNb4HHfqcQgh0toIF1qSQkeIZ7Jkyvzn5J4Vgld4P8Suzz4WDlWLeFZ9tzP3rhT-pTl-wX0-If-v1-L0bC74LNO6AikI=w1390-h928-s-no-gm?authuser=0", 
"https://lh3.googleusercontent.com/pw/ABLVV85Xyi2BIk6GzfuFwQlJerCSViIIAkS9sz_QEUA-mOexZufy5ai-Xbi6_uHV-dvU9w6XN3Ua9inrBuFuDPwoE7TwbP4-LqdzVU5syAozXorVS-EGWVqQZiizX6Iwd9VAUBDALD96q9El_tBNlgoYIihVnr10eyS2_xTwxdrlTA3YA9mKP8B7e3btNh6ztTwX29EMPNIQCHV5BU3ViWyW6WMX2uZF2JACfeaWhxtxGBKMBIyt4OFk_-KfnFJ_TuvnaXkeBHqoQQ9bQMxoujw2aDCh_apZMw1o223426NUos7u7S6BerznblNTa1I8i6rG3OT8DMOGrAHAGwI9i9b92bBYoX_BCIF1iQ_3so4w9dj5SjaAX-e9F0zzSNWvnglUkI7_il0_4cI8eerWLasSFjvQ7yTtwwjerIZqMDaxggOB88bqkNAoKUnIu4iQ6h4iby2Lx0oBDHmkRBgWRKG04u--o0AU0a4TzCSHgpqYbjBdHLmpHmkxOaCtM0skqRqGWaepMNjL7aJDwZyMZ8cpFFRg_5U2SCaAd-_Q9RdV0DUPagDOCeVwIkAvRcSejJHJi_cxm-WqFq3Is-mI5K7BSYmiVkjOLR7oVJHs12C3NbUPzOJqJXkGXxIk_ctJpqcxINRd-WLC5GxnA1293qdDIFHdphUNdmdeIiCMTIS_JBUHzcJGYJhSX3Z6LQ6bBph2uKfh_RCOwUKMRkUeZHkqGoDnUWHNZDQJ426RDZI-Fvg2psi5cdRJTlIrx0XX1LFjIc4EOELtJGxXEFo3jGdLAmMH6bZxg8HoTO4Ptj8FfaXOFdPrglFi8X4mji28yn_vCsoERqEcRXLBypBq3s0YaZ_vPzn8T4fAnsStZWy4ywYmeX2aT4KSRu6he8CyeFuBot1ij4xq3TyKqQqLsMMjEGdoYHg=w1391-h928-s-no-gm?authuser=0", 
"https://lh3.googleusercontent.com/pw/ABLVV84jgNFHxct4-ptlsvC8beP22XXPQ2ItOwQcfp4zJ24MjhqDIENZA_PHHKB9SyyoqNOyLTUB7HVUwNk68KKzxu5DNdOn68-YguVHB2NdwuIPBdx1beWTArWRIhLjN5UZK7_jEsCAFryYqfHsaEnXKj3NfO-m_229rfVZIJXTztgDgq13ygY11LqH3mwizv1zyX8i6tfWH1-g0VYn_h1V0JcRagVMQMiWvNP9FPruPIALqkvIICTF5GFlEmMtLnTpUgGpzHFu_kmCcZi0xaGJOziEQlosR-BtunMOyo-b2tC-cgJFGkh9y9ea_opsvURiVxsNLoQfis4GaP8F6m7zpBzsTWtDHL2lsUuAXYSW-YFHnW0rHLPzxRt445ILzRFSKtCv9rPS2EUrnTiEBCfquJGOJQahZrIkryovSSLfhF0sAxfv3MGzMxSIIAqjxZYUv2YywLJFNM1JP8W80wF7EsKNbDJ3B8N3WK92BRFx8gKETSvrTuegPKiChs63VOBmjJjAK1MlVCQ08LtrePmPWDQMV8ddss2KaVmzBnYfiiEzx2Y608zKY3lmpSBxRrADVlAI-AjI6GYg1SWx4UQTLcWro3ao-iq3ezFTcq8nc_qt9nF-3TD5aC2AGbNK-Q29nJurN9blOTxP9MT7Ci7gRpYPBwCvifWUOFUREgRDhmKV3kO1TtXQZPttq5kNS6P_gyaLxJ0xy25-QVUfYc7AglZxxE9QwMTQPr5JmjZxSk-EA_KK7D2dk18PN8neGk1SPoCPtGu5bL9Gk-RAaXl6ut4O65Eht3oZtkbz8QLTP-KeBQ8DrQ5WnjR_cKut711OOtjBrIjbaEI1nEroetYyKi9TANoDyLBaprngrLJVXpcB_x2WEHBcRquWIQ1TvYrUjVCQ1iH_JXASN87GrESeK3Fqogo=w1391-h928-s-no-gm?authuser=0", 
"https://lh3.googleusercontent.com/pw/ABLVV84nHu7WXv0tHk4SS7e5bmrCg9dIXXU4ltbu5dSNj4NUFqpTG-bW5H7uhSLRom8KhhHR-4cf-r1JEci9a3CEr9PTfSrf_AsXk_vnXIa8pJStDTqyPwcxTn9XLqLKCtj-MNH97hI5qK7s6cdRwTQMlIEEZBCXv0jhN5B-K08OrPHLDvj80EBaAD0LN0kKXBtyJzk15J3okFf1aWrS_KH89RTtHmlRxWYgaiJxjBHCnVA6uRSTJv1Wrhm9MWTu05QztwrFw7kd3Uju_Rf3B699gQumxE7CFLy4VFOv_8Ha5waseotXIGmPDz-tDum1icgkuG-GirO2MK4WCzCCOfGhQ2BwllKXjwU5TNlLJo4RbEnpoNsGG-0oran1FIAIZL3bPtPMxjHnNyDOPwUqEArP4FhAXMYbLf-38kI8VkUoY95jGkqGQz4ZtyTBDrr18wJJ8lMkQ55sWel69bZTuPvdPaU6JAVxiTECUZPc97234WLd7_0tdSgPsb6W6xWVnX-TsKEHygOFFWH1C_LL6eM3nuaeKZmaEp3BTQG4v7l_e7MIZHLgm-v7ExuQyH2b3pmwba7489Z9XaE6GQa6c_3tth0m491GVn73Xv0gAejn393nJ_Xz7eGgbpRGm81a5Dz3DXGx-Qpw8_lA7b526BFLo2vndsWguPWoq6ZBoGRLzhHRaQty9wsZv8rvuTkVN0cQZCzZl0vdyeO8JxeuRAremTFUBUw493H_ghP-3tt9ofcDmR591BeUUvn_aVIrcuxo_-CsDSJvKIjDeXd1ELvI8OEFwpn9lGEzQq0bT-ykR--ZehowzrV26m8ztWZcWymfv6eXUW95TCSkcQFYzzoIt91vfq2plvCGpdM_vepmrAgPVTNl8OdrOc0ZnzTKc_mrah5UtiB4c-LfT-ljnFGGzm6caBw=w1391-h928-s-no-gm?authuser=0",  
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slideshow">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="slide-content">
            <h1>LEO</h1><p>Hotels & Resorts</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
