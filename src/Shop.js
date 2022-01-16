import {useState, useEffect} from 'react'
import BasketList from './BasketList';
import GoodsList from './GoodsList';

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [basketShow, setBasketShow] = useState(false);
  
    useEffect(()=>{
      fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(json => {
        setGoods(json);
        setLoading(false);
      })
    }, []);

    const addToBasket = (item)=>{
        const itemIndex = order.findIndex(el => el.id === item.id); // -1
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrder([ ...order, newItem]);
        }else{
            const newOrder = order.map( (el, index)=>{
                if(index === itemIndex){
                    return {
                        ...el,
                        quantity: el.quantity+1
                    };
                }
                return el;
            } );
            setOrder(newOrder);
        }
    }

    const removeFromBasket = id =>{
        const newOrder = order.filter(el => el.id !== id);
        setOrder(newOrder);
    }

    const incQuantity = (id)=>{
        const newOrder = order.map(el=>{
            if(el.id === id){
                return {
                    ...el,
                    quantity: el.quantity+1
                }
            }

            return el;
        });
        setOrder(newOrder);
    }

    const decQuantity = (id)=>{
        const newOrder = order.map(el=>{
            if(el.id === id){
                return {
                    ...el,
                    quantity: el.quantity>0 ? el.quantity-1 : 0
                };
            }
            return el;
        });
        setOrder(newOrder);
    }

    const handleBasketShow = ()=>{
        setBasketShow(!basketShow);
    }

    return (
        <div>
            <button onClick={handleBasketShow}>card {order.length} </button>
            {  basketShow &&
            <BasketList  
             order={order}
             removeFromBasket={removeFromBasket}
             incQuantity={incQuantity}
             decQuantity={decQuantity}

            />
            }

            {
                loading ? <p>Loading</p> : <GoodsList goods={goods} addToBasket={addToBasket} />

            }
        </div>
    )
}

export default Shop
