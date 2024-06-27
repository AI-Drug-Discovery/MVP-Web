"use client";
import { Button, Group, Input, Pill, Stack, Text } from "@mantine/core";
const pillarray = [
  "Drug Design",
  "Molecular Analysis",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Molecular Analysis",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Molecular Analysis",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Drug Design",
  "Molecular Analysis",
  "Drug Design",
  "Drug Design",
  "Drug Design",
];

function SearchComponenet() {
  return (
    <Stack justify="center" align="center" gap={40} my={30}>
      <Stack justify="center" align="center">
        <Text size={"36px"}>
          We are meant for <span style={{ color: "#247BA0" }}>everything</span>
        </Text>
        <Text
          size={"20px"}
          w={"768px"}
          style={{ textAlign: "center", lineHeight: 1.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Stack>
      <Input
        height={69}
        w={1017}
        size="md"
        radius="xl"
        placeholder="Input component"
        style={{ maxWidth: "1017px" }}
      />
      <Group gap={"20px"} style={{ lineHeight: 3 }}>
        {pillarray.map((item) => {
          return (
            <Button
              key={item}
              w={137}
              h={47}
              radius="50px"
              style={{ backgroundColor: "#247BA0", color: "#D8F1FC" }}
            >
              {item}
            </Button>
          );
        })}
      </Group>
    </Stack>
  );
}

export default SearchComponenet;
