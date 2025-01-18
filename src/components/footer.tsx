/* eslint-disable react/no-unescaped-entities */
import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Join now and get 30% OFF!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              buy ticket
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            variant="h6"
            className="text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Harman's Wellness
          </Typography>
         
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          &copy; {CURRENT_YEAR} Made In{" "}
          <a href="https://mukadazlabs.com.ng" target="_blank">
            Mukadaz Labs
          </a>{" "}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
