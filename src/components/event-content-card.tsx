import Image from "next/image";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card className="rounded-lg shadow-md overflow-hidden"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardBody className="p-6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h5" className="mb-2 font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography color="gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {des}
        </Typography>
        <Typography variant="small" className="mb-4 text-blue-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {panel}
        </Typography>
        <Typography variant="small" color="gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {name} - {position}
        </Typography>
        <Button color="blue" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Save Event
        </Button>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
