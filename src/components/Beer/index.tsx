import Image from 'next/image';
import React, { useEffect, useState } from 'react'
interface CardProps {
  name: string,
  ratings: number[],
  category: string,
  imgUrl: string
}

export const Beer = ({ name, ratings, category, imgUrl }: CardProps) => {
  const [avg, setAvg] = useState('')

  function getAvg() {
    const totalRatings: number = ratings.reduce((sum: number, rating: number) => sum + rating, 0);
    let avgStars = totalRatings / ratings.length;
    if (avgStars >= 4) {
      setAvg("ÓTIMA")
    } else if (avgStars > 2 && avgStars < 4) {
      setAvg("BOA")
    } else {
      setAvg("RUIM")
    }
  }

  useEffect(() => {
    getAvg()
  }, [])

  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const totalRatings: number = ratings.reduce((sum: number, rating: number) => sum + rating, 0);
    return totalRatings / ratings.length;
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;

    const starArray = [];
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<span key={i} className="text-yellowStar">&#9733;</span>);
    }
    if (halfStar) {
      starArray.push(
        <span key={starArray.length} className="text-yellowStar">
          &#9733;
        </span>
      );

    }
    return starArray;
  };


 if(avg === "ÓTIMA"){
   return (
     <div className=" bg-white  hover:cursor-pointer mr-4 shadow-md hover:animate-pulse shadow-shadow rounded-lg p-4 w-40">
       <div className='flex justify-end mb-4'>
       <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#15803d] items-center text-white justify-center'>
         {avg}
       </span>
       </div>
       <span className='flex  flex-col items-center justify-center'>
         <img
           src={imgUrl}
           alt={`${name} Product`}
           className="h-32 flex  object-cover m-auto  w-28 rounded-md "
         />
            <div className="flex items-center">
           {renderStars(calculateAverageRating())}
         </div>
       </span>
       <div className="mt-2">
         <span className='flex items-center justify-between'>
         <h3 className=" text-gray font-semibold">{name}</h3>
         </span>
         <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
           {category}
         </span>
       </div>
     </div>
   );
 }
 if(avg === "BOA"){
  return (
    <div className=" bg-white  hover:cursor-pointer mr-4 shadow-md hover:animate-pulse shadow-shadow rounded-lg p-4 w-40">
      <div className='flex justify-end mb-4'>
      <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#f59e0b] items-center text-white justify-center'>
        {avg}
      </span>
      </div>
      <span className='flex  flex-col items-center justify-center'>
        <img
          src={imgUrl}
          alt={`${name} Product`}
          className="h-32 flex  object-cover m-auto  w-28 rounded-md "
        />
           <div className="flex items-center">
          {renderStars(calculateAverageRating())}
        </div>
      </span>
      <div className="mt-2">
        <span className='flex items-center justify-between'>
        <h3 className=" text-gray font-semibold">{name}</h3>
        </span>
        <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
          {category}
        </span>
      </div>
    </div>
  );
}
return (
  <div className=" bg-white  hover:cursor-pointer mr-4 shadow-md hover:animate-pulse shadow-shadow rounded-lg p-4 w-40">
    <div className='flex justify-end mb-4'>
    <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#dc2626] items-center text-white justify-center'>
      {avg}
    </span>
    </div>
    <span className='flex  flex-col items-center justify-center'>
      <img
        src={imgUrl}
        alt={`${name} Product`}
        className="h-32 flex  object-cover m-auto  w-28 rounded-md "
      />
         <div className="flex items-center">
        {renderStars(calculateAverageRating())}
      </div>
    </span>
    <div className="mt-2">
      <span className='flex items-center justify-between'>
      <h3 className=" text-gray font-semibold">{name}</h3>
      </span>
      <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
        {category}
      </span>
    </div>
  </div>
);

};
