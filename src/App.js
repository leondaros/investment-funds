import React, { Component } from 'react';
import './App.css';
import Moment from 'react-moment';

const initialState = {
  funds: []
}

class App extends Component {

  constructor() {
    super()
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.requestApi()
  }

  requestApi = () => {
    fetch('https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full')
    .then(res => res.json())
    .then(data => {
      this.setState({funds: this.state.funds.concat(data)})
    });
  }

  render(){
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
                <p className="title">Aplicação Minima</p>
                <div class="slider" data-slider data-initial-start="200" data-end="20000">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="100"></span>
                  <span class="slider-fill" data-slider-fill></span>
                  <input type="hidden"></input>
                </div>
                <p>Até R$20.000</p>
              </div>
              <div className="cell large-4"></div>
              <div className="cell large-4">
                <p className="title">Prazo de Resgate</p>
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
              {this.state.funds.map((element,key) => {
                return(
                  <tr key = {key}>
                    <td className="risk"></td>
                    <td>
                      <div>
                        <p>{element.simple_name}</p>
                        <p>{element.specification.fund_type}|{element.specification.fund_class}</p>
                      </div>
                    </td>
                    <td><Moment format="DD/MM/YYYY">{element.quota_date}</Moment></td>
                    <td>{element.profitabilities.month}</td>
                    <td>{element.profitabilities.year}</td>
                    <td>{element.profitabilities.m12}</td>
                    <td>{element.operability.minimum_initial_application_amount}</td>
                    <td>{element.operability.retrieval_quotation_days_str}</td>
                    <td>Aplicar</td>
                  </tr>
                )
                })
              }
              </tbody>
            </table> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
