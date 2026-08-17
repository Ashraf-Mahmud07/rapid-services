import {
  Droplet,
  Waves,
  Zap,
  Wrench,
  LayoutGrid,
  Paintbrush,
  ArrowUpToLine,
  Wind,
  Hammer,
  Sparkles,
  Shield
} from "lucide-react";
import type { Trade, TradeContent } from "../types/service.types";

export const trades: Trade[] = [
  { id: "waterproofing", label: "Waterproofing", icon: Shield },
  { id: "pools", label: "Swimming Pools", icon: Waves },
  { id: "electrical", label: "Electrical", icon: Zap },
  { id: "plumbing", label: "Plumbing", icon: Droplet },
  { id: "tiling", label: "Tiling", icon: LayoutGrid },
  { id: "plastering", label: "Plastering", icon: Wrench },
  { id: "painting", label: "Painting", icon: Paintbrush },
  { id: "ceiling", label: "False Ceiling", icon: ArrowUpToLine },
  { id: "hvac", label: "HVAC & AC", icon: Wind },
  { id: "carpentry", label: "Carpentry", icon: Hammer },
  { id: "cleaning", label: "Cleaning", icon: Sparkles },
];

import imgGrp from "../assets/grp-fiberglass.jpg";
import imgCombo from "../assets/combo-roof.jpg";
import imgBitumen from "../assets/bitumen.jpg";
import imgEpoxy from "../assets/epoxy.webp";
import imgPolyurea from "../assets/polyurea.jpg";
import imgInjection from "../assets/crack-injection.jpg";

import imgPoolStructural from "../assets/pool-structural.jpg";
import imgPoolTile from "../assets/pool-tile.webp";
import imgPoolWaterproof from "../assets/pool-waterproof.jpg";
import imgPoolFiltration from "../assets/pool-filtration.webp";
import imgPoolMaintenance from "../assets/pool-maintenance.webp";

import imgElecPanel from "../assets/elec-panel.jpg";
import imgElecConduit from "../assets/elec-conduit.jpg";
import imgElecDbBox from "../assets/elec-dbbox.jpg";
import imgElecLV from "../assets/elec-lv.webp";
import imgElecTesting from "../assets/elec-testing.jpg";

import imgPlumbWater from "../assets/plumb-water.jpg";
import imgPlumbDrainage from "../assets/plumb-drainage.jpg";
import imgPlumbSanitary from "../assets/plumb-sanitary.webp";
import imgPlumbPump from "../assets/plumb-pump.jpg";
import imgPlumbMaintenance from "../assets/plumb-maintenance.jpg";

import imgTilingCeramic from "../assets/tiling-ceramic.jpg";
import imgTilingMarble from "../assets/tiling-marble.jpg";
import imgTilingKitchen from "../assets/tiling-kitchen.jpg";
import imgTilingExterior from "../assets/tiling-exterior.jpg";
import imgTilingGrouting from "../assets/tiling-grouting.jpg";

import imgPlastInternal from "../assets/plast-internal.jpg";
import imgPlastExternal from "../assets/plast-external.jpg";
import imgPlastDecorative from "../assets/plast-decorative.jpg";
import imgPlastRepair from "../assets/plast-repair.jpg";
import imgPlastLeveling from "../assets/plast-leveling.jpg";
import imgPlastBlock from "../assets/plast-block.jpg";

import imgPaintInterior from "../assets/paint-interior.jpg";
import imgPaintIndustrial from "../assets/paint-industrial.jpg";
import imgPaintDecorative from "../assets/paint-decorative.jpg";
import imgPaintAntiCarbonation from "../assets/paint-anti-carbonation.jpg";
import imgPaintSurface from "../assets/paint-surface.jpg";

import imgCeilGypsum from "../assets/ceil-gypsum.jpg";
import imgCeilFalse from "../assets/ceil-false.jpg";
import imgCeilDrywall from "../assets/ceil-drywall.jpg";
import imgCeilGlass from "../assets/ceil-glass.jpg";
import imgCeilAluminum from "../assets/ceil-aluminum.jpg";
import imgCeilAcoustic from "../assets/ceil-acoustic.jpg";
import imgCeilJharbati from "../assets/ceil-jharbati.jpg";

import imgHvacInstallation from "../assets/hvac-installation.jpg";
import imgHvacDucting from "../assets/hvac-ducting.jpg";
import imgHvacFiltration from "../assets/hvac-filtration.jpg";
import imgHvacPreventive from "../assets/hvac-preventive.jpg";

import imgCarpFlooring from "../assets/carp-flooring.jpg";
import imgCarpPartitions from "../assets/carp-partitions.webp";
import imgCarpCabinetry from "../assets/carp-cabinetry.webp";
import imgCarpDoor from "../assets/carp-door.jpg";

import imgCleanPost from "../assets/clean-post.jpg";
import imgCleanFacade from "../assets/clean-facade.jpg";
import imgCleanIndustrial from "../assets/clean-industrial.jpg";
import imgCleanFloor from "../assets/clean-floor.jpg";
import imgCleanTank from "../assets/clean-tank.jpg";

export const tabData: Record<string, TradeContent> = {
  waterproofing: {        title: "ALL TYPES OF WATERPROOFING",
    badge: "Maximum Protection",
    subServices: [
      {
        id: "grp-fiberglass",
        title: "GRP & FIBERGLASS WATERPROOFING",
        image: imgGrp as any,
        shortDesc: "Advanced fiberglass waterproofing solutions designed to provide a durable barrier against corrosion and leaks.",
        content: [
          {
            type: 1,
            title: "Integrated Protection Shield: A Guide to Waterproofing & Structural Solutions",
            description: "Waterproofing is the fundamental pillar for preserving the lifespan of any building. At Taj Alrahmah, we don’t just offer insulation; we provide integrated protection systems that guarantee a permanent end to leaks and corrosion. Here is a detailed explanation of the cutting-edge waterproofing technologies we provide:"
          },
          {
            type: 2,
            title: "GRP & Fiberglass Lining",
            description: "Known as the \"King of Insulation\" due to its superior strength. It consists of glass fibers embedded in specialized resins to form an incredibly tough and solid layer.",
            bullets: [
              { label: "Primary Applications:", text: "Lining potable (drinking) water tanks, roofs highly exposed to water, and chemical drainage channels." },
              { label: "Competitive Advantage:", text: "It provides a single, seamless, joint-free layer that lasts for decades. It is completely safe for health and water storage (Food Grade)." }
            ]
          },
          {
            type: 2,
            title: "Bitumen Membrane Waterproofing",
            description: "The most common and reliable system for protecting foundations and roofs. It relies on reinforced bituminous rolls installed using heat (torch-applied).",
            bullets: [
              { label: "Primary Applications:", text: "Insulation of foundations, concrete bases, bathrooms, and kitchens." },
              { label: "Competitive Advantage:", text: "High flexibility in handling minor structural movements and excellent resistance to ground moisture and humidity." }
            ]
          },
          {
            type: 2,
            title: "Epoxy Floor Coating",
            description: "A protection and beautification system for concrete floors, transforming them into a smooth, hard, and liquid-resistant surface.",
            bullets: [
              { label: "Primary Applications:", text: "Car parks, warehouses, factories, and laboratories." },
              { label: "Competitive Advantage:", text: "High resistance to oils and chemicals, extreme ease of cleaning, and a professional aesthetic appearance." }
            ]
          },
          {
            type: 2,
            title: "Combo System Roof Waterproofing",
            description: "The modern and ideal solution for roofs, combining Waterproofing and Thermal Insulation into one integrated system.",
            bullets: [
              { label: "Primary Applications:", text: "Villa roofs, commercial buildings, and residential towers." },
              { label: "Competitive Advantage:", text: "Significantly reduces energy consumption (due to thermal insulation), provides absolute water protection, and often comes with long-term warranties reaching 10 to 15 years." }
            ]
          },
          {
            type: 1,
            title: "Why Choose Taj Alrahmah for Waterproofing?",
            description: "We don’t just sell materials; we provide \"Root-Cause Solutions.\" Our process begins with a precise engineering site inspection to select the most suitable system and ends with rigorous quality tests (Leak Testing) to ensure a defect-free project handover."
          }
        ],
        gallery: [
          imgGrp, imgCombo, imgEpoxy, imgBitumen, 
          imgPolyurea, imgInjection, imgGrp, imgCombo
        ],
      },
      {
        id: "combo-roof",
        title: "Combo System Roof Waterproofing",
        image: imgCombo as any,
        shortDesc: "Complete roofing and waterproofing system offering thermal insulation and leak prevention.",
        content: [
          {
            type: 1,
            title: "Overview of ALL TYPES OF WATERPROOFING",
            description: "At Taj Alrahmah, we provide premium ALL TYPES OF WATERPROOFING services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our ALL TYPES OF WATERPROOFING solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [
          imgCombo, imgBitumen, imgGrp, imgEpoxy, 
          imgInjection, imgPolyurea, imgCombo, imgGrp
        ],
      },
      {
        id: "epoxy",        title: "Epoxy Floor Coating",
        image: imgEpoxy as any,
        shortDesc: "High-performance epoxy flooring and coating for industrial and commercial spaces.",
        content: [
          {
            type: 1,
            title: "Overview of Epoxy Floor Coating",
            description: "At Taj Alrahmah, we provide premium Epoxy Floor Coating services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Epoxy Floor Coating solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [
          imgEpoxy, imgPolyurea, imgInjection, imgGrp, 
          imgCombo, imgBitumen, imgEpoxy, imgPolyurea
        ],
      },
      {
        id: "bitumen",        title: "Bitumen membrane waterproofing",
        image: imgBitumen as any,
        shortDesc: "Reliable torched-on bitumen membrane application for flat roofs and wet areas.",
        content: [
          {
            type: 1,
            title: "Overview of Bitumen membrane waterproofing",
            description: "At Taj Alrahmah, we provide premium Bitumen membrane waterproofing services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Bitumen membrane waterproofing solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [
          imgBitumen, imgCombo, imgEpoxy, imgInjection, 
          imgPolyurea, imgGrp, imgBitumen, imgCombo
        ],
      },
      {
        id: "polyurea",        title: "Polyurea Coating Waterproofing",
        image: imgPolyurea as any,
        shortDesc: "Fast-curing, advanced polyurea protective coatings for extreme durability.",
        content: [
          {
            type: 1,
            title: "Overview of Polyurea Coating Waterproofing",
            description: "At Taj Alrahmah, we provide premium Polyurea Coating Waterproofing services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Polyurea Coating Waterproofing solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [
          imgPolyurea, imgInjection, imgGrp, imgCombo, 
          imgEpoxy, imgBitumen, imgPolyurea, imgInjection
        ],
      },
      {
        id: "injection",        title: "Injection Waterproofing",
        image: imgInjection as any,
        shortDesc: "Professional resin injection techniques to permanently seal and repair concrete cracks.",
        content: [
          {
            type: 1,
            title: "Overview of Injection Waterproofing",
            description: "At Taj Alrahmah, we provide premium Injection Waterproofing services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Injection Waterproofing solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [
          imgInjection, imgPolyurea, imgBitumen, imgEpoxy, 
          imgCombo, imgGrp, imgInjection, imgPolyurea
        ],
      },
    ]
  },
  pools: {        title: "Swimming Pools Installation",
    badge: "Expert Builders",
    subServices: [
      {
        id: "pool-structural",
        title: "Structural Construction",
        image: imgPoolStructural as any,
        shortDesc: "Structural construction for swimming pools.",
        content: [
          { type: 1, title: "Overview", description: "SWIMMING POOLSWATERPROOFING Filtration &Pump Systems Tile & Mosaic Fixing WATERPROOFING SYSTEM Pool Maintenance& Repair" },
          { type: 1, title: "The Art of Pool Construction:Taj Alrahmah’s Guide to Integrated Excellence", description: "Building a swimming pool is not merely a construction task; it is a precise engineering project that requires a perfect balance between structural strength, mechanical systems, and aesthetic appeal. AtTaj Alrahmah, we follow an \"Integrated Execution\" methodology to ensure the delivery of a pool built to last for generations. Here are the five core stages we follow:" },
          { type: 2, title: "Structural Construction", description: "Every successful pool journey begins with a solid concrete foundation. In this stage, we focus on soil engineering and the use of high-quality,Sulfate-Resistantreinforced concrete.", bullets: [
              { label: "The Goal:", text: "To ensure the pool withstands internal water pressure and external soil pressure, preventing any future subsidence or structural cracking." },
            ] },
          { type: 2, title: "Filtration & Pump Systems", description: "We consider the mechanical systems to be the \"beating heart\" of the pool. We don't just install pumps; we design a complete hydraulic cycle that ensures efficient water circulation and purification.", bullets: [
              { label: "The Technology:", text: "We utilize advanced sand filters, smart disinfection systems (such as automated salt or chlorine systems), and energy-efficient pumps to guarantee crystal-clear, healthy water at all times." },
            ] },
          { type: 2, title: "Advanced Waterproofing System", description: "This is whereTaj Alrahmah’sexpertise truly shines; a beautiful pool is worthless if it leaks. We apply specialized waterproofing layers (such asGRP liningor flexible cementitious coatings) followed by rigorous pressure testing. Beauty lies in the details. We select the finest mosaics and ceramics that are resistant to chemicals and sunlight, ensuring they never lose their vibrant color.", bullets: [
              { label: "The Importance:", text: "To protect the foundations of neighboring buildings, prevent water waste, and save on costly chemicals, with an extreme focus on sealing critical points like lighting fixtures and pipe outlets." },
              { label: "Precision:", text: "We use anti-bacterial and anti-fungal adhesives and grouting. We guarantee a perfectly level installation that provides a luxurious look while ensuring a smooth, safe surface for users." },
            ] },
          { type: 2, title: "Maintenance & Repair Solutions", description: "Our commitment does not end at handover. We provide comprehensive maintenance packages to keep all equipment in peak condition.", bullets: [
              { label: "Services:", text: "Our expertise includes water chemical balancing, filter cleaning, and underwater lighting maintenance, as well as fullRefurbishmentservices to make old pools look and function like new." },
            ] },
          { type: 1, title: "Why Choose \"Taj Alrahmah\" to Build Your Pool?", description: "Because we integrate all disciplines—civil, mechanical, and electrical—under one management. This meansone point of accountability, one comprehensive warranty, and unmatched quality.We turn your dream of owning a private pool into a safe, enjoyable, and engineered reality Mon-Fri: 9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
        ],
        gallery: [imgPoolStructural, imgPoolTile, imgPoolWaterproof, imgPoolFiltration, imgPoolMaintenance]
      },
      {
        id: "pool-tile",
        title: "Tile & Mosaic Fixing",
        image: imgPoolTile as any,
        shortDesc: "Tile and mosaic fixing for swimming pools.",
        content: [
          {
            type: 1,
            title: "Overview of Swimming Pools Installation",
            description: "At Taj Alrahmah, we provide premium Swimming Pools Installation services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Swimming Pools Installation solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPoolTile, imgPoolWaterproof, imgPoolFiltration, imgPoolMaintenance, imgPoolStructural]
      },
      {
        id: "pool-waterproof",        title: "WATERPROOFING SYSTEM",
        image: imgPoolWaterproof as any,
        shortDesc: "Waterproofing systems for swimming pools.",
        content: [
          {
            type: 1,
            title: "Overview of WATERPROOFING SYSTEM",
            description: "At Taj Alrahmah, we provide premium WATERPROOFING SYSTEM services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our WATERPROOFING SYSTEM solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPoolWaterproof, imgPoolFiltration, imgPoolMaintenance, imgPoolStructural, imgPoolTile]
      },
      {
        id: "pool-filtration",        title: "Filtration & Pump Systems",
        image: imgPoolFiltration as any,
        shortDesc: "Filtration and pump systems installation.",
        content: [
          {
            type: 1,
            title: "Overview of Filtration & Pump Systems",
            description: "At Taj Alrahmah, we provide premium Filtration & Pump Systems services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Filtration & Pump Systems solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPoolFiltration, imgPoolMaintenance, imgPoolStructural, imgPoolTile, imgPoolWaterproof]
      },
      {
        id: "pool-maintenance",        title: "Pool Maintenance & Repair:",
        image: imgPoolMaintenance as any,
        shortDesc: "Maintenance and repair services for your pool.",
        content: [
          {
            type: 1,
            title: "Overview of Pool Maintenance & Repair:",
            description: "At Taj Alrahmah, we provide premium Pool Maintenance & Repair: services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Pool Maintenance & Repair: solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPoolMaintenance, imgPoolStructural, imgPoolTile, imgPoolWaterproof, imgPoolFiltration]
      }
    ]
  },
  electrical: {        title: "Electrical Installations & Fit-out",
    badge: "Licensed Professionals",
    subServices: [
      {
        id: "elec-panel",
        title: "Panel Board Installation",
        image: imgElecPanel as any,
        shortDesc: "Panel board installation services.",
        content: [
          { type: 1, title: "Overview", description: "Panel Board Installation Conduit & Trunking DB Box Installation Low Voltage (LV) Systems Testing & Commissioning" },
          { type: 2, title: "Electrical Installations & Fit-out: Power and Precision Behind Every Wall", description: "Electrical systems are the \"nervous system\" of any building, requiring extreme precision to ensure continuous performance and maximum safety. AtTaj Alrahmah, we provide electrical wiring and interior fit-out services in accordance with the highest engineering standards and international safety regulations. Here are the core pillars of our electrical services: The Distribution Board is the central command center for power control within the building. Securing cables begins with the strategic pathways they traverse within walls and ceilings. Precise control for every specific zone or floor begins with the Distribution Boards (DB). Our expertise is not limited to power; it encompasses the vital infrastructure for communication and security. We do not consider a project complete upon installation; the most critical phase is verifying absolute safety.", bullets: [
              { label: "The Service:", text: "We supply and install Main Distribution Boards (MDB) characterized by their high load-bearing capacity and efficient current distribution." },
              { label: "Precision:", text: "We guarantee meticulous wire organization and protection against short circuits to ensure consistent power stability throughout the facility." },
              { label: "The Service:", text: "We execute conduit and metal trunking installations designed to facilitate easy future maintenance." },
              { label: "The Goal:", text: "To protect wiring from external factors (moisture, heat, friction) and ensure the organized distribution of both high and low-voltage cables." },
              { label: "The Service:", text: "We install sub-distribution boards with balancedLoad Balancingto prevent power outages or breaker failures caused by excessive electrical pressure." },
              { label: "The Service:", text: "Includes wiring for fire alarm systems, CCTV, data networks, and intercoms." },
              { label: "Excellence:", text: "We ensure the strict separation of low-voltage pathways from power cables to guarantee signal purity and prevent electromagnetic interference." },
              { label: "The Service:", text: "We conduct insulation resistance tests (Megger Test), earthing inspections, and verify breaker responsiveness in emergency scenarios." },
              { label: "The Guarantee:", text: "We hand over the project fully operational and at maximum safety levels, providing the client with comprehensiveAs-built Drawings." },
            ] },
          { type: 1, title: "Why Choose \"Taj Alrahmah\" for Your Electrical Works?", description: "Because we believe that\"Electricity accepts no errors.\"Our team of engineers and technicians strictly adheres to local building codes and Civil Defense requirements. This ensures an interior finish that blends luxury and aesthetics on the outside with power and absolute safety on the inside. Mon-Fri: 9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
        ],
        gallery: [imgElecPanel, imgElecConduit, imgElecDbBox, imgElecLV, imgElecTesting]
      },
      {
        id: "elec-conduit",
        title: "Conduit & Trunking",
        image: imgElecConduit as any,
        shortDesc: "Conduit and trunking installation.",
        content: [
          {
            type: 1,
            title: "Overview of Electrical Installations & Fit-out",
            description: "At Taj Alrahmah, we provide premium Electrical Installations & Fit-out services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Electrical Installations & Fit-out solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgElecConduit, imgElecDbBox, imgElecLV, imgElecTesting, imgElecPanel]
      },
      {
        id: "elec-dbbox",        title: "DB Box Installation",
        image: imgElecDbBox as any,
        shortDesc: "DB Box Installation services.",
        content: [
          {
            type: 1,
            title: "Overview of DB Box Installation",
            description: "At Taj Alrahmah, we provide premium DB Box Installation services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our DB Box Installation solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgElecDbBox, imgElecLV, imgElecTesting, imgElecPanel, imgElecConduit]
      },
      {
        id: "elec-lv",        title: "Low Voltage (LV) Systems",
        image: imgElecLV as any,
        shortDesc: "Low voltage systems installation.",
        content: [
          {
            type: 1,
            title: "Overview of Low Voltage (LV) Systems",
            description: "At Taj Alrahmah, we provide premium Low Voltage (LV) Systems services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Low Voltage (LV) Systems solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgElecLV, imgElecTesting, imgElecPanel, imgElecConduit, imgElecDbBox]
      },
      {
        id: "elec-testing",        title: "Testing & Commissioning",
        image: imgElecTesting as any,
        shortDesc: "Testing and commissioning services.",
        content: [
          {
            type: 1,
            title: "Overview of Testing & Commissioning",
            description: "At Taj Alrahmah, we provide premium Testing & Commissioning services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Testing & Commissioning solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgElecTesting, imgElecPanel, imgElecConduit, imgElecDbBox, imgElecLV]
      }
    ]
  },
  plumbing: {        title: "Plumbing & Sanitary Installation Works",
    badge: "Reliable Service",
    subServices: [
      {
        id: "plumb-water",
        title: "Water Supply Networks",
        image: imgPlumbWater as any,
        shortDesc: "Water supply networks installation.",
        content: [
          { type: 1, title: "Overview", description: "Water Supply Networks Drainage & Sewage Systems Sanitary Ware Fixing Pump & Tank Installation" },
          { type: 2, title: "Plumbing & Sanitary Installation: Engineering Flow and Sustainability", description: "Plumbing systems are the vital \"arteries\" of any facility; even a minor defect can lead to severe structural damage. AtTaj Alrahmah, we provide integrated engineering plumbing solutions that ensure supply efficiency and smooth drainage using the highest quality materials and the latest technologies. Here are the details of our services: Establishing water networks requires precise planning to ensure balanced water pressure and continuous purity. Effective water drainage is the only guarantee to prevent unpleasant odors and blockages. The final touch that blends functionality with elegance. Ensuring water reaches all floors with consistent power and speed.", bullets: [
              { label: "The Service:", text: "Design and installation of hot and cold water networks using thermalPPRorPEXpiping, which are resistant to corrosion and scale buildup." },
              { label: "Quality:", text: "We guarantee tight connections to prevent any future leaks, while incorporating thermal insulation for external pipes to protect them from extreme ambient heat." },
              { label: "The Service:", text: "Installation of internal and external sewage networks, adhering to precise engineering slopes to ensure smooth gravity-based flow." },
              { label: "Excellence:", text: "We use high-qualityUPVCorHDPEpipes that withstand pressure and prevent root penetration, with the installation of easily accessiblemanholesfor maintenance." },
              { label: "The Service:", text: "Meticulous installation of bathroom sets, washbasins, and mixers." },
              { label: "Precision:", text: "We focus on sealing the connection points between sanitary fixtures and the concrete structure to ensure no water seeps behind walls, guaranteeing ahigh-end finish." },
              { label: "The Service:", text: "Supply and installation ofbooster pumpsand lifting pumps, in addition to installing overhead and underground water tanks." },
              { label: "Mon-Fri:", text: "9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
            ] },
        ],
        gallery: [imgPlumbWater, imgPlumbDrainage, imgPlumbSanitary, imgPlumbPump, imgPlumbMaintenance]
      },
      {
        id: "plumb-drainage",
        title: "Drainage & Sewage Systems",
        image: imgPlumbDrainage as any,
        shortDesc: "Drainage & Sewage Systems.",
        content: [
          {
            type: 1,
            title: "Overview of Plumbing & Sanitary Installation Works",
            description: "At Taj Alrahmah, we provide premium Plumbing & Sanitary Installation Works services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Plumbing & Sanitary Installation Works solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlumbDrainage, imgPlumbSanitary, imgPlumbPump, imgPlumbMaintenance, imgPlumbWater]
      },
      {
        id: "plumb-sanitary",        title: "Sanitary Ware Fixing.",
        image: imgPlumbSanitary as any,
        shortDesc: "Sanitary Ware Fixing services.",
        content: [
          {
            type: 1,
            title: "Overview of Sanitary Ware Fixing.",
            description: "At Taj Alrahmah, we provide premium Sanitary Ware Fixing. services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Sanitary Ware Fixing. solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlumbSanitary, imgPlumbPump, imgPlumbMaintenance, imgPlumbWater, imgPlumbDrainage]
      },
      {
        id: "plumb-pump",        title: "Pump & Tank Installation",
        image: imgPlumbPump as any,
        shortDesc: "Pump & Tank Installation.",
        content: [
          {
            type: 1,
            title: "Overview of Pump & Tank Installation",
            description: "At Taj Alrahmah, we provide premium Pump & Tank Installation services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Pump & Tank Installation solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlumbPump, imgPlumbMaintenance, imgPlumbWater, imgPlumbDrainage, imgPlumbSanitary]
      },
      {
        id: "plumb-maintenance",        title: "Maintenance & Leak Detection",
        image: imgPlumbMaintenance as any,
        shortDesc: "Maintenance & Leak Detection.",
        content: [
          {
            type: 1,
            title: "Overview of Maintenance & Leak Detection",
            description: "At Taj Alrahmah, we provide premium Maintenance & Leak Detection services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Maintenance & Leak Detection solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlumbMaintenance, imgPlumbWater, imgPlumbDrainage, imgPlumbSanitary, imgPlumbPump]
      }
    ]
  },
  tiling: {        title: "Floor & Wall Tiling Work",
    badge: "Precision Finish",
    subServices: [
      {
        id: "tiling-ceramic",
        title: "Ceramic & Porcelain Installation",
        image: imgTilingCeramic as any,
        shortDesc: "Ceramic and porcelain installation.",
        content: [
          {
            type: 1,
            title: "Overview of Floor & Wall Tiling Work",
            description: "At Taj Alrahmah, we provide premium Floor & Wall Tiling Work services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Floor & Wall Tiling Work solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgTilingCeramic, imgTilingMarble, imgTilingKitchen, imgTilingExterior, imgTilingGrouting]
      },
      {
        id: "tiling-marble",        title: "Marble & Granite Works",
        image: imgTilingMarble as any,
        shortDesc: "Marble and granite works.",
        content: [
          {
            type: 1,
            title: "Overview of Marble & Granite Works",
            description: "At Taj Alrahmah, we provide premium Marble & Granite Works services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Marble & Granite Works solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgTilingMarble, imgTilingKitchen, imgTilingExterior, imgTilingGrouting, imgTilingCeramic]
      },
      {
        id: "tiling-kitchen",        title: "Kitchen & Bathroom Tiling",
        image: imgTilingKitchen as any,
        shortDesc: "Kitchen and bathroom tiling.",
        content: [
          {
            type: 1,
            title: "Overview of Kitchen & Bathroom Tiling",
            description: "At Taj Alrahmah, we provide premium Kitchen & Bathroom Tiling services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Kitchen & Bathroom Tiling solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgTilingKitchen, imgTilingExterior, imgTilingGrouting, imgTilingCeramic, imgTilingMarble]
      },
      {
        id: "tiling-exterior",        title: "Exterior Wall Cladding",
        image: imgTilingExterior as any,
        shortDesc: "Exterior wall cladding.",
        content: [
          {
            type: 1,
            title: "Overview of Exterior Wall Cladding",
            description: "At Taj Alrahmah, we provide premium Exterior Wall Cladding services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Exterior Wall Cladding solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgTilingExterior, imgTilingGrouting, imgTilingCeramic, imgTilingMarble, imgTilingKitchen]
      },
      {
        id: "tiling-grouting",        title: "Grouting & Surface Refinishing",
        image: imgTilingGrouting as any,
        shortDesc: "Grouting and surface refinishing.",
        content: [
          {
            type: 1,
            title: "Overview of Grouting & Surface Refinishing",
            description: "At Taj Alrahmah, we provide premium Grouting & Surface Refinishing services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Grouting & Surface Refinishing solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgTilingGrouting, imgTilingCeramic, imgTilingMarble, imgTilingKitchen, imgTilingExterior]
      }
    ]
  },
  plastering: {        title: "Plastering & Rendering Works",
    badge: "Smooth Surfaces",
    subServices: [
      {
        id: "plast-internal",
        title: "Internal Plastering",
        image: imgPlastInternal as any,
        shortDesc: "Internal plastering services.",
        content: [
          { type: 1, title: "Overview", description: "Plastering & Block Works Construction Block Works Internal Plastering External Rendering Decorative Plaster & Finishes Plaster Repair & Patching" },
          { type: 2, title: "Plastering & Block Works: Crafting Walls with Engineering Precision", description: "Plastering and block works form the fundamental skeleton that defines the features of any facility. AtTaj Alrahmah, we believe that perfectly level walls and right-angled corners are the primary standards of quality, providing the ideal foundation for subsequent painting and decoration works. Here are the details of our comprehensive services: Establishing walls is the first step toward ensuring sound and thermal insulation, as well as structural durability. Creating perfectly smooth and level surfaces inside the building. Protecting the building from harsh weather conditions (heat, humidity, and wind). Adding unique artistic and architectural touches to the walls. Rehabilitating damaged and cracked walls.", bullets: [
              { label: "The Service:", text: "Building interior and exterior walls using various types of blocks (cement, insulated, or lightweight blocks)." },
              { label: "Precision:", text: "We adhere to engineering strings and leveling tools to ensure wall verticality, while installing metal \"ties\" to bond blocks with concrete columns to prevent future cracks." },
              { label: "The Service:", text: "Executing internal plaster layers using the finest mixtures of cement and washed sand." },
              { label: "Excellence:", text: "We focus on \"squaring\" rooms to ensure all corners are 90 degrees, facilitating the installation of tiles and furniture without any gaps." },
              { label: "The Service:", text: "Applying external plaster layers using salt and sulfate-resistant materials." },
              { label: "The Goal:", text: "Providing a durable envelope for the building that prevents moisture penetration and withstands climate fluctuations for many years." },
              { label: "The Service:", text: "Executing various finishes such as Tyrolean, Profile, and different decorative textures that give facades a unique architectural character." },
              { label: "The Service:", text: "Treating \"hollow\" plaster (tabteel), repairing cracks caused by structural expansion, and restoring parts eroded by moisture using fiber-reinforced cementitious materials." },
            ] },
          { type: 2, title: "Leveling & Surface Preparation", description: "The secret to quality plastering lies in what is beneath it.", bullets: [
              { label: "The Service:", text: "Includes applying a \"Splash Coat\" (Tartasha), and installing protection mesh (Corner Beads) at corners and casting joints to ensure maximum adhesion and prevent cracks." },
            ] },
          { type: 1, title: "Why Choose \"Taj Alrahmah\" for Your Plastering & Block Works?", description: "Because we implement the\"Pads & Guides\"system in all our projects—the most accurate engineering method to ensure walls are perfectly level both vertically and horizontally. We don't just hand over a wall; we deliver an engineered canvas ready for the most refined finishes. Mon-Fri: 9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
        ],
        gallery: [imgPlastInternal, imgPlastExternal, imgPlastDecorative, imgPlastRepair, imgPlastLeveling, imgPlastBlock]
      },
      {
        id: "plast-external",
        title: "External Rendering",
        image: imgPlastExternal as any,
        shortDesc: "External rendering services.",
        content: [
          {
            type: 1,
            title: "Overview of Plastering & Rendering Works",
            description: "At Taj Alrahmah, we provide premium Plastering & Rendering Works services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Plastering & Rendering Works solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlastExternal, imgPlastDecorative, imgPlastRepair, imgPlastLeveling, imgPlastBlock, imgPlastInternal]
      },
      {
        id: "plast-decorative",        title: "Decorative Plaster & Finishes",
        image: imgPlastDecorative as any,
        shortDesc: "Decorative plaster and finishes.",
        content: [
          {
            type: 1,
            title: "Overview of Decorative Plaster & Finishes",
            description: "At Taj Alrahmah, we provide premium Decorative Plaster & Finishes services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Decorative Plaster & Finishes solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlastDecorative, imgPlastRepair, imgPlastLeveling, imgPlastBlock, imgPlastInternal, imgPlastExternal]
      },
      {
        id: "plast-repair",        title: "Plaster Repair & Patching",
        image: imgPlastRepair as any,
        shortDesc: "Plaster repair and patching.",
        content: [
          {
            type: 1,
            title: "Overview of Plaster Repair & Patching",
            description: "At Taj Alrahmah, we provide premium Plaster Repair & Patching services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Plaster Repair & Patching solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlastRepair, imgPlastLeveling, imgPlastBlock, imgPlastInternal, imgPlastExternal, imgPlastDecorative]
      },
      {
        id: "plast-leveling",        title: "Leveling & Surface Preparation",
        image: imgPlastLeveling as any,
        shortDesc: "Leveling and surface preparation.",
        content: [
          {
            type: 1,
            title: "Overview of Leveling & Surface Preparation",
            description: "At Taj Alrahmah, we provide premium Leveling & Surface Preparation services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Leveling & Surface Preparation solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlastLeveling, imgPlastBlock, imgPlastInternal, imgPlastExternal, imgPlastDecorative, imgPlastRepair]
      },
      {
        id: "plast-block",        title: "Construction Block works",
        image: imgPlastBlock as any,
        shortDesc: "Construction block works.",
        content: [
          {
            type: 1,
            title: "Overview of Construction Block works",
            description: "At Taj Alrahmah, we provide premium Construction Block works services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Construction Block works solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPlastBlock, imgPlastInternal, imgPlastExternal, imgPlastDecorative, imgPlastRepair, imgPlastLeveling]
      }
    ]
  },
  painting: {        title: "Painting Contracting Services",
    badge: "Vibrant Colors",
    subServices: [
      {
        id: "paint-interior",
        title: "Interior & Exterior Painting",
        image: imgPaintInterior as any,
        shortDesc: "Interior and exterior painting services.",
        content: [
          { type: 1, title: "Overview", description: "Interior Painting Exterior Painting Decorative Painting Furniture Painting & Refinishing Paint Repair & Touch-ups Surface Preparation" },
          { type: 2, title: "Painting: Transforming Spaces with Color and Precision", description: "Painting is the final flourish that brings character and life to any space. AtTaj Alrahmah, we believe that flawless application and vibrant colors are essential for creating the perfect ambiance. We provide the ideal finishing touch that elevates your space. Here are the details of our comprehensive services: Transforming interior spaces with color and style. Protecting and beautifying your building's exterior. Adding artistic and personalized touches to your walls. Revitalizing your furniture with fresh paint and finishes. Maintaining the beauty and integrity of your painted surfaces. Ensuring a flawless finish through careful preparation.", bullets: [
              { label: "The Service:", text: "Applying paint to interior walls and ceilings using a variety of colors and finishes." },
              { label: "Precision:", text: "We ensure smooth, even coats and sharp lines for a professional look." },
              { label: "The Service:", text: "Applying weather-resistant paint to exterior walls, doors, and window frames." },
              { label: "Excellence:", text: "We use high-quality materials to withstand climate fluctuations and maintain vibrant color for years." },
              { label: "The Service:", text: "Creating unique designs, patterns, and textures using specialized painting techniques." },
              { label: "The Goal:", text: "Transforming your space into a work of art that reflects your personal style." },
              { label: "The Service:", text: "Painting and refinishing chairs, tables, cabinets, and other furniture items." },
              { label: "The Service:", text: "Repairing chipped, faded, or damaged paint with precise color matching and seamless blending." },
              { label: "The Service:", text: "Includes cleaning, sanding, and priming surfaces to create a smooth, even base for painting." },
            ] },
          { type: 1, title: "Why Choose \"Taj Alrahmah\" for Your Painting Needs?", description: "Because we use only the highest quality paints and employ skilled professionals dedicated to delivering exceptional results. We don't just apply paint; we transform your vision into reality with precision and care. Mon-Fri: 9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
        ],
        gallery: [imgPaintInterior, imgPaintIndustrial, imgPaintDecorative, imgPaintAntiCarbonation, imgPaintSurface]
      },
      {
        id: "paint-industrial",
        title: "Industrial Coatings",
        image: imgPaintIndustrial as any,
        shortDesc: "Industrial coatings.",
        content: [
          {
            type: 1,
            title: "Overview of Painting Contracting Services",
            description: "At Taj Alrahmah, we provide premium Painting Contracting Services services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Painting Contracting Services solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPaintIndustrial, imgPaintDecorative, imgPaintAntiCarbonation, imgPaintSurface, imgPaintInterior]
      },
      {
        id: "paint-decorative",        title: "Decorative Finishes",
        image: imgPaintDecorative as any,
        shortDesc: "Decorative finishes.",
        content: [
          {
            type: 1,
            title: "Overview of Decorative Finishes",
            description: "At Taj Alrahmah, we provide premium Decorative Finishes services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Decorative Finishes solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPaintDecorative, imgPaintAntiCarbonation, imgPaintSurface, imgPaintInterior, imgPaintIndustrial]
      },
      {
        id: "paint-anti-carbonation",        title: "Anti-Carbonation Coatings",
        image: imgPaintAntiCarbonation as any,
        shortDesc: "Anti-carbonation coatings.",
        content: [
          {
            type: 1,
            title: "Overview of Anti-Carbonation Coatings",
            description: "At Taj Alrahmah, we provide premium Anti-Carbonation Coatings services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Anti-Carbonation Coatings solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPaintAntiCarbonation, imgPaintSurface, imgPaintInterior, imgPaintIndustrial, imgPaintDecorative]
      },
      {
        id: "paint-surface",        title: "Surface Preparation & Priming",
        image: imgPaintSurface as any,
        shortDesc: "Surface preparation and priming.",
        content: [
          {
            type: 1,
            title: "Overview of Surface Preparation & Priming",
            description: "At Taj Alrahmah, we provide premium Surface Preparation & Priming services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Surface Preparation & Priming solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgPaintSurface, imgPaintInterior, imgPaintIndustrial, imgPaintDecorative, imgPaintAntiCarbonation]
      }
    ]
  },
  ceiling: {        title: "False Ceiling & Light Partitions Installation",
    badge: "Modern Aesthetics",
    subServices: [
      {
        id: "ceil-gypsum",
        title: "Gypsum Board Ceilings",
        image: imgCeilGypsum as any,
        shortDesc: "Gypsum board ceilings.",
        content: [
          { type: 1, title: "Overview", description: "False Ceiling Light Partition Installation Decorative Ceiling Design Partition Customization & Design Ceiling and Partition Repair & Maintenance Acoustic Solutions" },
          { type: 2, title: "False Ceiling & Light Partitions: Designing Elegant and Functional Spaces", description: "False ceilings and light partitions redefine interior spaces, offering both aesthetic appeal and practical benefits. AtTaj Alrahmah, we believe that innovative design and precise installation are key to creating sophisticated and functional environments. We provide the perfect blend of style and utility for your space. Here are the details of our comprehensive services:", bullets: [
            ] },
          { type: 2, title: "False Ceiling Installation", description: "Creating elegant and functional ceilings that enhance any room. Dividing spaces with lightweight, stylish, and adaptable partitions. Adding artistic and personalized touches to your ceilings. Creating bespoke partition solutions tailored to your specific needs. Ensuring the longevity and appearance of your ceilings and partitions. Enhancing sound quality and reducing noise levels within your space.", bullets: [
              { label: "The Service:", text: "Installing suspended ceilings using materials like gypsum, mineral fiber, or metal, with options for various designs and lighting integration." },
              { label: "Precision:", text: "We ensure accurate alignment, secure mounting, and seamless finishes for a refined appearance." },
              { label: "The Service:", text: "Installing non-load-bearing partitions made of glass, wood, or composite materials to create distinct areas within a larger space." },
              { label: "Excellence:", text: "We focus on creating partitions that are both aesthetically pleasing and functionally effective, optimizing space and light." },
              { label: "The Service:", text: "Crafting unique ceiling designs, patterns, and textures using a variety of materials and techniques, including suspended elements and custom lighting solutions." },
              { label: "The Goal:", text: "Transforming your ceilings into a focal point that enhances the overall ambiance and reflects your personal style." },
              { label: "The Service:", text: "Designing and installing custom light partitions with options for integrated lighting, soundproofing, and decorative finishes." },
              { label: "The Service:", text: "Repairing damaged sections, addressing water damage, and providing routine maintenance to keep your installations in excellent condition." },
              { label: "The Service:", text: "Installing soundproofing materials within false ceilings and light partitions to minimize sound transmission and improve acoustic comfort." },
            ] },
          { type: 1, title: "Why Choose \"Taj Alrahmah\" for Your False Ceiling & Light Partition Needs?", description: "Because we combine innovative design with expert installation to create spaces that are both beautiful and functional. We use high-quality materials and employ skilled professionals dedicated to exceeding your expectations. Mon-Fri: 9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
        ],
        gallery: [imgCeilGypsum, imgCeilFalse, imgCeilDrywall, imgCeilGlass, imgCeilAluminum, imgCeilAcoustic, imgCeilJharbati]
      },
      {
        id: "ceil-false",
        title: "False ceiling.",
        image: imgCeilFalse as any,
        shortDesc: "False ceiling.",
        content: [
          {
            type: 1,
            title: "Overview of False Ceiling & Light Partitions Installation",
            description: "At Taj Alrahmah, we provide premium False Ceiling & Light Partitions Installation services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our False Ceiling & Light Partitions Installation solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilFalse, imgCeilDrywall, imgCeilGlass, imgCeilAluminum, imgCeilAcoustic, imgCeilJharbati, imgCeilGypsum]
      },
      {
        id: "ceil-drywall",        title: "Drywall Partitions",
        image: imgCeilDrywall as any,
        shortDesc: "Drywall partitions.",
        content: [
          {
            type: 1,
            title: "Overview of Drywall Partitions",
            description: "At Taj Alrahmah, we provide premium Drywall Partitions services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Drywall Partitions solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilDrywall, imgCeilGlass, imgCeilAluminum, imgCeilAcoustic, imgCeilJharbati, imgCeilGypsum, imgCeilFalse]
      },
      {
        id: "ceil-glass",        title: "Glass Partitions",
        image: imgCeilGlass as any,
        shortDesc: "Glass partitions.",
        content: [
          {
            type: 1,
            title: "Overview of Glass Partitions",
            description: "At Taj Alrahmah, we provide premium Glass Partitions services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Glass Partitions solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilGlass, imgCeilAluminum, imgCeilAcoustic, imgCeilJharbati, imgCeilGypsum, imgCeilFalse, imgCeilDrywall]
      },
      {
        id: "ceil-aluminum",        title: "Aluminum & Grid Ceilings",
        image: imgCeilAluminum as any,
        shortDesc: "Aluminum & grid ceilings.",
        content: [
          {
            type: 1,
            title: "Overview of Aluminum & Grid Ceilings",
            description: "At Taj Alrahmah, we provide premium Aluminum & Grid Ceilings services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Aluminum & Grid Ceilings solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilAluminum, imgCeilAcoustic, imgCeilJharbati, imgCeilGypsum, imgCeilFalse, imgCeilDrywall, imgCeilGlass]
      },
      {
        id: "ceil-acoustic",        title: "Acoustic & Fire-Rated Solutions",
        image: imgCeilAcoustic as any,
        shortDesc: "Acoustic and fire-rated solutions.",
        content: [
          {
            type: 1,
            title: "Overview of Acoustic & Fire-Rated Solutions",
            description: "At Taj Alrahmah, we provide premium Acoustic & Fire-Rated Solutions services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Acoustic & Fire-Rated Solutions solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilAcoustic, imgCeilJharbati, imgCeilGypsum, imgCeilFalse, imgCeilDrywall, imgCeilGlass, imgCeilAluminum]
      },
      {
        id: "ceil-jharbati",        title: "Jharbati Istallation & Cleaning",
        image: imgCeilJharbati as any,
        shortDesc: "Jharbati installation & cleaning.",
        content: [
          {
            type: 1,
            title: "Overview of Jharbati Istallation & Cleaning",
            description: "At Taj Alrahmah, we provide premium Jharbati Istallation & Cleaning services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Jharbati Istallation & Cleaning solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCeilJharbati, imgCeilGypsum, imgCeilFalse, imgCeilDrywall, imgCeilGlass, imgCeilAluminum, imgCeilAcoustic]
      }
    ]
  },
  hvac: {        title: "Air-Conditioning, Ventilation & Air Filtration[HVAC]",
    badge: "Climate Control",
    subServices: [
      {
        id: "hvac-installation",
        title: "AC Installation & Repair",
        image: imgHvacInstallation as any,
        shortDesc: "AC installation and repair services.",
        content: [
          {
            type: 1,
            title: "Overview of Air-Conditioning, Ventilation & Air Filtration[HVAC]",
            description: "At Taj Alrahmah, we provide premium Air-Conditioning, Ventilation & Air Filtration[HVAC] services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Air-Conditioning, Ventilation & Air Filtration[HVAC] solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgHvacInstallation, imgHvacDucting, imgHvacFiltration, imgHvacPreventive]
      },
      {
        id: "hvac-ducting",        title: "Ducting & Ventilation Works",
        image: imgHvacDucting as any,
        shortDesc: "Ducting and ventilation works.",
        content: [
          {
            type: 1,
            title: "Overview of Ducting & Ventilation Works",
            description: "At Taj Alrahmah, we provide premium Ducting & Ventilation Works services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Ducting & Ventilation Works solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgHvacDucting, imgHvacFiltration, imgHvacPreventive, imgHvacInstallation]
      },
      {
        id: "hvac-filtration",        title: "Air Filtration Systems",
        image: imgHvacFiltration as any,
        shortDesc: "Air filtration systems.",
        content: [
          {
            type: 1,
            title: "Overview of Air Filtration Systems",
            description: "At Taj Alrahmah, we provide premium Air Filtration Systems services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Air Filtration Systems solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgHvacFiltration, imgHvacPreventive, imgHvacInstallation, imgHvacDucting]
      },
      {
        id: "hvac-preventive",        title: "Preventive Maintenance",
        image: imgHvacPreventive as any,
        shortDesc: "Preventive maintenance.",
        content: [
          {
            type: 1,
            title: "Overview of Preventive Maintenance",
            description: "At Taj Alrahmah, we provide premium Preventive Maintenance services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Preventive Maintenance solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgHvacPreventive, imgHvacInstallation, imgHvacDucting, imgHvacFiltration]
      }
    ]
  },
  carpentry: {        title: "Carpentry & Professional Wood Flooring",
    badge: "Fine Craftsmanship",
    subServices: [
      {
        id: "carp-flooring",
        title: "Wood Flooring & Parquet Installation",
        image: imgCarpFlooring as any,
        shortDesc: "Wood flooring and parquet installation.",
        content: [
          { type: 1, title: "Overview", description: "Wood Flooring & Parquet Installation Custom Cabinetry & Wardrobes Door Installation & Repair Wooden Partitions & Wall Paneling" },
          { type: 2, title: "Art of Modern Carpentry & Luxury Wood Flooring", description: "Carpentry and woodwork are the soul that brings incomparable warmth and luxury to homes and offices. AtTaj Al Rahma, we blend traditional craftsmanship with modern design to transform wood into functional masterpieces that serve your daily needs and stand the test of time.", bullets: [
            ] },
          { type: 2, title: "Our Professional Services", description: "Flooring is the foundation of elegance. We offer integrated solutions for installing natural wood and laminate parquet with the highest standards of precision: We maximize every inch of your space to create smart, stylish storage solutions: A door is the first impression of your home, and we pay attention to every detail: Add a touch of architectural luxury to your interiors:", bullets: [
              { label: "Professional Installation:", text: "Ensuring perfectly leveled surfaces and seamless finishing." },
              { label: "Diverse Options:", text: "Providing a wide variety of colors and patterns (such as Chevron and Herringbone) to suit your unique style." },
              { label: "Bespoke Wardrobes:", text: "Design and execution of luxury Walk-in Closets." },
              { label: "Modern Kitchens:", text: "Contemporary cabinetry designed to be durable and moisture-resistant." },
              { label: "Quality Installation:", text: "Expert fitting of solid wood and pre-fabricated doors." },
              { label: "Repair Services:", text: "Addressing wood expansion, fixing alignment, and upgrading hardware (handles and hinges)." },
              { label: "Wall Paneling:", text: "Custom designs like Wainscoting and Slats that add depth and character to any room." },
              { label: "Wooden Partitions:", text: "Elegant space-dividing solutions that maintain air circulation and natural light." },
            ] },
          { type: 2, title: "Why Choose \"Taj Al Rahma\"?", description: "FeatureWhat We OfferPremium MaterialsWe use the finest types of reliable wood, including Beech, Oak, and Mahogany.Attention to DetailWe focus on the final finishing touches that create a significant aesthetic difference.Custom DesignsWe execute exactly what you imagine, tailored perfectly to your space dimensions.Competitive PricingHigh-quality craftsmanship at a carefully studied cost to fit your budget.", bullets: [
              { label: "Mon-Fri:", text: "9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
            ] },
        ],
        gallery: [imgCarpFlooring, imgCarpPartitions, imgCarpCabinetry, imgCarpDoor]
      },
      {
        id: "carp-partitions",
        title: "Wooden Partitions & Wall Paneling",
        image: imgCarpPartitions as any,
        shortDesc: "Wooden partitions and wall paneling.",
        content: [
          {
            type: 1,
            title: "Overview of Carpentry & Professional Wood Flooring",
            description: "At Taj Alrahmah, we provide premium Carpentry & Professional Wood Flooring services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Carpentry & Professional Wood Flooring solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCarpPartitions, imgCarpCabinetry, imgCarpDoor, imgCarpFlooring]
      },
      {
        id: "carp-cabinetry",        title: "Custom Cabinetry & Wardrobes",
        image: imgCarpCabinetry as any,
        shortDesc: "Custom cabinetry and wardrobes.",
        content: [
          {
            type: 1,
            title: "Overview of Custom Cabinetry & Wardrobes",
            description: "At Taj Alrahmah, we provide premium Custom Cabinetry & Wardrobes services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Custom Cabinetry & Wardrobes solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCarpCabinetry, imgCarpDoor, imgCarpFlooring, imgCarpPartitions]
      },
      {
        id: "carp-door",        title: "Door Installation & Repair",
        image: imgCarpDoor as any,
        shortDesc: "Door installation and repair.",
        content: [
          {
            type: 1,
            title: "Overview of Door Installation & Repair",
            description: "At Taj Alrahmah, we provide premium Door Installation & Repair services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Door Installation & Repair solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCarpDoor, imgCarpFlooring, imgCarpPartitions, imgCarpCabinetry]
      }
    ]
  },
  cleaning: {        title: "Building Cleaning Services",
    badge: "Spotless Clean",
    subServices: [
      {
        id: "clean-post",
        title: "Post-Construction Cleaning",
        image: imgCleanPost as any,
        shortDesc: "Post-construction cleaning.",
        content: [
          { type: 1, title: "Overview", description: "Post-Construction Cleaning External Glass & Facade Cleaning Industrial & Warehouse Cleaning Floor Deep Cleaning & Polishing Water Tank Cleaning & Disinfection" },
          { type: 2, title: "Professional Building Cleaning & Comprehensive Hygiene Solutions", description: "Cleanliness is the true reflection of any facility, whether residential or commercial. AtTaj Al Rahma, we provide advanced cleaning solutions that go beyond surface-level appearance to include deep disinfection and meticulous attention to detail. By utilizing the latest equipment and eco-friendly materials, we ensure a safe, healthy, and welcoming environment for everyone.", bullets: [
            ] },
          { type: 2, title: "Our Specialized Services", description: "Removing construction debris is a demanding task that requires high precision. We take over the hard work to make your building move-in ready: We maintain your building’s brilliance from the outside, regardless of its height: Industrial environments demand a specialized approach to handle heavy oils and stubborn grime: We restore the original glow of your floors, making them look brand new: The health of your family and employees starts with the purity of your water:", bullets: [
              { label: "Complete Debris Removal:", text: "Eliminating paint splatters, cement residue, and fine dust from all surfaces." },
              { label: "Detailing:", text: "Polishing floors and cleaning windows and hard-to-reach corners to ensure a pristine finish." },
              { label: "Comprehensive Cleaning:", text: "Specialized care for glass facades, aluminum cladding, and stone surfaces." },
              { label: "Safety First:", text: "Our high-access teams are fully trained and equipped to work at heights while strictly adhering to international safety standards." },
              { label: "Heavy-Duty Solutions:", text: "Cleaning large-scale factories and warehouses using high-pressure machinery." },
              { label: "Efficiency & Safety:", text: "Ensuring an organized and clean workspace that boosts production efficiency and worker safety." },
              { label: "Restoration:", text: "Professional grinding and polishing for marble, granite, and ceramic tiles." },
              { label: "Deep Scrubbing:", text: "Intense cleaning for large areas to remove deep-seated stains and apply protective layers." },
              { label: "Sediment Removal:", text: "Clearing out sludge, debris, and algae from the bottom and walls of the tanks." },
              { label: "Total Sterilization:", text: "Complete disinfection using approved, health-safe materials to eliminate bacteria and germs." },
            ] },
          { type: 2, title: "Why Choose \"Taj Al Rahma\" for Cleaning?", description: "FeatureWhat We OfferTrained StaffA professional workforce trained to the highest security and vocational standards.Modern TechnologyWe utilize advanced German and Italian machinery to guarantee superior results.Safe MaterialsUse of eco-friendly, health-certified detergents and disinfectants.Flexible TimingWe schedule our operations at your convenience to minimize any disruption to your business.", bullets: [
              { label: "Mon-Fri:", text: "9am - 6pmSaturday: 9am - 6pmSunday: Closed" },
            ] },
        ],
        gallery: [imgCleanPost, imgCleanFacade, imgCleanIndustrial, imgCleanFloor, imgCleanTank]
      },
      {
        id: "clean-facade",
        title: "External Glass & Facade Cleaning",
        image: imgCleanFacade as any,
        shortDesc: "External glass and facade cleaning.",
        content: [
          {
            type: 1,
            title: "Overview of Building Cleaning Services",
            description: "At Taj Alrahmah, we provide premium Building Cleaning Services services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Building Cleaning Services solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCleanFacade, imgCleanIndustrial, imgCleanFloor, imgCleanTank, imgCleanPost]
      },
      {
        id: "clean-industrial",        title: "Industrial & Warehouse Cleaning",
        image: imgCleanIndustrial as any,
        shortDesc: "Industrial and warehouse cleaning.",
        content: [
          {
            type: 1,
            title: "Overview of Industrial & Warehouse Cleaning",
            description: "At Taj Alrahmah, we provide premium Industrial & Warehouse Cleaning services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Industrial & Warehouse Cleaning solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCleanIndustrial, imgCleanFloor, imgCleanTank, imgCleanPost, imgCleanFacade]
      },
      {
        id: "clean-floor",        title: "Floor Deep Cleaning & Polishing",
        image: imgCleanFloor as any,
        shortDesc: "Floor deep cleaning and polishing.",
        content: [
          {
            type: 1,
            title: "Overview of Floor Deep Cleaning & Polishing",
            description: "At Taj Alrahmah, we provide premium Floor Deep Cleaning & Polishing services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Floor Deep Cleaning & Polishing solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCleanFloor, imgCleanTank, imgCleanPost, imgCleanFacade, imgCleanIndustrial]
      },
      {
        id: "clean-tank",        title: "Water Tank Cleaning & Disinfection",
        image: imgCleanTank as any,
        shortDesc: "Water tank cleaning and disinfection.",
        content: [
          {
            type: 1,
            title: "Overview of Water Tank Cleaning & Disinfection",
            description: "At Taj Alrahmah, we provide premium Water Tank Cleaning & Disinfection services designed to deliver unmatched quality and durability. Our expert team ensures every project meets the highest industry standards."
          },
          {
            type: 2,
            title: "Key Features & Benefits",
            description: "Choosing our Water Tank Cleaning & Disinfection solutions provides you with numerous advantages tailored for long-term success:",
            bullets: [
              { label: "Uncompromised Quality:", text: "We utilize top-tier materials and advanced techniques to guarantee superior results." },
              { label: "Expert Execution:", text: "Our highly trained professionals execute every phase with precision and care." },
              { label: "Long-term Durability:", text: "Engineered to withstand harsh environments and reduce maintenance overhead." }
            ]
          }
        ],
        gallery: [imgCleanTank, imgCleanPost, imgCleanFacade, imgCleanIndustrial, imgCleanFloor]
      }
    ]
  }
};
