import React from 'react'
import products from './assets/products.json'
import './Cart.css'
import { useState } from 'react'

const Cart = () => {
    // State for cart items with quantity
    const [cartItems, setCartItems] = useState(new Map());

    // Handle adding item to cart
    const handleAddToCart = (product) => {
        setCartItems(prevItems => {
            const newItems = new Map(prevItems);
            const currentQuantity = newItems.get(product.id) || 0;
            newItems.set(product.id, currentQuantity + 1);
            return newItems;
        });
    };

    // Calculate total items in cart
    const cartCount = Array.from(cartItems.values()).reduce((sum, quantity) => sum + quantity, 0);

    // Get quantity for a specific product
    const getProductQuantity = (productId) => cartItems.get(productId) || 0;

    return (
        <>
            <header>
                <nav>
                    <div className="logo">CartStore</div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="cart">
                        <span className="cart-icon">🛒</span>
                        <span className="cart-count">{cartCount}</span>
                    </div>
                </nav>
            </header>
            <main>
                <div className="cards">
                    {products.products.map((product) => {
                        const quantity = getProductQuantity(product.id);
                        return (
                            <div key={product.id} className="card">
                                <img src={product.images[0]} alt={product.title} />
                                <div className="card-content">
                                    <h3>{product.title}</h3>
                                    <p className="price">${product.price}</p>
                                    {quantity > 0 ? (
                                        <div className="quantity-controls">
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => {
                                                    setCartItems(prevItems => {
                                                        const newItems = new Map(prevItems);
                                                        const currentQuantity = newItems.get(product.id);
                                                        if (currentQuantity === 1) {
                                                            newItems.delete(product.id);
                                                        } else {
                                                            newItems.set(product.id, currentQuantity - 1);
                                                        }
                                                        return newItems;
                                                    });
                                                }}
                                            >
                                                −
                                            </button>
                                            <span className="quantity">{quantity}</span>
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        <button 
                                            className="add-to-cart" 
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}

export default Cart;
