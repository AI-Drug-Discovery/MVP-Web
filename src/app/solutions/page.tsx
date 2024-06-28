import Navbar from "@/components/Navbar";
import CardMain from "@/components/SolutionCard/CardMain";
import { Flex, Title } from "@mantine/core";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

export default function Solutions() {
  return (
    <>
      <Navbar />

      <Title py={30} pl={84} order={1}>Select Function</Title>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={"60px"}
        justify={"center"}
        align={"center"}
        wrap={"wrap"}
        p={"lg"}
        mt={"lg"}
      >
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
      </Flex>
      <ContactUsSection />
      <Footer />
    </>
  );
}
