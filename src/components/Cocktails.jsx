import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pastikan ScrollTrigger diregistrasi
gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 70%",
        scrub: 1,
      },
    });

    parallaxTimeline
      .fromTo(
        "#c-left-leaf",
        { x: -100, y: 100, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      )
      .fromTo(
        "#c-right-leaf",
        { x: 100, y: 100, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "<",
      );
  });

  return (
    <section
      id="cocktails"
      className="noisy relative overflow-hidden py-10 md:py-20"
    >
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />
      <div className="list relative z-10 container mx-auto">
        <div className="popular">
          <h2 className="mb-5 text-2xl font-bold">Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="mb-4 flex justify-between">
                <div className="md:me-28">
                  <h3 className="font-semibold text-xl">{name}</h3>
                  <p className="text-sm opacity-80">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-bold">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved mt-10">
          <h2 className="mb-5 text-2xl font-bold">Most Loved Cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="mb-4 flex justify-between">
                <div className="me-28">
                  <h3 className="font-semibold text-xl">{name}</h3>
                  <p className="text-sm opacity-80">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-bold">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
