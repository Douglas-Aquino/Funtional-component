import React, { Component } from "react";
import "./styles.css";
export default class amigao extends Component {
  state = {
    dog: [
      { nome: "Pyke", idade: "1 ano", raça: "buldogue" },
      { nome: "star", idade: "1 ano e meio", raça: "husky siberiano" },
      { nome: "Vi", idade: "2 ano", raça: "poodle" }
    ],
    cat: [
      { nome: "Lola", idade: "4 ano", raça: "rogdoll" },
      { nome: "Yuumy", idade: "1 ano", raça: "persa" },
      { nome: "Any", idade: "3 ano e meio", raça: "siamês" }
    ],
    ave: [
      { nome: "Loro", idade: "1 ano", raça: "papagaio" },
      { nome: "Lili", idade: "2 ano", raça: "piriquito" },
      { nome: "xaya", idade: "2 ano e meio", raça: "cacatua" }
    ],
    lista: []
  };

  dogs = () => {
    let { dog } = this.state;
    this.setState({
      lista: dog.map((item) => (
        <div>
          <h2>
            Nome: {item.nome} sua idade é {item.idade} e sua raça é {item.raça}.
          </h2>
        </div>
      ))
    });
  };

  cats = () => {
    let { cat } = this.state;
    this.setState({
      lista: cat.map((item) => (
        <div>
          <h2>
            Nome: {item.nome} sua idade é {item.idade} e sua raça é {item.raça}.
          </h2>
        </div>
      ))
    });
  };

  aves = () => {
    let { ave } = this.state;
    this.setState({
      lista: ave.map((item) => (
        <div>
          <h2>
            Nome: {item.nome} sua idade é {item.idade} e sua raça é {item.raça}.
          </h2>
        </div>
      ))
    });
  };

  limpar = () => {
    this.setState({
      lista: ""
    });
  };

  render() {
    let { lista } = this.state;
    let { dogs, cats, aves } = this;
    return (
      <div className="conteiner">
        <h1>Adote conosco</h1>
        <div className="animais">
          <div onClick={dogs} className="cao">
            <img
              src="data:image/jpeg;base64,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"
              alt="foto de cão"
            />
            <p>Cachorros</p>
          </div>
          <div onClick={cats} className="cao">
            <img
              src="https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg"
              alt="foto de cão"
            />
            <p>Gatos</p>
          </div>

          <div onClick={aves} className="cao">
            <img
              src="https://i.pinimg.com/originals/79/66/8a/79668afaa9bed06bbe8bc6d56641b4d0.jpg"
              alt="foto de cão"
            />
            <p>Aves</p>
          </div>
          <h4 onClick={this.limpar}>ver outros</h4>
        </div>
        <h3>{lista}</h3>
      </div>
    );
  }
}
//
