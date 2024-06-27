"use client";
import { Button, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import nextSvg from "../public/unsplash_YQYacLW8o2U.png";
function MainPageHeroIamge() {
  return (
    <Group justify="space-between" h={788} my={"88px"} lh={"700px"}>
      <Stack h={473} w={570} pl={0} justify="flex-end" align="flex-start">
        <Text size={"64px"} c="#373737">
          All available
          <br />
          <span style={{ color: "#247BA0" }}>
            bioinformatic
            <br />
          </span>
          tools and services.
        </Text>
        <Text c="#545454" w={"440px"} h={"110px"} fw={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button h={60} w={194}>
          <Text>Start Today</Text>
        </Button>
      </Stack>
      <Image src={nextSvg} alt="All available" height={525} width={658} />
    </Group>
  );
}

export default MainPageHeroIamge;
