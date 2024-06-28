"use client";

import { Button, Stack, Text } from "@mantine/core";

function ContactUsSection() {
  return (
    <Stack gap={"30px"} my={"50px"} justify="center" align="center">
      <Text
        size={"36px"}
        fw={500}
        style={{ textAlign: "center", maxWidth: "500px" }}
      >
        Can’t find what you are looking for?
      </Text>
      <Text
        size={"16px"}
        style={{ textAlign: "center", maxWidth: "380px", lineHeight: 1.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button w={270} h={80} radius={"20px"} size="25px">
        {" "}
        Contact Us
      </Button>
    </Stack>
  );
}

export default ContactUsSection;
