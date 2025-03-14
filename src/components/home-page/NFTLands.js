import Image from "next/image";
import label from "@/libs/english.json";
import { CgGym } from "react-icons/cg";
import { GiCrossedBones, GiPentagramRose } from "react-icons/gi";

export default function NFTLands() {

    const cardsData = [
        {
            icon: <GiCrossedBones className="text-white text-6xl" />,
            title: label.conquerTitle,
            description: label.conquerDescription,
        },
        {
            icon: <CgGym className="text-white text-6xl" />,
            title: label.univeilTitle,
            description: label.univeilDescription,
        },
        {
            icon: <GiPentagramRose className="text-white text-6xl" />,
            title: label.masterTitle,
            description: label.masterDescription,
        },
    ];

    return (
        <section className="relative w-full min-h-[230vh] flex flex-col items-center justify-center py-16 px-4 bg-black bg-[url('/assets/images/47_upscayl_4x.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute top-[-6rem] w-full max-w-[85rem]">
                <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl bg-[url('/assets/images/Group_2.png')] bg-cover bg-[top] object-cover bg-no-repeat">
                    <div className="absolute top-1/2 right-10 md:right-14 lg:right-45 py-0 px-0 xs:py-16 xs:px-8 transform -translate-y-1/2 text-gray-300 max-w-md">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold uppercase font-punk leading-tight">
                            Buy Land <br /> in wasteland
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg mt-4 font-grid text-gray-300">
                            {label.gloomhavenDescription}
                        </p>
                        <button className="relative overflow-hidden bg-[#C7C7C7] text-black px-10 py-1 mt-10 text-lg uppercase rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white 
                            before:content-[''] before:absolute before:top-0 before:right-[-120%] before:h-full before:w-[120%] before:bg-[#C7C7C7] before:skew-x-[30deg] before:transition-all before:duration-500 before:ease-in-out hover:before:right-[120%]">
                            {label.buyLand}
                        </button>

                    </div>

                </div>

            </div>
            {/* Main Content Wrapper */}
            <div className="w-full h-full">
                {/* Cards Section */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 xs:mt-[30rem] sm:mt-[28rem] md:mt-[30rem] mt-[30rem] max-w-7xl mx-auto">

                    <div className="absolute top-[-8rem] left-1/2 transform -translate-x-1/2 z-10">
                        <Image src="/assets/icons/logo-2.webp" alt="Logo" width={180} height={80} />
                    </div>


                    <div className="absolute xs:w-[15rem] xs:h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[30rem] w-[35rem] h-[35rem] xs:right-10 sm:right-52 md:right-44 right-32 xs:bottom-[72rem] sm:bottom-[65rem] md:bottom-[10rem] bottom-[6rem] bg-[url('/assets/images/Group_3.png')] bg-cover bg-center bg-no-repeat"></div>

                    {cardsData.map((card, index) => (
                        <div key={index} className="relative bg-transparent border border-gray-300 rounded-lg p-10 text-center w-full transition-transform duration-500 ease-in-out transform hover:-translate-y-5">
                            <div className="flex justify-center">{card.icon}</div>
                            <h3 className="text-4xl font-bold text-gray-300 font-punk mt-4 uppercase">{card.title}</h3>
                            <p className="text-gray-300 mt-6 text-sm md:text-base font-grid">{card.description}</p>
                            <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                                {label.comingSoon}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom Shadow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        </section>
    );
}