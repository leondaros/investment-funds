import React from 'react'
import './StrategyFilter.css'


const strategyFilter = (props) => {

    return(
          <div>
            {
              Object.keys(props.funds).map((function(macro, macroKey){
                return (
                  <div key={macroKey} class="card">
                      <div class="card-divider">
                        {macro}
                      </div>
                      {
                        Object.keys(props.funds[macro]).map((function(main, mainKey){
                          return(
                            <div key={mainKey} class="card-section">
                              {main}
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