import InputWithLabel from './InputWithLabel'
export default function InputRow({ inputs, onValueChanges}) {
    return (
        <section className='input-group'>
            {
                inputs.map(inputWithLabel => {
                    return (
                        <InputWithLabel key={inputWithLabel.key} onValueChanges={onValueChanges} inputLabelName={inputWithLabel.inputLabelName} inputType={inputWithLabel.inputType} keyName={inputWithLabel.key} placeHolder={inputWithLabel.placeHolder} />
                    )

                })
            }
        </section>
    );
}