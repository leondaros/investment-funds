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
      <div className="grid-container">
        <div className="funds-table">
          <table>
            <thead>
              <tr>
                <th width="200">Fundo</th>
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
              <tr>Renda Fixa</tr>
              <tr>
                <td>COR</td>
                <td>Fundo Nome</td>
                <td>Data da Cota</td>
                <td>Mes(%)</td>
                <td>2016(%)</td>
                <td>12M(%)</td>
                <td>Aplicação Minima(%)</td>
                <td>Prazo do Resgate</td>
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
