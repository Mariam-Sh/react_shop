import React from 'react'
import BasketItem from './BasketItem'

const BasketList = ({order,removeFromBasket, incQuantity, decQuantity}) => {

    const totalPrice = order.reduce((sum,el) => {
        return sum + el.price * el.quantity;

    },0);
    return (
        <div className='basket_list'>
            <h3>Card</h3>
            {order.map((el,index)=> {
                return <BasketItem key={index}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                item={el}
                />
            })}
        <div className='total_price'>{totalPrice}</div>    
        </div>
    )
}

export default BasketList
