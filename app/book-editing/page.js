"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function BookEditing() {
  return <ServicePage content={serviceContent["book-editing"]} />;
}

