"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function ScriptWriting() {
  return <ServicePage content={serviceContent["script-writing"]} />;
}

