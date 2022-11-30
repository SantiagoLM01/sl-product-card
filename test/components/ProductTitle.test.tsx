import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from "../../src/components/ProductTitle";
import { ProductCard } from "../../src/components/ProductCard";
import { producto1 } from '../data/products';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {


        const wrapper = renderer.create(
            <ProductTitle title='Custom Product'></ProductTitle>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();


    })

    test('debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={producto1}>
                {
                    () => (
                        <ProductTitle></ProductTitle>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();


    })


});
