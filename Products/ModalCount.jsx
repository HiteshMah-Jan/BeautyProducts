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
    if(products.count <= (variantIt[0] - 1)) {
      setProducts({ count: products.count + 1});
      return;
    }

    if(variantIt[0] == undefined) {
      setProducts({ count: products.count + 1});
      return;
    }
  }
  console.log(variantIt[0])
  console.log(variantIt[0] == undefined)
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