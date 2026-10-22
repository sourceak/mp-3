import { useState } from "react";

export default function useCalculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");

  function calculate(operation) {
    const a = Number(first);
    const b = Number(second);

    if (first === "" || second === "") {
      setResult("Enter both numbers");
      return;
    }

    const operations = {
      "+": () => a + b,
      "-": () => a - b,
      "*": () => a * b,
      "/": () => a / b,
      "**": () => a ** b
    };

    setResult(operations[operation]());
  }

  function clear() {
    setFirst("");
    setSecond("");
    setResult("");
  }

  return { first, second, result, setFirst, setSecond, calculate, clear };
}
