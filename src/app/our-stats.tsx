/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const STATS = [
  {
    count: "10+",
    title: "Years of Experience",
    description: "Dedicated to transforming lives through nutrition",
    color: "bg-blue-50",
  },
  {
    count: "500+",
    title: "Clients Helped",
    description: "Success stories and counting",
    color: "bg-purple-50",
  },
  {
    count: "50+",
    title: "Workshops Hosted",
    description: "Sharing knowledge globally",
    color: "bg-orange-50",
  },
  {
    count: "100%",
    title: "Positive Feedback",
    description: "Client satisfaction guaranteed",
    color: "bg-green-50",
  },
];

const EXPERTISE = [
  "Public Health Nutrition Expert",
  "Certified Health & Fitness Coach",
  "NHS Collaboration Experience",
  "AI-Enhanced Coaching Methods",
];

export function OurStats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            <div className="max-w-xl">
              <Typography
                variant="small"
                className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-blue-600 font-medium uppercase tracking-wider"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Why Choose Harman?
              </Typography>

              <Typography
                variant="h2"
                className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Your Journey to Wellness
                <span className="block text-blue-600">Starts Here</span>
              </Typography>

              <Typography className="mb-8 text-lg text-gray-700"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Combining a decade of expertise in public health nutrition with cutting-edge AI technology, 
                I deliver personalized coaching that transforms lives. My approach isn't just about diet—it's 
                about creating sustainable lifestyle changes that last.
              </Typography>

              {/* Expertise List */}
              <div className="mb-12">
                {EXPERTISE.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center mb-4"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3" />
                    <Typography className="text-gray-700"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{item}</Typography>
                  </motion.div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${stat.color} rounded-2xl p-6 transition-transform hover:scale-105`}
                  >
                    <Typography
                      variant="h3"
                      className="text-4xl font-bold text-gray-900 mb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {stat.count}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-1"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {stat.title}
                    </Typography>
                    <Typography className="text-sm text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {stat.description}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:pl-16">
            {/* Background Decorations */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl" />
            
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/harman.jpeg"
                  alt="Harman - Health and Nutrition Coach"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              >
                <Typography variant="h6" color="blue" className="mb-1"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  NHS Certified
                </Typography>
                <Typography className="text-sm text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Trusted healthcare professional with proven expertise
                </Typography>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStats;