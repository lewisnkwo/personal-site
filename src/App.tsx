import "./App.scss";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";

library.add(
  faHouse,
  faCode,
  faPlane,
  faDumbbell,
  faHashtag,
  faMessage,
  faCog,
  faLinkedinIn,
  faGithub,
  faBars,
  fab
);

const App = () => (
  <div className="App">
    <Sidebar
      items={[
        {
          icon: "house",
          title: "Home",
        },
        {
          icon: "code",
          title: "Blog",
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
          icon: "linkedin-in",
          title: "LinkedIn",
        },
        {
          icon: "github",
          title: "Github",
        },
      ]}
    />
    <div className="App-right">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
