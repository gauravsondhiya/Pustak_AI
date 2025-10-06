import React from "react";
import Scroller from './Scroller'

import { HoverEffect } from "../components/ui/card-hover-effect";
import { RiContactsBookUploadLine } from "react-icons/ri";

const Intro2 = () => {
  let projects = [
    {
      img: <RiContactsBookUploadLine />,
      title: "Upload Any file",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      // link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  let started = () => {
    console.log("done");
  };

  return (
    <>
      <div className="m-auto  flex justify-center mt-5">
        <button
          onClick={started}
          className="border text-2xl font-bold p-4 rounded-2xl bg-black text-white"
        >
          {" "}
          Get Started
        </button>
      </div>

    <Scroller/>
      {/* grid boxes */}
      <div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </>
  );
};

export default Intro2;
