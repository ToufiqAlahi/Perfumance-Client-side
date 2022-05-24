import React from "react";

import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.jpg";
import Expert from "../Expert/Expert";

const experts = [
    {
        id: 1,
        name: "Caleb Azumah Nelson",
        img: expert1,
        details:
            "I like citrus and aromatic spice. I'd never encountered vetiver nor the OG fragrance. Quickly, I have come to love this fragrance. There's just nothing quite like it in my experience. 4.5/5",
    },
    {
        id: 2,
        name: "Megan Nolan",
        img: expert2,
        details:
            "For this to be so cheap, it last for DAYSSS. Never seems to fade, especially on clothes. This will never be made again, since KKW is changing. You are lucky if you were able to buy this fragrance. ",
    },
    {
        id: 3,
        name: "Melody Razak",
        img: expert3,
        details:
            "Lovely fragrance I don't see the Olympea comparison, to be me it smells a little like Alien in the opening, then turn masculine salty vanilla. ",
    },
    {
        id: 4,
        name: "Abigail Dean",
        img: expert4,
        details:
            "Definitely a unique fragrance. Happy I was able to find this after it was discontinued. Could probably be a signature summer/fall scent. Reminds me of a expensive candle.",
    },
    {
        id: 5,
        name: "Ailsa McFarlane",
        img: expert5,
        details:
            "Legitimately excellence oud fragrance. I know my oud and have lived in Arabia. This is up there with the best I have come across. One of my favorites.",
    },
    {
        id: 6,
        name: "Will Burns",
        img: expert6,
        details:
            "I absolutely love this scent. My favorite scents are Bulgari Crystalline (this one is stronger) and Coco Chanel Mademoiselle (this one is far gentler).",
    },
];

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-warning text-center my-5">Investor's Review: </h2>
            <div className="row">
                {experts.map((expert) => (
                    <Expert key={expert.id} expert={expert}></Expert>
                ))}
            </div>
        </div>
    );
};

export default Experts;
