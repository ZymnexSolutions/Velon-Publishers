"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function NonFictionWriting() {
  return <ServicePage content={serviceContent["non-fiction-writing"]} />;
}

