import { Link } from "@remix-run/react";
import mePortrait from "~/images/lewisnkwo_portrait.jpg";

const About = () => {
  return (
    <main>
      <div className="About">
        <h1>A little bit about me...</h1>
        <div className="About__content">
          <img src={mePortrait} alt="Lewis Nkwo Portrait" />
          <div>
            <h2>JS For The Win</h2>
            <p>
              Hello there! I am a frontend software engineer accompanied with 4+
              years of commercial experience working with both startups &
              non-startups, developing applications for small/medium and global
              businesses.
            </p>
            <p>
              I have been part of agile cross-functional engineering teams which
              built, tested & pushed features daily. My front-end engineering
              speciality is with React & TypeScript for SPA/web development
              coupled with a strong eye towards competent UX & UIs. In my
              previous roles, I regularly contributed towards the definition of
              the schema, endpoints and payloads of the APIs alongside the
              backend engineers of my teams. My experiences have also provided
              me with valuable respect towards the principles of CI/CD too.
            </p>
            <p>
              I constantly keep up to date with the latest technologies by
              reading engineering blogs of my favourite apps/software and I am
              always willing to learn the relevant technologies in order to
              expand my knowledge.
            </p>
            <h2>I have experience with these technologies:</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Remix & NextJS</li>
              <li>Javascript & TypeScript</li>
              <li>Node.js</li>
              <li>Styled Components (Emotion)</li>
              <li>SASS</li>
              <li>Jest</li>
              <li>Testing Library</li>
              <li>Cypress</li>
              <li>Storybook</li>
              <li>Angular 8+</li>
              <li>MySQL</li>
              <li>Prisma (ORM)</li>
              <li>iOS</li>
              <li>Android</li>
              <li>AWS</li>
            </ul>
            <h2>What gets me going?</h2>
            <p>
              I'm a big fan of running (outdoors), mental & physical fitness,
              salsa dancing & gaming on my Playstation 5 (although I seem to be
              using it more for Youtube nowadays 🙈). I also enjoy travelling
              (30+ countries so far) mainly for food tasting and experiencing
              different cultures. I'm also aiming to try every single food
              market in London!
            </p>
            <p>
              I&apos;m open to any opportunities or ideas that you may have, so
              feel free to{" "}
              <Link
                aria-label="Email Lewis Nkwo"
                to="mailto:nkwolewis@gmail.com"
              >
                send an email
              </Link>{" "}
              or message me on{" "}
              <Link
                aria-label="My LinkedIn Profile"
                target="_blank"
                rel="noreferrer"
                to="https://www.linkedin.com/in/lewisnkwo"
              >
                LinkedIn
              </Link>
              !
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
