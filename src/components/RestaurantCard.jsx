import React from 'react'
import {CDN_URL} from '../utils/contents'

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,locality,areaName
  }) => {
    
    return (
      <>
      <div className="w-72 shadow-inner hover:bg-slate-300 ">
        <img className='p-2 h-[250px] w-[100%]' src={CDN_URL + cloudinaryImageId} alt='img'/>
        <div className="m-2">
        <h2 className='font-bold '>{name}</h2>
        <h4 >{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span className='cardrating'>
          <h4>
            <i class="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        <h4>{locality}</h4>
        <h4>{`area : ${areaName}`}</h4>
        </div>
      </div>
      </>
    );
  };


export default RestaurantCard
