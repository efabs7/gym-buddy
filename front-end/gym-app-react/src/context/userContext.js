import { createContext, useState } from "react";

export const userContext = createContext({});

const Provider = userContext.Provider;

export const UserProvider = ({ children }) => {
  const avatars = [
    { name: "bat", src: "../avatars/bat.png" },
    { name: "cow", src: "../avatars/cow.png" },
    { name: "yogaCat", src: "../avatars/yogaCat.png" },
    { name: "yogaDog", src: "../avatars/yogaDog.png" },
  ];

  const inspirationalPhrases = [
    {
      category: "funny",
      phrase:
        "honestly, even if you don't feel it today, you look good and you smell nice and you might as well give your body a little treat! Get after it!",
    },
    {
      category: "funny",
      phrase:
        "drink some coffee then try again if you need; otherwise, let's get into it!",
    },
    {
      category: "serious",
      phrase: "discipline is hard won- but hard lost too! Stay with it.",
    },
    {
      category: "serious",
      phrase:
        "Just a bit of dedication to yourself each day makes a real difference. Get after it!",
    },
    {
      category: "serious",
      phrase:
        "discipline is the bridge between your goals and your achievements- so get your butt in gear and get moving!",
    },
  ];
  const value = {
    avatars,
    inspirationalPhrases,
  };
  return <Provider value={value}>{children}</Provider>;
};
