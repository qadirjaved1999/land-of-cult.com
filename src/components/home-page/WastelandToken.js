import label from "@/libs/english.json";
export default function WastelandToken() {
    return (
        <section>
            <div className="relative w-full xs:min-h-[100vh] sm:min-h-[130vh] md:min-h-[110vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/17_upscayl_4x.png')] bg-cover bg-center bg-no-repeat">
                <div className="absolute top-[10rem] transform -translate-y-1/2 text-white md:max-w-[40rem] text-center">
                    <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold font-punk uppercase leading-tight">
                        wasteland Token
                    </h1>
                    <p className="text-xs mt-4 text-gray-300 font-grid xs:px-16 md:px-32">
                        Lorem ipsum dolor sit amet, consectetur adipiscing  dolore magna amet elit dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="absolute xs:bottom-[12rem] sm:bottom-[6rem] flex justify-center items-center xs:w-[15rem] sm:w-[30rem] md:w-[25rem] shrink-0">
                    <img src="/assets/images/Group_11.png" className="w-full h-auto object-contain" />
                </div>
                <div className="absolute bottom-[2rem] w-full flex flex-wrap justify-center gap-4 mt-10">
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