"use client";
import { useState } from "react";
import {
  Stack,
  Title,
  Text,
  Button,
  Paper,
  Textarea,
  Select,
  Input,
} from "@mantine/core";
import axios from "axios";

export interface ConfigFormProps {
  Thresholdoptions: string[];
  Thresholdtitle: string;
  Tdescription: string;
  Moptions: string[];
  Modeltitle: string;
  Mdescription: string;
}

const ConfigForm = ({
  Thresholdoptions,
  Thresholdtitle,
  Tdescription,
  Moptions,
  Modeltitle,
  Mdescription,
}: ConfigFormProps) => {
  const [Mvalue, setMValue] = useState<string>("");
  const [Tvalue, setTValue] = useState<string>("");
  const [value, setValue] = useState<string | null>("");
  
  const clearSelection = () => {
    setTValue("");
    setMValue("");
    setValue("");
  };

  
  const handleSubmit = async () => {
    const data = {
      fasta_content: Mvalue,
      threshold: parseFloat(Tvalue),
      model: value,
      display: 2,
    };

    try {
      const response = await axios.post("http://0.0.0.0:8000/predict", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <Stack gap={"xl"}>
        <Title
          fz={{ base: "25px", sm: "35px" }}
          px={"12px"}
          py={"6px"}
          ml={{ base: "xs", sm: "lg" }}
          bg={"#222222"}
          maw={"460px"}
          style={{ borderRadius: "20px" }}
        >
          Configurations & Options
        </Title>

        <Text ml={"lg"} maw={"500px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Paper p="md" shadow="xs" mt={"xl"} bg={"#222222"}>
          <Textarea
            label="Models Input"
            value={Mvalue}
            onChange={(event) => setMValue(event.currentTarget.value)}
            description="Target Sequence"
            placeholder=">ADHJHHS lorem ipsum dolor sit amet"
          />
          <Button variant="light" color="blue" mt="md" onClick={clearSelection}>
            Clear selection
          </Button>
        </Paper>
        <Paper p="md" shadow="xs" mt="xl" bg="#222222">
          <Title order={4}>{Thresholdtitle}</Title>

          <Input
            placeholder="Enter Threshold Value"
            value={Tvalue || ""}
            onChange={(e) => setTValue(e.target.value)}
            mt="md"
            styles={{ input: { backgroundColor: "#333333", color: "#ffffff" } }}
          />

          <Text mt="md" maw="900px">
            {Tdescription}
          </Text>
          <Button variant="light" color="blue" mt="md" onClick={clearSelection}>
            Clear selection
          </Button>
        </Paper>
        <Paper p="md" shadow="xs" mt="xl" bg="#222222">
          <Title order={4}>{Modeltitle}</Title>

          <Select
            c="#222222"
            placeholder="Select"
            value={value}
            onChange={setValue}
            data={Moptions}
            mt="md"
            styles={() => ({
              dropdown: {
                backgroundColor: "#333333",
              },
            })}
          />
          <Text mt="md" maw="900px">
            {Mdescription}
          </Text>
          <Button variant="light" color="blue" mt="md" onClick={clearSelection}>
            Clear selection
          </Button>
        </Paper>

        <Button
          variant="light"
          color="blue"
          mt="xl"
          onClick={handleSubmit}
          style={{ borderRadius: "10px", maxWidth: "160px"}}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default ConfigForm;
