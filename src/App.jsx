import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import CVPreview from "./components/CVPreview";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { id } from "date-fns/locale";

function App() {
  const newTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: "14px",
            backgroundColor: "#f4f4f5",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            // Remove the border
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "&:hover:not(.Mui-disabled)": {
              backgroundColor: "#e4e4e7",
              borderRadius: "14px",
            },

            "&.Mui-focused": {
              backgroundColor: "#f4f4f5",
            },
          },
        },
      },
    },
  });

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [workExperiences, setWorkExperiences] = useState([]);

  const [educations, setEducations] = useState([]);

  const [skills, setSkills] = useState([]);

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
        id: Date.now(),
        company: "",
        title: "",
        location: "",
        from: null,
        to: null,
        responsibilities: "",
      },
    ]);
  };
  const handleDateChange = (type, id, field) => (newValue) => {
    console.log(`New value for ${field} in ${type}:`, newValue);

    const updateState = (prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: newValue ? dayjs(newValue) : null,
            }
          : item
      );

    if (type === "workExperience") {
      setWorkExperiences((prevExperiences) => updateState(prevExperiences));
    } else if (type === "education") {
      setEducations((prevEducations) => updateState(prevEducations));
    }
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        institution: "",
        degree: "",
        location: "",
        gradYear: null,
      },
    ]);
  };

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        skill: "",
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

  const handleEducationChange = (id) => (e) => {
    const { name, value } = e.target;
    setEducations(
      educations.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  const handleSkillsChange = (id) => (e) => {
    const { name, value } = e.target;
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [name]: value } : skill
      )
    );
  };
  const handleWorkExperienceDelete = (id) => () => {
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
  };

  const handleEducationDelete = (id) => () => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  const handleSkillDelete = (id) => () => {
    setSkills(skills.filter((skill) => skill.id !== id));
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
      content: (
        <Education
          educations={educations}
          onAdd={addEducation}
          onChange={handleEducationChange}
          onDelete={handleEducationDelete}
          onDateChange={handleDateChange}
        />
      ),
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
          onDateChange={handleDateChange}
        />
      ),
    },
    {
      id: "skills",
      label: "Skills",
      content: (
        <Skills
          skills={skills}
          onAdd={addSkill}
          onChange={handleSkillsChange}
          onDelete={handleSkillDelete}
        />
      ),
    },
  ];

  return (
    <>
      <ThemeProvider theme={newTheme}>
        <Header />
        <div className="main-content">
          <div className="left">
            <CVPreview
              personalInfo={personalInfo}
              educations={educations}
              workExperiences={workExperiences}
              skills={skills}
            />
          </div>
          <div className="right">
            <div className="flex w-full flex-col center-me">
              <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                  <Tab className="tab-center" key={item.id} title={item.label}>
                    {item.content}
                  </Tab>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
