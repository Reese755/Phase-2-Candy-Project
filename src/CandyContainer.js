import React from "react"
import {useState, useEffect} from "react";

function CandyContainer(props) {

const [candies, setCandies] = useState([])

useEffect(() => {
fetch('http://localhost:3000/candies')
.then(response => response.json())
.then(candyData => {
    setCandies(candyData)
})
}, [])


return (
    <div>
        <CandyList candies={candies}/>
    </div>
    );
}
export default CandyContainer;