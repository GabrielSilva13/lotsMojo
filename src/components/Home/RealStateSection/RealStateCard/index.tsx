import { House, MapPin } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../../../utils/currencyFormat";
import { RealStateCardProps } from "./RealStateCardProps.types";

export const RealStateCard = ({
  id,
  address,
  name,
  price,
  sizeInFeet,
  thumbnail,
}: RealStateCardProps) => {
  const [isShowingButton, SetIsShowingButton] = useState(false);

  return (
    <div className="w-full h-96 shadow-md rounded-xl relative">
      <div
        className={`
          w-full 
          h-64 
          flex
          items-center
          justify-center
          rounded-tl-xl
          rounded-tr-xl 
          relative 
          before:pointer-events-none
          before:content-['']
          before:absolute 
          before:top-2/4 
          before:left-2/4 
          before:z-10 
          before:block 
          before:w-0 
          before:h-0 
          before:bg-circle-effect-bg-color 
          before:rounded-full 
          before:translate-x-[-50%] 
          before:translate-y-[-50%] 
          before:opacity-0
          hover:before:animate-circle`}
        onMouseEnter={() => SetIsShowingButton(true)}
        onMouseLeave={() => SetIsShowingButton(false)}
      >
        <img
          className="absolute w-full h-full object-cover rounded-tl-xl
          rounded-tr-xl "
          src={thumbnail}
          alt=""
        />
        <Link
          to={`/property/${id}`}
          className={`
            absolute
          border-2 
          p-2 
          uppercase 
          rounded 
          transition 
          duration-300 
          text-white 
          bg-sky-700
          border-transparent

          ${isShowingButton ? "scale-100" : "scale-0"}
          `}
        >
          ver detalhes
        </Link>
      </div>

      <div className="flex flex-col gap-2 mt-4 px-3">
        <strong className="flex items-center gap-2">
          <House size={20} weight="fill" /> {name}
        </strong>
        <span className="ml-7">{currencyFormat(price)}</span>
        <strong className="flex items-center gap-2">
          <MapPin size={20} weight="fill" />
          {address}
        </strong>
      </div>
    </div>
  );
};
