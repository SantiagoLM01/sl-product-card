import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, useProductProps } from '../interfaces/interfaces'
import React from 'react'


export const ProductContext = createContext({} as useProductProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string,
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}



export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {



    const { counter, decrement, increment, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (

        <Provider value={{ counter, decrement, increment, product, maxCount }}>
            <div className={`${styles.productCard} ${className}`}
                style={style}>

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increment,
                    decrement,
                    reset
                })}

            </div>
        </Provider>
    )
}


