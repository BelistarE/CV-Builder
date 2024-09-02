import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";

const WorkExperience = () => {
  // Initialize state for work experience entries
  const [workExperiences, setWorkExperiences] = useState([]);

  // Handler to add a new work experience entry
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

  // Handler to update a work experience entry
  const handleChange = (id) => (e) => {
    const { name, value } = e.target;
    setWorkExperiences(
      workExperiences.map((workExperience) =>
        workExperience.id === id
          ? { ...workExperience, [name]: value }
          : workExperience
      )
    );
  };

  // Handler to delete a work experience entry
  const handleDelete = (id) => () => {
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
  };

  return (
    <Card className="p-4" shadow="none">
      <CardHeader>
        <h2 className="text-sm font-semibold">Work Experience</h2>
      </CardHeader>
      <CardBody>
        {workExperiences.map((workExperience) => (
          <Card
            key={workExperience.id}
            className="input-sect flex flex-col gap-3 p-3"
            shadow="sm"
          >
            <Input
              label="Company"
              type="text"
              name="company"
              value={workExperience.company}
              onChange={handleChange(workExperience.id)}
            />
            <Input
              label="Title"
              type="text"
              name="title"
              value={workExperience.title}
              onChange={handleChange(workExperience.id)}
            />
            <Input
              label="Location"
              type="text"
              name="location"
              value={workExperience.location}
              onChange={handleChange(workExperience.id)}
            />
            <Textarea
              label="Responsibilities"
              name="responsibilities"
              value={workExperience.responsibilities}
              onChange={handleChange(workExperience.id)}
            />
            <Button
              type="button"
              color="danger"
              onClick={handleDelete(workExperience.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </CardBody>
      <Button type="button" color="primary" onClick={addWorkExperience}>
        Add work experience
      </Button>
    </Card>
  );
};

export default WorkExperience;
