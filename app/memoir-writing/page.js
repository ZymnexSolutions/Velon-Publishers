"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function MemoirWriting() {
  return <ServicePage content={serviceContent["memoir-writing"]} />;
}

