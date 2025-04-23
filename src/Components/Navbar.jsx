import Home from "../assets/home.png";
import Explore from "../assets/explore.png";
import Friends from "../assets/friend.png";
import Profile from "../assets/profile.png";

export default function Navbar({page, setPage }) {
    return (
        <div className="flex flex-row justify-around bg-gray-800 w-full h-15">
            <div className="flex flex-col justify-center items-center h-full cursor-pointer hover:scale-130"
                onClick={() => setPage("Home")}
            >
                <img src={Home} alt="Home" className="w-7" />
            </div>

            <div className="flex flex-col justify-center items-center h-full cursor-pointer hover:scale-130"
                onClick={() => setPage("Explore")}
            >
                <img src={Explore} alt="Explore" className="w-7" />
            </div>

            <div className="flex flex-col justify-center items-center h-full cursor-pointer hover:scale-130"
                onClick={() => setPage("Connect")}
            >
                <img src={Friends} alt="Friends" className="w-7" />
            </div>

            <div className="flex flex-col justify-center items-center h-full cursor-pointer hover:scale-130"
                onClick={() => setPage("Profile")}
            >
                <img src={Profile} alt="Profile" className="w-14" />
            </div>
        </div>
    );
}