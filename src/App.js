import React from "react";
import Footer from "./Components/Layout/Footer-Component/Footer";
import "./App.css";
import AppHeader from "./Components/Layout/App-Header/AppHeader";
import AppRoutes from "./AppRoutes";
import MainLayout from "./Components/Layout/MainLayout/MainLayout";
import { Route, Routes } from "react-router";


function App() {
  /* let renderElement = []
   for (let i = 0; i <= 100; i++) {
     let localElement = (<h2 key={i}> number : {i}</h2>)
     renderElement.push(localElement)
   }
 */
  const env = process.env.NODE_ENV;
  const environment = process.env.REACT_APP_ENVIRONMENT;
  const commonParam = process.env.REACT_APP_NAME;
  console.log(
    " environment:",
    environment,
    "commonParam:",
    commonParam,
    "env",
    env
  );
  console.log("process.env", process.env);
  /**
   * <>
      <AppHeader environment={environment }></AppHeader>
      <section style={{ marginTop: "6rem" }}>
        <AppRoutes></AppRoutes>
      </section>
      <Footer>
        <div>
          <p> we are in foot block</p>
        </div>
      </Footer>
    </>
   */
  return (
    <MainLayout>
       <AppRoutes></AppRoutes>
    </MainLayout>
  );
}

export default App;
