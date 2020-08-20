import React from 'react'
import Moment from 'react-moment';

const fundRows = (props) => {

    return(
        <div>
            {
                props.funds.map((element) => {
                    return(
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
                })
            }
        </div>
    )
}

export default fundRows