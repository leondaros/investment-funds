import React from 'react'
import './DinamicTable.css'
import FundRows from '../FundRows/FundRows'
import Moment from 'react-moment';

const dinamicTable = (props) => {

    let buildTable = () =>{
        return ""
    }

    return (
        <table>
            <thead>
                <tr>
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
            {
                Object.keys(props.funds).map((function(macro){
                    return ([
                    <tr>{macro}</tr>,
                    Object.keys(props.funds[macro]).map((function(main){
                        return ([
                        <tr>{main}</tr>,
                        props.funds[macro][main].map((function(element){
                            return (
                                <tr>
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
                        }))
                        ])
                    }))
                    ])
                }))
            }
            </tbody>
        </table>
    )
}

export default dinamicTable