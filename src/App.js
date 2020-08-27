import React, { Component } from 'react';
import './App.css';
import DinamicTable from './components/DinamicTable/DinamicTable'
import StrategyFilter from './components/StrategyFilter/StrategyFilter'

const initialState = {
  funds: [],
  orderedFund: {},
  maxRetrievalDays: 0,
  maxApplication: 0,
  minimumApplicationSearch: "",
  retrievalQuotationDaysSearch: ""
}

class App extends Component {

  constructor() {
    super()
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.requestApi()
  }

  handleChange = (event) =>{
    let value = event.target.value!=="" ? parseFloat(event.target.value) : ""
    this.setState({[event.target.id]: value}, () =>
      this.filterData(this.state.minimumApplicationSearch,this.state.retrievalQuotationDaysSearch, [])
    );
  }

  filterData = (minimumApplication,retrievalQuotationDays, mainStrategys) =>{
    if(minimumApplication === "" && retrievalQuotationDays === ""){
      this.orderByStrategy(this.state.funds)
    }else{
      let filteredData = this.state.funds.filter(element => {
          let minInitialApp = parseFloat(element.operability.minimum_initial_application_amount).toFixed()
          if(minimumApplication !== "" && retrievalQuotationDays !== ""){
            if(minInitialApp <= minimumApplication &&
                element.operability.retrieval_quotation_days <= retrievalQuotationDays){
                  return element
            }
          }else if(minimumApplication !== "" && 
            (minInitialApp <= minimumApplication)){
            return element
          }else if(retrievalQuotationDays !== "" &&
            element.operability.retrieval_quotation_days <= retrievalQuotationDays){
              return element
          }
      })
      this.orderByStrategy(filteredData)
    }
  }

  getFilterMaxValue = (data) =>{
    let maxApplication = 0
    let maxRetrievalDays = 0
    data.forEach(function(element){
      if(maxApplication < parseFloat(element.operability.minimum_initial_application_amount)){
        maxApplication = parseFloat(element.operability.minimum_initial_application_amount)
      }
      if(maxRetrievalDays < element.operability.retrieval_quotation_days){
        maxRetrievalDays = element.operability.retrieval_quotation_days
      }
    })
    this.setState({maxRetrievalDays: maxRetrievalDays, maxApplication: maxApplication})
  }

  orderByStrategy = (data) => {
    let ordered = {}
    data.forEach(function(element){
      if(!ordered.hasOwnProperty(element.specification.fund_macro_strategy.name)){
        ordered[element.specification.fund_macro_strategy.name] = {}
      }
      if(!ordered[element.specification.fund_macro_strategy.name].hasOwnProperty(element.specification.fund_main_strategy.name)){
        ordered[element.specification.fund_macro_strategy.name][element.specification.fund_main_strategy.name] = []
      }
      ordered[element.specification.fund_macro_strategy.name][element.specification.fund_main_strategy.name].push(element)
    })
    this.setState({orderedFund: ordered})
  }

  requestApi = () => {
    fetch('https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full')
    .then(res => res.json())
    .then(data => {
      this.setState({funds: this.state.funds.concat(data)})
    })
    .finally(() => {
      this.orderByStrategy(this.state.funds)
      this.getFilterMaxValue(this.state.funds)
    });
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1>Lista de Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </div>
        <div className=" grid-container">
          <div className="container grid-x grid-margin-x grid-margin-y">
          <div id="fund-filter" className="cell large-10">
          <div className="grid-container">
              <div className="grid-x">
                <div className="cell large-6">
                  <div className="input-group">
                    <input className="searchbar" type="search" placeholder="Buscar fundo por nome"></input>
                  </div>
                </div>
              </div>
                <div id="filter-container" className="grid-x">
                  <div className="cell large-4">
                    <p className="title">Aplicação Minima</p>
                    <input id="minimumApplicationSearch" min="0" max={this.state.maxApplication} type="number" onChange={(e) => this.handleChange(e)}></input>
                  <p className="limit-value">Até R${this.state.maxApplication}</p>
                  </div>
                  <div className="cell large-4"></div>
                  <div className="cell large-4">
                    <p className="title">Prazo de Resgate</p>
                    <input id="retrievalQuotationDaysSearch" min="0" max={this.state.maxRetrievalDays} type="number" onChange={(e) => this.handleChange(e)}></input>
                    <p className="limit-value">Até {this.state.maxRetrievalDays} Dias Uteis</p>
                  </div>
                </div>
                <p className="application-limit">Horario Limite de aplicação 12:00</p>
              </div>
            </div>
          <div id="fund-strategy" className="cell large-2">
            <StrategyFilter funds={this.state.orderedFund}/>
          </div>
          <div id="fund-container" className="cell large-10">
            <div className="funds-table">
              <DinamicTable funds={this.state.orderedFund}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
