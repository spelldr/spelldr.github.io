import React, { useState } from "react";
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
  Tag,
  Search,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
  Stack,
} from "@carbon/react";
import oldresume from "./data/resume.json";
import resume from "./data/linkedin.json";

export default function App() {
  const { toggleTheme } = React.useContext(ThemeContext);
  const [SkillFilter, setSkillFilter] = useState(".");

  return (
    <Theme theme="g100">
      <Grid
        className="container"
        style={{ width: "1095px", paddingTop: "20px" }}
      >
        <Column className="left" sm={1} md={2} lg={4}>
          <Tile className="content">
            <img src="./src/components/pfp.jpg" width="200" />
            <div
              style={{
                position: "absolute",
                marginTop: "-50px",
                padding: "5px",
                width: "200",
                backgroundColor: "lightblue",
              }}
            >
              <h3>David Spell</h3>
            </div>
          </Tile>
          <hr />
          <Tile className="content">
            <ContainedList
              isInset
              kind="on-page"
              label="Contact"
              size="sm"
              className="hideHeader"
            >
              <ContainedListItem>
                {resume.basics.location.city}, {resume.basics.location.state}
              </ContainedListItem>
              <ContainedListItem>{resume.basics.email}</ContainedListItem>
              <ContainedListItem>{resume.basics.phone}</ContainedListItem>
              <ContainedListItem>
                {resume.basics.profiles.map((profile) => (
                  <Link href={profile.url}>{profile.network}</Link>
                ))}
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
              {resume.education
                .sort((a, b) => (a.endDate > b.endDate ? -1 : 1))
                .map((item, key) => (
                  <ContainedListItem key={key}>
                    {item.studyType} {item.area}
                    <br />
                    {item.institution}
                    {", "}
                    {item.endDate}
                  </ContainedListItem>
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
              {resume.interests.map((item, key) => (
                <ContainedListItem key={key}>{item}</ContainedListItem>
              ))}
            </ContainedList>
          </Tile>
          <CodeSnippet type="multi">
            {JSON.stringify(resume, null, 2)}
          </CodeSnippet>
        </Column>
        <Column className="right" sm={3} md={6} lg={12}>
          <Grid className="container">
            <Column className="right" sm={4} md={8} lg={16}>
              <Tile hasRoundedCorners>
                <h1>{resume.basics.label}</h1>
                <div style={{ padding: "10px" }}>
                  <p>{resume.basics.summary}</p>
                </div>
              </Tile>
            </Column>
          </Grid>
          <Grid className="container">
            <Column className="right" sm={4} md={8} lg={16}>
              <Tile style={{ margin: "10px 0" }}>
              <h1>Skills</h1>
                <Search
                  style={{ border: "1px solid white", margin: "5px 0" }}
                  onChange={(e) =>
                    setSkillFilter(
                      `${e.target.value
                        .toLocaleLowerCase()
                        .replaceAll(/\\/gi, "")}`
                    )
                  }
                />
                <div style={{ padding: "3px" }}>
                  {resume.skills
                    .sort((a, b) => (a.name > b.name ? 1 : -1))
                    .map((skill) =>
                      skill.name.toLocaleLowerCase().match(SkillFilter) ? (
                        <Tag
                          key={`tag_${skill.name.replaceAll(/ /g, "_")}`}
                          type="cyan"
                        >
                          {skill.name}
                        </Tag>
                      ) : null
                    )}
                </div>
              </Tile>
            </Column>
          </Grid>
          <Grid className="container">
            <Column className="right" sm={4} md={8} lg={16}>
              <Tile style={{ margin: "10px 0" }}>
              <h1 style={{paddingBottom:'5px'}}>Work Experience</h1>
                <Stack gap={3}>
                  {resume.work.map((job) => (
                    <ExpandableTile
                      id={`ExpTile${job.endDate}`}
                      tileCollapsedIconText="Interact to Expand tile"
                      tileExpandedIconText="Interact to Collapse tile"
                      style={{ border: "1px solid white" }}
                    >
                      <TileAboveTheFoldContent>
                        <div
                        // style={{height: "200px",}}
                        >
                          <h4>
                            {job.company} - {job.position}
                          </h4>
                          <h5>
                            {job.startDate} - {job.endDate}{" "}
                          </h5>
                        </div>
                      </TileAboveTheFoldContent>
                      <TileBelowTheFoldContent>
                        <div style={{ padding: "10px" }}>{job.summary}</div>
                      </TileBelowTheFoldContent>
                    </ExpandableTile>
                  ))}
                </Stack>
              </Tile>
            </Column>
          </Grid>
        </Column>
        <Column className="footer" sm={4} md={8} lg={16}>
          {/* <h3>Footer</h3> */}&nbsp;
        </Column>
      </Grid>
    </Theme>
  );
}
