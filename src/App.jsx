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
   <div className='flex flex-col h-screen justify-center item-center overflow-hidden max-w-120'>
        {page==="Home" && <Home />}
        {page==="Explore" && <Explore />}
        {page==="Connect" && <Friends />}
        {page==="Profile" && <Profile />}
        <Navbar page={page} setPage={setPage}/>
   </div>
  )
}

export default App
