import Container from "@components/common/Container.tsx";
import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import SocialIcon from "@components/icons/SocialIcon.tsx";
import UnstyledLink from "@components/links/UnstyledLink.tsx";
import { socials } from "@config/SiteConfig.ts";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import type { JSX } from "preact";

const HERO_IMG = "/image/homepage/bruce_eye_cam.png";

function SocialLinks() {
  return (
    <div class="flex  space-x-4 mt-0 xl:mt-3">
      {socials.map((social) => (
        <UnstyledLink
          key={social.text}
          href={social.href}
          openNewTab
        >
          <SocialIcon
            icon={social.icon}
            className="dark:text-gray-200 text-gray-900 h-6 w-6"
          />
        </UnstyledLink>
      ))}
    </div>
  );
}

export default function Hero(): JSX.Element {
  return (
    <Section
      name="hero"
      className="w-full px-[70px] max-w-md mx-auto xl:max-w-screen-xl xl:pt-[10px]"
    >
      <Container>
        <Grid>
          <div class="col-span-2 col-start-2 xl:col-start-1 xl:col-span-full flex flex-col xl:flex-row justify-center xl:justify-start items-center xl:pt-[70px]">
            <div class="w-[259px] h-[287px] xl:w-294[px] xl:h-[322px] p-[6px] xl:mr-9">
              <div class="h-full w-full flex justify-center items-center">
                <div class="relative h-[263px] w-[200px]">
                  <LoadAwareImage
                    src={HERO_IMG}
                    width={200}
                    height={263}
                    objectFit="fill"
                    layout="fill"
                    alt="Bruce Kroeze"
                  />
                </div>
              </div>
            </div>
            <div class="flex w-10/12 xl:space-x-[80px]">
              <div class="hidden xl:flex flex-col w-7/12">
                <h4 class="dark:text-gray-100 text-gray-900  text-3xl font-semibold
                 text-left">
                  Biography
                </h4>
                <div class="">
                  <p class="t-sm xl:text-lg mt-3 dark:text-gray-200 text-gray-900  leading-6 font-inter tracking-wide">
                    I've been a developer and artist my whole life. This site
                    has some of my work and interests.
                    <br />
                    Right now (hopefully), this site contains these passions:
                    {" "}
                    <span class="dark:text-orange-300 text-orange-700">
                      Generative AI
                    </span>{" "}
                    and <span class="text-sky-500">Rapid web development</span>,
                    {" "}
                    Creating{" "}
                    <span class="dark:text-leaf-500 text-green-700">
                      Digital Art
                    </span>{" "}
                    along with{"  "}
                    <span class="text-violet-500">Physical Art</span>.
                  </p>
                </div>
              </div>
              <div class="flex flex-row xl:flex-col  mt-6 xl:mt-0 ">
                <h4 class="hidden xl:block dark:text-gray-100 text-gray-900  text-3xl font-semibold text-left">
                  Lets connect
                </h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div class="col-span-full xl:row-start-1">
            <div class="flex w-full mt-10">
              <h1 class="text-2xl xl:text-6xl xl:leading-snug xl:text-left leading-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-leaf-500 to-ocean-500 tracking-wide text-center">
                Hi I'm Bruce, welcome to my personal site.{" "}
              </h1>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
