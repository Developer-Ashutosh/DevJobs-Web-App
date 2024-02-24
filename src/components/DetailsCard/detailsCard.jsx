import React from "react";
import { Title, P } from "../index";

const DetailsCard = ({ title, desc, list, listStyle }) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Title
        title={title}
        styles={"text-2xl font-bold text-primary dark:text-white"}
      />
      <P desc={desc} />
      <ul
        className={`${listStyle} text-main pl-4 flex flex-col gap-3 justify-center`}
      >
        {list.map((e, i) => (
          <li className="w-full pl-2" key={i}>
            <P desc={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsCard;
