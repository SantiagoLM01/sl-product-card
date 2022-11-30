import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from "../../src/components/ProductCard";
import { producto2 } from '../data/products';



const { act } = renderer

describe('ProductCard', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {


        const wrapper = renderer.create(
            <ProductCard product={producto2}>

                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();


    })

    test('debe de incrementar el contador', () => {


        const wrapper = renderer.create(
            <ProductCard product={producto2}>

                {
                    ({ count, increment }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increment(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick()

        })

        tree = wrapper.toJSON()
        expect((tree as any).children[1].children[0]).toEqual('1')
        console.log(tree)

    })


});
