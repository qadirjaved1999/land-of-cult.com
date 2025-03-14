import label from "@/libs/english.json";
export default function BuyLand() {
    return (
        <div className="bg-black w-full flex flex-col justify-center items-center min-h-[100vh] py-16 px-4">
            <div className="content-wrapper flex flex-col justify-center items-center space-y-4">
                <h1 className="text-[#c7c7c7] max-w-[32rem] sm:max-w-[51rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold font-punk uppercase">
                    {label.deep}
                </h1>
                <p className="text-gray-300 font-grid text-center max-w-[22rem] sm:max-w-[50rem]">
                    {label.deepDescription}
                </p>
            </div>
            <div className="w-full max-w-[85rem] py-24">
                <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl bg-[url('/assets/images/Group_1.png')] bg-cover bg-[bottom] object-cover bg-no-repeat">
                    <div className="text-white py-16 px-8 sm:py-24 sm:px-12 md:py-32 md:px-20 lg:py-32 lg:px-28">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold font-punk leading-tight text-gray-300 uppercase">
                            Buy Land <br /> in Gloomhaven
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg mt-4 mb-8 text-gray-300 font-grid max-w-[28rem]">
                            {label.gloomhavenDescription}
                        </p>
                        <button className="relative overflow-hidden bg-[#C7C7C7] text-black px-10 py-1 mb-10 text-lg uppercase rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white 
                                        before:content-[''] before:absolute before:top-0 before:right-[-120%] before:h-full before:w-[120%] before:bg-[#C7C7C7] before:skew-x-[30deg] before:transition-all before:duration-500 before:ease-in-out hover:before:right-[120%]">
                            {label.buyLand}
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}
