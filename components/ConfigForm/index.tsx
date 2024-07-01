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
  Group,
} from "@mantine/core";
import Image from "next/image";
import submitimg from "@/public/unsplash_YQYacLW8o2U.png";
import axios from "axios";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const handleSubmit = async () => {
    const data = {
      fasta_content: Mvalue,
      threshold: parseFloat(Tvalue),
      model: value === "Hybrid" ? 1 : 2,
      display: 2,
    };

    try {
      console.log("Data:", data);
      const response = await axios.post("http://0.0.0.0:8000/predict", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      router.push(`/response?responseData=${encodeURIComponent(JSON.stringify(response.data))}`);
    } catch (error: any) {
      console.error(
        "Error submitting data:",
        error.response ? error.response.data : error.message
      );
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
          bg={"#101010"}
          maw={"460px"}
          style={{ borderRadius: "20px" }}
        >
          Configurations & Options
        </Title>

        <Text ml={"lg"} maw={"500px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Paper p="md" shadow="xs" mt={"xl"} bg={"#101010"}>
          <Textarea
            label="Models Input"
            value={Mvalue}
            onChange={(event) => setMValue(event.currentTarget.value)}
            description="Target Sequence"
            placeholder=">ADHJHHS lorem ipsum dolor sit amet"
            styles={{
              label: { fontSize: '18px' },
              description: { fontSize: '14px' },
              input: { fontSize: '16px', backgroundColor: "#222222", color: "#ffffff", height: "200px"}
            }}
          />
          <Button variant="light" color="blue" mt="md" onClick={clearSelection}>
            Clear selection
          </Button>
        </Paper>
        <Paper p="md" shadow="xs" mt="xl" bg="#101010">
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
        <Paper p="md" shadow="xs" mt="xl" bg="#101010">
          <Title order={4}>{Modeltitle}</Title>

          <Select
            c="#101010"
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

       <Group mt="xl" justify="space-around" align="center" p={"lg"} gap={"xl"} maw={"860px"}>
        <Image src={submitimg} alt="submit" width={200} height={200} />
        <Stack>
          <Title
            fz={{ base: "25px", sm: "35px" }}
            style={{ borderRadius: "20px", }}
          >
            Ready to Submit?
          </Title>

          <Text maw={"500px"}>
            Once you set the configurations, Just click the submit button to get the results.
          </Text>
          <Button
            variant="light"
            color="blue"
            mt="xl"
            onClick={handleSubmit}
            style={{ borderRadius: "10px", maxWidth: "160px" }}
          >
            Submit
          </Button>
        </Stack>
      </Group>
      </Stack>
    </>
  );
};

export default ConfigForm;
