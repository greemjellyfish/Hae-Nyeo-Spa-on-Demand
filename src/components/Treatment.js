import React from 'react'

const Treatment = ({ treatment }) => {
    console.log(treatment)

    return (
        <div className = "treatment">
      
        {window.location.pathname}
            <div className = "images">  
                <img src={treatment.image} alt={treatment.name} width={100} height={60} mode='fit' />
            </div>
            hello
            {treatment.title}<br></br>
            {/* ${treatment.price}.00<br></br>
            {treatment.duration}mins<br></br>
            {treatment.description}<br></br> */}
        </div>
    )
}

export default Treatment