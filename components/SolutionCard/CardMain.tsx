"use client";

import { Stack, Text, Button, Group, Pill } from "@mantine/core";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dnaImage from "../../public/unsplash_YQYacLW8o2U.png";

function CardMain() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/solutionDetailPage");
  };

  return (
    <Stack maw={400} style={{ borderRadius: "20px" }}>
      <Image
        src={dnaImage}
        alt="image"
        width={400}
        style={{ borderRadius: "20px 20px 0px 0px" }}
      />
      <Text size={"36px"} py={8} px={6} fw={500}>
        ALpha Fold 2
      </Text>
      <Group maw={"300px"}>
        <Pill bg={"blue"} c={"white"}>
          Drug Design
        </Pill>
        <Pill bg={"blue"} c={"white"}>
          Molecular Docking
        </Pill>
      </Group>
      <Text size={"16px"} px={6} mah={80} maw={400} c="#61646B">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Button
        pl={6}
        maw={100}
        color="#247BA0"
        radius={"lg"}
        onClick={() => handleClick()}
      >
        Blast
      </Button>
    </Stack>
  );
}

export default CardMain;
