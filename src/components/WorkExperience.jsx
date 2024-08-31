import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

const PersonalInfo = () => {
  return (
    <Card className="p-4" isBlurred shadow="none">
      <CardHeader>
        <h2 className="font-semibold text-sm">Work Experience</h2>
      </CardHeader>
      <CardBody className=" flex flex-col gap-4">
        <Input name="name" label="Full Name" />

        <Input className="" name="email" label="Email Address" />
        <Input className="" name="phone" label="Phone number" />
        <Input name="location" label="Location" />
      </CardBody>
    </Card>
  );
};

export default PersonalInfo;
