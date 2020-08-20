import React from 'react'
import './DinamicTable.css'
import FundRows from '../FundRows/FundRows'
import Moment from 'react-moment';

const dinamicTable = (props) => {

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
                Object.keys(props.funds).map((macro) => { 
                    return (
                        <div>
                            <tr>{"macro: "+macro}</tr>
                        {
                            Object.keys(props.funds[macro]).map((main) => {
                                return (
                                    <div>
                                        <tr>{"main: "+main}</tr>
                                        <FundRows funds={props.funds[macro][main]}/>
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default dinamicTable