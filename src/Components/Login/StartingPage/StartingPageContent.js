import classes from "./StartingPageContent.module.css";
import Card from "../../UI/Card/Card";
import { NavLink } from "react-router-dom";
const StartingPageContent = () => {
  return (
    <Card className={classes.starting}>
      <h1> Welcome to Home Page</h1>
      <ul>
        <li>
          <NavLink to="/CourseApp"> Course App</NavLink>
        </li>
        <li>
          <NavLink to="/Examples">Examples</NavLink>
        </li>
      </ul>
    </Card>
  );
};

export default StartingPageContent;
