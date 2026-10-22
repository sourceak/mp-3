import useCalculator from "../hooks/useCalculator";

export default function Calculator() {
  const {
    first, second, result,
    setFirst, setSecond, calculate, clear
  } = useCalculator();

  return (
    <section className="calculator">
      <p className="eyebrow">REACT PROJECT</p>
      <h2>Calculator</h2>
      <p>Enter two numbers and select an operation.</p>

      <div className="calculator-inputs">
        <input
          type="number"
          id="first-number"
          placeholder="First number"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="number"
          id="second-number"
          placeholder="Second number"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>

      <div className="calculator-buttons">
        {["+", "-", "*", "/", "**"].map((operation) => (
          <button key={operation} onClick={() => calculate(operation)}>
            {operation}
          </button>
        ))}
        <button onClick={clear}>Clear</button>
      </div>

      <div className="calculator-result">
        <p>Result</p>
        <h3
          id="output"
          style={{ color: typeof result === "number" && result < 0 ? "red" : "#f5d37e" }}
        >
          {result}
        </h3>
      </div>
    </section>
  );
}
