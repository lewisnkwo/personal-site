import type { LoadingBarRef } from "react-top-loading-bar";
import LoadingBar from "react-top-loading-bar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faCode,
  faQuestion,
  faBars,
  faTag,
  faCopy,
  faCheckSquare,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import Sidebar from "../../shared/sidebar";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@remix-run/react";

library.add(
  faHouse,
  faCode,
  faQuestion,
  faLinkedinIn,
  faGithub,
  faBars,
  faTag,
  faPlane,
  fab,
  faCopy,
  faCheckSquare
);

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);
  const navigation = useNavigation();

  const loadingBarRef = useRef<LoadingBarRef | null>(null);

  useEffect(() => {
    if (loadingBarRef.current !== null && navigation.state === "loading") {
      loadingBarRef.current.continuousStart();
    }
  }, [navigation.state]);

  return (
    <div className="Layout">
      <LoadingBar color="#2e3440" ref={loadingBarRef} />
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
            slug: "travel",
          },
          {
            icon: "question",
            title: "About",
            slug: "about",
          },
          {
            icon: "linkedin-in",
            title: "LinkedIn",
            external: "https://www.linkedin.com/in/lewisnkwo",
          },
          {
            icon: "github",
            title: "Github",
            external: "https://github.com/lewisnkwo",
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
