import React, { useEffect, useState } from 'react'
import { BeerProps } from '@/utils/BeerInterface'
import Image from 'next/image';
import { Button } from "@/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ArrowLeft from '@/assets/svg/CaretLeft.svg'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const BeerDetail = (
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
      <main className='flex flex-col items-center w-screen  justify-center'>
        <div className=" bg-white  flex flex-col w-full mr-4  rounded-lg p-4 max-w-sm ">
          <div className='flex justify-start '>
            <a href='/dashboard' className=' flex  rounded-md font-bold text-xs bg-transparent items-center text-white justify-center'>
              <Image src={ArrowLeft} alt='Arrow left icon' />
            </a>
          </div>
          <div className='flex justify-end mb-4'>
            <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#15803d] items-center text-white justify-center'>
              {avg}
            </span>
          </div>
          <span className='flexflex-col items-center justify-center'>
            <Image
              src={image}
              width={150}
              height={150}
              alt={`${name} Product`}
              className="h-40  p-4 flex shadow-lg object-cover m-auto  w-28 rounded-md "
            />
            <div className="flex items-center justify-center">
              {renderStars(calculateAverageRating())}
            </div>
          </span>

          <div className="mt-2  border-t-2 ">
            <span className='flex items-center justify-between'>
              <h3 className=" text-gray capitalize font-semibold">
                {name}
              </h3>
            </span>
            <span className=" px-2 py-1  items-center bg-button text-white font-semibold text-xs rounded-md">
              {family}
            </span>
          </div>
        </div>
        <Tabs defaultValue="account" className='w-screen-md ' >
          <TabsList className="grid w-screen max-w-md  grid-cols-2">
            <TabsTrigger value="account">Informações</TabsTrigger>
            <TabsTrigger value="password">Comentários</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className='grid grid-cols-2 gap-3 p-8 w-screen max-w-md '>
              <span>
                <CardTitle>IBU</CardTitle>
                <CardDescription>
                  {IBU}
                </CardDescription>
              </span>
              <span>
                <CardTitle>ABV</CardTitle>
                <CardDescription>
                  {ABV} %
                </CardDescription>
              </span>
              <span>
                <CardTitle>Nota</CardTitle>
                <CardDescription>
                  {rating}/5
                </CardDescription>
              </span>
              <span>
                <CardTitle>Família</CardTitle>
                <CardDescription>
                  {family}
                </CardDescription>
              </span>
              <span>
                <CardTitle>Ingredientes</CardTitle>
                <CardDescription className='capitalize'>
                  {description}
                </CardDescription>
              </span>
              <span>
                <CardTitle>Reviews</CardTitle>
                <CardDescription>
                  {reviews?.length}
                </CardDescription>
              </span>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Sua opinião</CardTitle>
                <CardDescription>
                  Conte-nos o que você achou dessa breja:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <textarea className='border px-2 w-full border-shadow' rows={5}></textarea>
                </div>
              </CardContent>
              <CardFooter className='flex w-full items-center justify-center'>
                <Button type='button' value='Salvar'></Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    );
  }


  if (avg === "BOA") {
    return (
      <main className='flex flex-col items-center w-screen  justify-center'>
        <div className=" bg-white  flex flex-col w-full mr-4  rounded-lg p-4 max-w-sm ">
          <div className='flex justify-start '>
            <a href='/dashboard' className=' flex  rounded-md font-bold text-xs bg-transparent items-center text-white justify-center'>
              <Image src={ArrowLeft} alt='Arrow left icon' />
            </a>
          </div>
          <div className='flex justify-end mb-4'>
            <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#f59e0b] items-center text-white justify-center'>
              {avg}
            </span>
          </div>
          <span className='flexflex-col items-center justify-center'>
            <Image
              src={image}
              width={150}
              height={150}
              alt={`${name} Product`}
              className="h-40  p-4 flex shadow-lg object-cover m-auto  w-28 rounded-md "
            />
            <div className="flex items-center justify-center">
              {renderStars(calculateAverageRating())}
            </div>
          </span>

          <div className="mt-2  border-t-2 ">
            <span className='flex items-center justify-between'>
              <h3 className=" text-gray capitalize font-semibold">
                {name}
              </h3>
            </span>
            <span className=" px-2 py-1  items-center bg-button text-white font-semibold text-xs rounded-md">
              {family}
            </span>
          </div>
        </div>
        <Tabs defaultValue="account" className='max-w-screen-md ' >
          <TabsList className="grid  grid-cols-2">
            <TabsTrigger value="account">Informações</TabsTrigger>
            <TabsTrigger value="password">Comentários</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>The info about beer</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button value='Save'></Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Comentários</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>That comments about beer</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button value='save'></Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    );
  }


  return (
    <main className='flex flex-col items-center w-screen  justify-center'>
      <div className=" bg-white  flex flex-col w-full mr-4  rounded-lg p-4 max-w-sm ">
        <div className='flex justify-start '>
          <a href='/dashboard' className=' flex  rounded-md font-bold text-xs bg-transparent items-center text-white justify-center'>
            <Image src={ArrowLeft} alt='Arrow left icon' />
          </a>
        </div>
        <div className='flex justify-end mb-4'>
          <span className='px-2 py-1 flex  rounded-md font-bold text-xs bg-[#dc2626] items-center text-white justify-center'>
            {avg}
          </span>
        </div>
        <span className='flexflex-col items-center justify-center'>
          <Image
            src={image}
            width={150}
            height={150}
            alt={`${name} Product`}
            className="h-40  p-4 flex shadow-lg object-cover m-auto  w-28 rounded-md "
          />
          <div className="flex items-center justify-center">
            {renderStars(calculateAverageRating())}
          </div>
        </span>

        <div className="mt-2  border-t-2 ">
          <span className='flex items-center justify-between'>
            <h3 className=" text-gray capitalize font-semibold">
              {name}
            </h3>
          </span>
          <span className=" px-2 py-1  items-center bg-button text-white font-semibold text-xs rounded-md">
            {family}
          </span>
        </div>
      </div>
      <Tabs defaultValue="account" className='max-w-screen-md ' >
        <TabsList className="grid  grid-cols-2">
          <TabsTrigger value="account">Informações</TabsTrigger>
          <TabsTrigger value="password">Comentários</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Informações</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p>The info about beer</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button value='Save'></Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Comentários</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p>That comments about beer</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button value='save'></Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};
