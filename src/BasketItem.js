const BasketItem = ({
    removeFromBasket,
    incQuantity,
    decQuantity,
    item
}) => {

  
    return (
        <div className="BasketItem">
            <span>{item.name}</span>
            <button onClick={()=>decQuantity(item.id) }>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>incQuantity(item.id)  }>+</button>
            = {item.price*item.quantity}
            <span onClick={()=>removeFromBasket(item.id)}> &times; </span>
        </div>
    )
}

export default BasketItem