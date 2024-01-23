import React from "react";

import { Card, Text, Title } from "@tremor/react";

const ContactUsPage = () => {
  return (
    <Card className="flex flex-col justify-center items-center h-full">
      <Title>Support Contact Info</Title>
      <Text>
        Email:{" "}
        <strong>
          <a href={"mailto:Support@Mzeeij.sa"}>Support@Mzeeij.sa</a>
        </strong>
      </Text>
      <Text>
        Number: <strong>+966512345678</strong>
      </Text>
    </Card>
  );
};

export default ContactUsPage;
