import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="bg-indigo-600 mt-16">
        <div className="flex flex-col md:flex-row justify-around p-12 md:p-20 text-white">
          <div className="w-full md:w-1/3 flex md:justify-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-3 md:mb-5">
                A propos de nous
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-4"></div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fug
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex md:justify-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-3 md:mb-5">Navigation </h2>
              <div className="w-20 h-1 bg-red-500 mb-4"></div>
              <ul>
                <li>A PROPOS</li>
                <li>SERVICES</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex md:justify-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-3 md:mb-5">Contact</h2>
              <div className="w-20 h-1 bg-red-500 mb-4"></div>
              <ul>
                <li>
                  {/*<FontAwesomeIcon className="mr-3" icon={faBell} />*/}
                  Phone: 034 29 313 10
                </li>
                <li>
                  {/*<FontAwesomeIcon className="mr-3" icon={faEnvelope} />*/}
                  Email: hello@ijobs.mg
                </li>
                <li>
                  {/*<FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt} />*/}
                  Adress: Lot 312 Parcelle 1225, Californie
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/*
        <div className="flex justify-center items-center p-3 md:p-5">
          <FontAwesomeIcon
            className="text-white text-3xl m-5"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-white text-3xl m-5"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="text-white text-3xl m-5"
            icon={faLinkedin}
          />
        </div>
        <hr />
        <div className="p-9 text-center">
          <p className="text-white">&copy; 2022 - Tous droits réservés</p>
        </div>*/}
      </div>
    </>
  );
};
