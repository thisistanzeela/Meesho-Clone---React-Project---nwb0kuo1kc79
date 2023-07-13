import React from "react";
import "./footer.css";
import googleStoreImg from "../utils/images/googleplayImg.jpg";
import appleStoreImg from "../utils/images/appleStore.jpg";




const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="col1" color="white">
          <div className="col2">
            <div className="col3">
              <div className="col4">
                <h4 className="col4-h4">Shop Non-Stop on Meesho</h4>
                <p className="col4-p">
                  Trusted by more than 1 Crore Indians
                  <br />
                  Cash on Delivery | Free Delivery
                </p>
                <div className="col5">
                  <div className="col6">
                    <img
                      alt="Google Play store"
                      src={googleStoreImg}
                      
                    />
                  </div>
                  <div className="col7">
                    <img
                      alt="App Store"
                      src={appleStoreImg}
                     
                    />
                  </div>
                </div>
              </div>
              <div className="col8">
                <div>
                  <a
                    href="https://meesho.10/jobs?utm_medium-footer&utm_source-meesho website&utm_campaign-careerspagepromotion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="">Careers</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://supplier.meesho.com/?utm_source-meesho&utm_medium-mueb&utm_campaign-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span fontSize="18px">Become a supplier</span>
                  </a>
                </div>
                <div>
                  <a href="https://www.meesho.com/legal/hall-of-fame?embed=true">
                    <span className="">Hall of Fame</span>
                  </a>
                </div>
                <div>
                  <a href="https://www.meesho.com/sitemap" target="_blank">
                    <span
                      fontSize="18px"
                      fontWeight="demi"
                      color="greyT1"
                      className=""
                    >
                      Sitemap
                    </span>
                  </a>
                </div>
              </div>
              <div className="col9">
                <div>
                  <a href="https://www.meesho.com/legal?embed=true">
                    <span
                      fontSize="18px"
                      fontWeight="demi"
                      color="greyT1"
                      className=""
                    >
                      Legal and Policies
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion"
                    target="_blank"
                    rel=""
                  >
                    <span
                      fontSize="18px"
                      fontWeight="demi"
                      color="greyT1"
                      className=""
                    >
                      Meesho Tech Blog
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.meesho.com/notices_and_returns?embed=true"
                    target="_blank"
                  >
                    <span
                      fontSize="18px"
                      fontWeight="demi"
                      color="greyT1"
                      className=""
                    >
                      Notices and Returns
                    </span>
                  </a>
                </div>
              </div>
              <div className="col10">
                
                <div className="col10-col">
                  <h6>Contact Us</h6>
                    <p>
                    Fashnear Technologies Private Limited, 
                    <br />
                    CIN: U74900KA2015PTC082263
                    <br />
                    06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9,
                    Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103,
                    Karnataka, India 
                    <br />
                    E-mail address:<br />query@meesho.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
