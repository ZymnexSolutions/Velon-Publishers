"use client";

import ServicePage from "../components/ServicePage";
import { serviceContent } from "../data/serviceContent";

export default function ComicBookWriting() {
  return <ServicePage content={serviceContent["comic-book-writing"]} />;
}

