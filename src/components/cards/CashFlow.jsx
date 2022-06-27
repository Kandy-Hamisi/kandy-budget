import React from 'react'
// import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

const CashFlow = ({income}) => {
  return (
    <div className='cashflow-details'>
        {/* <ProgressBarComponent
            height='40px'
            trackColor="#F8C7D8"
            progressColor='#E3165B'
        /> */}
        <h3>{income} KSH</h3>
    </div>
  )
}

export default CashFlow