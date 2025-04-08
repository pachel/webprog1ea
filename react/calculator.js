const { useState } = React;

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handleCalculate = () => {
        try {
            // Egyszerű evaluáció, csak oktatási célból – biztonságosabb megoldást érdemes használni
            setResult(eval(input));
        } catch {
            setResult("Hiba!");
        }
    };

    return (
        <div className="calculator">
            <h2>Számológép</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Írj be egy kifejezést"
            />
            <button onClick={handleCalculate}>Számol</button>
            <h3>Eredmény: {result}</h3>
        </div>
    );
}