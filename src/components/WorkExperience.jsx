import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";

const WorkExperience = ({ workExperiences, onAdd, onChange, onDelete }) => {
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
              onChange={onChange(workExperience.id)}
            />
            <Input
              label="Title"
              type="text"
              name="title"
              value={workExperience.title}
              onChange={onChange(workExperience.id)}
            />
            <Input
              label="Location"
              type="text"
              name="location"
              value={workExperience.location}
              onChange={onChange(workExperience.id)}
            />
            <Textarea
              label="Responsibilities"
              name="responsibilities"
              value={workExperience.responsibilities}
              onChange={onChange(workExperience.id)}
            />
            <Button
              type="button"
              color="danger"
              onClick={onDelete(workExperience.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </CardBody>
      <Button type="button" color="primary" onClick={onAdd}>
        Add work experience
      </Button>
    </Card>
  );
};

export default WorkExperience;
