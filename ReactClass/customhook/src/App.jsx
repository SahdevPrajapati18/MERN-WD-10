import React from "react";
import Custom from "./Custom";

const App = () => {
  const [data] = Custom("https://dummyjson.com/products");

  return (
    <div>
      {data &&
        data.products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))
      } 
    </div>
  );
};

export default App;
