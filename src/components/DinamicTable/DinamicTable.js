import React from 'react'
import './DinamicTable.css'
import Moment from 'react-moment';

const dinamicTable = (props) =>{
    return(
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
              {props.funds.map((element,key) => {
                return(
                  <div key = {key}>
                    <tr>{element.specification.fund_macro_strategy.name}</tr>
                    <tr>{element.specification.fund_main_strategy.name}</tr>
                    <tr>
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
                  </div>
                )
                })
              }
              </tbody>
            </table>
    )
}

export default dinamicTable