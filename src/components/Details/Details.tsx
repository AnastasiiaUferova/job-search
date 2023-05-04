import React, { FC } from "react";
import "../../styles/Details/Details.css";

type DetailsProps = {
  title: string;
  text: string;
};

const Details: FC<DetailsProps> = ({ title, text }) => {
  const data: string[] = text.split(".");

  return (
    <section className="details">
      <h2 className="details__title">{title}:</h2>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
};

export default Details;
