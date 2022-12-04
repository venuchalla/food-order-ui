import { NavLink } from "react-router-dom";
import Card from "./Components/UI/Card/Card";

const Home = (props) => {
  return (
    <Card>
      <h1> Home </h1>
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
export default Home;
