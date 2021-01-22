import React from "react";
import pr from './Products.module.css';
import Modal from 'react-bootstrap/Modal';
import ModalCount from './ModalCount';
import {  TwitterShareButton,  TwitterIcon,  FacebookIcon,  FacebookShareButton,  VKIcon,  VKShareButton} from "react-share";

const ModalView = (props) => {
    const modalViewProduct = props.Products.filter( mp => mp.id === props.clickModalView),
        arrModalView = [].concat.apply([], props.Variants),
        item = arrModalView.filter( f => f.product_id === props.clickModalView),
        variantItem = props.variantItem,
        variantIt = props.variantIt,
        counts = props.counts,
        clickModalView = props.clickModalView,
        hide = props.hide;
        
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        {modalViewProduct.map(mp =>
            <>
                <Modal.Header closeButton className={pr.border}>
                </Modal.Header>

                <Modal.Body>
                    <div className={pr.containerModal}>
                    <div className={pr.label}>
                        
                          {hide === true ?
                            <>
                              {mp.namelabel ?
                                <span className={pr.labelItem} style={{ backgroundColor: mp.colorlabel, color: 'white', marginTop: 20 }}>
                                  {mp.namelabel}
                                </span>
                              :
                                null
                              }
                            </>
                          :
                          <>
                            {variantIt.map( v =>
                              <>
                                {mp.id === v.product_id ?
                                  <>
                                    {v.namelabel ?
                                    <span className={pr.labelItem} style={{ backgroundColor: v.colorlabel, color: 'white', marginTop: 20 }}>
                                      {v.namelabel}
                                    </span>
                                    :
                                    null
                                    }
                                  </>
                                :
                                <>
                                  {mp.id === v.product_id ?
                                    <>
                                    <span className={pr.labelItem} style={{ backgroundColor: v.colorlabel, color: 'white', marginTop: 20 }}>
                                      {v.namelabel}
                                    </span>
                                    </>
                                  :
                                  <>
                                    <span className={pr.labelItem} style={{ backgroundColor: mp.colorlabel, color: 'white', marginTop: 20 }}>
                                      {mp.namelabel}
                                    </span>
                                  </>
                                  }
                                </>
                                  }
                              </>
                            )}
                            </>
                            }

                        </div>
                        <div className={pr.modalViewImage}>
                          {hide === true ?
                            <img src={`${mp.image_modal}`} alt={mp.name}/>
                          :
                          <>
                            {variantIt.map( v =>
                              <>
                                {mp.id === v.product_id ?
                                  <img className={pr.image} src={`https://beautyhub.pro/files/originals/${v.image}`} alt={mp.name}/>
                                :
                                <>
                                  {mp.id === v.product_id ?
                                    <>
                                      <img className={pr.image} src={`https://beautyhub.pro/files/originals/${v.image}`} alt={mp.name}/>
                                    </>
                                  :
                                  <>
                                    <img src={`${mp.image_modal}`} alt={mp.name}/>
                                  </>
                                  }
                                </>
                                 }
                              </>
                            )}
                          </>
                          }
                        </div>

                        <div className={pr.containerInfo}>
                            <div className={pr.conBrand}>
                                {mp.brand}
                            </div>

                            <div className={pr.conName}>
                                {mp.name}
                            </div>

                            <div className={pr.conRatingValue}>
                                <div className={pr.conteinerRating}>
                                    {mp.rating}
                                    <span className={pr.containerRating}>
                                      <span className={pr.ratingItem}></span>
                                      <span className={pr.ratingItem}></span>
                                      <span className={pr.ratingItem}></span>
                                      <span className={pr.ratingItem}></span>
                                      <span className={pr.ratingItem}></span>
                                    </span>
                                </div>
                                <div className={pr.share}>
                                  <span className={pr.facebook}>
                                    <FacebookShareButton
                                      url={`https://beautyhub.pro/products/${mp.url}`}
                                      title={mp.name}
                                      className="Demo__some-network__share-button"
                                    >
                                      <FacebookIcon size={25} round />
                                    </FacebookShareButton>
                                  </span>
                                  <span className={pr.facebook}>
                                  <TwitterShareButton
                                      url={`https://beautyhub.pro/products/${mp.url}`}
                                      title={mp.name}
                                      className="Demo__some-network__share-button"
                                    >
                                      <TwitterIcon size={25} round />
                                    </TwitterShareButton>
                                  </span>

                                  <span className={pr.facebook}>
                                    <VKShareButton
                                      url={`https://beautyhub.pro/products/${mp.url}`}
                                      title={mp.name}
                                      className="Demo__some-network__share-button"
                                    >
                                      <VKIcon size={25} round />
                                    </VKShareButton>
                                  </span>
                                  <span>Поделиться</span>
                                </div>
                            </div>

                            <div className={pr.conLoveValue}>
                                <div className={pr.inLove}>
                                  <img src="https://beautyhub.pro/design/okay_shop/svg/loves_hover.svg" />
                                  <span>{mp.loves} Влюблёны</span>
                                </div>
                                <div className={pr.inLove}>
                                  <a href="#" data-id={mp.id}>
                                    <img src="https://beautyhub.pro/design/okay_shop/svg/whitlist-bkack.svg" /> 
                                    <span>В любимые</span>
                                  </a>
                                </div>
                            </div>

                            <div className={pr.conDescription} dangerouslySetInnerHTML={{__html: mp.annotation}}>
                            </div>

                            <form className="fn_variants" action={`/cart`}>
                              <div className={pr.conWeignValue}>
                                  <div>
                                  {counts.map( (ss) => ss.product_id === mp.id && ss.count ? <div className={`hidden-${ss.count}`}>
                                    <select name="variant" value={props.value} className={`fn_variant ${pr.variant_select}`} onChange={props.handleChange}>
                                      {item.map((m, index) =>
                                           <option key={index} value={m.id}>{m.label} </option>
                                      )}
                                    </select>
                                  </div> : null)}        
                                  </div>
                                  <>
                                    {hide === true ?
                                        <>
                                          Вес брутто*: {mp.weight} kg
                                        </>
                                        :
                                        <>
                                          {variantIt.map( v =>
                                            <>
                                            {v.id === 0 ?
                                              <>
                                                Вес брутто*: {v.weight} kg
                                              </>
                                            :
                                            <>
                                              {mp.id === v.product_id ?
                                                <>
                                                  Вес брутто*: {v.weight} kg
                                                </>
                                              :
                                                <>
                                                  Вес брутто*: {mp.weight} kg
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
                              <div className={pr.conWeignValue}>
                                <div className={pr.conWeignValue}>
                                  <>
                                    {hide === true ?
                                        <>
                                          <div className={pr.old}>{mp.compare_price} {mp.currencie}</div>
                                          <div className={pr.new}>{mp.price} {mp.currencie}</div>
                                        </>
                                        :
                                        <>
                                          {variantIt.map( v =>
                                            <>
                                            {v.id === 0 ?
                                              <>
                                              <div className={pr.old}>{mp.compare_price} {mp.currencie}</div>
                                              <div className={pr.new}>{mp.price} {mp.currencie}</div>
                                              </>
                                            :
                                            <>
                                              {mp.id === v.product_id ?
                                                <>
                                                  <div className={pr.old}>{v.compare_price} {mp.currencie}</div>
                                                  <div className={pr.new}>{v.price} {mp.currencie}</div>
                                                </>
                                              :
                                              <>
                                                <div className={pr.old}>{mp.compare_price} {mp.currencie}</div>
                                                <div className={pr.new}>{mp.price} {mp.currencie}</div>
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
                                <div className={pr.count}>
                                  
                                  {mp.stock !== 0 ?
                                    <span className="fn_product_amount">
                                      <ModalCount variantIt={variantIt} clickModalView={clickModalView}/>
                                    </span>
                                  :
                                      null
                                  }
                                  {mp.stock !== 0 ?
                                      <div className={pr.reactProductButton}>
                                          <button className="button buy">В корзину</button>
                                      </div>
                                  :
                                      <div className={pr.reactProductButton, pr.disabled} style={{'marginLeft': 0}}>
                                          <button className="button buy" style={{'width': '30vh'}}>НЕТ В НАЛИЧИИ</button>
                                      </div>
                                  }
                                </div>
                              </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </>
        )}
      </Modal>
  );
};

export default ModalView;