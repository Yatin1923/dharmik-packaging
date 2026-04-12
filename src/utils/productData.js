import boxImage from '../assets/images/corrogated-box.webp';
import sheetImage from '../assets/images/corrogated-sheet.webp';
import rollImage from '../assets/images/corrogated-roll.webp';

export const products = [
  {
    id: 1,
    slug: 'corrugated-boxes',
    name: 'Corrugated Boxes',
    shortDescription: 'Durable and versatile corrugated boxes for shipping, storage, and retail packaging. Custom sizes and printing available.',
    description: 'Corrugated boxes are the backbone of modern packaging solutions. Made from corrugated cardboard featuring a fluted inner layer sandwiched between two flat outer layers, these boxes deliver exceptional strength, durability, and versatility. They are the go-to choice for shipping, storage, and retail packaging across industries worldwide.',
    image: boxImage,
    features: [
      'Superior strength-to-weight ratio',
      'Custom sizes and dimensions available',
      'Full-color printing for branding',
      'Eco-friendly and 100% recyclable',
      'Available in single, double, and triple wall',
      'Die-cut and custom shapes available',
    ],
    specifications: [
      { label: 'Material', value: 'Virgin / Recycled Kraft Paper' },
      { label: 'Flute Types', value: 'A, B, C, E, F, BC, BE' },
      { label: 'Wall Types', value: 'Single Wall, Double Wall, Triple Wall' },
      { label: 'Printing', value: 'Flexo / Offset / Digital' },
      { label: 'GSM Range', value: '100 - 350 GSM' },
      { label: 'Customization', value: 'Size, Shape, Print, Coating' },
    ],
    applications: [
      'E-commerce shipping',
      'FMCG packaging',
      'Food & beverage',
      'Electronics packaging',
      'Pharmaceutical packaging',
      'Retail display boxes',
    ],
  },
  {
    id: 2,
    slug: 'corrugated-sheets',
    name: 'Corrugated Sheets',
    shortDescription: 'Strong, lightweight corrugated sheets for packaging, cushioning, and protective layer applications.',
    description: 'Corrugated sheets are flat, strong, and lightweight materials crafted from corrugated cardboard, featuring a series of parallel ridges and furrows. They serve as versatile solutions for packaging, shipping protection, and industrial applications. Highly customizable for various needs, corrugated sheets are an essential component in modern packaging and construction.',
    image: sheetImage,
    features: [
      'Flat and easy to cut to size',
      'Excellent cushioning properties',
      'Available in various thicknesses',
      'Can be scored and folded',
      'Lightweight yet strong',
      'Cost-effective protection solution',
    ],
    specifications: [
      { label: 'Material', value: 'Kraft / Test Liner Paper' },
      { label: 'Flute Types', value: 'A, B, C, E, BC' },
      { label: 'Thickness', value: '2mm - 7mm' },
      { label: 'Sizes', value: 'Custom cut to requirement' },
      { label: 'GSM Range', value: '120 - 300 GSM' },
      { label: 'Surface', value: 'Brown / White / Printed' },
    ],
    applications: [
      'Layer pads between products',
      'Pallet separators',
      'Product wrapping',
      'Floor and surface protection',
      'Partition creation',
      'DIY and crafting',
    ],
  },
  {
    id: 3,
    slug: 'corrugated-rolls',
    name: 'Corrugated Rolls',
    shortDescription: 'Flexible corrugated rolls for wrapping, cushioning, and protecting items during shipping and storage.',
    description: 'Corrugated rolls are continuous sheets of wavy corrugated cardboard, designed for wrapping and protecting items during shipping, moving, or storage. Easy to cut to any desired size, these rolls provide excellent cushioning and support for products of all shapes and sizes. An indispensable tool for businesses that need flexible, on-demand packaging protection.',
    image: rollImage,
    features: [
      'Continuous roll for custom lengths',
      'Easy to tear and cut',
      'Flexible wrapping for any shape',
      'Excellent shock absorption',
      'Stackable and space-efficient',
      'Biodegradable and recyclable',
    ],
    specifications: [
      { label: 'Material', value: 'Kraft Paper with Fluted Medium' },
      { label: 'Flute Types', value: 'A, B, C, E' },
      { label: 'Roll Width', value: '300mm - 1500mm' },
      { label: 'Roll Length', value: '10m - 75m per roll' },
      { label: 'GSM Range', value: '100 - 250 GSM' },
      { label: 'Core Diameter', value: '76mm standard' },
    ],
    applications: [
      'Furniture wrapping',
      'Glass and fragile item protection',
      'Void filling in boxes',
      'Surface protection during renovation',
      'Moving and relocation',
      'Interleaving for stacked products',
    ],
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};
