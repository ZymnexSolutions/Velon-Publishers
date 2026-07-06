"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function GlobalDistribution() {
  return <ServicePage content={serviceContent["global-distribution"]} />;
}

