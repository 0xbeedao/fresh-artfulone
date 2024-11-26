import BitcoinIcon from "@icons.church/ic/sharp-currency-bitcoin";
import RobotIcon from "@icons.church/mdi/robot";
import BracketIcon from "@icons.church/mdi/source-branch-sync";

import Card from "../common/Card.tsx";
import Section from "../common/Section.tsx";

export default function WhatIdo() {
  return (
    <Section name="biography" className="pt-7 xl:pt-24">
      <div className="w-full flex flex-col space-y-16 xl:flex-row xl:space-x-8">
        <div id="what" className="flex-1">
          <div>
            <h1 class="hidden xl:block text-white text-xl xl:text-3xl xl:font-semibold text-center xl:text-left">
              What I do
            </h1>
            <p class="text-sm xl:text-lg mt-3 text-gray-100 leading-6 font-inter tracking-wide">
              Leading engineering for high-stakes product launches at a Fortune
              100 retailer, supporting some of the internet's most intense
              traffic spikes. Full-stack architect specializing in Java, Python,
              and JavaScript. Balancing technology with creativity through art
              and building
            </p>
          </div>
        </div>

        <div
          id="cards"
          className="flex-1 flex flex-col items-start space-y-8 xl:space-y-0 xl:flex-row xl:space-x-8"
        >
          <Card
            whatIdo={true}
            image={<BitcoinIcon className="h-6 w-6 text-white" />}
            title="Crypto"
            caption="Early Bitcoin adopter since $200. Built diverse DeFi projects from playful NFT games to sophisticated yield farms"
          />
          <Card
            whatIdo={true}
            image={<BracketIcon className="h-6 w-6 text-white" />}
            title="Open Source"
            caption="Former Debian maintainer and Django core contributor, speaking at the inaugural DjangoCon. Committed to open-source development, including this site"
          />
          <Card
            whatIdo={true}
            image={<RobotIcon className="h-6 w-6 text-white" />}
            title="Generative AI"
            caption="Led enterprise-wide Generative AI adoption initiatives, consulting teams on secure, ethical, and efficient implementation strategies."
          />
        </div>
      </div>
    </Section>
  );
}
