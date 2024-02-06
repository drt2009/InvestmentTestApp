export default function Header({...props }) {
    return (
        <header {...props}>
        <img src='investment-calculator-logo.png' alt='Investment Calculator Logo' />
        <h1>Investment Calculator</h1>
        </header>
    );
}