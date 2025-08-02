"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../public/images/carouselImage1.png";
import Image from "next/image";

const ImageCarousel = () => {
  // https://picsum.photos/500/200
  return (
    <div className="max-w mx-auto h-auto bg-[#1b1b1b]">
      <Carousel
        stopOnHover={true}
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className="shadow-lg overflow-hidden"
      >
        {[
          {
            img: image1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            img: image1,
            text: "Libero nobis quidem ullam aut ducimus quam error expedita ipsam sint.",
          },
          {
            img: image1,
            text: "Reprehenderit ad praesentium tenetur labore odit, corporis veritatis sit ea molestias.",
          },
          {
            img: image1,
            text: "Expedita ipsam sint reprehenderit ad praesentium tenetur labore odit.",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full transform origin-center relative">
              <Image
                src={item.img}
                alt={`Image ${index + 1}`}
                className="w-full"
                width={700}
                height={300}
              />
            </div>
            <div className=" absolute left-[27%] bottom-3 text-black/80 font-medium text-center">
              <p className="text-xl bg-[#D6AD60]/30 px-4 py-2 rounded-md">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
