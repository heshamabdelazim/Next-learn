"use client"

import Image from "next/image"

const ExploreBtn = () => {
    return (
        <button id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("clicked") 
    }>
        <a href="#events">Explore Events</a>
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={25} height={25} />
    </button>
  )
}

export default ExploreBtn
