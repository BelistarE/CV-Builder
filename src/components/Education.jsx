import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const Education = ({ educations, onAdd, onChange, onDelete }) => {
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
              onChange={onChange(education.id)}
            />
            <Input
              label="Degree Earned"
              type="text"
              name="degree"
              value={education.degree}
              onChange={onChange(education.id)}
            />
            <Input
              label="Location"
              name="location"
              value={education.location}
              onChange={onChange(education.id)}
            />
            <Input
              label="Graduation Year"
              type="date"
              name="graduationYear"
              value={education.graduationYear}
              onChange={onChange(education.id)}
            />
            <Button
              type="button"
              color="danger"
              onClick={onDelete(education.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </CardBody>
      <Button type="button" color="primary" onClick={onAdd}>
        Add education
      </Button>
    </Card>
  );
};

export default Education;
