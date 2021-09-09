import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';
import { Position, Element } from 'types';
const blueCircle = require("../../img/blueCircle.png");

type Props = {
    position: Position;
    itemWidth: number;
    item: Element;

};

export const InfMetricInfo = ({ position, itemWidth, item }: Props) => {
    const [image, setImage] = useState(new window.Image());
    useEffect(() => {
        const temp = new window.Image();
        temp.src = blueCircle;
        temp.onload = () => {
            setImage(temp);
        };

    });



    return (

        <Image
            x={position.x + itemWidth - 20}
            y={position.y + 50}
            width={15}
            height={15}
            image={item.elementInfo.withInfMetrics ? image : undefined}
        />

    );
};
