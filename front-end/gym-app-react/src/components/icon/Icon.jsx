import "./Icon.css";

export const Icon = (props) => {
  return (
    <span
      className="material-symbols-outlined Icon"
      onClick={props.onClick}
      data-clickable={props.onClick && true}
    >
      {props.children || props.i || "no-icon"}
    </span>
  );
};
