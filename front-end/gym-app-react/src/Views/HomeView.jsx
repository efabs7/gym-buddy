import { Navbar } from "../components/navbar/Navbar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid } from "../UIKit/Layouts/Grid/Grid";
import { WorkoutCard } from "../components/workoutCard/WorkoutCard";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userContext";

export const HomeView = () => {
  const { avatars, inspirationalPhrases } = useContext(userContext);
  const [workoutList, setWorkoutList] = useState([]);

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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppabledId="workouts">
            {(provided) => (
              <ul
                className="workouts"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {workoutList.map((i) => {
                  return (
                    <Draggable key={i._id} draggableId={i._id} index={i}>
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
        </DragDropContext>
      </Grid>
    </div>
  );
};
