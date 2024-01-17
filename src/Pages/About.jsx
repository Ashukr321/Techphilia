import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <div className="py-16 px-6 bg-white ">
        <div className="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 mb-10 rounded-xl">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12  lg:w-5/12  shadow-2xl about_top_image">
              <img
                src="https://amispardha.vercel.app/university.jpg"
                alt="image"
                loading="lazy"
                classNameName=" h-80"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl about_head text-center  md:text-4xl pt-10 ">
                AMITY UNIVERSITY PATNA
              </h2>
              <p className="mt-6 text-gray-600 tracking-wide font-[Kanit]">
                {" "}
                Amity University Patna is a part of 25-years old, leading education group of India, set up with a vision to contribute to nation-building through education, where currently more than 1,70,000 students are pursuing 300 programs across campuses in India and abroad. Amity University Patna is yet another landmark project by Amity to revolutionize the Indian higher education sector by providing globally benchmarked, research and employment-oriented education. Amity University Patna is the youngest addition with a vision to contribute to nation building through education. It presently offers various UG and PG programs like MBA, MCA, B. Tech, B.B.A, B.C.A, B.Com, B.A (English, Psychology), BJMC, etc. located in the heart of the city at Bailey Road Patna, the transit campus is a 15 minutes' drive from airport and 25 minutes from railway station. Amity Institute of Information Technology (AIIT), Amity University Patna is one of the most prestigious and a reputed institute in Patna in the state of Bihar, India. It is preferred by many locals as well as students all over the country. In fact, considering its growth statistics, it is one of the fastest growing institutes in Patna, Bihar.{" "}
              </p>
              <p className="mt-4 text-gray-600 tracking-wide font-[Kanit] pb-10">
                {" "}
                The Amity Institute of Information Technology, Amity University, Patna, Bihar is happy to host its Annual Technology Fest “Techphilia 7.0”, to be held on 8th and 9th February– 2024. The event will give opportunity to many students to learn, compete and gain exposure with a tinge of enjoyment. This year 10 events are planned with a dream to make it a platform for a Grand Technological Spectacular. We are excited to welcome all the Tech-Savvy students throughout the globe and hope to make it an unforgettable experience for each one of them.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 rounded-xl p-10">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
            <div className="md:7/12 lg:w-6/12  flex-col ">
              {/* <img
                src="/src/assets/gallery/techphilia_about_.png"
                classNameName="w-[260px] h-[140px] content-center m-auto"
                alt=""
              /> */}
              <p
                className="mt-6 text-gray-600 tracking-wide font-[Kanit]"
                font-bold
              >
                Amity University Patna presents TechPhilia 2024 – a two-day tech
                and creativity extravaganza. More than a fest, it celebrates
                innovation for both tech and non-tech enthusiasts. TechPhilia
                2024 offers diverse events, from coding challenges for tech
                enthusiasts to artistic showcases. Breaking boundaries, it
                redefines traditional fest norms, creating an inclusive space
                for enthusiasts of all backgrounds. TechPhilia is your ticket to
                a celebration that blends technology and creativity. Join us for
                connections, memories, and the extraordinary at TechPhilia 2024
                – where passion knows no bounds!
              </p>
              <p className="mt-4 text-gray-600 tracking-wide font-[Kanit]">
                Join us for an unforgettable experience where technology and
                excitement converge. TechPhilia is your gateway to a celebration
                that transcends norms, promising an immersive journey into the
                heart of innovation. Don't miss out on this extraordinary tech
                celebration – TechPhilia awaits with open arms!
              </p>
            </div>
            
            <div className="md:5/12 lg:w-6/12 shadow-2xl mt-32 about_banner_img ">
              {/* <img
                src="/src/assets/gallery/banner_about _.png"
                alt="image"
                classNameName=" md:h-96 w-full "
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default About;
