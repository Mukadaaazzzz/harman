/* eslint-disable react/no-unescaped-entities */
"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Expert Guidance!",
    description:
      "Learn from Harman's years of experience as a public health nutritionist and fitness coach to achieve your health goals effectively.",
    subTitle: "Presentations",
  },
  {
    title: "Actionable Insights!",
    description:
      "Participate in hands-on workshops tailored to help you implement sustainable lifestyle changes.",
    subTitle: "Workshops",
  },
];

export function AboutHarman() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        About Harman's Coaching
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Why Choose Harman?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        Harman combines her expertise in public health nutrition and fitness
        coaching with cutting-edge strategies to help you unlock your full
        potential. Whether you’re looking to improve your nutrition, fitness, or
        overall wellness, her programs are designed to inspire, educate, and
        transform your life.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Community Support!"
            subTitle="Community"
            description="Join a supportive network of like-minded individuals on the same journey toward health and wellness."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHarman;
