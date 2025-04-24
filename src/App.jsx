import { useState } from 'react'
import Navbar  from './Components/Navbar'
import Home from './Components/Home'
import Explore from './Components/Explore'
import Friends from './Components/Connect'
import Profile from './Components/Profile'
import "./index.css"

function App() {
  const [page, setPage] = useState("Home");
  
  return (
    <div className='flex flex-row justify-center w-screen h-screen '>
   <div className='flex flex-col h-screen justify-center item-center overflow-hidden min-w-90 w-100 border-2 border-gray-400'>
        {page==="Home" && <Home />}
        {page==="Explore" && <Explore />}
        {page==="Connect" && <Friends />}
        {page==="Profile" && <Profile />}
        <Navbar page={page} setPage={setPage}/>
   </div>
   </div>
  )
}

export default App
