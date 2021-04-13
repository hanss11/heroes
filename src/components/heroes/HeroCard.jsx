import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance, characters}) => {
    return (
        <div className="col animate__animated animate__fadeIn" key={id} >
          <div className="card h-100" style={{maxWidth:250}}>
              <img src={`./assets/heroes/${id}.jpg`} alt={superhero} className="img-card-top" />
            <div className="card-body">
              <h5 className="card-title"> {superhero} </h5>
              <p className="card-text">{alter_ego}</p>

                {
                    (alter_ego !== characters)
                        && <p className="card-text"> {characters}</p>
                }

                <Link to={`./heroe/${id}`}>
                    Mas Info...
                </Link>
            </div>
            <div className="card-footer"> <small className="text-muted">{first_appearance}</small> </div>
          </div>
        </div>
    )
}

export default HeroCard
