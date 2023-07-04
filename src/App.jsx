import "./App.scss";
import ButtonFill from "./components/ButtonFill/ButtonFill";
import Card from "./components/Card";

function App() {
  // VARIABLES ------------
  // CONDITIONS -----------
  // FUNCTIONS ------------
  // RETURN ---------------
  return (
    <>
      <div className="App">
        <div className="App__container">
          <div className="App__section">
            <div className="col-3">
              <ButtonFill
                icon={{
                  pos: "right",
                  iconUrl:
                    "https://img.icons8.com/ios-glyphs/30/adobe-lightroom.png",
                }}
              />
            </div>
          </div>
          <div className="App__section">
            <div className="col-6">
              <ButtonFill
                icon={{
                  pos: "left",
                  iconUrl:
                    "https://img.icons8.com/ios-glyphs/30/adobe-lightroom.png",
                }}
              />
            </div>
          </div>
          <div className="App__section">
            <div className="col-9">
              <ButtonFill />
            </div>
          </div>
          <div className="App__section">
            <div className="col-12">
              <ButtonFill
                icon={{
                  pos: "right",
                  iconUrl:
                    "https://img.icons8.com/ios-glyphs/30/adobe-lightroom.png",
                }}
              />
            </div>
          </div>
          {/* ----------------------- CARDS ------------------------ */}
          <div className="App__section">
            <div className="col-3">
              <Card />
            </div>
          </div>
          <div className="App__section">
            <div className="col-6">
              <Card />
            </div>
          </div>
          <div className="App__section">
            <div className="col-9">
              <Card />
            </div>
          </div>

          {/* ---------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

export default App;
