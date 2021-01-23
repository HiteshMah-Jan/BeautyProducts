import React, { useState } from "react";

const ModalCount = (props) => {
  const variantIt = props.variantIt.map( v => v.stock);
  
  const [products, setProducts] = useState({
    count: 1
  });

  const amount = (e) => {
    //setProducts({ count: e.target.value || 1 });
    if (products.count <= 1) {
      return;
    }
  };

  const decrease = (e) => {
    if (products.count <= 1) {
      return;
    }
    setProducts({ count: products.count - 1 });
  };

  const plus = e =>{
    const defaultStock = props.item.filter( p => p.product_id === props.clickModalView);

    if(products.count <= (defaultStock[0].stock - 1) && variantIt.length === 0){
      setProducts({ count: products.count + 1});
      return;
    } else if(products.count <= (variantIt[0] - 1)) {
      setProducts({ count: products.count + 1});
      return;
    }
 
  }
  return (
    <>
        <input type="button" onClick={decrease}  value="-"/>
        <input type="text" name="amount" value={products.count} onChange={amount} />
        <input
            type="button"
            value="+"
            onClick={() => plus()}
        />
    </>
  );
};

export default ModalCount;