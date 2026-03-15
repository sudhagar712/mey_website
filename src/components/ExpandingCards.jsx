import React, { useState } from "react";

const cards = [
  {
    title: "Digital Marketing",
    image:
      "https://i.pinimg.com/736x/2e/8e/15/2e8e1527aebf2f8df5c0da5b8347fc40.jpg",
  },
  {
    title: "Website Design & Development",
    image:
      "https://i.pinimg.com/1200x/cb/aa/fd/cbaafdae42195ad1e5d0dbf8117e224c.jpg",
  },
  {
    title: "Social Media Marketing",
    image:
      "https://i.pinimg.com/736x/43/4d/0d/434d0d03660ff49a9dbad7f8abeda9c1.jpg",
  },
  {
    title: "Video Editing",
    image:
      "https://i.pinimg.com/736x/dc/c3/ad/dcc3ad96d9bf12f1e5ff5b316a9dcf86.jpg",
  },
  {
    title: "Outdoor Advertising",
    image:
      "https://i.pinimg.com/736x/b6/6a/5a/b66a5a1357e720e39ae1fb966e32ea2b.jpg",
  },
];

const ExpandingCards = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full h-[500px] md:h-[700px] gap-4 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 flex items-end ${
              active === index ? "flex-[5]" : "flex-[1]"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div
              className={`relative z-10 text-white p-8 transition-opacity duration-500 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[320px] rounded-2xl overflow-hidden relative flex items-end"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpandingCards;
