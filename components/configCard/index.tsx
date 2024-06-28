import { useState } from "react";
import {
  Select,
  Button,
  Text,
  Group,
  Paper,
  Title,
  Badge,
} from "@mantine/core";

const ConfigCard = () => {
  const [value, setValue] = useState<string | null>(null);

  const clearSelection = () => {
    setValue(null);
  };

  return (
    <>
      <Paper p="md" shadow="xs" mt={"xl"} bg={"#222222"}>
        <Group justify="space-between" align="center">
          <Title order={4}>MSA Concatenation</Title>
          <Badge color="blue" size="lg">
            MSA Settings
          </Badge>
        </Group>
        <Select
        c={"#222222"}
          placeholder="Select"
          value={value}
          onChange={setValue}
          data={["Option 1", "Option 2", "Option 3"]}
          mt="md"
        />
        <Text mt="md" maw={"900px"}>
          Select the method MSAs are concatenated. Diagonal concatenation
          preserves relative geometry and domain alignment of multi-domain
          proteins. Repeat concatenation forms an extended MSA, use with
          caution. Diag mode was found to give the best results so it is what we
          recommend.
        </Text>
        <Button variant="light" color="blue" mt="md" onClick={clearSelection}>
          Clear selection
        </Button>
      </Paper>
    </>
  );
};

export default ConfigCard;
