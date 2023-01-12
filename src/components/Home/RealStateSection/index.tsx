import { RealStateCard } from "./RealStateCard";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { RealStateCardProps } from "./RealStateCard/RealStateCardProps.types";
import { Popover, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

export const RealStateSection = () => {
  const [list, setList] = useState<RealStateCardProps[]>([]);
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSize, setFilterSize] = useState("");
  async function getData() {
    try {
      const { data } = await axios.get(
        "https://lotsmojotest.herokuapp.com/properties/list"
      );
      setList(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center uppercase text-2xl mt-32">
        imóveis em destaque
      </h1>
      <h2 className="text-center mt-2">
        Confira nossas propriedades mais populares no site.
      </h2>

      <section className="flex justify-end">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="flex gap-3 items-center justify-center max-w-[280px] w-full bg-gray-900 rounded-md py-2 px-4 text-white">
                Filtrar
                <CaretDown size={32} weight="fill" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute md:left-1/2 z-10 mt-3 mx-auto w-[500px] max-w-sm md:-translate-x-1/2 translate-x-[-70%] transform px-4 sm:px-0 lg:max-w-2xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative bg-white p-7">
                      <div>
                        <strong>Preço</strong>
                        <div className="flex gap-2 items-center mt-3">
                          <input
                            onChange={(e) => setFilterPrice(e.target.value)}
                            value="first_option"
                            name="price"
                            id="price"
                            type="radio"
                            className="cursor-pointer"
                          />
                          <label
                            className="min-w-max cursor-pointer"
                            htmlFor="price"
                          >
                            R$ 17.000,00 à R$ 25.000,00
                          </label>
                        </div>
                        <div className="flex gap-2 items-center mt-3">
                          <input
                            onChange={(e) => setFilterPrice(e.target.value)}
                            value="second_option"
                            name="price"
                            id="price-2"
                            type="radio"
                            className="cursor-pointer"
                          />
                          <label
                            className="min-w-max cursor-pointer"
                            htmlFor="price-2"
                          >
                            R$ 29.000,00 à R$ 100.000,00
                          </label>
                        </div>
                      </div>

                      <div>
                        <strong>Tamanho</strong>
                        <div className="flex gap-2 items-center mt-3">
                          <input
                            onChange={(e) => setFilterSize(e.target.value)}
                            value="first_option"
                            name="feet"
                            id="feet"
                            type="radio"
                            className="cursor-pointer"
                          />
                          <label
                            className="min-w-max cursor-pointer"
                            htmlFor="feet"
                          >
                            300ft à 650ft
                          </label>
                        </div>
                        <div className="flex gap-2 items-center mt-3">
                          <input
                            onChange={(e) => setFilterSize(e.target.value)}
                            value="second_option"
                            name="feet"
                            id="feet-2"
                            type="radio"
                            className="cursor-pointer"
                          />
                          <label
                            className="min-w-max cursor-pointer"
                            htmlFor="feet-2"
                          >
                            650ft à 10000ft
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </section>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mx-auto max-w-[1024px] mt-20">
        {list
          .filter((item) => {
            if (filterPrice === "first_option") {
              return item.price >= 17000 && item.price <= 25000;
            }

            if (filterPrice === "second_option") {
              return item.price >= 29000 && item.price <= 100000;
            }
            return item;
          })
          .filter((item) => {
            if (filterSize === "first_option") {
              return item.sizeInFeet! >= 300 && item.sizeInFeet! <= 650;
            }

            if (filterSize === "second_option") {
              return item.sizeInFeet! >= 650 && item.sizeInFeet! <= 10000;
            }
            return item;
          })
          .map((item) => (
            <RealStateCard
              key={item.id}
              id={item.id}
              name={item.name}
              thumbnail={item.thumbnail}
              price={item.price}
              address={item.address}
            />
          ))}
      </div>
    </>
  );
};
