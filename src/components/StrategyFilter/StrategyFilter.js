import React from 'react'
import './StrategyFilter.css'


const strategyFilter = (props) => {

    return(
          <div>
            {
              Object.keys(props.funds).map((function(macro, macroKey){
                return (
                  <div key={macroKey} className="card">
                      <div className="card-divider">
                        <div className="input-group">
                          <input className="strategy-input" type="checkbox"  id={macro} name={macro}/>
                          <label className="strategy-label" for={macro}>{macro}</label>
                        </div>
                      </div>
                      {
                        Object.keys(props.funds[macro]).map((function(main, mainKey){
                          return(
                            <div key={mainKey} className="card-section">
                              <div className="input-group">
                                <input className="strategy-input" type="checkbox"  id={main} name={main}/>
                                <label className="strategy-label" for={main}>{main}</label>
                              </div>
                            </div>
                          )
                        }))
                      }
                  </div>
                )
              }))
            }
          </div>
    )
}

export default strategyFilter