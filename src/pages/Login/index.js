import React from "react";
import { MainLayout } from "../../layouts/main_layout";

export const LoginPage = () => {
  return (
    <MainLayout>
      <div>
        <h2>Connexion</h2>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Mot de passe</label>
              <input type="password" />
            </div>
            <div>
              <button type="submit">Se connecter</button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
