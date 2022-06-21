import React, {Component} from 'react'
import App from '../ApiData'


const Header = () => {
    return <h1>Fetch Data From API</h1>
    
  }
  
  const FetchApiData = () => {
    return(
    
      <div>
       <Header />
       <App />  
       </div>    
     )
   }

   export default FetchApiData