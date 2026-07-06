"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BookProofreading() {
  return <ServicePage content={serviceContent["book-proofreading"]} />;
}

