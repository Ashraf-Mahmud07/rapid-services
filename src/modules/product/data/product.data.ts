import { Product } from "../types/product.type";

const sampleUsers = [
  {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Brown",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Davis",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Alex Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export const products: Product[] = [
  {
    id: "#001",
    thumb:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    title: "MacBook Pro 16-inch M3 Max",
    slug: "macbook-pro-16-inch-m3-max",
    category: "Laptop",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 2, 2026", user: sampleUsers[0] },
        { count: 5, isVerified: true, date: "May 28, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 20, 2026", user: sampleUsers[2] },
        { count: 5, isVerified: true, date: "May 15, 2026", user: sampleUsers[3] },
        { count: 4.9, isVerified: true, date: "May 10, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>The ultimate pro laptop featuring the groundbreaking M3 Max chip, Liquid Retina XDR display, and up to 22 hours of battery life.</p>",
    overview:
      "<h1>Unprecedented Performance and Battery Life</h1><p>Designed for extreme workflows, the MacBook Pro 16-inch delivers unmatched speed with hardware-accelerated ray tracing and up to 128GB of unified memory.</p>",
    specifications: [
      { name: "Processor", value: "Apple M3 Max (16-core CPU)" },
      { name: "Memory", value: "36GB Unified Memory" },
      { name: "Display", value: "16.2-inch Liquid Retina XDR" },
      { name: "Storage", value: "1TB Superfast SSD" },
    ],
  },
  {
    id: "#002",
    thumb:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    title: "Ultra Flagship Smartphone 5G",
    slug: "ultra-flagship-smartphone-5g",
    category: "Mobile",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 1, 2026", user: sampleUsers[1] },
        { count: 5, isVerified: true, date: "May 25, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 18, 2026", user: sampleUsers[0] },
        { count: 4.6, isVerified: true, date: "May 12, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>Experience groundbreaking 200MP camera technology, titanium enclosure, and all-day intelligent battery optimization.</p>",
    overview:
      "<h1>Redefining Mobile Photography</h1><p>Capture cinematic videos and nightography images effortlessly. Powered by the latest 4nm chipset for hyper-fast gaming and multi-tasking.</p>",
    specifications: [
      { name: "Display", value: '6.8" AMOLED 120Hz Dynamic Display' },
      { name: "Main Camera", value: "200MP + 50MP Periscope + 12MP Ultra-Wide" },
      { name: "Battery", value: "5000mAh with 65W Fast Charge" },
    ],
  },
  {
    id: "#003",
    thumb:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80",
    title: "AirPods Max Wireless Headphones",
    slug: "airpods-max-wireless-headphones",
    category: "Airpod",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 3, 2026", user: sampleUsers[2] },
        { count: 4.7, isVerified: true, date: "May 29, 2026", user: sampleUsers[3] },
        { count: 5, isVerified: true, date: "May 22, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 14, 2026", user: sampleUsers[0] },
        { count: 4.5, isVerified: true, date: "May 08, 2026", user: sampleUsers[1] },
      ],
    },
    shortOverview:
      "<p>High-fidelity audio with active noise cancellation, spatial audio with dynamic head tracking, and breathable mesh canopy.</p>",
    overview:
      "<h1>A Perfect Balance of Exhilarating Audio</h1><p>Every element of AirPods Max is crafted for uncompromised acoustic acoustic isolation and immersive cinema-like sound experience.</p>",
    specifications: [
      { name: "Audio Tech", value: "Apple H1 chip in each ear cup" },
      { name: "Battery Life", value: "Up to 20 hours listening time" },
      { name: "Charging", value: "USB-C Fast Charging" },
    ],
  },
  {
    id: "#004",
    thumb:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80",
    title: "Custom Mechanical RGB Keyboard",
    slug: "custom-mechanical-rgb-keyboard",
    category: "Technology",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 4, 2026", user: sampleUsers[3] },
        { count: 5, isVerified: true, date: "May 27, 2026", user: sampleUsers[0] },
        { count: 4.4, isVerified: true, date: "May 19, 2026", user: sampleUsers[1] },
        { count: 4.5, isVerified: true, date: "May 11, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Hot-swappable tactile switches, CNC anodized aluminum frame, per-key RGB backlighting, and dual-mode wireless connectivity.</p>",
    overview:
      "<h1>Tactile Perfection for Creators and Gamers</h1><p>Engineered with sound-dampening gaskets and premium PBT double-shot keycaps for satisfying typing acoustics.</p>",
    specifications: [
      { name: "Switches", value: "Lubed Tactile Yellow Switches" },
      { name: "Connectivity", value: "2.4GHz Wireless / Bluetooth 5.2 / Type-C" },
      { name: "Battery", value: "4000mAh (Up to 200 hours without RGB)" },
    ],
  },
  {
    id: "#005",
    thumb:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&auto=format&fit=crop&q=80",
    title: "MagSafe Wireless Desk Charger Pad",
    slug: "magsafe-wireless-desk-charger-pad",
    category: "Accessory",
    reviews: {
      average: "4.5",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 2, 2026", user: sampleUsers[4] },
        { count: 4.5, isVerified: true, date: "May 26, 2026", user: sampleUsers[0] },
        { count: 4.0, isVerified: true, date: "May 21, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 16, 2026", user: sampleUsers[2] },
        { count: 4.7, isVerified: true, date: "May 09, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>Machined aluminum base with soft-touch leather finish providing full 15W wireless fast charging for magnetic devices.</p>",
    overview:
      "<h1>Sleek Desktop Power Station</h1><p>Strong magnetic alignment ensures effortless placement and continuous high-efficiency wireless power delivery.</p>",
    specifications: [
      { name: "Max output", value: "15W Fast Charge" },
      { name: "Cable", value: "2m Braided USB-C Cable included" },
      { name: "Material", value: "Anodized Aluminum & Genuine Leather" },
    ],
  },
  {
    id: "#006",
    thumb:
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80",
    title: "Pro Noise-Cancelling TWS Earbuds",
    slug: "pro-noise-cancelling-tws-earbuds",
    category: "Earphone",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 5, isVerified: true, date: "May 30, 2026", user: sampleUsers[0] },
        { count: 4.5, isVerified: true, date: "May 23, 2026", user: sampleUsers[1] },
        { count: 4.2, isVerified: true, date: "May 17, 2026", user: sampleUsers[2] },
        { count: 4.7, isVerified: true, date: "May 07, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>Ultra-lightweight true wireless earbuds with hybrid ANC, low-latency gaming mode, and IPX5 water resistance.</p>",
    overview:
      "<h1>Immersive Sound On the Go</h1><p>Enjoy deep bass performance and crystal-clear calls driven by dual beamforming microphones and custom dynamic drivers.</p>",
    specifications: [
      { name: "Noise Control", value: "Hybrid Active Noise Cancellation (40dB)" },
      { name: "Playtime", value: "8h Earbuds + 24h Charging Case" },
      { name: "Waterproofing", value: "IPX5 Rating" },
    ],
  },
  {
    id: "#007",
    thumb:
      "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?w=600&auto=format&fit=crop&q=80",
    title: "Smart Fitness Watch Series X",
    slug: "smart-fitness-watch-series-x",
    category: "Gear",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 4, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 28, 2026", user: sampleUsers[2] },
        { count: 4.5, isVerified: true, date: "May 20, 2026", user: sampleUsers[3] },
        { count: 5, isVerified: true, date: "May 13, 2026", user: sampleUsers[4] },
        { count: 4.7, isVerified: true, date: "May 05, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>Advanced biometric sensors, dual-frequency GPS, titanium casing, and up to 14 days battery tracking.</p>",
    overview:
      "<h1>Track Your Health & Adventure</h1><p>Monitor ECG, blood oxygen, sleep quality, and over 100 outdoor workout modes with real-time analytics.</p>",
    specifications: [
      { name: "Screen", value: "1.43-inch Always-on Retina Sapphire AMOLED" },
      { name: "Water Resistance", value: "50m (5 ATM) Swimproof" },
      { name: "Sensors", value: "Optical Heart Rate, SpO2, ECG, Barometer" },
    ],
  },
  {
    id: "#008",
    thumb:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    title: "Compact Flagship Smartphone",
    slug: "compact-flagship-smartphone",
    category: "Phone",
    reviews: {
      average: "4.4",
      reviewList: [
        { count: 4, isVerified: true, date: "June 1, 2026", user: sampleUsers[2] },
        { count: 4.5, isVerified: true, date: "May 24, 2026", user: sampleUsers[3] },
        { count: 4.8, isVerified: true, date: "May 18, 2026", user: sampleUsers[4] },
        { count: 4.3, isVerified: true, date: "May 10, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>Sleek ergonomic 6.1-inch smartphone packed with desktop-class processing power and dual studio cameras.</p>",
    overview:
      "<h1>Power Meets Portability</h1><p>Designed to easily fit in one hand while offering flagship display brightness, wireless charging, and IP68 durability.</p>",
    specifications: [
      { name: "Display Size", value: '6.1" OLED HDR10+' },
      { name: "Storage", value: "256GB High-speed UFS 4.0" },
      { name: "Weight", value: "168g" },
    ],
  },
  {
    id: "#009",
    thumb:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80",
    title: "Ultra Thin 14-inch Laptop",
    slug: "ultra-thin-14-inch-laptop",
    category: "Laptop",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 5, 2026", user: sampleUsers[3] },
        { count: 4.9, isVerified: true, date: "May 31, 2026", user: sampleUsers[4] },
        { count: 5, isVerified: true, date: "May 22, 2026", user: sampleUsers[0] },
        { count: 4.8, isVerified: true, date: "May 15, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 08, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Featherweight aluminum chassis powered by 12-core ARM architecture with silent fanless thermal design.</p>",
    overview:
      "<h1>All-Day Productivity companion</h1><p>Boasts a stunning 2.8K OLED screen with 100% DCI-P3 color accuracy, ideal for creative professionals on the go.</p>",
    specifications: [
      { name: "Weight", value: "1.1kg" },
      { name: "Screen", value: '14" 2.8K 120Hz OLED' },
      { name: "Battery Life", value: "Up to 18 hours" },
    ],
  },
  {
    id: "#0010",
    thumb:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    title: "10-in-1 Thunderbolt 4 Hub Dock",
    slug: "10-in-1-thunderbolt-4-hub-dock",
    category: "Accessory",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 3, 2026", user: sampleUsers[4] },
        { count: 4.6, isVerified: true, date: "May 25, 2026", user: sampleUsers[0] },
        { count: 4.7, isVerified: true, date: "May 19, 2026", user: sampleUsers[1] },
        { count: 4.7, isVerified: true, date: "May 12, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Expand single Type-C port into dual 4K 60Hz HDMI, 100W Power Delivery pass-through, SD card reader, and Gigabit Ethernet.</p>",
    overview:
      "<h1>Instant Workstation Connectivity</h1><p>Solid aluminum heat dissipation structure ensuring stable high-speed 40Gbps data transfer rate without throttling.</p>",
    specifications: [
      { name: "Data Transfer", value: "Up to 40Gbps" },
      { name: "Power Output", value: "100W PD Pass-through" },
      { name: "Display Output", value: "Dual 4K @ 60Hz or Single 8K @ 30Hz" },
    ],
  },
  {
    id: "#0011",
    thumb:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    title: "Studio Studio Wireless Headphones",
    slug: "studio-studio-wireless-headphones",
    category: "Earphone",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 2, 2026", user: sampleUsers[0] },
        { count: 4.7, isVerified: true, date: "May 26, 2026", user: sampleUsers[1] },
        { count: 4.9, isVerified: true, date: "May 21, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 17, 2026", user: sampleUsers[3] },
        { count: 4.6, isVerified: true, date: "May 09, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>Audiophile-grade 50mm neodymium drivers, custom EQ app support, memory foam ear cushions, and 40h battery runtime.</p>",
    overview:
      "<h1>Unrivaled Sound Fidelity</h1><p>Delivers clean mids, extended highs, and punchy sub-bass tuned specifically for music producers and discerning listeners.</p>",
    specifications: [
      { name: "Driver Size", value: "50mm Neodymium" },
      { name: "Codecs", value: "LDAC, AAC, SBC" },
      { name: "Battery", value: "40 Hours Playback" },
    ],
  },
  {
    id: "#0012",
    thumb:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&auto=format&fit=crop&q=80",
    title: "Hi-Res Wireless Audio Receiver",
    slug: "hi-res-wireless-audio-receiver",
    category: "Technology",
    reviews: {
      average: "4.5",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 1, 2026", user: sampleUsers[1] },
        { count: 4.3, isVerified: true, date: "May 25, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 16, 2026", user: sampleUsers[3] },
        { count: 4.4, isVerified: true, date: "May 06, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>Transform traditional speakers and wired headphones into loss-less Bluetooth 5.3 audio streaming receivers with built-in DAC.</p>",
    overview:
      "<h1>Audiophile Wireless Conversion</h1><p>Features ES9018K2M DAC chip delivering crystal clear signal-to-noise ratio and ultra-low THD output.</p>",
    specifications: [
      { name: "DAC Chipset", value: "ESS Sabre ES9018K2M" },
      { name: "Bluetooth Version", value: "Bluetooth 5.3 with aptX HD" },
      { name: "Outputs", value: "3.5mm AUX, Optical, RCA" },
    ],
  },
  {
    id: "#0013",
    thumb:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80",
    title: "Precision Active Stylus Pen",
    slug: "precision-active-stylus-pen",
    category: "Accessory",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 4.7, isVerified: true, date: "June 4, 2026", user: sampleUsers[2] },
        { count: 4.5, isVerified: true, date: "May 29, 2026", user: sampleUsers[3] },
        { count: 4.8, isVerified: true, date: "May 20, 2026", user: sampleUsers[4] },
        { count: 4.2, isVerified: true, date: "May 14, 2026", user: sampleUsers[0] },
        { count: 4.8, isVerified: true, date: "May 07, 2026", user: sampleUsers[1] },
      ],
    },
    shortOverview:
      "<p>4096 levels of pressure sensitivity, tilt detection, zero latency, and magnetic attachment for tablet surfaces.</p>",
    overview:
      "<h1>Natural Drawing and Handwriting</h1><p>Crafted for digital artists and note-takers with palm rejection technology and replaceable fine felt tips.</p>",
    specifications: [
      { name: "Pressure Sensitivity", value: "4096 Levels" },
      { name: "Charging", value: "Magnetic Wireless / USB-C Fast Charge" },
      { name: "Battery Life", value: "12 Hours continuous use" },
    ],
  },
  {
    id: "#0014",
    thumb:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80",
    title: "Modular 5G Smartphone",
    slug: "modular-5g-smartphone",
    category: "Mobile",
    reviews: {
      average: "4.3",
      reviewList: [
        { count: 4, isVerified: true, date: "May 30, 2026", user: sampleUsers[3] },
        { count: 4.5, isVerified: true, date: "May 22, 2026", user: sampleUsers[4] },
        { count: 4.2, isVerified: true, date: "May 15, 2026", user: sampleUsers[0] },
        { count: 4.5, isVerified: true, date: "May 08, 2026", user: sampleUsers[1] },
      ],
    },
    shortOverview:
      "<p>Sustainable phone featuring easy-to-repair modular components, 50MP main sensor, and 5 years guaranteed OS updates.</p>",
    overview:
      "<h1>Eco-friendly Repairable Innovation</h1><p>Swap out battery, camera modules, or display screen yourself using a standard screwdriver in under 5 minutes.</p>",
    specifications: [
      { name: "Modularity", value: "User replaceable battery & screen" },
      { name: "Camera", value: "50MP Dual Lens" },
      { name: "Recycled Materials", value: "70% recycled plastic & fair-trade gold" },
    ],
  },
  {
    id: "#0015",
    thumb:
      "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=600&auto=format&fit=crop&q=80",
    title: "Ergonomic Vertical Wireless Mouse",
    slug: "ergonomic-vertical-wireless-mouse",
    category: "Gear",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 3, 2026", user: sampleUsers[4] },
        { count: 5, isVerified: true, date: "May 27, 2026", user: sampleUsers[0] },
        { count: 4.5, isVerified: true, date: "May 19, 2026", user: sampleUsers[1] },
        { count: 4.6, isVerified: true, date: "May 12, 2026", user: sampleUsers[2] },
        { count: 4.6, isVerified: true, date: "May 04, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>57-degree natural handshake angle reduces wrist strain, 4000 DPI precision sensor, and quiet click switches.</p>",
    overview:
      "<h1>Scientific Ergonomic Design</h1><p>Approved by physical therapists to alleviate repetitive strain injuries (RSI) during long work sessions.</p>",
    specifications: [
      { name: "Sensor", value: "4000 DPI High-Precision Optical" },
      { name: "Connectivity", value: "Bluetooth 5.0 / USB Receiver" },
      { name: "Battery", value: "Rechargeable 500mAh (Up to 4 months)" },
    ],
  },
  {
    id: "#0016",
    thumb:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    title: "Noise Isolating In-Ear Airpods",
    slug: "noise-isolating-in-ear-airpods",
    category: "Airpod",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 2, 2026", user: sampleUsers[0] },
        { count: 4.7, isVerified: true, date: "May 28, 2026", user: sampleUsers[1] },
        { count: 4.9, isVerified: true, date: "May 21, 2026", user: sampleUsers[2] },
        { count: 4.6, isVerified: true, date: "May 11, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>Adaptive transparency mode, personalized spatial audio, wireless MagSafe charging case, and IP54 dust resistance.</p>",
    overview:
      "<h1>Next-Gen Acoustic Clarity</h1><p>Custom dynamic driver paired with ultra-low distortion amplifier creates deep bass and crisp high frequencies.</p>",
    specifications: [
      { name: "Chipset", value: "Custom H2 Wireless Audio Processor" },
      { name: "Battery", value: "6h Earbuds + 30h Case" },
      { name: "Controls", value: "Touch & Swipe Controls" },
    ],
  },
  {
    id: "#0017",
    thumb:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
    title: "Extreme RTX 4090 Gaming Laptop",
    slug: "extreme-rtx-4090-gaming-laptop",
    category: "Laptop",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 5, 2026", user: sampleUsers[1] },
        { count: 5, isVerified: true, date: "May 30, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 23, 2026", user: sampleUsers[3] },
        { count: 4.9, isVerified: true, date: "May 17, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 09, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>NVIDIA GeForce RTX 4090 16GB, Intel Core i9 14900HX, 240Hz Mini-LED QHD Display, and vapor chamber thermal cooling.</p>",
    overview:
      "<h1>Unrivaled Mobile Gaming Power</h1><p>Dominate modern AAA titles with full DLSS 3 frame generation and desktop-class graphics performance.</p>",
    specifications: [
      { name: "GPU", value: "NVIDIA GeForce RTX 4090 16GB GDDR6" },
      { name: "CPU", value: "Intel Core i9-14900HX (24-core)" },
      { name: "Display", value: '17.3" QHD+ 240Hz Mini-LED' },
      { name: "RAM", value: "64GB DDR5 5600MHz" },
    ],
  },
  {
    id: "#0018",
    thumb:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    title: "Rugged Outdoor 5G Phone",
    slug: "rugged-outdoor-5g-phone",
    category: "Phone",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 1, 2026", user: sampleUsers[2] },
        { count: 4.5, isVerified: true, date: "May 24, 2026", user: sampleUsers[3] },
        { count: 4.5, isVerified: true, date: "May 18, 2026", user: sampleUsers[4] },
        { count: 4.6, isVerified: true, date: "May 10, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>IP69K drop-proof and waterproof smartphone equipped with night-vision thermal camera and 10,600mAh mammoth battery.</p>",
    overview:
      "<h1>Built for Harsh Environments</h1><p>Military standard MIL-STD-810H certified, withstands extreme temperatures, high water pressure jets, and 2m drops onto concrete.</p>",
    specifications: [
      { name: "Protection", value: "IP68 / IP69K / MIL-STD-810H" },
      { name: "Battery", value: "10,600mAh with 33W Fast Charging" },
      { name: "Thermal Imaging", value: "FLIR Thermal Sensor built-in" },
    ],
  },
  {
    id: "#0019",
    thumb:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    title: "Active Noise-Cancelling Travel Headphones",
    slug: "active-noise-cancelling-travel-headphones",
    category: "Gear",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 4, 2026", user: sampleUsers[3] },
        { count: 4.7, isVerified: true, date: "May 27, 2026", user: sampleUsers[4] },
        { count: 4.5, isVerified: true, date: "May 21, 2026", user: sampleUsers[0] },
        { count: 4.9, isVerified: true, date: "May 15, 2026", user: sampleUsers[1] },
        { count: 4.6, isVerified: true, date: "May 08, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Foldable design with ultra-soft protein leather earcups, multi-device multipoint Bluetooth connection, and 35h ANC battery life.</p>",
    overview:
      "<h1>Your Ultimate Travel Companion</h1><p>Blocks engine hum and cabin noise intelligently while providing balanced spatial sound reproduction.</p>",
    specifications: [
      { name: "ANC Mode", value: "Adaptive Auto-NC with Wind Noise Reduction" },
      { name: "Weight", value: "240g Lightweight" },
      { name: "Case", value: "Hard Shell Zipper Travel Case included" },
    ],
  },
  {
    id: "#0020",
    thumb:
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&auto=format&fit=crop&q=80",
    title: "Magnetic Aluminum Phone Desk Mount",
    slug: "magnetic-aluminum-phone-desk-mount",
    category: "Accessory",
    reviews: {
      average: "4.5",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 3, 2026", user: sampleUsers[0] },
        { count: 4.4, isVerified: true, date: "May 26, 2026", user: sampleUsers[1] },
        { count: 4.6, isVerified: true, date: "May 19, 2026", user: sampleUsers[2] },
        { count: 4.5, isVerified: true, date: "May 11, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>360-degree rotation ball joint desktop phone holder built with N52 neodymium magnets and weighted non-slip silicone base.</p>",
    overview:
      "<h1>Hands-free Workstation Elegance</h1><p>Holds phone securely in portrait or landscape mode for Zoom calls, video watching, or nightstand viewing.</p>",
    specifications: [
      { name: "Magnets", value: "16x N52 Neodymium Ring" },
      { name: "Rotation", value: "360° Ball Joint Swivel" },
      { name: "Material", value: "Space Gray Anodized Aluminum" },
    ],
  },
  {
    id: "#0021",
    thumb:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop&q=80",
    title: "Wireless Desktop Boombox Speaker",
    slug: "wireless-desktop-boombox-speaker",
    category: "Technology",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 2, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 28, 2026", user: sampleUsers[2] },
        { count: 4.6, isVerified: true, date: "May 20, 2026", user: sampleUsers[3] },
        { count: 4.9, isVerified: true, date: "May 14, 2026", user: sampleUsers[4] },
        { count: 4.7, isVerified: true, date: "May 06, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>60W total audio output with passive dual subwoofers, customizable RGB acoustic reactive lightbar, and IPX7 rating.</p>",
    overview:
      "<h1>Room-filling Sound and Deep Bass</h1><p>Connect two speakers wirelessly for true left/right stereo channel immersion at parties or home desk setups.</p>",
    specifications: [
      { name: "Power", value: "60W RMS Peak Output" },
      { name: "Battery", value: "7.4V 6000mAh (15 hours playtime)" },
      { name: "Waterproof", value: "IPX7 Submersible" },
    ],
  },
  {
    id: "#0022",
    thumb:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
    title: "Minimalist Creator Notebook 15",
    slug: "minimalist-creator-notebook-15",
    category: "Laptop",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 1, 2026", user: sampleUsers[2] },
        { count: 4.6, isVerified: true, date: "May 25, 2026", user: sampleUsers[3] },
        { count: 4.7, isVerified: true, date: "May 18, 2026", user: sampleUsers[4] },
        { count: 4.7, isVerified: true, date: "May 10, 2026", user: sampleUsers[0] },
      ],
    },
    shortOverview:
      "<p>15.6-inch 4K OLED touch display, AMD Ryzen 7 8840HS, 32GB RAM, and glass trackpad for effortless content creation.</p>",
    overview:
      "<h1>Precision Engineering for Designers</h1><p>Calibrated factory color accuracy with Delta E < 1.0, ideal for video editing, 3D modeling, and photo retouching.</p>",
    specifications: [
      { name: "Display", value: '15.6" 4K UHD OLED Touchscreen' },
      { name: "CPU", value: "AMD Ryzen 7 8840HS (8-core/16-thread)" },
      { name: "RAM", value: "32GB LPDDR5X" },
    ],
  },
  {
    id: "#0023",
    thumb:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80",
    title: "Headset Stand with Wireless Charging",
    slug: "headset-stand-with-wireless-charging",
    category: "Gear",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 4.7, isVerified: true, date: "June 4, 2026", user: sampleUsers[3] },
        { count: 4.5, isVerified: true, date: "May 29, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 22, 2026", user: sampleUsers[0] },
        { count: 4.3, isVerified: true, date: "May 16, 2026", user: sampleUsers[1] },
        { count: 4.7, isVerified: true, date: "May 08, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Dual headphone hanger aluminum post with built-in 15W Qi wireless base charger and USB 3.0 pass-through ports.</p>",
    overview:
      "<h1>Tidy Up Your Desk Setup</h1><p>Keep your favorite over-ear headphones organized while wirelessly charging your smartphone or earbud case below.</p>",
    specifications: [
      { name: "Wireless Charging", value: "15W / 10W / 7.5W Qi Certified" },
      { name: "Ports", value: "2x USB-A 3.0, 1x 3.5mm Audio Pass-through" },
      { name: "Material", value: "Solid Aluminum & Silicone" },
    ],
  },
  {
    id: "#0024",
    thumb:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    title: "Waterproof Outdoor Bluetooth Speaker",
    slug: "waterproof-outdoor-bluetooth-speaker",
    category: "Technology",
    reviews: {
      average: "4.6",
      reviewList: [
        { count: 4.6, isVerified: true, date: "June 2, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 26, 2026", user: sampleUsers[0] },
        { count: 4.4, isVerified: true, date: "May 19, 2026", user: sampleUsers[1] },
        { count: 4.6, isVerified: true, date: "May 12, 2026", user: sampleUsers[2] },
      ],
    },
    shortOverview:
      "<p>Rugged fabric finish, integrated carabiner clip, punchy 20W sound output, and 12-hour continuous battery life.</p>",
    overview:
      "<h1>Music Anywhere You Go</h1><p>Clip to your backpack or bicycle handlebar. IP67 dustproof and waterproof design lets you enjoy music in rain or snow.</p>",
    specifications: [
      { name: "Output Power", value: "20W RMS" },
      { name: "IP Rating", value: "IP67 Waterproof & Dustproof" },
      { name: "Weight", value: "540g" },
    ],
  },
  {
    id: "#0025",
    thumb:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop&q=80",
    title: "Pro Prime Camera Lens 50mm f/1.2",
    slug: "pro-prime-camera-lens-50mm-f12",
    category: "Gear",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 5, 2026", user: sampleUsers[0] },
        { count: 4.9, isVerified: true, date: "May 30, 2026", user: sampleUsers[1] },
        { count: 5, isVerified: true, date: "May 24, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 17, 2026", user: sampleUsers[3] },
        { count: 4.8, isVerified: true, date: "May 10, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>Ultra-fast f/1.2 maximum aperture, linear stepping motor autofocus, fluorine weather sealing, and creamy bokeh rendering.</p>",
    overview:
      "<h1>Masterpiece Portrait Optics</h1><p>Delivers razor-sharp edge-to-edge resolution even wide open at f/1.2, making it the premier choice for wedding and portrait photography.</p>",
    specifications: [
      { name: "Focal Length", value: "50mm Prime" },
      { name: "Aperture Range", value: "f/1.2 to f/16" },
      { name: "Filter Size", value: "82mm" },
    ],
  },
  {
    id: "#0026",
    thumb:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
    title: "Mirrorless Full-Frame Camera Body",
    slug: "mirrorless-full-frame-camera-body",
    category: "Technology",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 3, 2026", user: sampleUsers[1] },
        { count: 4.9, isVerified: true, date: "May 27, 2026", user: sampleUsers[2] },
        { count: 4.8, isVerified: true, date: "May 21, 2026", user: sampleUsers[3] },
        { count: 4.9, isVerified: true, date: "May 13, 2026", user: sampleUsers[4] },
      ],
    },
    shortOverview:
      "<p>45.7MP back-illuminated sensor, 8K 60p RAW video recording, 5-axis in-body image stabilization (IBIS), and AI eye tracking.</p>",
    overview:
      "<h1>Uncompromising Image Quality</h1><p>Capture high-speed burst shooting up to 30fps RAW with blackout-free electronic viewfinder and dual CFexpress slots.</p>",
    specifications: [
      { name: "Sensor", value: "45.7MP Full-Frame BSI CMOS" },
      { name: "Video Recording", value: "8K @ 60fps N-RAW / 4K @ 120fps" },
      { name: "Stabilization", value: "5-Axis IBIS (up to 6.0 stops)" },
    ],
  },
  {
    id: "#0027",
    thumb:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=80",
    title: "Amoled Smart Fitness Band",
    slug: "amoled-smart-fitness-band",
    category: "Gear",
    reviews: {
      average: "4.5",
      reviewList: [
        { count: 4.5, isVerified: true, date: "June 2, 2026", user: sampleUsers[2] },
        { count: 4.6, isVerified: true, date: "May 28, 2026", user: sampleUsers[3] },
        { count: 4.4, isVerified: true, date: "May 22, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 15, 2026", user: sampleUsers[0] },
        { count: 4.2, isVerified: true, date: "May 07, 2026", user: sampleUsers[1] },
      ],
    },
    shortOverview:
      "<p>1.62-inch curved AMOLED display, continuous 24/7 heart rate monitoring, stress assessment, and 14-day battery life.</p>",
    overview:
      "<h1>Lightweight Daily Health Tracking</h1><p>Weighing under 25 grams, this sleek activity tracker monitors sleep stages, VO2 max, and daily step goals seamlessly.</p>",
    specifications: [
      { name: "Display", value: '1.62" AMOLED Touch' },
      { name: "Battery", value: "190mAh (Up to 14 days typical usage)" },
      { name: "Weight", value: "22.5g with strap" },
    ],
  },
  {
    id: "#0028",
    thumb:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80",
    title: "Precision Wireless Laser Mouse",
    slug: "precision-wireless-laser-mouse",
    category: "Accessory",
    reviews: {
      average: "4.7",
      reviewList: [
        { count: 4.8, isVerified: true, date: "June 1, 2026", user: sampleUsers[3] },
        { count: 4.6, isVerified: true, date: "May 25, 2026", user: sampleUsers[4] },
        { count: 4.7, isVerified: true, date: "May 18, 2026", user: sampleUsers[0] },
        { count: 4.7, isVerified: true, date: "May 11, 2026", user: sampleUsers[1] },
      ],
    },
    shortOverview:
      "<p>MagSpeed electromagnetic scroll wheel (1000 lines/sec), Darkfield 8000 DPI sensor works on glass, multi-computer flow control.</p>",
    overview:
      "<h1>Master Productivity Navigation</h1><p>Seamlessly copy-paste text, images, and files between up to three computers using unified Bluetooth software.</p>",
    specifications: [
      { name: "Sensor", value: "8000 DPI Darkfield Laser (tracks on glass)" },
      { name: "Battery", value: "70 Days on full charge / 1 min charge gives 3 hours" },
      { name: "Buttons", value: "7 Programmable custom buttons" },
    ],
  },
  {
    id: "#0029",
    thumb:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    title: "Low-Profile Mechanical Gaming Keyboard",
    slug: "low-profile-mechanical-gaming-keyboard",
    category: "Technology",
    reviews: {
      average: "4.8",
      reviewList: [
        { count: 5, isVerified: true, date: "June 4, 2026", user: sampleUsers[4] },
        { count: 4.8, isVerified: true, date: "May 29, 2026", user: sampleUsers[0] },
        { count: 4.6, isVerified: true, date: "May 23, 2026", user: sampleUsers[1] },
        { count: 4.9, isVerified: true, date: "May 16, 2026", user: sampleUsers[2] },
        { count: 4.7, isVerified: true, date: "May 09, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>Ultra-slim aircraft-grade aluminum chassis, GL mechanical switches, LIGHTSPEED 1ms wireless, and media control roller.</p>",
    overview:
      "<h1>Ultra-thin Ergonomic Mechanical Performance</h1><p>Delivers speed, accuracy, and performance at half the height of traditional mechanical switches.</p>",
    specifications: [
      { name: "Switches", value: "Low-Profile Tactile GL Switches" },
      { name: "Wireless Latency", value: "1ms LIGHTSPEED Connection" },
      { name: "Battery Life", value: "40 hours with 100% RGB brightness" },
    ],
  },
  {
    id: "#0030",
    thumb:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80",
    title: "Curved 34-inch Ultrawide 175Hz Monitor",
    slug: "curved-34-inch-ultrawide-175hz-monitor",
    category: "Technology",
    reviews: {
      average: "4.9",
      reviewList: [
        { count: 5, isVerified: true, date: "June 5, 2026", user: sampleUsers[0] },
        { count: 4.9, isVerified: true, date: "May 30, 2026", user: sampleUsers[1] },
        { count: 4.8, isVerified: true, date: "May 22, 2026", user: sampleUsers[2] },
        { count: 4.9, isVerified: true, date: "May 14, 2026", user: sampleUsers[3] },
      ],
    },
    shortOverview:
      "<p>Quantum Dot QD-OLED panel, 1800R curvature, 0.1ms GTG response time, G-Sync Ultimate, and VESA DisplayHDR True Black 400.</p>",
    overview:
      "<h1>Ultimate Visual Immersion</h1><p>Infinite contrast ratio and true blacks combine with ultra-fast 175Hz refresh rate for stunning gaming and cinematic viewing.</p>",
    specifications: [
      { name: "Panel Type", value: '34" 21:9 WQHD QD-OLED (3440 x 1440)' },
      { name: "Refresh Rate", value: "175Hz via DisplayPort 1.4" },
      { name: "Response Time", value: "0.1ms Gray-to-Gray" },
      { name: "Ports", value: "1x DP 1.4, 2x HDMI 2.1, USB 3.2 Hub" },
    ],
  },
];
