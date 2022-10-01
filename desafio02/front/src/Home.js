import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h2>Parece que vc ainda não esta logado</h2>
      <h3>
        Se você já tem uma conta então faça <Link to="/login">Login</Link>
      </h3>
      <h3>
      Se você ainda não tem uma conta por favor {" "}
        <Link to="/register">Registre-se aqui</Link>
      </h3>
    </>
  );
  return (
    <div style={{ marginTop: "100px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <h2>Bem vindo novamente</h2>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;
