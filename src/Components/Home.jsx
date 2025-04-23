import search from "../assets/Explore.png"
import suggest from "../assets/suggestIllust.png"
export default function Home(){
return(
    <div className="w-full h-full flex justify-center items-center flex-col   overflow-hidden p-10">
       <div className="bg-gray-300 h-10 w-full rounded-xl flex items-center flex-row">
        <img src={search} className="w-7 h-7 ml-2"/>
        <input className="w-full h-full rounded-xl p-3" placeholder="Search for connections...."/>
       </div>
       <div className="flex flex-col justify-center item-center h-full">
           <img src={suggest} className="w-50 h-50 "/>
           <p className="text-gray-500">Search something for suggestion...</p>
       </div>
    </div>
)
}
