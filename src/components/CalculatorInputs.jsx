import InputRow from "./InputRow";

export default function CalculatorInputs({ onValueChanges }) {

    const inputGroup1 = [
        {
            key: 'initialInvestment',
            inputLabelName: 'Inital Investment',
            inputType: 'number',
            placeHolder: 0
        }, {
            key: 'annualInvestment',
            inputLabelName: 'Annual Investment',
            inputType: 'number',
            placeHolder : 0
        },
    ];
    const inputGroup2 = [
        {
            key: 'expectedReturn',
            inputLabelName: 'Expected Return',
            inputType: 'number',
            placeHolder : 0
        }, {
            key: 'duration',
            inputLabelName: 'Duration',
            inputType: 'number',
            placeHolder : 0
        },
    ];

    return (
        <section id='user-input'>
            <InputRow onValueChanges={onValueChanges} inputs={inputGroup1} />
            <InputRow onValueChanges={onValueChanges} inputs={inputGroup2} />
        </section>
    );
}