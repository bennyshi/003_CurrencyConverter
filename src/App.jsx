import "./App.css";
import CurrencyConverter from "./components/currency-converter";

function App() {
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
        <CurrencyConverter />
    </div>
  );
}

export default App;