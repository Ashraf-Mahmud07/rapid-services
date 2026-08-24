import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { ArrowRight } from "lucide-react";

interface FaqSectionProps {
  askHref?: string;
}

const FAQ_DATA = [
  {
    id: "f1",
    question: "Can I try free trial?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    id: "f2",
    question: "What's the pricing?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    id: "f3",
    question: "Is there a refund?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    id: "f4",
    question: "Where to chat with support?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    id: "f5",
    question: "Can I try demo for free?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    id: "f6",
    question: "Where can I leave feedback?",
    answer:
      "Sit amet. Sem integer vitae justo eget magna fermentum iaculis. Facilisis magna etiam tempor orci eu lobortis.",
  },
];

export default function FaqSection({ askHref = ROUTES.CONTACT }: FaqSectionProps) {
  return (
    <section className="my-14 sm:my-16 lg:my-20">
      <div className="rounded-3xl bg-[#0A365C] px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <h2 className="mb-4 text-[32px] font-bold text-white sm:text-[40px] lg:text-[44px]">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-4xl text-[14px] leading-relaxed text-white/70">
            Fermentum iaculis eu non diam phasellus vestibulum. Volutpat commodo sed egestas egestas
            fringilla phasellus. Donec ac odio tempor orci dapibus ultrices.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-10 h-[1px] w-full max-w-4xl bg-white/10" />

        {/* Content Wrapper */}
        <div className="mx-auto w-full max-w-[1150px]">
          {/* FAQs Grid */}
          <div className="mb-10 grid w-full grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {FAQ_DATA.map((faq) => (
              <div key={faq.id} className="flex flex-col">
                <h3 className="mb-3 text-[16px] font-bold text-white">{faq.question}</h3>
                <p className="text-[14px] leading-relaxed text-white/60">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 px-8 py-8 md:flex-row md:px-10 md:py-8 lg:px-12">
            <div className="flex flex-col gap-1.5 text-center md:text-left">
              <h3 className="text-[20px] font-bold text-white sm:text-[22px]">
                Still have questions?
              </h3>
              <p className="text-[14px] text-white/70">
                We understand. Let&apos;s get in touch directly with our team, then.
              </p>
            </div>
            <Link
              href={askHref}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 text-[14px] font-bold text-white transition-all hover:bg-primary/90"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
