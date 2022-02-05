import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, stock, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <h4 className='product-name'>{name}</h4>
            <p>Price: {price}</p>
            <p>In stock: {stock}</p>
            <p><small>{seller}</small></p>
            <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
        </div>
    );
};

export default ReviewItem;