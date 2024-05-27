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
import oldresume from "./data/resume.json";
import resume from './data/linkedin.json'

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
              <ContainedListItem>{resume.basics.label}</ContainedListItem>
              <ContainedListItem>{resume.basics.location.city}, {resume.basics.location.state}</ContainedListItem>
              <ContainedListItem>{resume.basics.email}</ContainedListItem>
              <ContainedListItem>{resume.basics.phone}</ContainedListItem>
              <ContainedListItem>
                {
                  resume.basics.profiles.map(profile =>
                  <Link href={profile.url}>{profile.network}</Link>)
                }
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
              {
                  resume.education.sort((a,b) => a.endDate > b.endDate ? 1 : -1)
                  .map((item, key) => (
                    <ContainedListItem key={key}>
                      {item.studyType}{' '}
                      {item.area}<br />
                      {item.institution}{', '}
                      {item.endDate}
                    </ContainedListItem>
                  ))
              }
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
              {resume.interests.map((item, key) => (
                <ContainedListItem key={key}>{item}</ContainedListItem>
              ))}
            </ContainedList>
          </Tile>
          <CodeSnippet type="multi">
            {JSON.stringify(oldresume, null, 2)}
          </CodeSnippet>
        </Column>
        <Column className="bluebox right" sm={3} md={6} lg={12}>
          <Grid className="redbox container">
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <Tile hasRoundedCorners>
                <h1>Intro</h1>
                <p>{oldresume.content.tagline}</p>
              </Tile>
            </Column>
          </Grid>
          <Grid className="redbox container">
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <h1>Skills</h1>
              {oldresume.content.skills.map((skill) => (
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
