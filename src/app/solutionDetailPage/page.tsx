"use client";
import React from "react";
import soltionImg from "../../../public/solutiondetailsimg.svg";
import Navbar from "../../../components/Navbar";
import ContactUsSection from "../../../components/ContactUsSection";
import Footer from "../../../components/Footer";
import { useState } from "react";
import {
  Button,
  Container,
  Group,
  Select,
  Text,
  Title,
  Tabs,
  Paper,
  TextInput,
  Stack,
  Pill,
} from "@mantine/core";
import Image from "next/image";
import { Gruppo } from "next/font/google";
import { Pi } from "@phosphor-icons/react";
import ConfigCard from "../../../components/ConfigCard";

const SolutionDetailsPage = () => {
  const [msaConcat, setMsaConcat] = useState<string | null>(null);
  const [msaMethod, setMsaMethod] = useState<string | null>(null);
  const [pairMode, setPairMode] = useState<string | null>(null);

  const MSASettingsContent = () => (
    <>
      <ConfigCard />
      <ConfigCard />
      <ConfigCard />
      <ConfigCard />
    </>
  );

  const SymmetrySettingsContent = () => (
    <>
      <ConfigCard />
      <ConfigCard />
    </>
  );

  const StochasticSettingsContent = () => (
    <>
      <ConfigCard />
      <ConfigCard />
    </>
  );
  const ModelsInputContent = () => (
    <>
      <ConfigCard />
      <ConfigCard />
    </>
  );

  return (
    <>
      <Navbar />

      <Container fluid p={{base: "10px", sm: "60px"}}>
        <Group justify="space-around">
          <Stack>
            <Title fz={{base: "30px", sm: "60px"}} mt="xl">
              Use{" "}
              <Text
                fz={{base: "30px", sm: "60px"}}
                fw={700}
                component="span"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                RoseTTA{" "}
              </Text>
              <Text fz={{base: "30px", sm: "60px"}} fw={700} component="span" c={"white"}>
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
            <Text mt="sm" maw={"500px"} fz={{base: "sm", sm: "md"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Group mt="lg">
              <Button variant="light">View Paper</Button>
            </Group>
          </Stack>
          <Image src={soltionImg} alt="Alpha Fold 2" width={400} height={400} />
        </Group>

        <Stack gap={"xl"}>
          <Title fz={{base: "25px", sm: "35px"}} px={"12px"} py={"6px"} ml={{base: "xs", sm:"lg"}} bg={"#222222"} maw={"460px"} style={{borderRadius: "20px"}}>
            Configurations & Options
          </Title>

          <Text ml={"lg"} maw={"500px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Tabs defaultValue="MSA">
            <Tabs.List
              justify="center"
              style={{ base: { gap: "40px" }, sm: { gap: "10px" } }}
            >
              <Tabs.Tab value="MSA">MSA Settings</Tabs.Tab>
              <Tabs.Tab value="Symmetry">Symmetry Settings</Tabs.Tab>
              <Tabs.Tab value="ModelsInput">Models Input</Tabs.Tab>
              <Tabs.Tab value="Stochastic">Stochastic Settings</Tabs.Tab>
              <Tabs.Tab value="More">More</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="MSA">
              <MSASettingsContent />
            </Tabs.Panel>

            <Tabs.Panel value="Symmetry">
              <SymmetrySettingsContent />
            </Tabs.Panel>

            <Tabs.Panel value="ModelsInput">
              <ModelsInputContent />
            </Tabs.Panel>

            <Tabs.Panel value="Stochastic">
              <StochasticSettingsContent />
            </Tabs.Panel>

            <Tabs.Panel value="More">
              <StochasticSettingsContent />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default SolutionDetailsPage;
