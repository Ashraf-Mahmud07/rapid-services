import type { SubService } from "../types/service.types";
import SubServiceCard from "./SubServiceCard";

interface SubServiceGridProps {
  subServices: SubService[];
  onCardClick: (id: string) => void;
}

export default function SubServiceGrid({ subServices, onCardClick }: SubServiceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {subServices.map((sub) => (
        <SubServiceCard 
          key={sub.id} 
          subService={sub} 
          onClick={onCardClick} 
        />
      ))}
    </div>
  );
}
