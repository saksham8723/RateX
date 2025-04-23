import dp from "../assets/dp.png"
import star from "../assets/star.png"
import star1 from "../assets/star_1.png"
export default function Profile(){
    return(
       <div className="bg-[url(https://i.pinimg.com/236x/e3/83/ae/e383aee6cf8305fb2dc835adddfc9b6b.jpg)] bg-cover bg-h-1/2 w-full h-full flex flex-col justify-center p-10">
          <div className="flex flex-col justify-center items-center">
            <img src={dp} className="w-30 h-30 rounded-full shadow-2xl drop-shadow-white mt-10"/>
            <p className="text-white font-bold text-2xl mt-3 lin">Saksham Kapoor</p>
            <p className="text-white  text-xm ">B.Tech (CSE)</p>
            <p className="text-white  text-xm ">Graphic Era Hill Univ, Dehradun</p>
           
            <div className="w-15 h-6  flex justify-center gap-2 items-center bg-green-600 rounded-2xl  text-white font-bold mt-5">
              <img src={star} alt="star" className="w-3 h-3"/>
             <p className="text-x">4.5</p> 
              </div>
           </div>
            <div className="w-full h-25 flex flex-row justify-around bg-gray-200 shadow-xl rounded-sm p-7 mt-5">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">1,250</p>
                <p className="text-xs text-gray-600">Connections</p>
              </div>

              <div className="w-0.5 h-full bg-gray-300"></div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">1,250</p>
                <p className="text-xs text-gray-600">Post</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold mt-8">My Activities</p>
              <div className="w-full h-25 flex flex-row justify-around bg-white rounded-sm p-7 mt-5">
                <img src={dp} alt="" className="w-10"/>
                </div>
            </div>
    </div>
      
    )
    }
    