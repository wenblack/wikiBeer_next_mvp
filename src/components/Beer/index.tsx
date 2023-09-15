import React, { useEffect, useState } from 'react'
import { BeerProps } from '@/utils/BeerInterface'
import Image from 'next/image';


export const Beer = (
  { name, ABV, IBU, Notes, categorie, categorieId, description, id, imageUrl, rating, reviews }: BeerProps
) => {
  const [avg, setAvg] = useState('')
  const [family, setFamily] = useState('')
  const image = `/files/beers/${id}.png`

  function getAvg() {
    let avgStars = rating;
    if (avgStars >= 4) {
      setAvg("ÓTIMA")
    } else if (avgStars > 2 && avgStars < 4) {
      setAvg("BOA")
    } else {
      setAvg("RUIM")
    }
    setCategorie()
  }
  function setCategorie() {
    if (categorieId === 'clly0riw70000mwese8gq5ytv') {
      setFamily('Lager')
    }
    if (categorieId === 'clly1le350005mwesd35p0bh4') {
      setFamily('Witbier')
    }
    if (categorieId === 'clly1lkd40006mwesjb4l7bf5') {
      setFamily('IPA')
    }
    if (categorieId === 'clly1l1b70004mwesbdgdhhbc') {
      setFamily('Weiss')
    }
    if (categorieId === 'clly1lq5k0007mwesz3ucq3hv') {
      setFamily('Pale Ale')
    }
  }
  useEffect(() => {
    getAvg()
  }, [])

  const calculateAverageRating = () => {
    if (rating === 0) return 0;
    const totalRatings: number = rating
    return totalRatings;
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


  if (avg === "ÓTIMA") {
    return (
      <div className=" bg-white hover:cursor-pointer mr-4 shadow-md hover:animate-pulse shadow-shadow rounded-lg p-4 w-40">
        <div className='flex justify-end mb-4'>
          <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#15803d] items-center text-white justify-center'>
            {avg}
          </span>
        </div>
        <span className='flex  flex-col items-center justify-center'>
          <Image
            src={image}
            width={150}
            height={150}
            alt={`${name} Product`}
            className="h-32 flex  object-cover m-auto  w-28 rounded-md "
          />
          <div className="flex items-center">
            {renderStars(calculateAverageRating())}
          </div>
        </span>

        <div className="mt-2  ">
          <span className='flex items-center justify-between'>
            <h3 className=" text-gray capitalize font-semibold">
              {name.substring(0, 13)} {name.length > 13 ? '...' : ''}
            </h3>
          </span>
          <span className=" px-2 py-1  items-center bg-button text-white font-semibold text-xs rounded-md">
            {family}
          </span>
        </div>
      </div>
    );
  }

  if (avg === "BOA") {
    return (
      <div className=" bg-white  hover:cursor-pointer mr-4 shadow-md hover:animate-pulse shadow-shadow rounded-lg p-4 w-40">
        <div className='flex justify-end mb-4'>
          <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#f59e0b] items-center text-white justify-center'>
            {avg}
          </span>
        </div>
        <span className='flex   flex-col items-center justify-center'>
          <Image
            src={image}
            width={150}
            height={150}
            alt={`${name} Product`}
            className="h-32 flex  object-cover m-auto  w-28 rounded-md "
          />
          <div className="flex items-center">
            {renderStars(calculateAverageRating())}
          </div>
        </span>
        <div className="mt-2">
          <span className='flex items-center justify-between'>
            <h3 className=" text-gray capitalize font-semibold">
              {name.substring(0, 13)} {name.length > 13 ? '...' : ''}
            </h3>
          </span>
          <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
            {family}
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
        <Image
          src={image}
          width={150}
          height={150}
          alt={`${name} Product`}
          className="h-32 flex  object-cover m-auto  w-28 rounded-md "
        />
        <div className="flex items-center">
          {renderStars(calculateAverageRating())}
        </div>
      </span>
      <div className="mt-2">
        <span className='flex items-center justify-between'>
          <h3 className=" text-gray capitalize font-semibold">
            {name.substring(0, 13)} {name.length > 13 ? '...' : ''}
          </h3>
        </span>
        <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
          {family}
        </span>
      </div>
    </div>
  );
};
