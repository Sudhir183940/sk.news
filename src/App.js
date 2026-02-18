import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import News from './Components/News';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import About from './Components/About';

const App=()=> {

    return (
       <BrowserRouter>
        <Navbar />
     <Routes>

        <Route path="/" exact element={<News key='general'  domains='indiatoday.in,ndtv.com' category='general'/>}/>
        <Route path="/sports" exact element={<News key='sports' domains='indianexpress.com,ndtv.com' category='sports'/>}/>
        <Route path="/technology" exact element={<News key='technology' domains='bbc.com,gadgets360.com' category='technology'/>}/>
        <Route path="/law" exact element={<News key='law' domains='thewire.in,indiatoday.in,ndtv.com' category='law'/>}/>
        <Route path="/science" exact element={<News key='science' domains='indiatoday.in,livescience.com' category='science'/>}/>
        <Route path="/business" exact element={<News key='business' domains='businesstoday.in,indiatimes.com' category='business'/>}/>
        <Route path="/health" exact element={<News key='health' domains='indiatimes.com,indiatoday.in,cnn.com' category='health'/>}/>
        <Route path="/entertainment" exact element={<News key='entertainment' domains='indiatimes.com,ndtv.com' category='entertainment'/>}/>
        <Route path="/about" exact element={<About/>}/>

        </Routes>
        
      </BrowserRouter>
    )
}

export default App
