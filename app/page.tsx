'use client'

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import fetchCars from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({searchParams}: HomeProps) {
    
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 12,
  //   model: searchParams.model || "",
  // });

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // CLIENT VERSION

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(12)

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || 2022,
        limit: limit || 12,
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    getCars()
  },[manufacturer,model,fuel,year,limit])

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width padding-x padding-y mt-12" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="flex-between flex-wrap items-center w-full mt-12 gap-5">
          <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image src='/loader.svg' alt="loader" width={50} height={50} className="object-contain" />
              </div>
            )}
            <ShowMore 
              isNext={(limit || 12) > allCars.length}
              pageNumber={(limit || 12) / 12}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (<div className="home__error-container">
            <h2 className="font-bold text-xl text-black">Oops, no results!</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>)
        )}
      </div>
    </main>
  );
}
