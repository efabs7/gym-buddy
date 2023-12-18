import "./Search.css";
import { Icon } from "../icon/Icon";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Grid } from "../../UIKit/Layouts/Grid/Grid";
import { Input } from "../input/Input";
import { ListItem } from "../listItem/ListItem";
import { Line } from "../../UIKit/Layouts/Line/Line";
import { notifyUserError, notifyUserSuccess } from "../../helpers";
import { Btn } from "../../UIKit/Elements/Btn/Btn";
import { Center } from "../../UIKit/Layouts/Center/Center";

export const Search = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedPreferredCurator, setSelectedPreferredCurator] =
    useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userIsSearching, setUserIsSearching] = useState(true);

  const [toggle, setToggle] = useState(false);

  const workoutType = [
    { value: "Yoga", label: "Yoga" },
    { value: "Pilates", label: "Pilates" },
    { value: "Core", label: "Core" },
    { value: "Morning Flow", label: "Morning Flow" },
    { value: "Kickass Yoga Pilates", label: "Kickass Yoga Pilates" },
    { value: "Rehab", label: "Rehab" },
    { value: "Swimming", label: "Swimming" },
  ];

  const workoutLength = [
    { value: "10 mins", label: "10 mins" },
    { value: "20 mins", label: "20 mins" },
    { value: "30 mins", label: "30 mins" },
    { value: "1 hour", label: "1 hour" },
  ];

  const preferredCurator = [
    { value: "Eva", label: "Eva" },
    { value: "Marcus", label: "Marcus" },
  ];

  const springs = useSpring({
    from: { y: -10, x: 80 },
    to: async (next, cancel) => {
      await next({ y: 40 });
      await next({ y: 0 });
      await next({ y: 30 });

      await next({ y: -10 });
    },
    loop: false,
  });

  const searchByInstructorName = () => {
    if (userInput) {
      console.log(userInput);
      let params = new URLSearchParams();
      params.append("instructor", userInput.toLowerCase());
    } else {
      notifyUserError("Please enter instructor name :)");
    }
  };

  const searchWorkouts = () => {
    console.log("call server");
    setUserIsSearching(!userIsSearching);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setUserIsSearching(!userIsSearching);
  };

  const renderUserSearch = (list) => {
    if (list) {
      return list.map((i) => {
        return (
          <li key={i.id}>
            <ListItem
              videoTitle={i.title}
              type={i.type}
              link={i.link}
              difficulty={i.difficulty}
              length={i.length}
              coachNotes={i.notes}
            />
          </li>
        );
      });
    }
  };
  return (
    <div className="wrapper">
      {" "}
      <div className="search">
        <h3>
          Let's get moving!
          <animated.span
            style={{
              ...springs,
            }}
          >
            <Icon i="sentiment_very_satisfied" />
          </animated.span>{" "}
        </h3>
        <p>
          {!toggle
            ? `Search for a specific instructor:`
            : `Search all instructors:`}
          <span>
            {" "}
            <Icon
              i={toggle ? "toggle_on" : "toggle_off"}
              onClick={() => setToggle(!toggle)}
              className="toggleIcon"
            />
          </span>
        </p>
      </div>
      <div className="box">
        <h4>Workout Type:</h4>
        <Select
          defaultValue={selectedType}
          onChange={setSelectedType}
          placeholder="What workout type you gonna crush?"
          options={workoutType}
          isClearable={true}
        />
      </div>
      <div className="box">
        <h4>Workout Length:</h4>
        <Select
          defaultValue={selectedLength}
          onChange={setSelectedLength}
          placeholder="How long you gonna crush for?"
          options={workoutLength}
          isClearable={true}
        />
      </div>
      <div className="box">
        <h4>Curator:</h4>
        <Select
          defaultValue={selectedPreferredCurator}
          onChange={setSelectedPreferredCurator}
          placeholder="Who's taste in gym you feeling?"
          options={preferredCurator}
          isClearable={true}
        />
      </div>
      {toggle && (
        <div className="box">
          <h4>Optional, preffered instructor...</h4>

          <Input
            placeholder="Enter instructor name here..."
            value={userInput}
            onChange={setUserInput}
          />
          <Btn onClick={searchByInstructorName}>Search</Btn>
        </div>
      )}
      <Grid>{renderUserSearch(searchResults)}</Grid>
      <Center>
        {userIsSearching && <Btn onClick={searchWorkouts}>Search..</Btn>}
        {!userIsSearching && <Btn onClick={clearSearch}>Clear</Btn>}
      </Center>
    </div>
  );
};
