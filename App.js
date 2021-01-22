import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Productss from './Products/Products';
import p from './Products/Products.module.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        Page: [],
        News: [],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json; camelcase=1, */*'
      },
    };

    fetch('https://beautyhub.pro/ajax/react_page.php', requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
              Page: responseJson
            });
        })
        .catch(error => {
            console.error(error);
    });
    fetch('https://beautyhub.pro/ajax/react_news.php', requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
              News: responseJson
            });
        })
        .catch(error => {
            console.error(error);
    });

  }

  render(){
    const {Page, News} = this.state,
          arr = [];

    Page.map( c => arr.push({url: c.url, name: c.name}))

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
                                <Productss 
                                  
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
}

export default App;
