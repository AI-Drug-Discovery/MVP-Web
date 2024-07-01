"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResponseComponent from "@/components/ResponseComponent";
import { Loader } from "@mantine/core";
import { Suspense } from "react";

const ResponsePage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <ResponseComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default ResponsePage;
