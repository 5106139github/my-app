/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL, CDN_URL } from "../utils/contents";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {

  const { resId } = useParams();

  const resinfo = useRestaurentMenu(resId)

  if (resinfo === null) return <Shimmer />;

  const { itemCards } =
    resinfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


  
  return (
    <>
      <div className="resinfo">
        <h1 className="text-center font-extrabold">MENU at ... <span className="red">{resinfo?.data?.cards[0]?.card?.card.text}</span></h1>
        
        {itemCards?.map((menu) => {
          const { name, price, ratings, imageId } = menu.card.info;
           console.log(menu);
          
          return (
            <>
              <div className="menugrid">
              <div className="flex justify-between w-[50%] m-auto shadow-2xl mt-2">
                <div className="m-2">
                  <h2 className="">{name}</h2>
                  <p className="bold">RS.<span className="red">{price / 100}</span></p>
                  <span><h2>{ratings.aggregatedRating.rating} - {ratings.aggregatedRating.ratingCount}</h2></span>
                  {/* <h5 className="red">InStock  <span className="black"> : {inStock}</span></h5> */}
                </div>
                <div className="menuimg">
                  <img className="h-24 w-20 p-1" src={CDN_URL + imageId} alt="img" />
                </div>
              </div>
              </div>
            </>
          );
        })}
        {/* {itemCards.map(ele => <h5 key = {ele.card.info.id}>  {ele.card.info.name} - RS.{ele.card.info.price/100}</h5>)} */}
      </div>
    </>
  );
};

export default RestaurentMenu;
