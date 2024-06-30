import React from "react";
import soltionImg from "@/public/solutiondetailsimg.svg";
import Navbar from "@/components/Navbar";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import {
  Button,
  Container,
  Group,
  Text,
  Title,
  Stack,
  Pill,
} from "@mantine/core";
import Image from "next/image";
import ConfigForm from "@/components/ConfigForm";

const SolutionDetailsPage = () => {
  return (
    <>
      <Navbar />

      <Container fluid p={{ base: "10px", sm: "60px" }}>
        <Group justify="space-around">
          <Stack>
            <Title fz={{ base: "30px", sm: "60px" }} mt="xl">
              Use{" "}
              <Text
                fz={{ base: "30px", sm: "60px" }}
                fw={700}
                component="span"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                RoseTTA{" "}
              </Text>
              <Text
                fz={{ base: "30px", sm: "60px" }}
                fw={700}
                component="span"
                c={"white"}
              >
                Fold 2.
              </Text>
            </Title>
            <Group maw={"500px"}>
              <Pill bg={"blue"} c={"white"}>
                Protein Folding
              </Pill>
              <Pill bg={"blue"} c={"white"}>
                Molecular Docking
              </Pill>
            </Group>
            <Text mt="sm" maw={"500px"} fz={{ base: "sm", sm: "md" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Group mt="lg">
              <Button variant="light">View Paper</Button>
            </Group>
          </Stack>
          <Image src={soltionImg} alt="Alpha Fold 2" width={400} height={400} />
        </Group>

        <ConfigForm
          Thresholdoptions={[]}
          Thresholdtitle="Toxicity Threshold"
          Tdescription="The toxicity threshold a protein must pass to be marked a toxin. The range is from 0 to 1 and the default is 0.38"
          Moptions={["Hybrid", "Extra Tree"]}
          Modeltitle="Model"
          Mdescription="Toxicity can be predicted using two methods: Extra Tree or a Hybrid method combining a motif-based approach with a deep learning technique."
        />    
      </Container>
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default SolutionDetailsPage;
