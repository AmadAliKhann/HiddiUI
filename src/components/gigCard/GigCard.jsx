import React from 'react'
import {Link} from "react-router-dom";
import "./GigCard.scss"
const GigCard = ({item}) => {
  return (
    
        <Link to="/gig/123">
            <div className="gigCard">
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className="star">
                        <img src="./img/star.svg" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <div className="details"></div>
            </div>
        </Link>
    
  )
}

export default GigCard