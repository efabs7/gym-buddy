import "./WorkoutCard.css";
import { Between } from "../../UIKit/Layouts/Between/Between";
import { Center } from "../../UIKit/Layouts/Center/Center";
import { Rows } from "../../UIKit/Layouts/Rows/Rows";

export const WorkoutCard = ({
  workoutNumber,
  workoutType,
  length,
  focus,
  avatar,
  inspirationalPhrase,
  instructor,
}) => {
  const styles = {
    fontStyle: "italic",
  };

  return (
    <div className="workoutCard">
      <Between>
        <p>{workoutNumber}</p>
        <p>{workoutType}</p>
        <p>{length}</p>
      </Between>
      <Center>
        <Rows>
          <p>{focus}</p>
          <img src={avatar} alt="avatar for user" />
          <p style={styles}>{inspirationalPhrase}</p>
          <p>{instructor}</p>
        </Rows>
      </Center>
    </div>
  );
};
