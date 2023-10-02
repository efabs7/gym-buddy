import "./listItem.css";

import { Center } from "../../UIKit/Layouts/Center/Center";
import { Rows } from "../../UIKit/Layouts/Rows/Rows";

import { Line } from "../../UIKit/Layouts/Line/Line";
export const ListItem = ({
  videoTitle,
  type,
  link,
  difficulty,
  length,
  coachNotes,
}) => {
  return (
    <div className="listBox">
      <Center>
        <Rows>
          <h3>{videoTitle}</h3>
          <p>{type}</p>
          <a href={link} target="blank" />
          <Line>
            <p>{difficulty}</p>
            <p>{length}</p>
          </Line>
          <p className="notes">{coachNotes}</p>
        </Rows>
      </Center>
    </div>
  );
};
