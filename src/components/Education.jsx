import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const Education = () => {
  // Initialize state for education entries
  const [educations, setEducations] = useState([]);

  // Handler to add a new education entry
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(), // Unique ID for each entry
        institution: "",
        degree: "",
        location: "",
        graduationYear: "",
      },
    ]);
  };

  // Handler to update an education entry
  const handleChange = (id) => (e) => {
    const { name, value } = e.target;
    setEducations(
      educations.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  // Handler to delete an education entry
  const handleDelete = (id) => () => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  return (
    <Card className="p-4" shadow="none">
      <CardHeader>
        <h2 className="text-sm font-semibold">Education</h2>
      </CardHeader>
      <CardBody>
        {educations.map((education) => (
          <Card
            key={education.id}
            className="input-sect flex flex-col gap-3 p-3"
            shadow="sm"
          >
            <Input
              label="Institution"
              type="text"
              name="institution"
              value={education.institution}
              onChange={handleChange(education.id)}
            />
            <Input
              label="Degree Earned"
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange(education.id)}
            />
            <Input
              label="Location"
              name="location"
              value={education.location}
              onChange={handleChange(education.id)}
            />
            <Input
              label="Graduation Year"
              type="date"
              name="graduationYear"
              value={education.graduationYear}
              onChange={handleChange(education.id)}
            />
            <Button
              type="button"
              color="danger"
              onClick={handleDelete(education.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </CardBody>
      <Button type="button" color="primary" onClick={addEducation}>
        Add education
      </Button>
    </Card>
  );
};

export default Education;
