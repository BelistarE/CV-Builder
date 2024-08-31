import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
function App() {
  let tabs = [
    {
      id: "personalInfo",
      label: "Personal Info",
      content: <PersonalInfo />,
    },
    {
      id: "music",
      label: "Music",
      content: <WorkExperience />,
    },
  ];
  return (
    <>
      <Header />
      <div>
        <div className="left">
          <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card>
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default App;
