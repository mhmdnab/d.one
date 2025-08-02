import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/productImg11.jpg";

const slugify = (label: string) => label.toLowerCase().replace(/\s+/g, "-"); // e.g., "Musk Oil" => "musk-oil"

const ImageCard = ({ src, alt, label }: any) => {
  const slug = slugify(label);

  return (
    <div className="bg-[#1b1b1b] py-4 md:py-16">
      {" "}
      {/* ↓ less vertical padding on mobile */}
      <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-md bg-[#1b1b1b]">
        <Link className="block w-full h-full" href={`/categories/${slug}`}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          {label && (
            <div className="absolute bottom-2 right-2 text-white font-bold text-sm px-2 py-1 rounded">
              {label}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

const ImageCardGrid = () => {
  const images = [
    { src: image, label: "Perfumes" },
    { src: image, label: "Body Splash" },
    { src: image, label: "Musk Oil" },
    { src: image, label: "Home Spray" },
    { src: image, label: "Label 5" },
    { src: image, label: "Label 6" },
  ];

  return (
    <div className="container px-4 md:px-32 bg-[#1b1b1b]">
      {" "}
      {/* ↓ less horizontal padding on mobile */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-8">
        {" "}
        {/* ↓ smaller gap mobile, larger on md+ */}
        {images.map((img, i) => (
          <ImageCard
            key={i}
            src={img.src}
            alt={`Image ${i + 1}`}
            label={img.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;
