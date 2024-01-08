import React from "react";
import "./PageStyles.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

// import Main from './Main'
export default function Home() {
  return (
    <>
      <div className="home flex flex-col justify-center max-[1100px]:h-[124vh]">
        <div className="text-div max-[1100px]:mt-28 ">
          <p className="w-auto p-10 mr-2 amity-text text-white font-bold text-3xl max-[678px]:text-xl">
            Amity Univesity Patna{" "}
          </p>
          <p className="amiphoria-text max-[678px]:text-7xl text">
          TECHPHILIA 7.0
          </p>
          <p className="mb-10 font-[Kanit] text-xl max-[678px]:text-md">
            Come join us as we celebrate and indulge in the joys of life and
            competition. This is not just a fest but an expression of liveliness
            and art forms. The biggest celebration of art in Bihar. Amiphoria
            comes with a promise to break the monotony, to give you an
            opportunity to recharge meet and bond with anyone and everyone who
            shares your passion for any kind of art.
          </p>

          <button
            type="button"
            class=" btn-explore text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-grow"
          >
            <Link to={"/events"}>Explore</Link>
          </button>
        </div>
      </div>
      <section>
        <video width="100%" height="100%" controls autoplay>
          <source src="/Techphilia 7.0 Teaser (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
