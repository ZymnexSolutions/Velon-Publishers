"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BookMarketing() {
  return <ServicePage content={serviceContent["book-marketing"]} />;
}

