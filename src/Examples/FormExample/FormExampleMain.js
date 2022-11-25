import BasicForm from "./BasicForm";
import SimpleInput from "./SimpleInput";

const FormExampleMain = (props) => {
  return (
    <>
      <h1 style={{ mariginTop: "6rem", textAlign: "center",color:"aliceblue"}}>
        Sample Input Form
      </h1>
      <div className="app">
        <SimpleInput></SimpleInput>
        <br></br>
        <h2 style={{textAlign:"center"}}> Form example using Hooks</h2>
        <br></br>
        <BasicForm></BasicForm>
      </div>
    </>
  );
};

export default FormExampleMain;
