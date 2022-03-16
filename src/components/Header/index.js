import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER, HOME } from "../../constants/routes";
import { MainContext } from "../../providers/main_provider";
import { AuthenticationService } from "../../services/authentication_service";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(MainContext);
  const authService = new AuthenticationService();

  const logout = () => {
    setIsLoggedIn(false);
    authService.removeUser();
  };

  return (
    <>
      <div className="flex shadow-md h-8 p-8 mb-8 bg-indigo-500 text-white items-center">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl">
            <Link to={HOME}>Ijobs</Link>
          </h1>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          {isLoggedIn ? (
            <span className="" onClick={logout}>
              <Link to={LOGIN}>Se déconnecter</Link>
            </span>
          ) : (
            <span className="">
              <Link to={LOGIN}>Se connecter</Link>
            </span>
          )}

          {isLoggedIn ? (
            ""
          ) : (
            <span>
              <Link to={REGISTER}>S'inscrire</Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};
