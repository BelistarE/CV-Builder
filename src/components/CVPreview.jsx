import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  HomeIcon,
  DownloadIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { useRef } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import html2pdf from "html2pdf.js";
const CVPreview = ({ personalInfo, educations, workExperiences }) => {
  const handleDownloadPDF = () => {
    const element = document.getElementById("cv-preview-content"); // Target the div to convert

    // Call html2pdf to convert the content into PDF
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: `${personalInfo.name}_CV.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  };
  return (
    <div>
      <div className="header-preview">
        <h2 className="title-desc">CV Preview</h2>
        <Button type="button" color="primary" onClick={handleDownloadPDF}>
          Download PDF
        </Button>
      </div>
      <div className="gap">
        <Card className="cv-preview" id="cv-preview-content">
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
                  <div className="dates">
                    {workExperience.from && (
                      <p>{workExperience.from.format("MMM YYYY")}</p>
                    )}
                    {workExperience.to && (
                      <p>-{workExperience.to.format("MMM YYYY")}</p>
                    )}
                  </div>
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
