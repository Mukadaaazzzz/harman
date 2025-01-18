/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";


import {
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const PROGRAM_FEATURES = [
  {
    title: "Personalized Coaching",
    description: "Six one-on-one sessions tailored to your unique needs and goals",
    icon: SparklesIcon,
  },
  {
    title: "Hands-On Learning",
    description: "Interactive cooking sessions and nutrient-rich meal preparation techniques",
    icon: HeartIcon,
  },
  {
    title: "Smart Shopping Guide",
    description: "Navigate grocery stores confidently and shop healthy on a budget",
    icon: ShoppingCartIcon,
  },
  {
    title: "Progress Tracking",
    description: "Regular check-ins and milestone tracking for accountability",
    icon: ChartBarIcon,
  },
];

function ServicesPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Chip
              value="Limited Time Offer"
              className="mb-6 bg-red-100 text-red-700"
            />
            <Typography variant="h1" className="mb-4 text-4xl md:text-5xl font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Transform Your Life with Expert
              <span className="text-blue-600"> Weight Loss Coaching</span>
            </Typography>
            <Typography className="mb-8 text-lg text-gray-700"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Don't miss out on this exclusive offer! Until January 7th, get our comprehensive program for just £600 (regular price £2,000).
            </Typography>
            <Button size="lg" className="bg-blue-600 rounded-full px-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Start Your Transformation Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program Overview */}
          <div className="lg:col-span-2">
            <Typography variant="h3" className="mb-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              What You'll Achieve
            </Typography>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {PROGRAM_FEATURES.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                    <div>
                      <Typography variant="h5" className="mb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {feature.title}
                      </Typography>
                      <Typography color="gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {feature.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Timeline */}
            <Timeline>
              {[
                "Custom meal plans tailored to your preferences",
                "Mindful eating workshop and practical techniques",
                "Proven weight loss strategies and plateau-breaking tips",
                "Regular progress tracking and accountability",
                "Healthy cooking techniques and recipes",
              ].map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="bg-blue-500">
                      <CheckCircleIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{item}</Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8" />
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          {/* Pricing Card */}
          <Card className="p-8 sticky top-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader
                          color="blue"
                          className="mb-4 grid h-28 place-items-center -mt-10 mx-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <Typography variant="h3" color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                £600
              </Typography>
            </CardHeader>
            <CardBody  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography variant="small" className="font-semibold text-blue-gray-600 mb-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Limited Time Offer - Regular Price £2,000
              </Typography>
              
              <div className="space-y-4">
                {[
                  "6 Personalized Coaching Sessions",
                  "Custom Meal Plans",
                  "Shopping Guide",
                  "Mindful Eating Workshop",
                  "Recipe Collection",
                  "Progress Tracking Tools",
                  "Ongoing Support",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{benefit}</Typography>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <Button size="lg" className="w-full bg-blue-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Secure Your Spot Now
                </Button>
                <Typography variant="small" color="gray" className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Plus optional £10/month for ongoing resources
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ServicesPage;