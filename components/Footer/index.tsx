"use client";

import { Group, Stack, Text } from "@mantine/core";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <Group
      gap={"40px"}
      justify="space-around"
      mt={"100px"}
      px="89px"
      py="40px"
      style={{ backgroundColor: "#373737" }}
      align=""
    >
      <Stack>
        <Text w={506} h={167}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Company Privacy
          Policy Terms & Condition Privacy Breach Protocol Quick Link Blogs
          Product Contact Us Pricing Support
        </Text>
        <Group gap={"20px"}>
          <InstagramLogo size={20} />
          <FacebookLogo size={20} />
          <TwitterLogo size={20} /> <LinkedinLogo size={20} />
        </Group>
      </Stack>
      <Stack gap={"10px"}>
        <Text fw={500}>Company</Text>
        <Text fw={200}>Privacy Policy</Text>
        <Text fw={200}>Terms & conditions</Text>
        <Text fw={200}>Privavy & Breach Protocol</Text>
      </Stack>
      <Stack gap={"10px"}>
        <Text fw={500}>Quick Link</Text>
        <Text fw={200}>Blogs</Text>
        <Text fw={200}>Product</Text>
        <Text fw={200}>Contact Us</Text>
        <Text fw={200}>Support</Text>
        <Text fw={200}>Pricing</Text>
      </Stack>
    </Group>
  );
}

export default Footer;
