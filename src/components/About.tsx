"use client";
import React from "react";
import heroimg from "../../public/images/donelogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push("/shop");
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center border-b border-[#D6AD60] items-center md:px-32 py-28 bg-[#1b1b1b]"
        id="about"
      >
        <Image
          src={heroimg}
          width={200}
          className="rounded-md bg-[#1b1b1b] mb-4 mx-4 md:mb-0"
          alt="hero"
        />
        <div className="flex flex-col md:px-32 px-8 mx-4 gap-y-8">
          <h1 className="text-left text-3xl  text-[#D6AD60]">D.One Perfumes</h1>
          <p className="text-left text-lg md:text-base lg:text-lg text-white/80">
            Welcome to our exquisite perfume boutique, where the air is imbued
            with the most enchanting aromas, carefully curated to captivate your
            senses. Our collection features an opulent array of fragrances, each
            crafted with the finest essences from around the world. From the
            intoxicating allure of rare oud to the delicate whispers of jasmine
            and rose, our perfumes are a symphony of elegance and
            sophistication. Step into our haven of luxury, where every bottle is
            a masterpiece, and every scent is a journey into a world of timeless
            beauty and allure. Immerse yourself in a realm of olfactory
            splendor, where each fragrance is a testament to the art of
            perfumery. Discover the perfect scent that resonates with your inner
            essence, creating an unforgettable aura of charm and elegance.
            Indulge in the art of fragrance and let your spirit be transported
            to realms of pure enchantment and grace.
          </p>
          <p className="text-right text-lg md:text-base lg:text-lg text-white/80">
            مرحبا بكم في بوتيك العطور الفاخر لدينا، حيث يعم الهواء بأروع الروائح
            الفاتنة، المختارة بعناية لتأسر حواسكم. تضم مجموعتنا مجموعة رائعة من
            العطور، كل منها مصنوع من أرقى الخلاصات من جميع أنحاء العالم. من
            الجاذبية الساحرة للعود النادر إلى الهمسات الرقيقة للياسمين والورد،
            عطورنا هي سيمفونية من الأناقة والرقي. ادخلوا إلى ملاذ الفخامة، حيث
            كل زجاجة هي تحفة فنية، وكل رائحة هي رحلة إلى عالم من الجمال
            والجاذبية الخالدة. انغمسوا في عالم من الروعة الحسية، حيث كل عطر هو
            شهادة على فن صناعة العطور. اكتشفوا العطر المثالي الذي يتناغم مع
            جوهركم الداخلي، ليخلق هالة لا تُنسى من السحر والأناقة. دللوا أنفسكم
            بفن العطور ودعوا أرواحكم تُنقل إلى عوالم من السحر والنقاء.
          </p>
          <Link
            href={"/shop"}
            className="py-2 px-6 hover:shadow-xl hover:shadow-[#514123] border border-[#1b1b1b] rounded-lg self-center cursor-pointer bg-[#D6AD60] text-[#1b1b1b] hover:scale-105 transition-transform"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
