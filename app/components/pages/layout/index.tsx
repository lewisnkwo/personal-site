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
import Sidebar from "../../shared/sidebar";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import { useState } from "react";

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

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);

  return (
    <div className="Layout">
      <Sidebar
        isMenuOpen={openMenu}
        items={[
          {
            icon: "house",
            title: "Home",
          },
          {
            icon: "code",
            title: "Blog",
            slug: "posts",
          },
          {
            icon: "plane",
            title: "Travel",
          },
          {
            icon: "dumbbell",
            title: "Health",
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
        onMenuClose={() => setOpenMenu(false)}
      />
      <div>
        <Header onMenuClick={() => setOpenMenu(true)} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
