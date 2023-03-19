import "./App.scss";
import Navbar from "./components/navbar";
import Main from "./components/main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faCode,
  faPlane,
  faDumbbell,
  faHashtag,
  faMessage,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/sidebar";

library.add(faHouse, faCode, faPlane, faDumbbell, faHashtag, faMessage, faCog);

function App() {
  return (
    <div className="App">
      <Sidebar
        items={[
          {
            icon: "house",
            title: "Home",
          },
          {
            icon: "code",
            title: "Developer",
          },
          {
            icon: "plane",
            title: "Travel",
          },
          {
            icon: "dumbbell",
            title: "Fitness",
          },
          {
            icon: "hashtag",
            title: "About",
          },
          {
            icon: "message",
            title: "Contact",
          },
        ]}
      />
      <div className="App-right">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
