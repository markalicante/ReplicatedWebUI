import "./App.css";
import Header from "./Header";
import Left from "./Left";
import Keyboard from "./Keyboard";
import { keyboardData } from "./data";

function App() {
  return (
    <body>
      <Header />
      <div>
        <Left />
        <div className="akko_product_wrap">
          {keyboardData.map(({ name, photoName, price }) => (
            <Keyboard name={name} photoName={photoName} price={price} />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App;
