import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/counterStore";
import classes from "./Header.module.css";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOutHandler =()=>{
    dispatch(authActions.logout());
  }
  // <a href="sales">My Sales</a>
  //<a href="products">My Products</a>
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
            My Sales
            </li>
            <li>
            My Products
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
