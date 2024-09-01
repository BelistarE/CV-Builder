import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const tabs = [
    {
      id: "personalInfo",
      label: "Personal Info",
      content: (
        <PersonalInfo
          personalInfo={personalInfo}
          onInputChange={handleInputChange}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      content: <Education />,
    },
    {
      id: "workExperience",
      label: "Work Experience",
      content: <WorkExperience />,
    },
  ];

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="left">
          <CVPreview personalInfo={personalInfo} />
        </div>
        <div className="right">
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
      </div>
    </>
  );
}

export default App;
