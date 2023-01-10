import Card from "../UI/Card/Card";
import classes from "./Available-meals.module.css";
import MealItem from "../Meals/MealItem/MealItem.js";
import { useEffect, useState } from "react";
const DUMMY_MEALS_1 = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setHttpError] = useState();
  useEffect(() => {
    const fetchmeals = async () => {
      let meals = [];
      const responseData = await fetch(
        "https://react-burger-app-8ad9b-default-rtdb.firebaseio.com/meals.json"
      );
      if (!responseData.ok) {
        throw new Error("fetch failed");
      }
      const response = await responseData.json();
      for (const key in response) {
        meals.push({
          id: key,
          name: response[key].name,
          description: response[key].description,
          price: response[key].price,
        });
      }
      setMeals(meals);
      setisLoading(false);
    };
    const sendRequest = () => {
      fetchmeals().catch((error) => {
        setisLoading(false);
        setHttpError(error.message);
      });
    };

    setTimeout(sendRequest, 3000);
    //fetchmeals();
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItem>
    );
  });
  return isLoading ? (
    <p style={{ textAlign: "center", color: "white" }}>loading ...</p>
  ) : error ? (
    <p style={{ textAlign: "center", color: "red" }}> {error} </p>
  ) : (
    <section className={classes.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
};
export default AvailableMeals;
