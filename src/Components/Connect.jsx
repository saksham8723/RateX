
import dp from "../assets/dp.png"
import star from "../assets/star.png"
export default function Friends(){
    return(
        <div className="w-full h-full flex flex-col justify-center items-start overflow-auto ">
            <div className="flex w-full h-1/12 shadow-lg items-center p-3 bg-gray-600">
            <p className="text-white">Connections</p>
            </div> 
            <div className="flex flex-col h-full p-5 w-full gap-3 ">
            <div className="flex w-full h-1/8 items-center justify-between p-3 border-1 border-gray-400 rounded-xl hover:scale-105 hover:bg-gradient-to-r from-gray-200 to-gray-100 hover:shadow-xl">
            <img src={dp} className="w-10 h-10 rounded-full"/>
            <div className="flex flex-col ml-2">
            <p>Chandrakant Singh Danu</p>
            <p className="text-xs text-gray-500">B.Tech(CSE)</p>
            </div>
              <div className="w-15 h-6  flex justify-center gap-1 items-center bg-green-600 rounded-2xl  text-white font-bold hover:scale-110">
                          <img src={star} alt="star" className="w-2.5 h-2.5"/>
                         <p className="text-xs">4.5</p> 
                          </div>
            </div> 

            <div className="flex w-full h-1/8 items-center justify-between p-3 border-1 border-gray-400 rounded-xl hover:scale-105 hover:bg-gradient-to-r from-gray-200 to-gray-100 hover:shadow-xl">
            <img src={dp} className="w-10 h-10 rounded-full"/>
            <div className="flex flex-col ml-2">
            <p>Chandrakant Singh Danu</p>
            <p className="text-xs text-gray-500">B.Tech(CSE)</p>
            </div>
              <div className="w-15 h-6  flex justify-center gap-1 items-center bg-green-600 rounded-2xl  text-white font-bold hover:scale-110">
                          <img src={star} alt="star" className="w-2.5 h-2.5"/>
                         <p className="text-xs">4.5</p> 
                          </div>
            </div> 

            <div className="flex w-full h-1/8 items-center justify-between p-3 border-1 border-gray-400 rounded-xl hover:scale-105 hover:bg-gradient-to-r from-gray-200 to-gray-100 hover:shadow-xl">
            <img src={dp} className="w-10 h-10 rounded-full"/>
            <div className="flex flex-col ml-2">
            <p>Chandrakant Singh Danu</p>
            <p className="text-xs text-gray-500">B.Tech(CSE)</p>
            </div>
              <div className="w-15 h-6  flex justify-center gap-1 items-center bg-green-600 rounded-2xl  text-white font-bold hover:scale-110">
                          <img src={star} alt="star" className="w-2.5 h-2.5"/>
                         <p className="text-xs">4.5</p> 
                          </div>
            </div> 

            <div className="flex w-full h-1/8 items-center justify-between p-3 border-1 border-gray-400 rounded-xl hover:scale-105 hover:bg-gradient-to-r from-gray-200 to-gray-100 hover:shadow-xl">
            <img src={dp} className="w-10 h-10 rounded-full"/>
            <div className="flex flex-col ml-2">
            <p>Chandrakant Singh Danu</p>
            <p className="text-xs text-gray-500">B.Tech(CSE)</p>
            </div>
              <div className="w-15 h-6  flex justify-center gap-1 items-center bg-green-600 rounded-2xl  text-white font-bold hover:scale-110">
                          <img src={star} alt="star" className="w-2.5 h-2.5"/>
                         <p className="text-xs">4.5</p> 
                          </div>
            </div> 

            









            </div>

            

            


        </div>
    )
    }
    