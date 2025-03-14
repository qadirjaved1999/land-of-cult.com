import label from "@/libs/english.json";
export default function VirtualWorld() {
    return (
        <section className="relative w-full aspect-[16/9] min-h-[180vh] flex justify-center items-center py-10 px-4 bg-black bg-[url('/assets/images/Group_12.png')] bg-cover bg-bottom bg-no-repeat">

            <div className="absolute top-[18rem] transform -translate-y-1/2 text-gray-300 max-w-[40rem] text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold font-punk uppercase leading-tight">
                    {label.wastelandToken}
                </h1>
            </div>

            <div className="relative flex justify-center items-center w-full max-w-[63rem] shrink-0">
                <img
                    src="/assets/images/Group_13.png"
                    className="w-full h-auto object-cover sm:object-contain"
                />

                {/* Content 1 */}
                <div className="absolute left-[9%] top-[22%] w-[14rem] xs:hidden">
                    <p className="text-gray-400 text-xs sm:text-[10px] md:text-sm text-start">
                        {label.contentOne}
                    </p>
                </div>

                <div className="absolute left-[7%] top-[63%] w-[14rem] xs:hidden">
                    <p className="text-gray-400 text-xs sm:text-[10px] md:text-sm text-start">
                        {label.contentTwo}
                    </p>
                </div>

                <div className="absolute right-[7.5rem] top-[56%] w-[6.5rem] xs:hidden">
                    <p className="text-gray-400 text-xs sm:text-[10px] md:text-sm text-start">
                        {label.contentThree}
                    </p>
                </div>
            </div>

            <div className="absolute xs:bottom-32 sm:bottom-20 md:bottom-24 lg:bottom-32 xs:right-8 sm:right-14 md:right-28 lg:right-48 w-full flex xs:flex-col-reverse row- justify-center items-center gap-4 mt-10">
                <p className="inline xs:w-[12rem] sm:w-[12rem] md:w-[12rem] lg:w-[12rem] text-gray-400 text-xs text-start">{label.incididunt}</p>
                <div className="w-[20rem] shrink-0">
                    <img src="/assets/images/Group_14.png" className="w-full h-auto object-cover sm:object-contain" />
                </div>
            </div>

            <div className="absolute xs:bottom-[-20px] sm:bottom-[2rem] w-full flex flex-wrap justify-center gap-4 mt-10">
                <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                    {label.getToken}
                </button>
                <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 mt-6 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
                    {label.comingSoon}
                </button>
            </div>
        </section>
    );
}