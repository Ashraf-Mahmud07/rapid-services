import EngineeringSafetyCard from "../components/EngineeringSafetyCard";
import { engineeringSafetyIntro, engineeringSafetyItems } from "../data/engineeringSafety.data";

const EngineeringSafety = () => {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[702px] flex-col items-center text-center">
          <h2 className="text-[34px] leading-[41px] font-semibold tracking-[-0.32px] text-[#0e0e0e] sm:text-[38px]">
            {engineeringSafetyIntro.title}{" "}
            <span className="text-primary">{engineeringSafetyIntro.highlight}</span>
          </h2>
          <p className="mt-4 text-[14.5px] leading-[24.65px] text-[#737373]">
            {engineeringSafetyIntro.description}
          </p>
        </div>

        <div className="mt-12 grid gap-[27px] md:grid-cols-2 xl:grid-cols-3">
          {engineeringSafetyItems.map((item) => (
            <EngineeringSafetyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSafety;
