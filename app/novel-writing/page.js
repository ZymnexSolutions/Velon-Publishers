"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function NovelWriting() {
  return <ServicePage content={serviceContent["novel-writing"]} />;
}

