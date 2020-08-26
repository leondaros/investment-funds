import React, { Component } from 'react';
import './App.css';
import DinamicTable from './components/DinamicTable/DinamicTable'
import StrategyFilter from './components/StrategyFilter/StrategyFilter'

const initialState = {
  funds: [],
  orderedFund: {},
  maxRetrievalDays: 5000000,
  maxApplication: 500,
  minimumApplicationSearch: 0,
  retrievalQuotationDaysSearch: null
}

class App extends Component {

  constructor() {
    super()
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.requestApi()
  }

  componentDidMount = () =>{
    // $('#minApplicationSlider').on('moved.zf.slider', function() {
    //   var value = $(this).attr('data-slider');
    //   console.log(value)
    // });
  }

  handleChange = (event) =>{
    this.setState({minimumApplicationSearch: event.target.value});
    this.filterData(this.state.minimumApplicationSearch,this.state.retrievalQuotationDaysSearch)
  }

  filterData = (minimumApplication,retrievalQuotationDays, mainStrategys) =>{
    let filteredData = this.state.funds.filter(element => {
      if(mainStrategys.includes(element.specification.fund_main_strategy.name)){
        let minInitialApp = parseFloat(element.operability.minimum_initial_application_amount).toFixed()
        if(minimumApplication && retrievalQuotationDays){
          if(minInitialApp <= minimumApplication &&
              element.operability.retrieval_quotation_days <= retrievalQuotationDays){
            return element
          }
        }else if(minimumApplication && 
          (minInitialApp <= minimumApplication)){
          return element
        }else if(retrievalQuotationDays &&
          (element.operability.retrieval_quotation_days_str <= retrievalQuotationDays)){
          return element
        }
      }
    })
    this.orderByStrategy(filteredData)
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
        <div id="fund-filter" className="grid-container">
          <div>
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
                <div id="minApplicationSlider" className="slider" data-slider data-initial-start={0} data-end={this.state.maxApplication}>
                  <span className="slider-handle" data-slider-handle role="slider" tabIndex="1" aria-valuemax={5000000} aria-valuemin={0} aria-valuenow={50}></span>
                  <span className="slider-fill" data-slider-fill></span>
                  <input type="text" onChange={(e) => this.handleChange(e)}></input>
                </div>
                <p>Até R$20.000</p>
              </div>
              <div className="cell large-4"></div>
              <div className="cell large-4">
                <p className="title">Prazo de Resgate</p>
                <div className="slider" data-slider data-initial-start="0">
                  <span className="slider-handle"  data-slider-handle role="slider" tabIndex="1" aria-valuemax={this.state.maxApplication} aria-valuemin={0} aria-valuenow={50}></span>
                  <span className="slider-fill" data-slider-fill></span>
                </div>
                <p>Até 30 Dias Uteis</p>
              </div>
            </div>
            <p>Horario Limite de aplicação 12:00</p>
          </div>
        </div>
        <div id="fund-strategy" className="grid-container">
          <StrategyFilter funds={this.state.orderedFund}/>
        </div>
        <hr></hr>
        <div id="fund-container" className="grid-container">
          <div className="funds-table">
             <DinamicTable funds={this.state.orderedFund}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
