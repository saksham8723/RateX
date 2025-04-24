import dp from "../assets/dp.png"
import star from "../assets/star.png"
import star1 from "../assets/star_1.png"
export default function Profile(){
    return(
       <div className=" w-full h-full flex flex-col justify-start overflow-auto ">
          
        <div className="relative bg-gradient-to-t from-gray-600 to-gray-500 w-full  ">

          <div className="flex flex-col justify-center items-center mt-5 mb-5">
            <img src={dp} className="w-25 h-25 rounded-full shadow-2xl drop-shadow-white "/>
            <p className="text-white  font-medium text-xl mt-3 lin">Saksham Kapoor</p>
            <p className="text-gray-300 text-xs ">B.Tech (CSE)</p>
            <p className="text-gray-300  text-xs ">Graphic Era Hill Univ, Dehradun</p>
           
            <div className="w-15 h-6  flex justify-center gap-2 items-center bg-green-600 rounded-2xl  text-white font-bold mt-3 mb-10">
              <img src={star} alt="star" className="w-3 h-3"/>
             <p className="text-x">10</p> 
              </div>

           </div>


         <div className="absolute w-full p-10 top-45"  >




            <div className="w-full h-25 flex flex-row justify-around bg-white shadow-xl rounded-sm p-7 mt-5">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl hover:text-amber-500">1,250</p>
                <p className="text-xs text-gray-600">Connections</p>
              </div>

              <div className="w-0.5 h-full bg-gray-300"></div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">1,250</p>
                <p className="text-xs text-gray-600">Post</p>
              </div>
            </div>


</div>


</div>


            <div className="flex flex-col mt-7 p-10">
              <p className="text-xl font-bold ">My Activities</p>
              <div className="w-full h-full flex flex-row gap-y-2 flex-wrap justify-between bg-white rounded-sm mt-3">
                <div className="w-25 h-25 hover:scale-110">
                 
              <img src={dp} alt="altImage" className="w-full h-full hover:rounded-xs"/>
               
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>
               <div className="w-25 h-25">
              <img src={dp} alt="altImage" className="w-full h-full"/>
               </div>

                </div>
            </div>
    </div>
      
    )
    }
    