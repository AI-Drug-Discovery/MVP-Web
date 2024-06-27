"use client";
import { Stack, Text } from "@mantine/core";

import Image from "next/image";

import dnaImage from "../public/unsplash_YQYacLW8o2U.png";

function CardMain() {
  return (
    <Stack h={567} w={628} style={{ borderRadius: "20px" }}>
      <Image
        src={dnaImage}
        alt="image"
        width={628}
        height={350}
        style={{ borderRadius: "20px 20px 0px 0px" }}
      />
      <Text size={"36px"} py={10} fw={500}>
        ALpha Fold 2
      </Text>
      <Text size={"16px"} h={80} w={434} c="#61646B">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Stack>
  );
}

export default CardMain;
