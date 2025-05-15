import React from "react";

function ListaNomes({nomes}){
    return(
        <ul>
            {nomes.map((nome, index) =>(
                <li key={index}> {nome} </li>
            ))}
        </ul>
    )
    
}
export default ListaNomes;