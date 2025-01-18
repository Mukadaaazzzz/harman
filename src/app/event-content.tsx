"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = [
  {
    title: "The Gut-Brain Connection",
    des: "How Food Affects Your Mood.",
    name: "Harman",
    position: "Public Health Nutritionist",
    panel: "Workshop",
    img: "/image/gut.jpg", // Replace with actual image path
  },
  {
    title: "Fuel Your Fitness Goals!",
    des: "Maximize your workouts with the right nutrition.",
    name: "Harman",
    position: "Health and Fitness Coach",
    panel: "Workshop",
    img: "/image/fit.jpg", // Replace with actual image path
  },
  {
    title: "Navigating Midlife Nutrition",
    des: "Coaching for Hormonal and Metabolic Changes.",
    name: "Harman",
    position: "Public Health Nutritionist",
    panel: "Workshop",
    img: "/image/mid.jpg", // Replace with actual image path
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Tab value="Day1" className="font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Day 2
            </Tab>
            <Tab value="Day3" className="font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Day 3
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
