import "./App.scss";
import Sidebar from "./components/sidebar";
import Home from "./images/home.svg";
import Blog from "./images/blog.svg";
import Community from "./images/community.svg";
import Contest from "./images/contest.svg";
import About from "./images/about.svg";
import Contact from "./images/contact.svg";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Sidebar
        items={[
          {
            icon: Home,
            title: "Home",
          },
          {
            icon: Blog,
            title: "Blog",
          },
          {
            icon: Community,
            title: "Community",
          },
          {
            icon: Contest,
            title: "Contest",
          },
          {
            icon: About,
            title: "About",
          },
          {
            icon: Contact,
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
