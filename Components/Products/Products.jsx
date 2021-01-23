import React from 'react';
import pr from './Products.module.css';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalView from './Modal/ModalView';


class Products extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          clickModalView: '',
          modalShow: false,
          value: '',
          variantIt: [],
          hide: true,
          ProductsFilterTable: [],
          ProductsFilterTableHide: true,
          active : false,
          activeId: '1'
      };
      this.handleChange = this.handleChange.bind(this);
      this.setModalShow = this.setModalShow.bind(this);
      this.tableFunction = this.tableFunction.bind(this);
  }

  setModalShow = e => {
      this.setState({
          clickModalView: e,
          modalShow: e
      });
  }

  handleChange = e => {
    const arrayProducts = this.props.Products.filter(a => a.id),
          variants =  arrayProducts.map( el =>  el.variants),
          arrayVariants = variants.map( e =>  e),
          arr = [].concat.apply([], arrayVariants),
          varItem = arr,
          VariantIdItem = varItem.filter(vId => vId.id === e.target.value);

    this.setState({
      value: e.target.value,
      variantIt: VariantIdItem,
      hide: false
    });
  }

  tableFunction = (e, id) => { 
    this.setState({
      ProductsFilterTable: e,
      ProductsFilterTableHide: false,
      activeId: id
    });
  }

  render(){
    const {Products} = this.props,
        {variantIt, ProductsFilterTable, clickModalView, modalShow, value, hide, ProductsFilterTableHide, active, activeId, handleChange, setModalShow, tableFunction} = this.state,
        arrayProducts = Products.filter(a => a.id),
        variants =  arrayProducts.map( el =>  el.variants),
        arrayVariants = variants.map( e =>  e),
        arr = [].concat.apply([], arrayVariants),
        Variants = arr.map(e => ({id: e.id, product_id: e.product_id, label: e.name, value: e.price, compare_price: e.compare_price, image: e.image, weight: e.weight, stock: e.stock })),
        sort = Products.filter( s => s.position && s.stock !== 0),
        sortProducts = sort.splice(0, 20),
        discounted = Products.filter( s => s.stock !== 0),
        discountedProducts = discounted.splice(50, 100),
        ProductsHit = Products.filter( f=> f.featured === "1" && f.stock !== 0),
        mediaTypes = Variants.map(dataItem => dataItem.product_id).filter((mediaType, index, array) => array.indexOf(mediaType) === index),
        counts = mediaTypes.map(mediaType => ({
          "product_id": mediaType,
          "count": Variants.filter(item => item.product_id === mediaType).length
        }));
    
         
    return(
          <>
            <div className={pr.table} >
              <div className={ this.state.activeId === '2' && pr.active } onClick={(id) => this.tableFunction(sortProducts, '2')}>Новинки</div>
              <div className={ this.state.activeId === '1' && pr.active } onClick={(id) => this.tableFunction(ProductsHit, '1')}>Хиты</div>
              <div className={ this.state.activeId === '3' && pr.active } onClick={(id) => this.tableFunction(discountedProducts, '3')}>На скидке</div>
            </div>
            <div className={pr.contantProducts}>
              {ProductsFilterTableHide === false ?
                <Product 
                  Products = {ProductsFilterTable}
                  hide = {hide} 
                  variantIt = {variantIt} 
                  Variants = {Variants} 
                  value = {value} 
                  counts = {counts}
                  handleChange = {this.handleChange} 
                  setModalShow = {this.setModalShow}
                />
              :
                <Product 
                  Products = {ProductsHit}
                  hide = {hide} 
                  variantIt = {variantIt} 
                  Variants = {Variants} 
                  value = {value} 
                  counts = {counts}
                  handleChange = {this.handleChange} 
                  setModalShow = {this.setModalShow}
                />
              }
            </div>
            <>
                <ModalView
                    Products={Products}
                    Variants={Variants}
                    variantIt={variantIt}
                    hide={hide}
                    counts = {counts}
                    show = {this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    handleChange = {this.handleChange}
                    clickModalView={clickModalView}
                />
            </>
          </>
      )
  }
}

export default Products;
