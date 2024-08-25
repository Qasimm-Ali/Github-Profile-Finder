import { useState, useRef } from "react"
export default function Profile(){
    const ref = useRef()
    const [userName, setuserName] = useState('')
    function handleClick(){
    }
    return <>
    <div className="text-center bg-cyan-950 h-screen">
        <p className="text-4xl pt-5 font-medium ">Github Profile Finder </p>
        <div className="flex  justify-center gap-5 pt-7 ">
            <input name="input" type="text" className="border-[1px] border-black w-[16rem] p-2 rounded-md "ref={ref} />
            <button onClick={handleClick} className="border-[1px] border-black p-2 rounded-md bg-blue-900 text-xl">Search</button>
        </div>
        <div>

        </div>
    </div>
    </>
}