import { Navbar } from "../components/navbar/Navbar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid } from "../UIKit/Layouts/Grid/Grid";
import { WorkoutCard } from "../components/workoutCard/WorkoutCard";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userContext";

export const HomeView = () => {
  const { avatars, inspirationalPhrases } = useContext(userContext);

  const workoutsTestList = [
    {
      id: 1,
      type: "Swimming",
      length: "1 hour",
      focus: "aerobic",
      instructor: "eva",
    },
    {
      id: 2,
      type: "Pilates",
      length: "30 mins",
      focus: "core",
      instructor: "nicole",
    },
    {
      id: 3,
      type: "Yoga",
      length: "20 mins",
      focus: "mobility",
      instructor: "adriene",
    },
  ];

  const [workoutList, setWorkoutList] = useState(workoutsTestList);

  const getRandom = (list) => {
    const rand = list[(Math.random() * list.length) | 0];
    return rand;
  };
  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const items = [...workoutList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWorkoutList(items);
  }

  return (
    <div>
      <Navbar />
      <Grid>
        {/* <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppabledId="workouts">
            {(provided) => (
              <ul
                className="workouts"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {workoutList.map((i) => {
                  return (
                    <Draggable key={i.id} draggableId={i.id} index={i}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <WorkoutCard
                            workoutNumber={i}
                            workoutType={i.type}
                            length={i.length}
                            focus={i.focus}
                            avatar={() => getRandom(avatars)}
                            inspirationalPhrase={() =>
                              getRandom(inspirationalPhrases)
                            }
                            instructor={i.instructor}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext> */}
        <ul>
          {workoutList.map((i) => {
            return (
              <li>
                <WorkoutCard
                  key={i.id}
                  workoutNumber={i.id}
                  workoutType={i.type}
                  length={i.length}
                  focus={i.focus}
                  avatar={() => getRandom(avatars)}
                  inspirationalPhrase={() => getRandom(inspirationalPhrases)}
                  instructor={i.instructor}
                />
              </li>
            );
          })}
        </ul>
      </Grid>
    </div>
  );
};
