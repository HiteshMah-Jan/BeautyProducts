import React from 'react';
import App from './../App';

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Page: [],
            News: [],
            Products: [],
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

        fetch('https://beautyhub.pro/ajax/react_view.php', requestOptions)
          .then(response => response.json())
          .then(responseJson => {
              this.setState({
                Products: responseJson
              });
          })
          .catch(error => {
              console.error(error);
      });
    
    }
    render(){
        const {Page, News, Products} = this.state;
        return(
            <App 
                Page = {Page}
                News = {News}
                Products = {Products}
            />
        )
    }
}

export default State;