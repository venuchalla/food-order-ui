import { useEffect, useState } from "react";
const useCounter = (updateCounterFun) => {
    // console.log("props:",props)
    //const setFn = useCallback(props.setCount, [props.setCount])
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timeOut = setInterval(() => {
            setCounter((prev) => { return updateCounterFun(prev) })
        }, 3000);
        return () => clearInterval(timeOut);
        

    }, [updateCounterFun])

    return counter
}
export default useCounter;