import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  HomeIcon,
  DownloadIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { Divider } from "@nextui-org/divider";
import { useRef } from "react";
import { Button } from "@nextui-org/button";

const CVPreview = ({ personalInfo, educations, workExperiences }) => {
  return (
    <div>
      <div className="header-preview">
        <h3>CV Preview</h3>
      </div>
      <div className="gap">
        <Card className="cv-preview">
          <div>
            <h5 className="cv-name">
              <strong>{personalInfo.name}</strong>
            </h5>
            <Divider />
            <div className="contact">
              <p>
                <EnvelopeClosedIcon />
                {personalInfo.email}
              </p>
              <p>•</p>
              <p>
                <ChatBubbleIcon />
                {personalInfo.phone}
              </p>
              <p>•</p>
              <p>
                <HomeIcon />
                {personalInfo.location}
              </p>
            </div>
            <p className="section">Education</p>
            <Divider />
            {educations.map((education) => (
              <div key={education.id} className="education-item">
                <div className="upper">
                  <div className="institution-degree">
                    <h5>{education.institution}</h5>
                    <p>{education.degree}</p>
                    <p className="location">{education.location}</p>
                  </div>
                  <p className="date">{education.gradyear}</p>
                </div>
              </div>
            ))}
            <p className="section">Work Experience</p>
            <Divider />
            {workExperiences.map((workExperience) => (
              <div key={workExperience.id} className="work-experience-item">
                <div className="upper">
                  <div className="company-title">
                    <h5>{workExperience.company},</h5>
                    <p>{workExperience.title}</p>
                    <p className="location">{workExperience.location}</p>
                  </div>
                  <p>{workExperience.from.format("MMM YYYY")}</p>
                </div>

                <p>{workExperience.responsibilities}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CVPreview;
