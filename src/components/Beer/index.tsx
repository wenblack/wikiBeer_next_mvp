import React, { useState } from 'react';

interface CardProps {
    name :string,  
    ratings:number[], 
    category:string, 
    imgUrl:string
}

export const Beer = ({ name, ratings, category, imgUrl }:CardProps) => {
  const [avg,setAvg] = useState(0)
 

  function getCount(total:number, ratings:number){
    setAvg(total/ratings)
  }

  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const totalRatings = ratings.reduce((sum:number, rating:number) => sum + rating, 0);
    return totalRatings / ratings.length;
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    
    const starArray = [];
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    }
    if (halfStar) {
      starArray.push(
        <span key={starArray.length} className="text-yellow-500">
          &#9733;
        </span>
      );
     
    }
    return starArray;
  };

  return (
    <div className="bg-white hover:cursor-pointer mr-4 shadow-md hover:opacity-70 shadow-slate-400 rounded-lg p-4 w-40">
      <img
        src={imgUrl}
        alt={`${name} Product`}
        className="h-32 flex m-auto object-cover rounded-md "
      />
      <div className="mt-2">
          <h3 className="text-lg text-slate-700 font-semibold">{name}</h3>
          <span className=" px-2 py-1 bg-redButton text-white font-semibold text-xs rounded-md">
            {category}
          </span>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {renderStars(calculateAverageRating())}
          </div>
        </div>
      </div>
    </div>
  );
};
