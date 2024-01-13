import React from "react";
import "./PageStyles.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

// import Main from './Main'
export default function Home() {
  return (
    <>
      <div className="home flex flex-col justify-center max-[1100px]:h-[124vh]">
        <div className="text-div max-[1100px]:mt-32 ">
          <p className="w-auto p-10 mr-2 amity-text text-white font-bold text-3xl max-[678px]:text-xl">
            Amity Univesity Patna{" "}
          </p>
          <p className="amiphoria-text max-[678px]:text-7xl text loader">
            TECHPHILIA 7.0
          </p>
          <p className="mb-10 font-[Kanit] w-full max-[678px]:text-md">
          The Amity Institute of Information Technology, Amity University Patna, is happy to host the first edition of 
          its Annual Technology Fest “Techphilia 7.0”, to be held on Wednesday, 08th February 2024 – 09th February 
          2024. The event will give opportunity to many more students to learn, compete and gain exposure with a 
          tinge of enjoyment. This year 10 online events are planned with a dream to make it a platform for a Grand 
          Technological Extravaganza. We are excited to welcome all the Tech-Savvy students throughout the 
          globe and hope to make it an unforgettable experience for each one of them.
          </p>

          <button
            type="button"
            class=" btn-explore text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-grow"
          >
            <Link to={"/events"}>Explore</Link>
          </button>
        </div>
      </div>
      
    </>
  );
}
