import React, { useEffect, useState } from "react";

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
  IconButton,
  Button,
  FlexGrid,
  Row,
} from "@carbon/react";
import { Asleep, Sun } from "@carbon/icons-react";
import oldresume from "./data/resume.json";
import resume from "./data/linkedin.json";
import { ThemeContext } from "./contexts/themeContext";
import pfp from "./assets/pfp.jpg";

export default function App() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const [SkillFilter, setSkillFilter] = useState(".");

  const ThemeButton = () => (
    <IconButton
      onClick={toggleFunction}
      label="theme"
      kind="ghost"
      // align="bottom"
      style={{ marginTop: "-.5rem" }}
    >
      {toggle ? <Asleep /> : <Sun />}
    </IconButton>
  );
  const PfpStack = () => (
    <Tile>
      <Stack orientation="horizontal">
        <Tile className="content pfp">
          <img
            style={{ margin: "0 0 0 -1rem" }}
            id="pfp.jpg"
            width="200"
            src={pfp}
          />
        </Tile>
        <Tile className="content contact">
          <h3 style={{ marginRight: "-1rem" }}>{resume.basics.name}</h3>
          <br />
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
              {", "}
              <Link href="/DavidSpell_resume.pdf">PDF</Link>
            </ContainedListItem>
          </ContainedList>
          <ThemeButton />
        </Tile>
      </Stack>
    </Tile>
  );

  const Tagline = ({ indent }) => (
    <Tile>
      {indent === true ? (
        <p style={{ textIndent: "2rem" }}>{resume.basics.summary}</p>
      ) : (
        <p>{resume.basics.summary}</p>
      )}
    </Tile>
  );
  const HobbyTile = () => (
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
  );

  const ResData = () => (
    <Tile>
      JSON data provided by{" "}
      <Link
        href="https://chromewebstore.google.com/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec"
        target="_blank"
      >
        JSON Resume Exporter
      </Link>{" "}
      Chrome extension
      <CodeSnippet type="multi">
        Resume.json={JSON.stringify(resume, null, 2)}
      </CodeSnippet>
    </Tile>
  );

  const EduTile = () => (
    <Tile className="content education">
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
  );

  const SkillsTile = () => (
    <Tile style={{ margin: "5px" }}>
      <h1>Skills</h1>
      <Search
        labelText="search"
        style={{
          border: `1px solid ${toggle ? "white" : "black"}`,
          margin: "5px 0",
        }}
        onChange={(e) =>
          setSkillFilter(
            `${e.target.value.toLocaleLowerCase().replaceAll(/\\/gi, "")}`
          )
        }
      />
      <div style={{ padding: "3px" }}>
        {resume.skills
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((skill) =>
            skill.name.toLocaleLowerCase().match(SkillFilter) ? (
              <Tag key={`tag_${skill.name.replaceAll(/ /g, "_")}`} type="cyan">
                {skill.name}
              </Tag>
            ) : null
          )}
      </div>
    </Tile>
  );

  const WorkExp = () => (
    <Tile>
      <h1 style={{ paddingBottom: "5px" }}>Work Experience</h1>
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
  );

  return (
    <Theme theme={toggle ? "g100" : "g10"}>
      <FlexGrid className="container" style={{ padding: "1rem" }}>
        <Row className="lg">
          <Column lg={6} md={0} sm={0}>
            <PfpStack />
            <hr />
            <EduTile />
            <hr />
            <HobbyTile />
            <hr />
            <ResData />
          </Column>
          <Column lg={10} md={0} sm={0}>
            <Tagline indent={true} />
            <hr />
            <SkillsTile />
            <hr />
            <WorkExp />
          </Column>
        </Row>
        <Row className="md1">
          <Column lg={0}>
            <hr />
            <PfpStack />
            <hr />
          </Column>
        </Row>
        <Row className="md2">
          <Column lg={0}>
            <Tagline indent />
            <hr />
          </Column>
        </Row>
        <Row className="md2">
          <Column lg={0}>
            <EduTile />
            <hr />
          </Column>
        </Row>{" "}
        <Row className="md3">
          <Column lg={0}>
            <SkillsTile />
            <hr />
          </Column>
        </Row>
        <Row className="md4">
          <Column lg={0}>
            <WorkExp />
          </Column>{" "}
        </Row>
        <Column className="footer">{/* <h3>Footer</h3> */}&nbsp;</Column>
      </FlexGrid>
    </Theme>
  );
}
