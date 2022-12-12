import React from "react";
import Footer from "./Components/Layout/Footer-Component/Footer";
import "./App.css";
import AppHeader from "./Components/Layout/App-Header/AppHeader";
import AppRoutes from "./AppRoutes";


function App() {
  /* let renderElement = []
   for (let i = 0; i <= 100; i++) {
     let localElement = (<h2 key={i}> number : {i}</h2>)
     renderElement.push(localElement)
   }
 */
  const env = process.env.NODE_ENV
   
  return (
    <>
      <AppHeader environment= {env}></AppHeader>
      <section style={{ marginTop: "6rem" }}>
       <AppRoutes></AppRoutes>
      </section>
      <Footer>
        <div>
          <p> we are in foot block</p>
        </div>
      </Footer>
    </>
  );
}

export default App;
