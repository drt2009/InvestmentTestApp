import CalculatorInputs from "./components/CalculatorInputs"
import Header from "./components/Header"
import InvestmentResults from "./components/InvestmentResults"

import { useState } from 'react'

const INTIAL_CALC_VALUES = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}


function App() {
    const [calculatorValues, setCalculatorValues] = useState(INTIAL_CALC_VALUES);

    function handleValueChanges(fieldChanged, newValue) {
        setCalculatorValues(
            prevCalcValues => {
                return {
                    ...prevCalcValues,
                    [fieldChanged]: newValue
                }
            }
        )
    }

    return (
        <>
            <Header id="header" />
            <CalculatorInputs onValueChanges={handleValueChanges} />
            <InvestmentResults investmentValues={calculatorValues} />
        </>
  )
}

export default App
