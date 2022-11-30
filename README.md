#sl-product-card

Este es un paquete de pruebas de despligue en NPM

### Santiago Ivan Lizarazo Mikly


## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'sl-product-cardsantii'
```

```
 <ProductCard className="bg-dark" product={producto} initialValues={{ count: 5, maxCount: 15 }}>
                    {({ reset, increment, decrement, isMaxCountReached, count, maxCount }) => (
                        <>
                            <ProductImage ></ProductImage>
                            <ProductTitle ></ProductTitle>
                            <ProductButtons ></ProductButtons>
                           


                         </>
                    )}
                </ProductCard>
                ```