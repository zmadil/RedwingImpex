export interface ProductVariant {
  name: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  coverImage: string;
  images: string[];
  variants: ProductVariant[];
  customization?: string;
}

export const heroImage = "/images/hero.png";

export const productCategories: ProductCategory[] = [
  {
    id: "edible-salt",
    name: "Edible Salt",
    slug: "edible-salt",
    icon: "🧂",
    tagline: "Pure Himalayan flavor for every table",
    description:
      "Premium Himalayan edible salt in a range of granule sizes and mesh grades, perfect for retail, food service, and industrial applications. Hand-mined from ancient Himalayan deposits and available in light pink, medium pink, dark pink, and natural white varieties.",
    coverImage: "/images/edible-salt/1.png",
    images: [
      "/images/edible-salt/1.png",
      "/images/edible-salt/2.png",
      "/images/edible-salt/3.png",
      "/images/edible-salt/4.png",
      "/images/edible-salt/5.png",
      "/images/edible-salt/6.png",
      "/images/edible-salt/7.png",
      "/images/edible-salt/8.png",
    ],
    variants: [
      { name: "Light Pink Granules", description: "2–5mm" },
      { name: "Medium Pink Granules", description: "2–5mm" },
      { name: "Dark Pink Granules", description: "2–5mm" },
      { name: "Natural White Granules" },
      { name: "Running Salt 20 Mesh" },
      { name: "Running Salt 30 Mesh" },
      { name: "Running Salt 40 Mesh" },
      { name: "Running Salt 50 Mesh" },
    ],
    customization: "Custom mesh sizes available on request",
  },
  {
    id: "salt-lamps",
    name: "Salt Lamps",
    slug: "salt-lamps",
    icon: "🕯️",
    tagline: "Warm ambiance, natural wellness",
    description:
      "Handcrafted Himalayan salt lamps in natural, geometric, and decorative forms. Each lamp emits a warm amber glow and is believed to release negative ions that purify the air. Available in a wide range of bases and finishes for retail and wholesale.",
    coverImage: "/images/salt-lamps/1.png",
    images: [
      "/images/salt-lamps/1.png",
      "/images/salt-lamps/2.png",
      "/images/salt-lamps/3.png",
      "/images/salt-lamps/4.png",
      "/images/salt-lamps/5.png",
      "/images/salt-lamps/6.png",
      "/images/salt-lamps/7.png",
      "/images/salt-lamps/8.png",
      "/images/salt-lamps/9.png",
      "/images/salt-lamps/10.png",
      "/images/salt-lamps/11.png",
      "/images/salt-lamps/12.png",
      "/images/salt-lamps/13.png",
      "/images/salt-lamps/14.png",
      "/images/salt-lamps/15.png",
      "/images/salt-lamps/16.png",
      "/images/salt-lamps/17.png",
      "/images/salt-lamps/18.png",
      "/images/salt-lamps/19.png",
      "/images/salt-lamps/20.png",
    ],
    variants: [
      { name: "Natural Shape Lamp" },
      { name: "Geometric Shape Lamp" },
      { name: "Figure Shape Lamp" },
      { name: "USB Salt Lamp" },
      { name: "Wooden Base Lamp" },
      { name: "Iron Base Lamp" },
      { name: "Fire Bowl Lamp" },
      { name: "Night Light" },
      { name: "LED String Light" },
      { name: "Three-Tone Lamp" },
      { name: "Black Salt Lamp" },
    ],
    customization: "Custom sizing, wooden / marble / plastic bases available",
  },
  {
    id: "salt-candle-holders",
    name: "Salt Candle Holders",
    slug: "salt-candle-holders",
    icon: "🕯️",
    tagline: "Sculpted light, natural beauty",
    description:
      "Himalayan salt candle holders that diffuse a warm, soothing glow. Each piece is hand-carved from solid Himalayan salt crystal, casting a beautiful amber light that creates a calming atmosphere. Available in natural, geometric, and metal-accented styles.",
    coverImage: "/images/salt-candle-holders/1.png",
    images: [
      "/images/salt-candle-holders/1.png",
      "/images/salt-candle-holders/2.png",
      "/images/salt-candle-holders/3.png",
    ],
    variants: [
      { name: "Natural Shape Candle Holder" },
      { name: "Geometric Candle Holder" },
      { name: "Metal Candle Holder" },
    ],
  },
  {
    id: "bath-salt",
    name: "Bath Salt & Personal Care",
    slug: "bath-salt",
    icon: "🛁",
    tagline: "Luxury mineral bathing experience",
    description:
      "Premium Himalayan bath salts and personal care products for spa, wellness, and retail markets. Rich in over 80 trace minerals, our bath salts deeply nourish and rejuvenate the skin while providing a therapeutic, relaxing soak.",
    coverImage: "/images/bath-salt/1.png",
    images: [
      "/images/bath-salt/1.png",
      "/images/bath-salt/2.png",
      "/images/bath-salt/3.png",
      "/images/bath-salt/4.png",
    ],
    variants: [
      { name: "Pink Crystal Chunks", description: "2–5cm" },
      { name: "Light Pink Bath Granules", description: "2–5mm" },
      { name: "Medium Pink Bath Granules", description: "2–5mm" },
      { name: "Dark Pink Bath Granules", description: "2–5mm" },
      { name: "Salt Deo Stick" },
      { name: "Salt Balls" },
      { name: "Heart-Shaped Salt Soap" },
      { name: "Salt Soap Bar" },
    ],
  },
  {
    id: "culinary-salt",
    name: "Culinary Salt Products",
    slug: "culinary-salt",
    icon: "🍽️",
    tagline: "Cook, serve, and impress",
    description:
      "Himalayan salt culinary accessories for gourmet kitchens and restaurants. Our natural salt blocks, plates, and utensils can be heated for grilling or chilled for serving — imparting a subtle mineral flavor and making a stunning table centerpiece.",
    coverImage: "/images/culinary-salt/1.png",
    images: [
      "/images/culinary-salt/1.png",
      "/images/culinary-salt/2.png",
      "/images/culinary-salt/3.png",
      "/images/culinary-salt/4.png",
      "/images/culinary-salt/5.png",
      "/images/culinary-salt/6.png",
      "/images/culinary-salt/7.png",
      "/images/culinary-salt/8.png",
    ],
    variants: [
      { name: "Mortar & Pestle Set" },
      { name: "Salt Salad Bowl" },
      { name: "Serving Plate" },
      { name: "Rectangular Grilling Plate" },
      { name: "Round Grilling Plate" },
      { name: "Salt Glassware" },
    ],
  },
  {
    id: "animal-lick-salt",
    name: "Animal Lick Salt",
    slug: "animal-lick-salt",
    icon: "🐄",
    tagline: "Natural minerals for healthy livestock",
    description:
      "Himalayan mineral lick salt for cattle, horses, sheep, and other livestock. Packed with over 80 trace minerals essential for animal health, our lick salts support bone strength, muscle function, and overall vitality in animals.",
    coverImage: "/images/animal-lick-salt/1.png",
    images: [
      "/images/animal-lick-salt/1.png",
      "/images/animal-lick-salt/2.png",
      "/images/animal-lick-salt/3.png",
      "/images/animal-lick-salt/4.png",
    ],
    variants: [
      { name: "Natural Cylinder Lick Salt" },
      { name: "Rock Salt Lumps" },
      { name: "Feed Additive Salt" },
      { name: "Square Block Lick Salt" },
    ],
  },
  {
    id: "aromatherapy-salt",
    name: "Aromatherapy Salt",
    slug: "aromatherapy-salt",
    icon: "💆",
    tagline: "Breathe, relax, rejuvenate",
    description:
      "Himalayan salt aromatherapy products for wellness centers, spas, and retail. Our naturally ionizing salt blocks and diffusers release negative ions that help neutralize pollutants and allergens, promoting cleaner, fresher air for a healthier environment.",
    coverImage: "/images/aromatherapy-salt/1.png",
    images: [
      "/images/aromatherapy-salt/1.png",
      "/images/aromatherapy-salt/2.png",
      "/images/aromatherapy-salt/3.png",
      "/images/aromatherapy-salt/4.png",
      "/images/aromatherapy-salt/5.png",
      "/images/aromatherapy-salt/6.png",
    ],
    variants: [
      { name: "Detox Dome" },
      { name: "Detox Block" },
      { name: "Aroma Diffuser Candle" },
      { name: "Aroma Diffuser Lamp" },
    ],
  },
  {
    id: "salt-decor-tiles",
    name: "Salt Décor Tiles",
    slug: "salt-decor-tiles",
    icon: "🧱",
    tagline: "Natural elegance for modern interiors",
    description:
      "Himalayan salt decorative tiles and wall panels for spas, restaurants, homes, and wellness spaces. Each tile is cut from pure Himalayan salt crystal, creating a stunning natural aesthetic that glows warmly when backlit.",
    coverImage: "/images/salt-decor-tiles/1.png",
    images: [
      "/images/salt-decor-tiles/1.png",
      "/images/salt-decor-tiles/2.png",
      "/images/salt-decor-tiles/3.png",
      "/images/salt-decor-tiles/4.png",
      "/images/salt-decor-tiles/5.png",
      "/images/salt-decor-tiles/6.png",
    ],
    variants: [
      { name: "Rectangular Tile" },
      { name: "Square Tile" },
      { name: "Round Tile" },
      { name: "Salt Wall Stone" },
    ],
  },
];

export const contacts = [
  {
    name: "Kashif Saeed",
    phone: "+90 555 146 43 84",
    email: "kashif@redwingimpex.com",
    role: "Sales Director",
  },
  {
    name: "Umar Suhail",
    phone: "+90 552 706 86 27",
    email: "umar@redwingimpex.com",
    role: "Export Manager",
  },
];
