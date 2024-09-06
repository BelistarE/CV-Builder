import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const WorkExperience = ({
  workExperiences,
  onAdd,
  onChange,
  onDelete,
  onDateChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card className="p-4 card-center" shadow="none">
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

              <DatePicker
                label="Start"
                value={workExperience.from || null}
                onChange={onDateChange(
                  "workExperience",
                  workExperience.id,
                  "from"
                )}
                format="MM/YYYY"
              />

              <DatePicker
                label="End"
                value={workExperience.to || null}
                onChange={onDateChange(
                  "workExperience",
                  workExperience.id,
                  "from"
                )}
                format="MM/YYYY"
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
    </LocalizationProvider>
  );
};

export default WorkExperience;
