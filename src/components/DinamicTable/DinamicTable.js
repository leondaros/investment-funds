import React from 'react'
import './DinamicTable.css'
import Moment from 'react-moment';

const dinamicTable = (props) => {

    return (
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
            {
                Object.keys(props.funds).map((macro) => { 
                    return (
                        <div>
                            <tr>{"macro: "+macro}</tr>
                        {
                            Object.keys(props.funds[macro]).map((main) => {
                                return (
                                    <tr>{"main: "+main}</tr>
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