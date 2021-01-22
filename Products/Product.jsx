import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import pr from './Products.module.css';

const Product = (props) => {
    const {hide, variantIt, Variants, value, handleChange, Products, counts} = props;
        
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 350, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 650, itemsToShow: 3 },
        { width: 950, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1250, itemsToShow: 5 },
        { width: 1550, itemsToShow: 6 },
    ];    
    return (
    <>
        <>
            <Carousel breakPoints={breakPoints} pagination={false} itemPadding={[0, 0, 0, 20]}>
                {Products.map( p =>
                    <Item key={p.id}>
                        <div className={pr.reactProductMain} >                        
                            <div className={pr.objectView}>
                                <div className={pr.view} variant="primary" onClick={() => props.setModalShow(p.id)}>
                                    <img src="https://beautyhub.pro/design/okay_shop/svg/eye-hovver.svg" />
                                </div>
                                <div id="wishlist" className={pr.love}>
                                <a href="#" data-id={p.id} className="fn_wishlist">
                                    <img src="https://beautyhub.pro/design/okay_shop/svg/whitlist-bkack.svg" />
                                </a>
                                </div>
                            </div>
                            <div className={pr.label}>
                                <div className={pr.labelItem} style={{ backgroundColor: p.colorlabel, color: 'white', marginTop: 20 }}>
                                    {hide === true ?
                                        <>
                                            {p.namelabel}
                                        </>
                                    :
                                        <>
                                            {variantIt.map( v =>
                                                <>
                                                {p.id === v.product_id ?
                                                    <>
                                                    {v.namelabel}
                                                    </>
                                                :
                                                <>
                                                    {p.id === v.product_id ?
                                                    <>
                                                        {v.namelabel}
                                                    </>
                                                    :
                                                    <>
                                                    {p.namelabel}
                                                    </>
                                                    }
                                                </>
                                                    }
                                                </>
                                            )}
                                        </>
                                    }
                                </div>
                            </div>
                            <div className={pr.reactProductImage}>
                                {hide === true ?
                                    <a href={`https://beautyhub.pro/products/${p.url}`}>
                                        <img className={pr.image} src={`${p.image}`} alt={p.name}/>
                                    </a>
                                :
                                    <>
                                        {variantIt.map( v =>
                                            <>
                                                {p.id === v.product_id ?
                                                <a href={`https://beautyhub.pro/products/${p.url}`}>
                                                    <img className={pr.image} src={`https://beautyhub.pro/files/originals/${v.image}`} alt={p.name}/>
                                                </a>
                                                :
                                                <>
                                                {p.id === v.product_id ?
                                                    <>
                                                    <a href={`https://beautyhub.pro/products/${p.url}`}>
                                                        <img className={pr.image} src={`https://beautyhub.pro/files/originals/${v.image}`} alt={p.name}/>
                                                    </a>
                                                    </>
                                                :
                                                <>
                                                    <a href={`https://beautyhub.pro/products/${p.url}`}>
                                                    <img className={pr.image} src={`${p.image}`} alt={p.name}/>
                                                    </a>
                                                </>
                                                }
                                                </>
                                                }
                                            </>
                                        )}
                                    </>
                                }
                            </div>
                            <div className={pr.reactProductBrand}>
                                <a href={`https://beautyhub.pro/brands/${p.brand}`}>
                                    {p.brand}
                                </a>
                            </div>
                            <div className={pr.reactProductName}>
                            <a href={`https://beautyhub.pro/products/${p.url}`}>
                                {p.name}
                            </a>
                            </div>
                            <>
                                <form className="fn_variants" action={`/cart`}>
                                    {counts.map( (ss) => ss.product_id === p.id && ss.count ? <div className={`hidden-${ss.count}`}>
                                        <select name="variant" value={value} className={`fn_variant ${pr.variant_select}`} onChange={handleChange}>
                                            
                                            {Variants.map((m, index) =>
                                                <>
                                                    {p.id === m.product_id ?
                                                        <option key={index} value={m.id}>{m.label} </option> 
                                                    :
                                                        null
                                                    }
                                                </>
                                            )}     
                                        </select>
                                    </div> : null)}
                                    <div className={pr.reactProductPrice}>
                                        <>
                                            {hide === true ?
                                                <>
                                                <div className={pr.old}>{p.compare_price} {p.currencie}</div>
                                                <div className={pr.new}>{p.price} {p.currencie}</div>
                                                </>
                                                :
                                                <>
                                                {variantIt.map( v =>
                                                    <>
                                                        {v.id === 0 ?
                                                    <>
                                                        <div className={pr.old}>{p.compare_price} {p.currencie}</div>
                                                        <div className={pr.new}>{p.price} {p.currencie}</div>
                                                    </>
                                                    :
                                                    <>
                                                        {p.id === v.product_id ?
                                                        <>
                                                            <div className={pr.old}>{v.compare_price} {p.currencie}</div>
                                                            <div className={pr.new}>{v.price} {p.currencie}</div>
                                                        </>
                                                    :
                                                    <>
                                                        <div className={pr.old}>{p.compare_price} {p.currencie}</div>
                                                        <div className={pr.new}>{p.price} {p.currencie}</div>
                                                    </>
                                                    }
                                                    </>
                                                    }
                                                    </>
                                                )}
                                                </>
                                            }
                                        </>
                                    </div>

                                    {p.stock !== 0 ?
                                        <div className={pr.reactProductButton}>
                                            <button className="button buy">В корзину</button>
                                        </div>
                                    :
                                        <div className={pr.reactProductButton, pr.disabled}>
                                            <button className="button buy">НЕТ В НАЛИЧИИ</button>
                                        </div>
                                    }
                            </form>
                            </>
                        </div>
                    </Item>
                )}
            </Carousel>
        </>
    </>
  );
};

export default Product;