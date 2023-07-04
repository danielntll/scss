import "./scss/Card.scss";

const Card = () => {
  // VARIABLES ------------
  // CONDITIONS -----------
  // FUNCTIONS ------------
  // RETURN ---------------
  return (
    <div className="Card">
      <div className="Card__header">
        <span className="Card__header__title">Card</span>
        <span className="Card__header__subtitle">Lorem, ipsum.</span>
      </div>
      <div className="Card__content__container">
        <span className="Card__content__text"></span>
        <div className="Card__content__actions"></div>
      </div>
    </div>
  );
};

export default Card;
