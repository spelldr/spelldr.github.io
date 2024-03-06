import React from "react";
import { ThemeContext } from "./contexts/themeContext";

import "./App.scss";
import {
  Column,
  Grid,
  ColumnHang,
  Theme,
  CodeSnippet,
  Tile,
} from "@carbon/react";
import resume from "./data/resume.json";
export default function App() {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <Theme theme="g90">
      <Grid className="redbox container">
        <Column className="greenbox left" sm={1} md={2} lg={4}>
          <Tile className="content">
            <h5>Left content</h5>
            <p>This should span multiple rows</p>
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
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <p>The secret is a second, nested grid</p>
            </Column>
            <Column className="greenbox right" sm={4} md={8} lg={16}>
              <p>The secret is a second, nested grid</p>
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
