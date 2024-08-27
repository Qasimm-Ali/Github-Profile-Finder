import { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
export default function Profile() {
  // const [user, setuser] = useState()
  const [userName, setuserName] = useState("Qasimm-Ali");
  const [userData, setuserData] = useState(null);
  async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setuserData(data);
    console.log(data);
  }
  function handleClick() {
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center gap-10 bg-cyan-950 h-screen">
        <p className="text-4xl pt-5 font-medium max-sm:text-center">Github Profile Finder </p>
        <div className="flex  justify-center gap-2 pt-7 ">
          <input
            name="input"
            type="text"
            className="border-[1px] border-black w-[15rem] p-2 rounded-md "
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
          <button
            onClick={handleClick}
            className="border-[1px] border-black p-2 rounded-md bg-blue-900 text-xl">
            Search
          </button>
        </div>
        {/* <div className="flex justify- "> */}
        <div className="h-[50%] bg-indigo-600 w-[330px] flex flex-wrap gap-6  ">
          <div className="header">
            {userData && (
              <>
                <div className="flex h-[100px] items-center gap-5 px-8 mt-4">
                  <img
                    className="w-[100px] rounded-[50%]"
                    src={userData.avatar_url}
                    alt="Logo"
                  />
                  <span>
                    <p className="text-white text-[19px] font-medium">
                      {" "}
                      {userData.name}
                    </p>
                    <p className="text-gray-800">{userData.login} </p>
                  </span>
                </div>
                <div>
                  <p className="w-full px-7 pt-2 text-[17px] font-sans text-white">{userData.bio} </p>
                </div>
                <div className="flex flex-col mt-3 px-6">
                  <p className="text-gray-800 font-medium" >Followers :- <span className="text-white text-[17px] font-sans"> {userData.followers}</span> </p>
                  <p className="text-gray-800 font-medium" >Following :-  <span className="text-white text-[17px] font-sans">{userData.following} </span> </p>
                  <p className="text-gray-800 font-medium" >Repos :-  <span className="text-white text-[17px] font-sans">{userData.public_repos} </span> </p>
                </div>
                <div>
                  <p className="w-full flex justify-end pr-10"><a href={userData.html_url}><FaGithub size={31}/> </a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
