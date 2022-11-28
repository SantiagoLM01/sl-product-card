import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductProps {
    product: Product,
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false)



    const increment = (value = 1) => {
        if (initialValues?.maxCount === counter) return
        const newValue = counter + value
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });

    }

    const decrement = (value = 1) => {

        if (counter === 0) return
        const newValue = counter - value
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }


    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value])
    console.log(counter)


    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset,
        increment,
        decrement,
    }
}