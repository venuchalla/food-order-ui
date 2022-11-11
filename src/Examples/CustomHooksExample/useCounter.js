import { useCallback, useEffect, useState } from "react";
const useCounter = (props) => {
    // console.log("props:",props)
    const setFn =  props.setCount
    //const setFn = useCallback(props.setCount, [props.setCount])
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timeOut = setInterval(() => {
            setCounter((prev) => { return setFn(prev) })
        }, 3000);
        return () => clearInterval(timeOut);
        

    }, [setFn])

    return counter
}
export default useCounter;