import EngineeringSafetyCard from "../components/EngineeringSafetyCard";
import { engineeringSafetyIntro, engineeringSafetyItems } from "../data/engineeringSafety.data";

const EngineeringSafety = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-page">
        <div className="mx-auto flex max-w-[702px] flex-col items-center text-center">
          <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#0E0E0E] sm:text-[38px] lg:text-[42px]">
            {engineeringSafetyIntro.title}{" "}
            <span className="text-primary">{engineeringSafetyIntro.highlight}</span>
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-[#737373]">
            {engineeringSafetyIntro.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {engineeringSafetyItems.map((item) => (
            <EngineeringSafetyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSafety;
