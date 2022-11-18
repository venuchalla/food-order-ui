
import React, { Fragment, useState } from 'react';
import Footer from './Components/Layout/Footer-Component/Footer';
import MealsMainApp from './Components/MealsMainApp';
import UserFinderMain from './Examples/ClassComponentExample/UserFinderMain';
import CustomhooksMain from './Examples/CustomHooksExample/CustomHooksMain';
import CustomHooksHttpExampleMain from './Examples/CustomHooksHttpExample/CustomHooksHttpExampleMain';
import ExpenseTracker from './Examples/ExpenseTracker/ExpenseTracker';
import HttpRequestExample from './Examples/HttpRequestsExample/HttpRequestExample';
import StyleExample from './Examples/StylesExample/StyleExample';
import UserMain from './Examples/UserApp/UserMain/UserMain';
import "./App.css"
import FormExampleMain from './Examples/FormExample/FormExampleMain';
import AppHeader from './Components/Layout/App-Header/AppHeader';


function App() {

  //<ExpenseTracker></ExpenseTracker>
  //  <StyleExample></StyleExample>
  // <UserMain></UserMain>
  //  <UserFinderMain></UserFinderMain>
  //<HttpRequestExample></HttpRequestExample>
  //<MealsMainApp></MealsMainApp>
  //<CustomhooksMain></CustomhooksMain>
  //<CustomHooksHttpExampleMain></CustomHooksHttpExampleMain>
  let renderElement = []
  for (let i = 0; i <= 100; i++) {
    let localElement = (<h2 key={i}> number : {i}</h2>)
    renderElement.push(localElement)
  }


  return (<>
    <AppHeader></AppHeader>
    <section style={{marginTop : "5rem"}}>
      <MealsMainApp></MealsMainApp>
    </section>
    <Footer><div><p> we are in foot block</p></div></Footer>
  </>
  );
}

export default App;
