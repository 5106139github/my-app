// import restaurantList from '../utils/mockdata'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import useOnlineStatus from '../utils/useOnlineStatus';

// const Body = () => {
//   const [resList , setList] = useState(restaurantList)

//   useEffect(()=> {
//     fetchData()
//   } , [])

//   const fetchData =async () => {
//     let apidata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     let json = await apidata.json()
//     // console.log("json",json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
//     let data=[]
//     data.push(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
//     console.log(data);
    
//   }
  
  
//   return(

//     <>

//       <div className="filter_btn">
//         <button className="rated"
//         onDoubleClick={() =>{
//           const filterList =  resList.filter(
//            (resback) => resback.info.avgRating = 3);
//           setList(filterList)
//          }}
//         onClick={() =>{
//          const filterList =  resList.filter(
//           (res) => res.info.avgRating > 4);
//          setList(filterList)
//         }}>Top Rated Reustorents</button>
//       </div>
//   <div className="flex">
//         {resList.map((ele) => {
//       const {cloudinaryImageId,
//             name,
//             cuisines,
//             area,
//             lastMileTravelString,
//             costForTwoString,
//             avgRating} = ele?.info
//       return(
//         <>
//         <div className="card">
//         <img src={CDN_URL + cloudinaryImageId} alt='img'/>
//         <h2>{name}</h2>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{area}</h4>
//         <span>
//           <h4>
//             <i class="fa-solid fa-star"></i>
//             {avgRating}
//           </h4>
//           <h4>{lastMileTravelString}</h4>
//           <h4>{costForTwoString}</h4>
//         </span>
//       </div>
//         </>
//       )
//     })}
//   </div>
//     </>
//   )
// }
// export {Body};



const Body = () => {
      let [resList , setList] = useState([]);
      const [filteredList , setfilteredList] = useState([])

      const [searchText , setsearchText] = useState("")

      useEffect(()=>{
        apiFetch()
      } , [])
      const apiFetch = async () => {
      const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0353236&lng=77.6284701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const api = await fetchdata.json()
      setList(api.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setfilteredList(api.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      };

      const onlinestatus = useOnlineStatus();
      if(onlinestatus === false) return (<h1>chuck your internet connection</h1>)


      return resList.length === 0 ? (<Shimmer />) 
        : 
      (
      <>
      <div className="filter">
        <span className='flex justify-around h-20'>
        <div className=''>
          <input className='px-4 py-1 shadow-inner' type="text" placeholder='search' value={searchText} onChange={(tx)=>{
           setsearchText( tx.target.value)
          }}/>
          <button className='bg-blue-400 px-2 py-1 rounded-lg mx-2'
          onClick={()=> {
            const updatedSearch = resList.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
            setfilteredList(updatedSearch)
          }}
          >search</button>
        </div>
      <div className="">
        <button className="px-4 py-1 shadow-inner bg-red-50" 
        onClick={() =>{
         const filterList =  resList.filter(
          (res) => res.info.avgRating >= 4);
         setList(filterList)
        }}
        onDoubleClick={() => {
          const dblclick = resList.filter(
            (res) => res.info.avgRating = 3 );
            setList(dblclick)
        }}
        >Top Rated Reustorents</button>
      </div>
      </span>
    </div>
      <div className="grid grid-cols-4 w-[94%] mx-20">
        {filteredList.map((restaurant) => {
          return <Link  id="resa" to={"/restaurents/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>;
        })}
      </div>
      </>
    );
  };


  export {Body} ;

