"use client";
import Image from "next/image";
import "flickity/css/flickity.css";
import label from "@/libs/english.json";
import Flickity from "react-flickity-component";
import "@/components/home-page/GloomhavenToken"

export default function GloomhavenToken() {

    const flickityOptions = {
        groupCells: 1,
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false,
        cellAlign: "left",
    };

    const cardsData = [
        { img: "/assets/images/Group_4.png", title: "Lorem 1 Cult" },
        { img: "/assets/images/Group_5.png", title: "Lorem 2 Cult" },
        { img: "/assets/images/Group_6.png", title: "Lorem 3 Cult" },
        { img: "/assets/images/Group_7.png", title: "Lorem 4 Cult" },
        { img: "/assets/images/Group_8.png", title: "Lorem 5 Cult" },
        { img: "/assets/images/Group_9.png", title: "Lorem 6 Cult" },
        { img: "/assets/images/Group_4.png", title: "Lorem 1 Cult" },
        { img: "/assets/images/Group_5.png", title: "Lorem 2 Cult" },
        { img: "/assets/images/Group_6.png", title: "Lorem 3 Cult" },
        { img: "/assets/images/Group_7.png", title: "Lorem 4 Cult" },
        { img: "/assets/images/Group_8.png", title: "Lorem 5 Cult" },
        { img: "/assets/images/Group_9.png", title: "Lorem 6 Cult" },
    ];

    return (
        <section className="nft-section relative w-full xs:min-h-[195vh] sm:min-h-[190vh] md:min-h-[210vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/nft_bg.jpeg')] bg-cover object-cover bg-center bg-no-repeat">

            {/* Top Shadow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/90 via-black/30 to-transparent"></div>

            {/* Top Content */}
            <div className="w-full flex flex-col justify-center items-center gap-4 absolute top-[-18px] transform -translate-y-1/2 text-gray-300 text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold font-punk uppercase leading-tight">
                    {label.nftLand}
                </h1>
                <p className="max-w-xl text-center text-xs font-grid text-gray-300">
                    {label.nftLandDescription}
                </p>
            </div>

            {/* Flickty Slider */}
            <div className="absolute top-[3rem] w-full max-w-[100rem] mt-20">
                <Flickity className="carousel" options={flickityOptions}>
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="carousel-cell relative w-60 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg mx-2"
                        >
                            <Image src={card.img} alt={card.title} width={500} height={350} className="rounded-lg" />
                            <div className="w-full flex justify-center absolute bottom-5">
                                <Image src="/assets/icons/logo.webp" alt="Logo" width={150} height={50} className="mb-6" />
                            </div>
                        </div>
                    ))}
                </Flickity>
                <div className="w-full flex justify-center gap-4 mt-4">
                    <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                        {label.getToken}
                    </button>
                </div>
            </div>

            {/* Center Content */}
            <div className="content-wrapper relative w-full h-full flex flex-col justify-center items-center">
                <div className="absolute xs:top-[2rem] sm:top-[3rem] md:top-14 lg:top-14  transform -translate-y-1/2 text-white md:max-w-[45rem] text-center">
                    <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold font-punk uppercase leading-tight">
                        {label.gloomhavenToken}
                    </h1>
                    <p className="text-xs md:text-base lg:text-sm mt-6 text-gray-300 font-grid md:px-24">
                        {label.gloomhavenTokenDes}
                    </p>
                </div>
                <div className="absolute xs:top-32 sm:top-40 md:top-40 lg:top-40 flex justify-center items-center xs:w-[12rem] sm:w-[15rem] md:w-[20rem] shrink-0">
                    <img src="/assets/images/Vrstva_89.png" className="w-full h-auto object-contain" />
                </div>
                <div className="absolute xs:top-96 sm:top-[28rem] md:top-[32rem] lg:top-[32rem] w-full flex flex-wrap justify-center gap-4">
                    <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                        {label.getToken}
                    </button>
                    <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                        {label.comingSoon}
                    </button>
                </div>
            </div>

        </section>
    );
}