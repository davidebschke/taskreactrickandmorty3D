import characterslist from './character.json';
import './CharacterCard.css';
import {findAllByDisplayValue} from "@testing-library/react";

type CharacterProbs = {
    name: string;


}
export default function CharacterCard(props: CharacterProbs) {


    const getCharacter = characterslist.map((e) => {

        return (
            <div>
                <h6>{'Name:'+ e.name}</h6>
                <h6>{'Status:'+e.status}</h6>
                <h6>{'Species:'+e.species}</h6>
                <h6>{'Geschlecht:'+e.gender}</h6>
                <img src={e.image} alt="Pic not found"/>
                <p>{e.id}</p>

            </div>

        )

    });


    return (
        <>
            <div className={"header"}><h1>Rick & Morty App</h1></div>
            <div className={"cards"}>{getCharacter}</div>
        </>


    )
}
