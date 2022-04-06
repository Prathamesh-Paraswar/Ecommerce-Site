import React from "react";
let m=new Map();
function Cart(props) {
    props.cart.map(function (item) {
        // console.log(item);
        if(m.has(item))
        {
            let x=m.get(item);
            x++;
            m.set(item,x);
        }
        else{
            m.set(item,1);
        }
    })
    let items_purchase=[];
    props.products.map(function(item)
    {
        if(m.has(item.id))
        {
            items_purchase.push(item);
        }
    })
    return(
        <>
        <h1>Your Cart</h1>
        {items_purchase.map(function(item,index)
        {
            return(
                <>
                    <div className="cart">
                        <div className="solve"><img src={item.Image}></img></div>
                        <div className="solve1">                    
                            <h2>{item.Name}</h2>
                            <h2>{item.Price}</h2>
                        </div>

                    </div>
                </>
            )
        })}
        <h1>{`Total:${props.total}`}</h1>
        </>
        
        
    )
}
console.log(m);
export default Cart;