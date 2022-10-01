import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import axiox from "axios";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const ProductRegister = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [dataFabricacao, setDataFabricacao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [preco, setPreco] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const productRegister = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/productRegister", {
        nome,
        preco,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setNome("");
        setDataFabricacao("");
        setPreco("");
        setLogoutUser(false);
        history.push("/");
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Registrar Produto</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={productRegister}
      >
        <TextField
          id="nome"
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <TextField
          id="dataFabricacao"
          type="date"
          helperText="Data de Fabricação"
          value={preco}
          onChange={(e) => setDataFabricacao(e.target.value)}
        />
        <br />

        <div style={{ margin: "10px auto", display:'flex'}}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked />}
              label="Produto perecível"
            />
          <br />
          <TextField
            fullWidth
            id="dataValidade"
            type="date"
            helperText="Data de Validade"
            value={preco}
            onChange={(e) => setDataValidade(e.target.value)}
          />
          <br />
        </div>

        <TextField
          id="preco"
          label="Preco"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br />


        <br />
        <Button
          style={{ width: "200px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar
        </Button>
      </form>
      
    </div>
  );
};

export default ProductRegister;
