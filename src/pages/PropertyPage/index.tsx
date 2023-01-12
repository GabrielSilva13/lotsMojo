import axios from "axios";
import { ArrowLeft, Buildings, House, Tag } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RealStateCardProps } from "../../components/Home/RealStateSection/RealStateCard/RealStateCardProps.types";
import { currencyFormat } from "../../utils/currencyFormat";

export const PropertyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({} as RealStateCardProps);
  async function getData() {
    try {
      const { data } = await axios.get(
        `https://lotsmojotest.herokuapp.com/properties/find/${id}`
      );
      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mx-auto max-w-[1024px] mt-20 pb-4">
      <div>
        <ArrowLeft
          size={26}
          weight="thin"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <strong className="block mt-5 text-4xl">{data.name}</strong>
        <img className="mt-5 w-full rounded-md" src={data.thumbnail} alt="" />

        <strong className="block my-5 text-2xl">Detalhes</strong>

        <div className="bg-gray-900 max-w-[360px] flex flex-col p-2 rounded-md shadow-md">
          <span className="flex gap-2 items-center text-white">
            <Tag size={20} weight="fill" /> {currencyFormat(data.price)}
          </span>
          <span className="flex gap-2 items-center text-white">
            <House size={20} weight="fill" />
            {data.sizeInFeet}ft
          </span>

          <strong className="flex gap-2 items-center text-white">
            <Buildings size={20} weight="fill" />
            {data.address}
          </strong>
        </div>
      </div>
    </div>
  );
};
