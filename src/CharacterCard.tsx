import characterslist from './character.json';
import {findAllByDisplayValue} from "@testing-library/react";

type CharacterProbs={
    name:string;


}
export default function CharacterCard(props:CharacterProbs){


    const getCharacter=characterslist.filter(k=>k.name===props.name).map((e)=>{

        return (
        <div >
            <div><h1>Rick & Morty App</h1></div>
            <div>
                <h1>{e.name}</h1>
                <img src={e.origin.url} alt="Pic not found"/>
                <p>{e.id}</p>

            </div>

        </div>
        )


           // <li>{e.name}</li>)
    });


    return(
        <div>
            <div>{getCharacter}</div>
        </div>
    )
}
