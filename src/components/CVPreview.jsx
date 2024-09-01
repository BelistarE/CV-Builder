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

const CVPreview = ({ personalInfo }) => {
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CVPreview;
