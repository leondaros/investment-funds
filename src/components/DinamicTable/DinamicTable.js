import React from 'react'
import './DinamicTable.css'
import Moment from 'react-moment';

const dinamicTable = (props) => {

    const retrievalQuotationFormat = (data) =>{
        let index = data.indexOf("(") > 0 ? data.indexOf("(") : data.length
        return data.slice(0,index)
    }

    const parseData = (data) =>{
        return parseFloat(data).toFixed(2)
    }

    return (
        <table className="unstriped">
            <thead>
                <tr>
                    <th>Fundo</th>
                    <th>Data da Cota</th>
                    <th>Mes(%)</th>
                    <th>2016(%)</th>
                    <th>12M(%)</th>
                    <th>Aplicação Minima(R$)</th>
                    <th>Prazo do Resgate</th>
                    <th>Aplicar</th>
                </tr>
            </thead>
            <tbody>
            {
                Object.keys(props.funds).map((function(macro, macroKey){
                    return ([
                    <tr key={macroKey} className="macro-strategy"><td colSpan="12">{macro}</td></tr>,
                    Object.keys(props.funds[macro]).map((function(main, mainKey){
                        return ([
                        <tr key={mainKey} className="main-strategy"><td colSpan="12">{main}</td></tr>,
                        props.funds[macro][main].map((function(element, elementKey){
                            return (
                                <tr key={elementKey} className="fund">
                                    <td>
                                        <div>
                                        <p className="fund-name">{element.simple_name}</p>
                                        <p className="fund-specification">{element.specification.fund_type}|{element.specification.fund_class}</p>
                                        </div>
                                    </td>
                                    <td><Moment format="DD/MM/YYYY">{element.quota_date}</Moment></td>
                                    <td>{parseData(element.profitabilities.month)}</td>
                                    <td>{parseData(element.profitabilities.year)}</td>
                                    <td>{parseData(element.profitabilities.m12)}</td>
                                    <td>{parseData(element.operability.minimum_initial_application_amount)}</td>
                                    <td>{retrievalQuotationFormat(element.operability.retrieval_quotation_days_str)}</td>
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