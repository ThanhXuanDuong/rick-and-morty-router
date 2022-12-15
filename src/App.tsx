import React, {FormEvent, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, isRouteErrorResponse, Link, Route, Routes} from "react-router-dom";
import Hello from "./Hello";
import Root from "./Root";
import axios from "axios";
import Character from "./Character";


function App() {
    const [characters, setCharacters]=useState<Character[]>([]);
    const [id, setId]=useState<string>("");

    useEffect( () =>{
        axios.get("https://rickandmortyapi.com/api/character")
             .then(response => setCharacters(response.data.results))
            .catch(e => console.log(e))
    },[]);


  return (
     <BrowserRouter>
         <Routes>
             <Route path={"/"} element={<Root characters={characters}/>}/>
             <Route path={"/hello/:id"} element={<Hello characters={characters}/>}/>
         </Routes>

         <input type= "number"  onChange={event => setId(event.target.value)}/>
         <a href={"/hello/"+id}>
             <button>Go</button>
         </a>

     </BrowserRouter>

  );
}

export default App;
