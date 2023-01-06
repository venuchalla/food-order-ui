import { useContext, useRef } from "react";
import AuthContext from "../../Store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const authContext = useContext(AuthContext);
  const passwordChangeHandler = (event) => {
    event.preventDefault();
    const updatedPassword = newPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAcxnAa_pbiKsxhfkKurph11Va8covlpys",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: updatedPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("updated password");
          return response.json();
        } else {
          throw new Error("update is failed");
        }
      })
      .then((data) => {
        console.log(data, "data");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
