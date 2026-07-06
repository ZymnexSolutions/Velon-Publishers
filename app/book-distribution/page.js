"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BookDistribution() {
  return <ServicePage content={serviceContent["book-distribution"]} />;
}

