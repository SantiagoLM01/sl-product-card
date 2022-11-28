import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const producto = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}


const App = () => {
  return (
    <ProductCard className="bg-dark" product={producto} initialValues={{ count: 5, maxCount: 15 }}>
      {({ reset, increment, decrement, isMaxCountReached, count, maxCount }) => (
        <>
          <ProductImage ></ProductImage>
          <ProductTitle ></ProductTitle>
          <ProductButtons ></ProductButtons>



        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
