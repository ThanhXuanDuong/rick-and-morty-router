import {Link, useParams} from "react-router-dom";
import React from "react";
import Character from "./Character";

export default function Hello(props: {characters:Character[]}){
    const param =useParams();
    const id: number= parseInt(param.id as string);
    const char=props.characters.find(char => (char.id===id)) ;

    if (!char){
        return <h5>Error: Character not found</h5>
    }

    console.log(param.id);
    return (
        <div>
            <div>
                <h1>Hello {char.name}</h1>
            </div>
            <div>
                <Link to={`/`}>Back Home</Link>
            </div>

        </div>
    )
}