import { APPROVALS } from "../data/certification.data";
import ApprovalCard from "./ApprovalCard";

export default function ApprovalGrid() {
  return (
    <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-6">
      {APPROVALS.map((approval) => (
        <ApprovalCard key={approval.title} approval={approval} />
      ))}
    </section>
  );
}
