import { ComingSection } from "@/components/(public)/coming-soon/coming-section";
import Publicite from "@/components/(public)/publicites";
import React from "react";

const Page = () => {
  return (
    <div>
        <ComingSection />
      <Publicite position="EFFATA_BOTTOM" />
    </div>
  );
};

export default Page;
