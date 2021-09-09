import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';
import { Position, Element } from 'types';
const redCircle = require("../../img/redCircle.png");

type Props = {
  position: Position;
  itemWidth: number;
  item: Element;

};

export const AppMetricInfo = ({ position, itemWidth, item }: Props) => {
  const [image, setImage] = useState(new window.Image());
  useEffect(() => {
    const temp = new window.Image();
    temp.src = redCircle;
    temp.onload = () => {
      setImage(temp);
    };

  });



  return (

    <Image
      x={position.x + itemWidth - 40}
      y={position.y + 50}
      width={15}
      height={15}
      image={item.elementInfo.withAppMetrics ? image : undefined}
    />

  );
};
