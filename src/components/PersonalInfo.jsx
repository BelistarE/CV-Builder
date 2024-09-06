import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

const PersonalInfo = ({ personalInfo = {}, onInputChange }) => {
  return (
    <Card className="p-4 card-center" isBlurred shadow="none">
      <CardHeader>
        <h2 className="font-semibold text-sm">Personal Information</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          name="name"
          label="Full Name"
          value={personalInfo.name || ""}
          onChange={onInputChange}
        />
        <Input
          name="email"
          label="Email Address"
          value={personalInfo.email || ""}
          onChange={onInputChange}
        />
        <Input
          name="phone"
          label="Phone number"
          value={personalInfo.phone || ""}
          onChange={onInputChange}
        />
        <Input
          name="location"
          label="Location"
          value={personalInfo.location || ""}
          onChange={onInputChange}
        />
      </CardBody>
    </Card>
  );
};

export default PersonalInfo;
