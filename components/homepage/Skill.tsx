import Card from "@components/common/Card.tsx";
import Grid from "@components/common/Grid.tsx";
import Section from "@components/common/Section.tsx";
import RobotIcon from "@icons.church/mdi/robot";
import { JSX } from "preact";

export default function Skill(): JSX.Element {
  return (
    <Section name="skill" className="mt-20 block">
      <Grid className="w-full gap-y-12">
        <div class="col-span-full sm:col-span-2 flex justify-center px-8">
          <Card
            whatIdo={true}
            image={
              <RobotIcon className="h-7 w-7 dark:text-gray-100 text-gray-900" />
            }
            title="Web Development"
            caption="You will receive a customized plan for your fitness journey, and lots of support."
          />
        </div>
        <div class="col-span-full sm:col-span-2 flex justify-center px-8">
          <Card
            whatIdo={true}
            image={
              <RobotIcon className="h-7 w-7 dark:text-gray-100 text-gray-900" />
            }
            title="UX Research"
            caption="You will receive a customized plan for your fitness journey, and lots of support."
          />
        </div>
        <div class="col-span-full sm:col-span-2 flex justify-center px-8">
          <Card
            whatIdo={true}
            image={
              <RobotIcon className="h-7 w-7 dark:text-gray-100 text-gray-900" />
            }
            title="Mentoring"
            caption="You will receive a customized plan for your fitness journey, and lots of support."
          />
        </div>
        <div class="col-span-full sm:col-span-2 flex justify-center px-8">
          <Card
            whatIdo={true}
            image={
              <RobotIcon className="h-7 w-7 dark:text-gray-100 text-gray-900" />
            }
            title="Speaker"
            caption="You will receive a customized plan for your fitness journey, and lots of support."
          />
        </div>
      </Grid>
    </Section>
  );
}
