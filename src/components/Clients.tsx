import { testimonials, companies } from "../variables";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h2 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h2>

      <div className="mt-16 flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map((company) => (
            <div key={company.id} className="flex max-w-32 gap-2 md:max-w-60">
              <img
                src={company.img}
                alt={company.name}
                className="w-5 md:w-10"
              />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
