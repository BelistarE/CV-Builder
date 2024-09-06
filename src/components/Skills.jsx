import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/en-gb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const Skills = ({ skills, onAdd, onChange, onDelete }) => {
  return (
    <Card className="p-4 card-center" shadow="none">
      <CardHeader>
        <h2 className="text-sm font-semibold">Education</h2>
      </CardHeader>
      <CardBody>
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="input-sect flex flex-col gap-3 p-3"
            shadow="sm"
          >
            <Input
              label="Skill"
              type="text"
              name="skill"
              value={skill.skill}
              onChange={onChange(skill.id)}
            />
            <Button type="button" color="danger" onClick={onDelete(skill.id)}>
              Delete
            </Button>
          </Card>
        ))}
      </CardBody>
      <Button type="button" color="primary" onClick={onAdd}>
        Add skill
      </Button>
    </Card>
  );
};

export default Skills;
