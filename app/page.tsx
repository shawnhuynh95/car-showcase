import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import fetchCars from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width padding-x padding-y mt-12" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="flex-between flex-wrap items-center w-full mt-12 gap-5">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore 
              isNext={(searchParams.limit || 12) > allCars.length}
              pageNumber={(searchParams.limit || 12) / 12}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="font-bold text-xl text-black">Oops, no results!</h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
