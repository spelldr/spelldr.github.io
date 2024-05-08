import React from "react";
import { ThemeContext } from "./contexts/themeContext";

import "./App.scss";
import {
  Column,
  Grid,
  Theme,
  CodeSnippet,
  ContainedList,
  ContainedListItem,
  Tile,
  Link,
} from "@carbon/react";
import resume from "./data/resume.json";
export default function App() {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <Theme theme="g100">
      <Grid className="redbox container">
        <Column className="greenbox left" sm={1} md={2} lg={4}>
          <Tile className="content">
            <h1>PFP</h1>
            <h3>Contact</h3>
          </Tile>
          <hr />
          <Tile className="content">
            <h6>Contact Info</h6>
            <ContainedList
              isInset
              kind="on-page"
              label="Contact"
              size="sm"
              className="hideHeader"
            >
              <ContainedListItem>{resume.contact.title}</ContainedListItem>
              <ContainedListItem>{resume.contact.location}</ContainedListItem>
              <ContainedListItem>{resume.contact.email}</ContainedListItem>
              <ContainedListItem>
                <Link href={resume.contact.linkedin}>LinkedIn</Link>
              </ContainedListItem>
            </ContainedList>
          </Tile>
          <hr />
          <Tile className="content">
            <h6>Education and certification</h6>
            <ContainedList
              isInset
              kind="on-page"
              label="Education and certification"
              size="sm"
              // className="hideHeader"
            >
              {resume.content.education.map((item, key) => (
                <ContainedListItem key={key}>{item}</ContainedListItem>
              ))}
            </ContainedList>
          </Tile>
          <hr />
          <Tile className="content">
            <h6>Hobbies</h6>
            <ContainedList
              isInset
              kind="on-page"
              label="Hobbies"
              size="sm"
              // className="hideHeader"
            >
              {resume.content.hobbies.map((item, key) => (
                <ContainedListItem key={key}>{item}</ContainedListItem>
              ))}
            </ContainedList>
          </Tile>
          <CodeSnippet type="multi">
            {JSON.stringify(resume, null, 2)}
          </CodeSnippet>
        </Column>
        <Column className="bluebox right" sm={3} md={6} lg={12}>
          <Grid className="redbox container">
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <Tile hasRoundedCorners>
                <h1>Intro</h1>
                <p>{resume.content.tagline}</p>
              </Tile>
            </Column>
          </Grid>
          <Grid className="redbox container">
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <h1>Skills</h1>
              {resume.content.skills.map((skill) => (
                <Tile style={{ margin: "10px", border: "1px solid yellow" }}>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </Tile>
              ))}
            </Column>
          </Grid>
        </Column>
        <Column className="bluebox footer" sm={4} md={8} lg={16}>
          <h3>Footer</h3>
        </Column>
      </Grid>
    </Theme>
  );
}
