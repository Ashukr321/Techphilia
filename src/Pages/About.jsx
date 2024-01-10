import React from 'react'
import  "./About.css"
function About() {

  return (
    <div> 

        <div className="py-16 px-6 bg-white ">  
        <div className="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 mb-10 rounded-xl">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12  lg:w-5/12  shadow-2xl about_top_image">
                    <img src="https://amispardha.vercel.app/university.jpg" alt="image" loading="lazy" classNameName=' h-80'/>
                </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-center text-gray-900 font-bold md:text-4xl pt-10 ">AMITY UNIVERSITY, PATNA</h2>
                <p className="mt-6 text-gray-600 tracking-wide font-[Kanit]"> Amity Universtiy is ranked amongst the top 3% Unviersities globally by QS-2018 ranking. Amity University, Patna is a part of 25 years old, leading education group of India, set up witha vision to contribute in nation builing through excellence in higher education. Amity University has more than 150,000 students, pursuing 300 programs across campuses in India and abroad. </p>
                <p className="mt-4 text-gray-600 tracking-wide font-[Kanit] pb-10"> Patna is a part of 25 years old, leading education group of India, set up witha vision to contribute in nation builing through excellence in higher education. Amity University has mor
                e than 150,000 students, pursuing 300 programs across campuses in India and abroad. Amity University has facilitated more than 36,000 on - campus placements in the past years. Amity is research driven University with more than 6000 research Publication, more than 300 on-going research projects, 500 books in diverse area, 1001 patents, 1260 Management case studies in areas of strategic Management, Marketing, Finance, HRM, and Economics etc.</p>
            </div>
            </div>
        </div>

        <br/>

        <div className="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 rounded-xl p-10">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">

                <div className="md:7/12 lg:w-6/12  flex-col ">
                    <img src="/src/assets/gallery/techphilia_about_.png" classNameName='w-[260px] h-[140px] content-center m-auto' alt="" />
                    <p className="mt-6 text-gray-600 tracking-wide font-[Kanit]" font-bold>Amity University Patna presents TechPhilia 2024 – a two-day tech and creativity extravaganza. 
                    More than a fest, it celebrates innovation for both tech and non-tech enthusiasts. TechPhilia 2024 offers diverse events, from coding challenges for tech enthusiasts to artistic showcases. 
                    Breaking boundaries, it redefines traditional fest norms, creating an inclusive space for enthusiasts of all backgrounds. TechPhilia is your ticket to a celebration that blends technology and creativity. 
                    Join us for connections, memories, and the extraordinary at TechPhilia 2024 – where passion knows no bounds!</p>
                    <p className="mt-4 text-gray-600 tracking-wide font-[Kanit]">Join us for an unforgettable experience where technology and excitement converge. TechPhilia is your gateway to a celebration that transcends norms, promising an immersive journey into the heart of innovation. Don't miss out on this extraordinary tech celebration – TechPhilia awaits with open arms!</p>
                 </div>
                <div className="md:5/12 lg:w-6/12 shadow-2xl mt-32 about_banner_img ">
                    <img  src="/src/assets/gallery/banner_about _.png" alt="image" classNameName=' md:h-96 w-full '  loading="lazy" />
                </div>
            
            </div>
        </div>

        <br />

    </div>
    </div>
  )
}

export default About
