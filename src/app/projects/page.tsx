"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Alter Brand",
    description: `A premium fashion brand digital experience built with the MERN stack. Designed to showcase the latest collections and foster a community of brand enthusiasts.`,
    link: "https://alter-brand.vercel.app",
    images: [
      "/assets/projects-screenshots/alter/landing.png",
    ],
  },
  {
    id: 2,
    name: "Black Hole Simulator",
    description: `In this simulation, the light ray paths are computed by integrating an ODE describing the Schwarzschild geodesics using GLSL on the GPU.`,
    link: "https://ad4mjulie.github.io/black-hole/",
    images: [
      "/assets/projects-screenshots/blackhole/landing.png",
    ],
  },
  {
    id: 3,
    name: "Spinning galaxy visual",
    description: `A 3D interactive galaxy built with Three.js, blending colorful stars, drifting camera effects, and poetic visuals.`,
    link: "https://ad4mjulie.github.io/galaxy-ar0718/",
    images: [
      "/assets/projects-screenshots/galaxy/landing.png",
    ],
  },
  {
    id: 4,
    name: "Cisco Packet Tracer Labs",
    description: `The labs showcase practical configurations, troubleshooting, and network design skills. Topics covered include Subnetting & Addressing and Network Protocols.`,
    link: "",
    images: [
      "/assets/projects-screenshots/cisco/landing.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
