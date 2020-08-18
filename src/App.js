import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div>
          <div className="grid-x">
            <div className="cell large-6">
              <input type="search" placeholder="Search"></input>
            </div>
          </div>
          <div className="grid-x">
            <div className="cell large-4">
              <p>Aplicação Minima</p>
              <div class="slider" data-slider data-initial-start="200" data-end="20000">
                <span class="slider-handle"  data-slider-handle role="slider" tabindex="100"></span>
                <span class="slider-fill" data-slider-fill></span>
                <input type="hidden"></input>
              </div>
              <p>Até R$20.000</p>
            </div>
            <div className="cell large-4"></div>
            <div className="cell large-4">
            <p>Prazo de Resgate</p>
            <div class="slider" data-slider data-initial-start="200" data-end="20000">
              <span class="slider-handle"  data-slider-handle role="slider" tabindex="100"></span>
              <span class="slider-fill" data-slider-fill></span>
              <input type="hidden"></input>
            </div>
            <p>Até 30 Dias Uteis</p>
          </div>
          </div>
          <p>Horario Limite de aplicação 12:00</p>
        </div>
      </div>
      <hr></hr>
      <div id="" className="grid-container">
        <div className="funds-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Fundo</th>
                <th>Data da Cota</th>
                <th>Mes(%)</th>
                <th>2016(%)</th>
                <th>12M(%)</th>
                <th>Aplicação Minima(%)</th>
                <th>Prazo do Resgate</th>
                <th>Aplicar</th>
              </tr>
            </thead>
            <tbody>
          
              <tr>
                <td className="risk"></td>
                <td>
                  <div>
                    <p>Nome</p>
                    <p>Renda Fixa|Indexado Soberano</p>
                  </div>
                </td>
                <td>29/04/</td>
                <td>0,47</td>
                <td>2,93</td>
                <td>13,16</td>
                <td>1.000,00</td>
                <td>Prazo</td>
                <td>Aplicar</td>
              </tr>
            </tbody>
          </table> 
        </div>
      </div>
    </div>
  );
}

export default App;
