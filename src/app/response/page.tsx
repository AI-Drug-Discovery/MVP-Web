// pages/response.js
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Table, Title, Stack, Text, Loader } from "@mantine/core";

const ResponsePage = () => {
  const searchParams = useSearchParams();
  const responseData = searchParams.get("responseData");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (responseData) {
      setData(JSON.parse(responseData));
    }
  }, [responseData]);

  const rows = data.map((item: any) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.sequence}</Table.Td>
      <Table.Td>{item.ml_score}</Table.Td>
      <Table.Td>{item.prediction}</Table.Td>
      <Table.Td>{item.ppv}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Navbar />
      <Stack gap={"lg"} mt={"lg"} p={"xl"}>
        <Title order={1}>Data & Visualizations
        </Title>
        <Text>
        Various data visualizations for this jobs output data.
        </Text>
     
      {data ? (
        <Table verticalSpacing={"md"} styles={{thead: {backgroundColor: "#62c1e5"}}} striped stripedColor="#101010" highlightOnHover highlightOnHoverColor="#333333">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Sequence</Table.Th>
            <Table.Th>ML Score</Table.Th>
            <Table.Th>Prediction</Table.Th>
            <Table.Th>PPV</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
        
      ) : (
        <Loader color="blue" />
      )}
       </Stack>
      <Footer />
    </>
  );
};

export default ResponsePage;
