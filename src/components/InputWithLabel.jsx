export default function InputGroup({ inputLabelName, inputType, onValueChanges, keyName, placeHolder }) {
    function handleChange(event) {
        onValueChanges(keyName, parseInt(event.target.value));
    }

    return (
        <p>
            <label>
                {inputLabelName}
            </label>
            <input onChange={handleChange} type={inputType} placeholder={placeHolder} required/>
        </p>
    );
}