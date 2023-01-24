import React from 'react';
import Candy from "./Candy"

function CandyList({candies}) {

candyComponents = candies.map((candy)=> {  
    return ( <Candy key={candy.id} candy={candy}/> )
})


return (
    <div>
        
    </div>
    );
}

export default CandyList;