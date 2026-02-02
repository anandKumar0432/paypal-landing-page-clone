

export default function Button({text, type, onClick}: {text: string, type: string, onClick: ()=>void}){
    
    return (
        type === "simple" && (
            <button
                className="border border-gray-900 px-8 py-3 rounded-3xl transition-transform hover:scale-110 flex items-center justify-center hover:cursor-pointer text-[16px] font-extrabold"
                onClick={onClick}
            >
                {text}
            </button>
        )
        ||
        type === "color" && (
            <button
                className="bg-black hover:bg-[#60CDFF] text-white hover:text-black px-8 py-3 rounded-3xl transition-transform hover:scale-110 flex items-center justify-center hover:cursor-pointer text-[16px] font-extrabold"
                onClick={onClick}
            >
                {text}
            </button>
        )
    )
}