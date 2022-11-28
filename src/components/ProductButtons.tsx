import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import React from "react"

export interface Props {
    className?: string,
    style?: React.CSSProperties


}

export const ProductButtons = ({ className, style }: Props) => {

    const { increment, decrement, counter, maxCount } = useContext(ProductContext)

    const hola = useCallback(
        () => {
            if (counter === maxCount) {
                return true
            } else {
                return false
            }
        },
        [counter],
    )


    return (

        <div className={`${styles.buttonsContainer} ${className}`}
            style={style}>

            <button onClick={() => decrement()} className={styles.buttonMinus}>-</button>


            <div className={styles.countLabel}>{counter}</div>


            <button onClick={() => increment()} className={`${styles.buttonAdd} ${hola() && styles.disabled}`}>+</button>

        </div>


    )
}