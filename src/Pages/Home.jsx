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
          <p className="w-auto mb-10 mt-4 amity-text text-white font-bold text-4xl max-[678px]:text-xl">
            Amity Univesity Patna{" "}
          </p>
          <p className="amiphoria-text text max-[678px]:text-7xl text loader">
            TECHPHILIA 7.0
          </p>

          <p className="mb-10  font-[Kanit] w-full max-[678px]:text-md">
            The Amity Institute of Information Technology at Amity University
            Patna is delighted to announce the commencement of the inaugural
            edition of its Annual Technology Fest, "Techphilia 7.0." This
            much-anticipated event is scheduled to take place from Wednesday,
            8th February 2024, to Thursday, 9th February 2024. Techphilia 7.0
            aims to provide a unique platform for students to not only enhance
            their technological skills but also to engage in healthy competition
            while enjoying the learning process. We have carefully curated 10
            online events for this year, with the vision of transforming the
            fest into a Grand Technological Extravaganza.
          </p>

          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to={"/events"}>Explore</Link>
          </button>
        </div>
      </div>
    </>
  );
}
