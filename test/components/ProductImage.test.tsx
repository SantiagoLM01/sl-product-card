import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from "../../src/components/ProductImage";
import { ProductCard } from "../../src/components/ProductCard";
import { producto2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {


        const wrapper = renderer.create(
            <ProductImage img={`${producto2.img}`}></ProductImage>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();


    })

    test('debe de mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={producto2}>
                {
                    () => (
                        <ProductImage></ProductImage>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();


    })


});
