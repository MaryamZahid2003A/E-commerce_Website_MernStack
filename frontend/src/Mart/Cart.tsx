import React from 'react';

export default function Cart(props) {
    const handleIncrement = (id) => {
        const update = props.beverageProduct.map((product) =>
            product._id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        props.setBeverageProduct(update);
    };

    const handleDecrement = (id) => {
        const update = props.beverageProduct.map((product) =>
            product._id === id
                ? product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                : product
        );
        props.setBeverageProduct(update);
    };

    return (
        <div className='overflow-auto' style={{ maxHeight: '500px' }}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img
                    src='https://cdn-icons-gif.flaticon.com/10282/10282564.gif'
                    height='50'
                    width='50'
                    className='d-flex justify-content-center align-items-center'
                    alt='cart icon'
                />
                <span className='text-center my-2 mx-2 text-black fs-6'>
                    Standard Time 15 - 30 min
                </span>
                <div className='d-flex flex-row'>
                    <p className='text-center my-2 mx-2 text-black fs-4'>
                        You Order From Our Mart
                    </p>
                    <img
                        src='https://cdn-icons-png.flaticon.com/128/1915/1915316.png'
                        height='50'
                        width='50'
                        className='d-flex justify-content-center align-items-center mx-2'
                        alt='cart icon'
                    />
                </div>
            </div>
            {props.beverageProduct.map((product) => (
                <div key={product._id}>
                    {product.quantity > 0 ? (
                        <div className='d-flex flex-row justify-content-between my-5'>
                            <img
                                src={product.img}
                                alt={product.name}
                                height='70'
                                width='70'
                                className='rounded-1 ProductImage mx-4'
                            />
                            <p className='text-wrap text-black fs-6'>{product.name}</p>
                            <div className='mx-5'>
                                <p className='text-danger fs-6'>Rs. {product.price}</p>
                                <div className='d-flex flex-row h-25 imageHolder'>
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/128/6797/6797369.png'
                                        className='mx-2 my-1 incrementimage'
                                        height='18'
                                        width='18'
                                        onClick={() => handleDecrement(product._id)}
                                    />
                                    <p className='text-black'>{product.quantity}</p>
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/128/3917/3917179.png'
                                        className='mx-2 my-1 incrementimage'
                                        height='20'
                                        width='20'
                                        onClick={() => handleIncrement(product._id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
            ))}
        </div>
    );
}
