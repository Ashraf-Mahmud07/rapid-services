interface StepsCardProps {
  step: string;
  title: string;
  description: string;
  align?: "left" | "right";
}

export default function StepsCard({ step, title, description, align = "left" }: StepsCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 border-t border-white/20 pt-6 ${
        align === "right" ? "md:ml-auto md:max-w-[80%]" : "md:max-w-[80%]"
      }`}
    >
      <p className="text-[10.5px] font-bold tracking-[1.47px] text-white/40 uppercase">Step</p>
      <p className="text-[34px] leading-[1] font-bold tracking-[-0.68px] text-primary">{step}</p>
      <h3 className="text-[18px] font-semibold tracking-[-0.252px] text-primary">{title}</h3>
      <p className="max-w-[560px] text-[14px] leading-[23.1px] text-white/50">{description}</p>
    </div>
  );
}
