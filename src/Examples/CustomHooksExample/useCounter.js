import { useState } from "react";
const useCounter = (props) => {
    // console.log("props:",props)
    const [counter, setCounter] = useState(0);
    setTimeout(() => {
        setCounter((prev) => { return props.setCount(prev) })
    }, 3000);
    return counter
}
export default useCounter;