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
        <BasicForm></BasicForm>
      </div>
    </>
  );
};

export default FormExampleMain;
