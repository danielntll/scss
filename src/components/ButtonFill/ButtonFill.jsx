import "./scss/ButtonFill.scss";

const ButtonFill = ({
  text = "Button",
  onClick = () => {
    console.log("Click!");
  },
  color = "primary",
  icon = {
    pos: "right",
    iconUrl: "",
  },
}) => {
  // VARIABLES ------------
  // CONDITIONS -----------
  const colorSwitch = {
    primary: "ButtonFill-primary",
    secondary: "ButtonFill-secondary",
    tertiary: "ButtonFill-tertiary",
  };
  // FUNCTIONS ------------
  // RETURN ---------------
  return (
    <div onClick={onClick} className={colorSwitch[color]}>
      {icon.pos === "left" && icon.iconUrl !== "" ? (
        <img
          className="ButtonFill__icon"
          src={icon.iconUrl}
          alt="button icon"
        />
      ) : null}
      <span className="ButtonFill__text">{text}</span>
      {icon.pos === "right" && icon.iconUrl !== "" ? (
        <img
          className="ButtonFill__icon"
          src={icon.iconUrl}
          alt="button icon"
        />
      ) : null}
    </div>
  );
};

export default ButtonFill;
