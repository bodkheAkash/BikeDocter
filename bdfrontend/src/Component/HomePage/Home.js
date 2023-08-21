 import Img1 from "../Images/Img2.jpg"
 import React from "react"
 export default function Home()
{
    return (
        <div
        style={{
          backgroundImage: `url(${Img1})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="img-fluid"
      ></div>
    )

}