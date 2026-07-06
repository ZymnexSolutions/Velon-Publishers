"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function FictionWriting() {
  return <ServicePage content={serviceContent["fiction-writing"]} />;
}

