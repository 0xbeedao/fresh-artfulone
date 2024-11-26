import Card from "@components/common/Card.tsx";
import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import LoadAwareImage from "@islands/LoadAwareImage.tsx";
import { JSX } from "preact";

export default function Benefit(): JSX.Element {
  return (
    <Section name="benefit" className="w-full pt-12 xl:pt-28">
      <Grid>
        <div class="col-span-full xl:col-span-4 mb-20 flex flex-col">
          <h2 class="text-white text-2xl xl:text-5xl font-bold text-center xl:text-left mb-0 xl:mb-6">
            Keuntungan Mentorship
          </h2>
          <div class="w-full h-[400px] relative -ml-8 hidden xl:block">
            <LoadAwareImage
              height={400}
              width={400}
              style='{objectFit: "cover"}'
              layout="fill"
              src="/image/mentorship/person-white.png"
              alt="Person White Mentorship"
            />
          </div>
        </div>
        <div class="col-span-full  flex flex-col gap-y-12  sm:flex-row sm:gap-4 xl:gap-0 xl:flex-col  xl:col-span-8 w-full justify-evenly">
          <Card
            whatIdo={false}
            image="👨‍🏫 "
            title="Mentorship 1 : 1"
            caption="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
          />
          <Card
            whatIdo={false}
            image="🎯 "
            title="Terarah "
            caption="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
          />
          <Card
            whatIdo={false}
            image="🔖"
            title="Silabus"
            caption="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
          />
        </div>
      </Grid>
    </Section>
  );
}
