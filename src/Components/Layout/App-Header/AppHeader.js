import classes from './AppHeader.module.css';

const AppHeader = (props) => {
  return (
    <header className={classes.appHeader}>
        <h1>React Examples </h1>
        <p> {props.environment}</p>
    </header>
    )
}

export default AppHeader;