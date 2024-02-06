import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function InvestmentResults({ investmentValues }) {
    const investmentResults = calculateInvestmentResults(investmentValues)

    let totalInterest = 0;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map(result => {
                    totalInterest += result.interest;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;

                    return (<tr key={result.year}>
                        <td>
                            {result.year}
                        </td>
                        <td>
                            {formatter.format(result.valueEndOfYear)}
                        </td>
                        <td>
                            {formatter.format(result.interest)}
                        </td>
                        <td>
                            {formatter.format(totalInterest)}
                        </td>
                        <td>
                            {formatter.format(totalAmountInvested)}
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}