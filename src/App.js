import "./App.css";
import Header from "./Header";
import Left from "./Left";
import Keyboard from "./Keyboard";
import { keyboardData } from "./data";
function App() {
  const date = new Date();
  const dayofMonth = date.getDate();

  const startDate = 16;
  const endDate = 21;

  if (dayofMonth >= startDate && dayofMonth <= endDate) {
    return (
      <body>
        <Header />
        <div>
          <Left />

          <div className="akko_product_wrap">
            <center>
              <h1>ON SALE PRODUCTS</h1>
            </center>
            {keyboardData.map(({ name, photoName, discountPrice }) => (
              <Keyboard
                name={name}
                photoName={photoName}
                discountPrice={discountPrice}
              />
            ))}
          </div>
        </div>
      </body>
    );
  } else {
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
}

export default App;
