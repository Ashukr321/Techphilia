import React from "react";
import "./About.css";
import ashutosh from "../assets/teams/ashutosh.jpg";
import angel from "../assets/teams/angel.jpg";
import nikhil from "../assets/teams/nikhil.jpg";
import keshav from "../assets/teams/keshav.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div className="py-16 px-6 bg-white ">
        <div className="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 mb-10 rounded-xl">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12  lg:w-5/12  shadow-2xl about_top_image">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLc1-WRk5KR21Ur9-N_QXOEj_4ZT1FsN5-6beJUeakUfTA20OdTprRdvfvmH9aPY-unI_T-WfJY9GdEct2jd8U7nLLndPxO7qfawUPVJ5GplElTTq9icnnsfs-dD2yRQ29G386_iJrLzW8aU4RJkMlKF3AjEVmufwdRcj68C_QfVnWu3BdfSruT64r0XY/s16000/aup.jpg"
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
                Amity University Patna is a part of 25-years old, leading
                education group of India, set up with a vision to contribute to
                nation-building through education, where currently more than
                1,70,000 students are pursuing 300 programs across campuses in
                India and abroad. Amity University Patna is yet another landmark
                project by Amity to revolutionize the Indian higher education
                sector by providing globally benchmarked, research and
                employment-oriented education. Amity University Patna is the
                youngest addition with a vision to contribute to nation building
                through education. It presently offers various UG and PG
                programs like MBA, MCA, B. Tech, B.B.A, B.C.A, B.Com, B.A
                (English, Psychology), BJMC, etc. located in the heart of the
                city at Bailey Road Patna, the transit campus is a 15 minutes'
                drive from airport and 25 minutes from railway station. Amity
                Institute of Information Technology (AIIT), Amity University
                Patna is one of the most prestigious and a reputed institute in
                Patna in the state of Bihar, India. It is preferred by many
                locals as well as students all over the country. In fact,
                considering its growth statistics, it is one of the fastest
                growing institutes in Patna, Bihar.{" "}
              </p>
              <p className="mt-4 text-gray-600 tracking-wide font-[Kanit] pb-10">
                {" "}
                The Amity Institute of Information Technology, Amity University,
                Patna, Bihar is happy to host its Annual Technology Fest
                “Techphilia 7.0”, to be held on 8th and 9th February– 2024. The
                event will give opportunity to many students to learn, compete
                and gain exposure with a tinge of enjoyment. This year 10 events
                are planned with a dream to make it a platform for a Grand
                Technological Spectacular. We are excited to welcome all the
                Tech-Savvy students throughout the globe and hope to make it an
                unforgettable experience for each one of them.
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
                for enthusiasts of all backgrounds.
              </p>
              <p className="mt-4 text-gray-600 tracking-wide font-[Kanit]">
                Join us for an unforgettable experience where technology and
                excitement converge. TechPhilia is your gateway to a celebration
                that transcends norms, promising an immersive journey into the
                heart of innovation.TechPhilia is your ticket to a celebration
                that blends technology and creativity.Don't miss out on this
                extraordinary tech celebration – TechPhilia awaits with open
                arms!
              </p>
            </div>
            
            <div className="md:5/12 lg:w-6/12 shadow-2xl mt-32 about_banner_img ">
               <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieJZoz52GopwoTF9SNuVaGlAXg6kRUFsZle7x2dec1GwcSGvHDGFJ7krhFSXTW9kiFt4XtX2OEkdVBfxvK6VALnzCrntguPH3AyBujnIFYJhSmcUefx9bSF1MuIoexi4TA-tVN-RoKsjcKfMZYsz4h763oUFSw8GuUbK_2cOZmJWdZUOHHMkt8Ts4U0V4/w640-h300/4.jpg"
                alt="image"
                loading="lazy"
                classNameName=" h-80"
              />
          </div>
        </div>
      </div>
      </div>

      <br />

      <section class="bg-white dark:bg-grey-500">
        <div class="py-32 px-10 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <p class="font-bold  text-gray-500 sm:text-xl dark:text-gray-400">
              {" "}
Explore this meticulously crafted website brought to life by the brilliant minds at Techphilia Tech Team. For any questions or curiosities, don't hesitate to reach out to our dedicated point of contact. Your journey into the world of technology awaits – dive in!
            </p>
          </div>
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src={angel}
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/angel3002/"
                >
                  Angel Singh
                </Link>
              </h3>
              <p>Developer</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/angel7544"
                    target="_blank"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:angelsingh2199@gmail.com"
                    target="_blank"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src={ashutosh}
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/"
                >
                  Ashutosh kumar
                </Link>
              </h3>
              <p>Developer</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/Ashukr321"
                    target="_blank"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:coderashukr321@gmail.com"
                    target="_blank"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src={nikhil}
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/nikhil-ranjan-5b8801220/"
                >
                  Nikhil Ranjan
                </Link>
              </h3>
              <p>Developer</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/Ashukr321"
                    target="_blank"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:prateekraj20052004@gmail.com"
                    target="_blank"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src={keshav}
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/keshav-kant-mishra-02a745282/"
                >
                  Keshav Kant Mishra
                </Link>
              </h3>
              <p>Developer</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <Link
                    to="#"
                    target="_blank"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://github.com/"
                    target="_blank"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:keshav913ptn@gmail.com"
                    target="_blank"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
