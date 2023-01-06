import ProfileForm from "./ProfileForm";
import Card from '../../UI/Card/Card'
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <Card>
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm></ProfileForm>
      </section>
    </Card>
  );
};

export default UserProfile;
