"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BiographyWriting() {
  return <ServicePage content={serviceContent["biography-writing"]} />;
}

