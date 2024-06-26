import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_uicomponents/Navbar";
import MainPageHeroIamge from "./_uicomponents/MainPageHeroIamge";
import SearchComponenet from "./_uicomponents/SearchComponenet";
import CardMain from "./_uicomponents/CardMain";
import { Group } from "@mantine/core";
import ContactUsSection from "./_uicomponents/ContactUsSection";
import Footer from "./_uicomponents/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main
      style={{ marginLeft: "89px", marginRight: "89px", marginTop: "20px" }}
    >
      <MainPageHeroIamge />
      <Group justify="center" align="center">
        <video height="722" controls preload="none"></video>
      </Group>
      <SearchComponenet />
      <Group gap="30px" justify="center" align="center">
        <CardMain/>
        <CardMain/>
        <CardMain/>
        <CardMain/>
        <CardMain/>
        <CardMain/>
        <CardMain/>
        <CardMain/>
      </Group>

      <ContactUsSection/>

    </main>
    <Footer/>
    </>
  );
}
