import Image from "next/image";
import React from "react";
import Pricebtn from "./Pricebtn";

const Card = ({ item }) => {
  const { name, image, key_features } = item;
  console.log(name);
  return (
    <div class="card border-1 rounded-0" id="card">
      <div className="text-center zoom">
        <Image
          src={"/images/brand_type" + image}
          unoptimized={true}
          width={200}
          height={200}
          className="zoomin"
        />
      </div>

      <div class="card-body  text-md-left bg_color text-white ">
        <h5 class="card-title my-3 pb-3 text-md-left text-center">{name}</h5>
        <h6 class="card-subtitle mb-2 fw-bold  ps-3">Key Features</h6>
        <ul>
          {key_features.map((feature) => {
            return <li className="py-1">{feature}</li>;
          })}
        </ul>
        <Pricebtn />
      </div>
    </div>
  );
};

export default Card;
