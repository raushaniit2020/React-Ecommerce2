import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import commerce from '../library/commerce';
import './ProductCategoryWise.css';

function ProductCategoryWise({ addToCart }) {
    const [productByCategory, setProductByCategory] = useState([]);
    let { slug } = useParams();
    console.log(slug)


    const fetchProductsByCategory = async (category) => {
        const response = await commerce.products.list({
          category_slug: [category]
        });
        setProductByCategory(response.data);
      }


    useEffect(() => {
        if (slug) {
            fetchProductsByCategory(slug)
        }
    }, [slug]);

    return (
        <div className='product'>
            {productByCategory?.map((item) => {
                return (
                    <>
                    <div className="product__info">
                        <p>{item.name}</p>
                        <p className="product__price">
        
                            <strong>{item.price.formatted_with_symbol}</strong>
                        </p>
                        <div className="product__rating">
                            {Array(5).fill().map((_, i) => (
                                <p>🌟</p>
                            ))}
        
                        </div>
                    </div>
                    <img src={item.image.url} alt="" />
                   
                    <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
                    <hr />
                    </>

                )
            })}
        </div>
    )
}

export default ProductCategoryWise
