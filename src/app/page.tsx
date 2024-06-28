import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import MainPageHeroIamge from "../../components/MainPageHeroIamge";
import SearchComponent from "../../components/SearchComponent";
import CardMain from "../../components/SolutionCard/CardMain";
import { Group } from "@mantine/core";
import ContactUsSection from "../../components/ContactUsSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        style={{ marginLeft: "89px", marginRight: "89px", marginTop: "20px" }}
      >
        <MainPageHeroIamge />
        <Group justify="center" align="center">
          <video height="722" controls preload="none"></video>
        </Group>
        <SearchComponent />
        <Group gap="30px" justify="center" align="center">
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
          <CardMain />
        </Group>

        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
