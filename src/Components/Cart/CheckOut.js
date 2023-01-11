import classes from "./CheckOut.module.css";
const CheckOut = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form}>
      <div>
        <div className={classes.control}>
          <label htmlFor="yourName">Your Name</label>
          <input type="text" id="yourName"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="postalCode">PostalCode</label>
          <input type="text" id="postalCode"></input>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default CheckOut;
