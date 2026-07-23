export interface TherapeuticArea {
  name: string;
  slug: string;
  tag: string;
  description: string;
  focus: string;
}

export interface Product {
  slug: string;
  name: string;
  image: string;
  area: string;
  tag: string;
  use: string;
  form: 'Tablet' | 'Softgel' | 'Sachet' | 'Injection' | 'Kit';
  pack: string;
  rx: boolean;
}

export const therapeuticAreas: TherapeuticArea[] = [
  { name: 'Fertility & Ovulation', slug: 'fertility-ovulation', tag: 'Fertility', description: 'Support for a healthy ovulatory cycle and conception.', focus: 'Cycle support and conception' },
  { name: 'PCOS & Metabolic', slug: 'pcos-metabolic', tag: 'PCOS', description: 'Insulin sensitivity and hormonal balance in PCOS.', focus: 'Insulin sensitivity & balance' },
  { name: 'Prenatal & Maternal', slug: 'prenatal-maternal', tag: 'Prenatal', description: 'Nutritional support before and through pregnancy.', focus: 'Nutrition through pregnancy' },
  { name: 'Anaemia & Iron', slug: 'anaemia-iron', tag: 'Anaemia', description: 'Oral and injectable iron for maternal anaemia.', focus: 'Oral & injectable iron' },
  { name: 'Bone Health', slug: 'bone-health', tag: 'Bone', description: 'Calcium and mineral support across life stages.', focus: 'Mineral support across life' },
  { name: 'Menopause', slug: 'menopause', tag: 'Menopause', description: 'Symptom and wellbeing support in transition.', focus: 'Symptom & wellbeing support' },
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const raw: Omit<Product, 'slug'>[] = [
  { name: 'OvaGold', image: '/Products/OvaGold.svg', area: 'Fertility & Ovulation', tag: 'Fertility', use: 'Ovulation support', form: 'Tablet', pack: '10×10', rx: true },
  { name: 'OvaGold-KIT', image: '/Products/OvaGoldKit.svg', area: 'Fertility & Ovulation', tag: 'Fertility', use: 'Ovulation cycle kit', form: 'Kit', pack: '1 kit', rx: true },
  { name: 'LetroBoon', image: '/Products/LetroBoon.svg', area: 'Fertility & Ovulation', tag: 'Fertility', use: 'Letrozole 2.5 mg', form: 'Tablet', pack: '5×1', rx: true },
  { name: 'TestoPreg', image: '/Products/TestoPreg.svg', area: 'Fertility & Ovulation', tag: 'Fertility', use: 'Ovulation adjunct', form: 'Tablet', pack: '10s', rx: true },
  { name: 'New Argin', image: '/Products/New Argin.svg', area: 'Fertility & Ovulation', tag: 'Fertility', use: 'L-arginine sachet', form: 'Sachet', pack: '15s', rx: false },
  { name: 'ObiPCOS', image: '/Products/ObiPCOS.svg', area: 'PCOS & Metabolic', tag: 'PCOS', use: 'Weight & PCOS support', form: 'Tablet', pack: '10×10', rx: true },
  { name: 'GYNOSITOL', image: '/Products/GYNOSITOL.svg', area: 'PCOS & Metabolic', tag: 'PCOS', use: 'Myo-inositol', form: 'Sachet', pack: '15s', rx: false },
  { name: 'MamGold', image: '/Products/MamGold.svg', area: 'Prenatal & Maternal', tag: 'Prenatal', use: 'Prenatal multivitamin', form: 'Softgel', pack: '30s', rx: true },
  { name: 'MAM GEST', image: '/Products/MAM GEST.svg', area: 'Prenatal & Maternal', tag: 'Prenatal', use: 'Progesterone support', form: 'Softgel', pack: '10×10', rx: true },
  { name: 'L-Methylex', image: '/Products/L-Methylex.svg', area: 'Prenatal & Maternal', tag: 'Prenatal', use: 'L-methylfolate', form: 'Tablet', pack: '10×10', rx: false },
  { name: 'GREAT FER', image: '/Products/GREAT FER.svg', area: 'Anaemia & Iron', tag: 'Anaemia', use: 'Oral iron therapy', form: 'Tablet', pack: '10×15', rx: true },
  { name: 'GREAT FER Inj', image: '/Products/GREAT FER Inj.svg', area: 'Anaemia & Iron', tag: 'Anaemia', use: 'Intravenous iron', form: 'Injection', pack: '1 vial', rx: true },
  { name: 'Hopemin Forte', image: '/Products/Hopemin Forte.svg', area: 'Anaemia & Iron', tag: 'Anaemia', use: 'Haematinic', form: 'Tablet', pack: '10×10', rx: true },
  { name: 'CoralRich', image: '/Products/CoralRich.svg', area: 'Bone Health', tag: 'Bone', use: 'Coral calcium', form: 'Tablet', pack: '10×10', rx: false },
  { name: 'BOSAMINE', image: '/Products/BOSAMINE.svg', area: 'Bone Health', tag: 'Bone', use: 'Bone mineral support', form: 'Tablet', pack: '10×10', rx: true },
  { name: 'MenQMAX', image: '/Products/MenQMAX.svg', area: 'Menopause', tag: 'Menopause', use: 'Menopause support', form: 'Tablet', pack: '10×10', rx: true },
];

export const products: Product[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));

export const featuredProductNames = ['OvaGold', 'GYNOSITOL', 'MamGold', 'GREAT FER'];
export const featuredProducts: Product[] = featuredProductNames
  .map((n) => products.find((p) => p.name === n))
  .filter((p): p is Product => Boolean(p));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products.filter((p) => p.area === product.area && p.slug !== product.slug).slice(0, limit);
}

export function countByArea(areaName: string): number {
  return products.filter((p) => p.area === areaName).length;
}
