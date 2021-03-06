// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './ApiData'


// class App1 extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }



// ReactDOM.render(<App />, document.getElementById('root'))


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FetchApiData from "./pages/FetchApiData";
import NoPage from "./pages/NoPage";


export default function AppNav() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fetchapidata" element={<FetchApiData />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppNav />);

