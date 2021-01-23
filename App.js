import React from 'react';
import './App.css';
import RouterMenu from './Components/Router/Router';

const App = (props) => {
  const {Page, News, Products} = props, arr = [];
  Page.map( c => arr.push({url: c.url, name: c.name}))

  return(
    <RouterMenu 
      Page = {Page}
      News = {News}
      Products = {Products}
    />
  )
}

export default App;
