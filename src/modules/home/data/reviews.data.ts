import lenovoLogo from "@/modules/home/assets/images/lenovo.png";
import siemensLogo from "@/modules/home/assets/images/siemens.png";
import sonyLogo from "@/modules/home/assets/images/sony.png";
import { ReviewsData } from "../types/reviews.types";

export const reviewsData: ReviewsData = {
  title: "What Customer Say",
  items: [
    {
      id: "review-1",
      name: "Zayed Omar",
      role: "Regular customer",
      review:
        "We engaged Taj Al Rahmah for our new commercial build, and they proved to be a reliable and dedicated partner throughout the project. Their team delivered high-quality workmanship, maintained clear communication, and completed every stage with professionalism and attention to detail. We were impressed with their commitment to excellence.",
      image: "/images/team/review.png",
      companyLogo: sonyLogo,
      companyName: "Sony",
    },
    {
      id: "review-2",
      name: "Rashid Al Falasi",
      role: "Operations Director",
      review:
        "Taj Al Rahmah delivered outstanding execution from start to finish on our facility upgrade. The engineering team demonstrated high technical standards, exceptional safety protocols, and strict punctuality across all project milestones. Their proactive communication and craftsmanship made working together a seamless experience.",
      image: "/images/team/customer-review-2.jpg",
      companyLogo: lenovoLogo,
      companyName: "Lenovo",
    },
    {
      id: "review-3",
      name: "Sarah Jenkins",
      role: "Facility Manager",
      review:
        "Working with Taj Al Rahmah was a complete success for our industrial renovation. They maintained transparent cost breakdowns, rapid problem-solving, and clear project timelines throughout the contract. We couldn't be more pleased with the durable finishes, electrical precision, and top-tier support provided.",
      image: "/images/team/customer-review-3.jpg",
      companyLogo: siemensLogo,
      companyName: "Siemens",
    },
    {
      id: "review-4",
      name: "Ahmed Al Mansoori",
      role: "Commercial Partner",
      review:
        "We engaged Taj Al Rahmah for our new commercial build, and they proved to be a reliable and dedicated partner throughout the project. Their team delivered high-quality workmanship, maintained clear communication, and completed every stage with professionalism and attention to detail. We were impressed, gladly recommend their services.",
      image: "/images/team/customer-review-1.jpg",
      companyLogo: lenovoLogo,
      companyName: "Lenovo",
    },
    {
      id: "review-5",
      name: "Tariq Al Hashemi",
      role: "Corporate Client",
      review:
        "Their structured planning and efficient project management guaranteed deadlines were met without compromise on our headquarters build. The team handled complex structural and MEP installations with high precision and full safety compliance. A truly dependable and professional contracting partner for major projects.",
      image: "/images/team/customer-review-4.jpg",
      companyLogo: sonyLogo,
      companyName: "Sony",
    },
    {
      id: "review-6",
      name: "Elena Rostova",
      role: "Property Head",
      review:
        "Reliable, punctual, and highly skilled technicians throughout our multi-story residential development. The quality of work consistently exceeded our expectations, and their team addressed site challenges with speed and expertise. Their ongoing maintenance support and quality guarantee give us total confidence.",
      image: "/images/team/customer-review-3.jpg",
      companyLogo: lenovoLogo,
      companyName: "Lenovo",
    },
    {
      id: "review-7",
      name: "Mohammad Khalil",
      role: "Managing Director",
      review:
        "Superb craftsmanship and attention to detail delivered across all phases of our commercial fit-out. Taj Al Rahmah demonstrated incredible dedication, adhering to international standards while keeping the site safe and organized. Their ability to execute complex solutions on schedule made the entire build effortless.",
      image: "/images/team/customer-review-2.jpg",
      companyLogo: sonyLogo,
      companyName: "Sony",
    },
  ],
};
