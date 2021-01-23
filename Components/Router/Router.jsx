import React from "react";
import {  BrowserRouter as Router,  Route,  NavLink} from "react-router-dom";
import p from './../Products/Products.module.css';
import ProductsData from './../Products/Products';

const RouterMenu = (props) => {
    const {Page, News, Products} = props;
    
    return(
        <>
            <Router>
                <div className="bg_menu">
                    <div className="container_menu menu">
                        {Page.map( c=>
                            <div>
                                {c.menu_id === 3 ? //убрал меню
                                    <NavLink exact to={c.url} activeClassName="active">
                                        {c.name}
                                    </NavLink>
                                    :
                                    null
                                }
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    {Page.map( c=>
                        <Route exact path={"/" + c.url} component={() =>
                            <>
                                {/*<div className="title">{c.name}</div>
                                <div className="description" dangerouslySetInnerHTML={{ __html: c.description }}/>*/}
                                <>
                                    {c.url === '' ?
                                    <div className={p.reactProductMain}>
                                        <ProductsData 
                                            Products = {Products}
                                        />
                                    </div>
                                    :
                                    null
                                    }
                                </>
                            </>
                        } />
                    )}
                </div>
            </Router>
        </>
    )
}

export default RouterMenu;