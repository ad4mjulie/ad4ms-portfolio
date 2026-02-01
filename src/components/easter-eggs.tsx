"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect, useState } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();
  const [sequence, setSequence] = useState<string[]>([]);
  const [showNyanCat, setShowNyanCat] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        setSequence((prev) => [...prev, e.key]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    if (sequence.length > 10) {
      if (
        sequence.slice(-10).join("") ===
        [
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
          "b",
          "a",
        ].join("")
      ) {
        setShowNyanCat(true);
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
          const audio = new Audio("/assets/nyan-cat.mp3");
          audio.play();
        }
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [sequence]);

  useEffect(() => {
    if (!isDevToolsOpen) return;
    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%cWhoa, look at you! 🕵️‍♂️\n" +
        "You seem to have discovered the secret console! 🔍\n" +
        "Want to see some magic? ✨\n" +
        "Just type %cmy first name%c and hit enter! 🎩🐇",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
      );

      ["naresh", "Naresh", "NARESH"].forEach((name) => {
        // @ts-ignore
        if (Object.hasOwn(window, name)) return;
        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ Abra Kadabra! ✨\n\n" +
              "You just summoned the magic of Naresh! 🧙‍♂️\n" +
              "What??? youre not impressed? Fine, but remember: With great power comes great responsibility! 💻⚡",
              "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPssttt! 🤫\n\n" +
                "Do you like cats?? 😺 If yes, then press 'n' on viewport and see what happens! 🐱✨",
                "color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 7000);
            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
