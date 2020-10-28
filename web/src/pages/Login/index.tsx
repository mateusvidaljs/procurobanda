import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo1.png';

import './styles.scss';

const Login = () => {
  return (
    <div id="page-login">
      <header>
        <img src={ logoImage } alt="Logo" className="logo-image" />
        <h2 className="subtitle">Espalhe sua música</h2>
      </header>
      
      <main>
        <div>
          <h2>Fazer Login</h2>
          <Link to="/">Criar uma conta</Link>
        </div>

        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
          </div>

          <div className="rememberme">
            <div className="input-checkbox-block">
              <input type="checkbox" /> Lembrar-me
            </div>
            <Link to="/">Esqueci minha senha</Link>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}

export default Login;