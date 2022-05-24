import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="">
            <Carousel.Item>
                <img className="d-block w-100" src={banner1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Perfumery is a symphony, it has a beginning, middle and an end !</h3>
                    <p>-Isabelle Ramsay-Brackstone</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner2} alt="Second slide" />

                <Carousel.Caption>
                    <h3>Smell is a word, perfume is literature.</h3>
                    <p>-Jean-Claude Ellena</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Fragrance makes us dream.</h3>
                    <p>-Francois Nars</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
