"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";


export default function AboutPage() {
  return (
    <>
    <Navbar />
    <main className="container mx-auto px-6 py-12 lg:py-20">
      {/* Hero Section */}
      
      <section className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <Typography variant="h1" className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            About Harman
          </Typography>
          <Typography variant="lead" className="text-lg text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Welcome! I’m Harman, a Lifestyle Transformation Coach and Registered Public Health
            Nutritionist with over 15 years of experience helping adults achieve their health and
            wellness goals.
          </Typography>
          <Typography className="mt-4 text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            With a compassionate approach and a wealth of professional expertise, I specialize in
            supporting individuals on their weight loss journey, improving their diet, and promoting
            healthy aging through evidence-based practices.
          </Typography>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/harman.jpeg"
            alt="Harman"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mt-16">
        <Typography variant="h2" className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 text-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Professional Achievements
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Published Articles
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Authored several articles and practical guides on nutrition, weight management, and
              healthy living strategies.
            </Typography>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              YouTube Webinars
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Hosted engaging webinars and sessions, sharing insights and tips with a global
              audience.
            </Typography>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Workshops & Events
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Delivered interactive workshops on disease prevention, mindfulness, and sustainable
              weight loss.
            </Typography>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              NHS Collaboration
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Partnered with the NHS to design and deliver weight management programs for patients
              and train healthcare staff.
            </Typography>
          </div>
        </div>
      </section>

      {/* Coaching Approach Section */}
      <section className="mt-16 bg-gray-50 py-12 px-6 rounded-lg shadow-lg">
        <Typography variant="h2" className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 text-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Coaching Approach
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Personalized Nutrition
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Tailored meal planning that aligns with your lifestyle and health goals.
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Mindfulness & Meditation
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Techniques to overcome emotional eating and foster self-awareness for lasting results.
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Health Education
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Empowering you with knowledge to make informed decisions about your diet and overall
              health.
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-xl font-semibold mb-2 text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Supportive Accountability
            </Typography>
            <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Regular check-ins and progress tracking to help you stay on course.
            </Typography>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Typography variant="h2" className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Ready to Transform Your Life?
        </Typography>
        <Typography variant="lead" className="mb-6 text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Take the first step toward a healthier you. Contact me today to begin your journey to a
          sustainable and fulfilling lifestyle.
        </Typography>
        <a
          href="#contact"
          className="inline-block bg-orange-600 text-white py-3 px-8 rounded-lg text-lg font-medium shadow hover:bg-orange-700 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
    <Footer />
    </>
  );
}
