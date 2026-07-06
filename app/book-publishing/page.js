"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BookPublishing() {
  return <ServicePage content={serviceContent["book-publishing"]} />;
}

