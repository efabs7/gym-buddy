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
    { category: "funny", phrase: "stay with it or else" },
    { category: "funny", phrase: "drink coffee first lol" },
    {
      category: "serious",
      phrase: "discipline is hard won- but hard lost too! Stay with it.",
    },
    {
      category: "serious",
      phrase:
        "Just a bit of dedication to yourself each day makes a real difference. Get after it!",
    },
  ];
  const value = {
    avatars,
    inspirationalPhrases,
  };
  return <Provider value={value}>{children}</Provider>;
};
