import React, { useState } from 'react';
/* import './Cadastro.css'; */


function Cadastro() {
  
  const  [usuario, setUsuario] = useState();
  {/* Caracteres que são aceitos no input type="number" */}
  const [symbolsArr] = useState(["e", "E", "+", "-", ".", ","]);

  function handleInputChange(e){
    
    const key = e.target.name;
    
    const newUsuario = {...usuario};

    newUsuario[key] = e.target.value;

    setUsuario (newUsuario);
    console.log(newUsuario);
  }
  
  return (
    <div className="paginaCadastro">

 

      <div className="cadastro">

        {/* Botões e inputs*/}
        <div className="botoes_inputs">
          <div>
            <div className="inputNomeSobrenome">
              <p>Nome Completo</p>
              <input name="Nome" onChange={handleInputChange}/>
            </div>
          </div>

          <div>
            <div>
              <p className="NumeroMatricula">Número Matrícula</p>
              <input className="inputNumeroMatricula" name="Matricula" onChange={handleInputChange} type="number" onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} />
            </div>
          </div>

          <div>
            <div>
              <p>Data de Nascimento</p>
              <input className="inputDataNascimento" name="Nascimento" type="date" value="2022-10-25" min="1900-01-01" max="2012-01-01" onChange={handleInputChange}/>
            </div>
          </div>
          
          <div>
            <p>Endereço</p>
            <input className="inputEndereco" name="Endereco" onChange={handleInputChange} />
          </div>

          <div>
            <p>Esporte</p>
            <input className="inputEsporte" name="Esporte" onChange={handleInputChange}/>
          </div>

          <div>
            <p>Email</p>
            <input className="inputEmail" name="Email" onChange={handleInputChange}/>
            <p>Senha</p>
            <input className="inputSenha" name="Senha" onChange={handleInputChange}/>
          </div>

          <div>
            <div className="botaoCadastrar">
              <button className="botaoCadastrar">Cadastrar</button>
            </div>
            <div>
              <p className="perguntaCadastrado" align="right">
                Já está cadastrado?
              </p>
              <p className="perguntaLogin" align="right">
                Faça o login!
              </p>
            </div>
          </div>
        </div>

        {/* Linha vertical */}
        <div>
          <img
            src=""
            className="linhas"
          />
        </div>

        {/* Logo */}
        <div>
          <img
            src=""
            className="logos"
          />
        </div>
        </div>

      </div>
  );
}

export default Cadastro;