import {Link} from "react-router-dom";
import Character from "./Character";

export default function Root(props: {characters:Character[]}){

    return (
        <div>
            <h1>Rick And Morty Gallery</h1>

            <ul>
                {props.characters.map(char =>
                    (<li key={char.id}><Link to={"/hello/"+char.id}>{char.name}</Link></li>)
                )}
            </ul>
        </div>
    )
}