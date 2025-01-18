"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What services do you offer as a health and nutrition coach?",
    desc: "I provide personalized nutrition plans, health coaching sessions, and workshops focused on public health nutrition, fitness goals, and overall well-being. My approach is tailored to help you achieve sustainable health improvements.",
  },
  {
    title: "2. How do I book a consultation or coaching session?",
    desc: "Booking a session is easy! Simply visit the 'Contact Me' section on my website, choose a suitable time slot, and provide some basic details about your health goals. I’ll get in touch to confirm the session and discuss next steps.",
  },
  {
    title: "3. Can you help with specific dietary concerns like gut health or weight management?",
    desc: "Absolutely! Whether you're looking to improve gut health, manage your weight, or address specific health challenges, I create science-backed, personalized strategies to support your unique needs and goals.",
  },
  {
    title: "4. Are your sessions available online or in-person?",
    desc: "I offer both online and in-person coaching sessions, depending on your location and preferences. Virtual sessions are conducted via video conferencing to make it convenient for clients anywhere.",
  },
  {
    title: "5. Do you offer group workshops or webinars?",
    desc: "Yes, I host interactive group workshops and webinars on topics like nutrition for fitness, gut-brain health, and navigating midlife dietary changes. Keep an eye on my event schedule to join upcoming sessions.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-12 lg:w-3/5 !text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Here are some common questions about my health and nutrition coaching services. Feel free to reach out if you need more information!
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <AccordionHeader className="text-left text-gray-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
