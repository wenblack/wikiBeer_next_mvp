import React, { useEffect, useState } from 'react'
import { BeerProps } from '@/utils/BeerInterface'
import { useRouter } from 'next/router';
import Image from 'next/image';

export const ResultItem = (
  { name, ABV, IBU, Notes, click, categorie, categorieId, description, id, imageUrl, rating, reviews }: BeerProps,
) => {
  const [avg, setAvg] = useState('')
  const [family, setFamily] = useState('')
  const image = `/files/beers/${id}.png`
  const router = useRouter()

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
      <div onClick={click} className=" bg-white mb-2 hover:cursor-pointer  shadow-sm hover:opacity-70 shadow-shadow rounded-lg p-4 w-[80vw] max-w-2xl">
        <div className='flex  justify-end mb-4'>
          <div>
            <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#15803d] items-center text-white justify-center'>
              {avg}
            </span>
            <div className="flex items-center">
              {renderStars(calculateAverageRating())}
            </div>
          </div>
        </div>

        <div className="mt-2  ">
          <span className='flex items-center justify-between'>
            <h3 className=" text-gray capitalize font-semibold">
              {name}
            </h3>
          </span>
          <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
            {family}
          </span>
        </div>
      </div>
    );
  }

  if (avg === "BOA") {
    return (
      <div onClick={click} className=" bg-white mb-2 hover:cursor-pointer  shadow-sm hover:opacity-70 shadow-shadow rounded-lg p-4 w-[80vw] max-w-2xl">
        <div className='flex justify-end mb-4'>
          <div>
            <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#f59e0b] items-center text-white justify-center'>
              {avg}
            </span>
            <div className="flex items-center">
              {renderStars(calculateAverageRating())}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span className='flex items-center justify-between'>
            <h3 className=" text-gray capitalize font-semibold">
              {name}
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
    <div onClick={click} className=" bg-white mb-2 hover:cursor-pointer  shadow-sm hover:opacity-70 shadow-shadow rounded-lg p-4 w-[80vw] max-w-2xl">
      <div className='flex justify-end mb-4'>
        <div>
          <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#dc2626] items-center text-white justify-center'>
            {avg}
          </span>
          <div className="flex items-center">
            {renderStars(calculateAverageRating())}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className='flex items-center justify-between'>
          <h3 className=" text-gray capitalize font-semibold">
            {name}
          </h3>
        </span>
        <span className=" px-2 py-1 bg-button text-white font-semibold text-xs rounded-md">
          {family}
        </span>
      </div>
    </div>
  );
};
