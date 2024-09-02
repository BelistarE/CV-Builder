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

  const [workExperiences, setWorkExperiences] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        id: Date.now(), // Unique ID for each entry
        company: "",
        title: "",
        location: "",
        responsibilities: "",
      },
    ]);
  };

  const handleWorkExperienceChange = (id) => (e) => {
    const { name, value } = e.target;
    setWorkExperiences(
      workExperiences.map((workExperience) =>
        workExperience.id === id
          ? { ...workExperience, [name]: value }
          : workExperience
      )
    );
  };

  const handleWorkExperienceDelete = (id) => () => {
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
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
      content: (
        <WorkExperience
          workExperiences={workExperiences}
          onAdd={addWorkExperience}
          onChange={handleWorkExperienceChange}
          onDelete={handleWorkExperienceDelete}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="left">
          <CVPreview
            personalInfo={personalInfo}
            workExperiences={workExperiences}
          />
        </div>
        <div className="right">
          <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  {item.content}
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
