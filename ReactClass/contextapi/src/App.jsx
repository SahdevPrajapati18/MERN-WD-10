import React, { createContext } from "react";
import Card1 from "./Card1";

export const dataDistributer = createContext();

const App = () => {
  let data = {
    fname: "Sahdev",
    lname: "Prajapati"
  };

  return (
    <dataDistributer.Provider value={data}>
      <div>
        <Card1 />
      </div>
    </dataDistributer.Provider>
  );
};

export default App;
