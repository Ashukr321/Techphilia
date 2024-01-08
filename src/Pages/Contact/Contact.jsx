import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { notifications } from "@mantine/notifications";
import { Loader } from "@mantine/core";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: "1000" });
  });
  const sendEmail = async e => {
    e.preventDefault();

    const data = {
      user_name: e.target.user_name.value,
      user_number: e.target.user_number.value,
      message: e.target.message.value,
    };

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_pyig9zi",
        "template_m696q0t",
        form.current,
        "bMTL6Zknv7ut5rQre",
        data
      );

      console.log(result.text);
      e.target.reset();
      setIsLoading(false);

      notifications.show({
        title: "Message Sent",
        message: "You Will Get a Response Soon...",
      });
    } catch (error) {
      console.error(error.text);

      // Handle error notification or message here
    }
  };

  return (
    <section
      data-aos="flip-down"
      className="bg-white dark:bg-gray-900 h-[555px] mt-10 mb-8 max-[768px]:m-auto max-[768px]:mb-4 rounded-2xl max-[900px]:mr-2"
    >
      <div className="py-8 lg:py-4 px-6 mx-auto max-w-screen-md flex flex-col items-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Feel Free to Contact Us for further any query
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          action="/events"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="user_number"
              maxLength={10}
              className="shadow-sm bg-[#f0eeee] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block md:w-96 max-[768px]:w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="9xxxxxxx99"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="block p-3 w-96 max-[768px]:w-72 text-sm text-gray-900 bg-[#f0eeee] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Tell Your Name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block p-2 w-96 max-[768px]:w-72 text-sm text-gray-900 bg-[#f0eeee] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3497FE] hover:bg-[#0458f4] hover:-translate-y-0.5 transition-all delay-75 sm:w-fit "
          >
            <div className={isLoading ? "" : "hidden"}>
              <Loader color="white" variant="dots" />
            </div>
            <div className={isLoading ? "hidden" : ""}>Send message</div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
