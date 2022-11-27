import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/counterStore";
import classes from "./Auth.module.css";
import { useState } from "react";
import UserProfile from "./UserProfile";
import Counter from "./Counter";
import CounterUsingClass from "./CounterUsingClass";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    if (email.trim().length >= 2 && password.trim().length >= 2) {
      dispatch(authActions.login({ email, password }));
    } else {
      console.log("login not successfull");
    }
  };
  let renderElement = "";
  if (isAuthenticated) {
    renderElement = (
      <div>
        <UserProfile></UserProfile>
        <Counter></Counter>
        <CounterUsingClass></CounterUsingClass>
      </div>
    );
  } else {
    renderElement = (
      <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={emailChangeHandler} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordChangeHandler}
              />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        </section>
      </main>
    );
  }
  return renderElement ;
};

export default Auth;
