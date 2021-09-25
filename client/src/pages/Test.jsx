import React from 'react'

function Test() {
    const handleFetch = () => {
        fetch("http://localhost:4000/v1/status").then((response)=>response.json()).then((data)=>console.log(data))
    }
    return (
        <div>
            <h1>Testing Page</h1>
            <button onClick={handleFetch}>click me</button>
        </div>
    )
}

export default Test
