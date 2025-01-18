"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CREDENTIALS = [
  {
    name: "Oxford University",
    logo: "oxf",
  },
  {
    name: "WHO",
    logo: "WHOo",
  },

  {
    name: "UNICEF",
    logo: "unicef",
  },
  {
    name: "NHS",
    logo: "NHS",
  },
];

export function FeaturedBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          FEATURED BY / COLLABORATED WITH
        </Typography>
        <Typography
          variant="small"
          className="mb-8 text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Proudly recognized and associated with leading organizations in public health and nutrition.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CREDENTIALS.map(({ name, logo }, key) => (
            <div key={key} className="text-center">
              <Image
                width={128}
                height={128}
                src={`/logos/logo-${logo}.svg`}
                alt={name}
                className="mx-auto w-28"
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="mt-2 font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBy;
