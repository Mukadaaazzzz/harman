/* eslint-disable react/no-children-prop */
"use client";

import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/even.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 pt-24 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Tagline */}
            <div className="inline-flex mb-6 px-6 py-2 border border-white/30 rounded-full backdrop-blur-md">
              <Typography
                variant="small"
                className="text-white font-medium tracking-wide"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                AI-Powered Nutrition for Your Best Life
              </Typography>
            </div>

            {/* Main Title */}
            <Typography
              variant="h1"
              color="white"
              className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Transform Your Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                With Expert Coaching
              </span>
            </Typography>

            {/* Description */}
            <Typography
              variant="lead"
              color="white"
              className="mb-10 opacity-80 text-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Wellness | Fitness | Personalized Nutrition
            </Typography>

            {/* Call-to-Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                color="white"
                className="rounded-full px-8 py-3 shadow-lg hover:shadow-xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Book Your Free Consultation
              </Button>
              <Button
                size="lg"
                variant="text"
                color="white"
                className="flex items-center gap-3 hover:text-gray-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <PlayCircleIcon className="h-8 w-8" /> Watch Our Story
              </Button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  500+
                </Typography>
                <Typography
                  color="white"
                  className="opacity-80 text-sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Satisfied Clients
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  10+
                </Typography>
                <Typography
                  color="white"
                  className="opacity-80 text-sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Years of Experience
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  24/7
                </Typography>
                <Typography
                  color="white"
                  className="opacity-80 text-sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  AI Support Available
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
