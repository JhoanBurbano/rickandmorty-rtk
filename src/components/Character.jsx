import React from 'react'

const Character = ({id, name, species, gender, origin, location, image}) => {
  return (
    <div className="card pt-3 mb-5 bg-dark shadow animate__animated animate__fadeIn  border-light" style={{width: "300px"}}>
        <img src={image} className='card-img-top' alt={name} />
        <div className="card-body text-white">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{'Specie: ' + species}</p>
            <p className="card-text">{'Gender: ' + gender}</p>
        </div>
    </div>
  )
}

export default Character