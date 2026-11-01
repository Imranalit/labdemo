export type Test = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  badge?: string;
  featured?: boolean;
  features: string[];
  icon: string;
};

export type Package = {
  id: string;
  name: string;
  description: string;
  price: number;
  testsIncluded: number;
  tag?: string;
  featured?: boolean;
  tests: string[];
};

export const CATEGORIES = ["All", "Thyroid", "Diabetes", "Pregnancy", "Liver", "Kidney", "COVID"];

export const TESTS: Test[] = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    category: "Diabetes",
    description: "Advanced fertility and reproductive health tests.",
    price: 85,
    badge: "Most Popular",
    featured: true,
    icon: "🩸",
    features: ["CBC with Metabolic Profile", "Heart Health Markers", "Endocrine Hormone Profile", "Tumor Marker Tests"],
  },
  {
    id: "liver",
    name: "Liver Function Test",
    category: "Liver",
    description: "Comprehensive panel for liver enzyme and function assessment.",
    price: 150,
    icon: "🫀",
    features: ["Liver Enzyme Panel", "Bilirubin & Albumin", "Hepatitis Screening", "Fatty Liver Markers"],
  },
  {
    id: "covid",
    name: "COVID-19 RT-PCR",
    category: "COVID",
    description: "Nasopharyngeal swab with same-day result availability.",
    price: 140,
    icon: "🦠",
    features: ["RT-PCR Gold Standard", "Valid for Travel", "Same-Day Option", "WHO Approved Method"],
  },
  {
    id: "thyroid",
    name: "Thyroid Profile (TSH, T3, T4)",
    category: "Thyroid",
    description: "Complete thyroid hormone assessment panel.",
    price: 120,
    badge: "Best Value",
    icon: "🛡",
    features: ["TSH, Free T3 & T4", "Thyroid Antibodies", "Same-Day Reports", "Doctor Reviewed"],
  },
  {
    id: "hba1c",
    name: "HbA1c — Diabetes Check",
    category: "Diabetes",
    description: "3-month average blood sugar monitoring.",
    price: 65,
    icon: "📈",
    features: ["No Fasting Required", "Home Collection", "24-Page Report", "Doctor Reviewed"],
  },
  {
    id: "vitamin-d",
    name: "Vitamin D Total",
    category: "Kidney",
    description: "Measure your Vitamin D level accurately.",
    price: 95,
    icon: "🧫",
    features: ["Quantitative Assay", "Doctor Reviewed", "Home Collection", "24 Hrs Reports"],
  },
];

export const PACKAGES: Package[] = [
  {
    id: "full-body",
    name: "Full Body Master Check 1",
    price: 849,
    testsIncluded: 125,
    description: "Comprehensive full-body screening for professionals.",
    featured: true,
    tag: "Best Seller",
    icon: "🥇",
    tests: ["CBC with Metabolic Profile", "Heart Health Markers", "Endocrine Hormone Profile", "Tumor Marker Tests", "Diabetes Screening", "Liver & Kidney Panel"],
  },
  {
    id: "wtmgmt",
    name: "Weight Management Check",
    price: 449,
    testsIncluded: 95,
    description: "Complete health screening for the family.",
    icon: "⚖️",
    tests: ["Thyroid Function", "Lipid Profile", "Vitamin D & B12", "HbA1c", "Iron Studies", "Metabolic Profile"],
  },
  {
    id: "skinwellness",
    name: "Skin & Hair Wellness",
    price: 299,
    testsIncluded: 75,
    description: "Comprehensive full-body screening.",
    icon: "🌸",
    tests: ["CBC with Metabolic Profile", "Vitamin Panel", "Hormone Screening", "Allergy Markers", "Zinc & Iron Studies", "Thyroid Function"],
  },
  {
    id: "comprehensive-health-check",
    name: "Comprehensive Health Check",
    price: 129,
    testsIncluded: 65,
    description: "Comprehensive full-body screening for professionals.",
    icon: "🧪",
    tests: ["CBC", "Lipid Profile", "Fasting Glucose", "Urine Analysis", "Vitamin D", "Liver Function"],
  },
  {
    id: "renal-health",
    name: "Renal Health Check",
    price: 249,
    testsIncluded: 40,
    description: "Focused kidney function and electrolyte panel.",
    icon: "🩺",
    tests: ["Urea & Creatinine", "Electrolytes", "Urinalysis", "Uric Acid", "eGFR", "Calcium"],
  },
  {
    id: "women-health",
    name: "Women's Wellness Package",
    price: 399,
    testsIncluded: 80,
    description: "Designed for women's health at every stage.",
    icon: "👩‍⚕️",
    tests: ["CBC with Metabolic Profile", "Iron Studies & Vitamin Check", "Hormone Passport", "Thyroid Function Profile", "Pap/Dual Marker", "Heart Markers"],
  },
];

export const STATS = [
  { value: "500k+", label: "Happy Patients" },
  { value: "100+", label: "Expert Specialists" },
  { value: "CAP", label: "Accredited" },
  { value: "24 Hrs", label: "Report Delivery" },
];

export const WHY_CARDS = [
  {
    icon: "⚡",
    title: "Speed",
    description:
      "Fast, precise lab testing with expedited options for urgent needs and same-day availability.",
  },
  {
    icon: "🔬",
    title: "Quality",
    description:
      "Accredited labs, proven methods and consistent outcomes that patients can rely on.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    description:
      "Protecting every patient and process with hygiene beyond standards — your comfort comes first.",
  },
  {
    icon: "🧭",
    title: "Care",
    description:
      "Healthcare that guides you before and after every test, with expert advice at every step.",
  },
];

export const WHY_POINTS = [
  { icon: "🧪", label: "Largest lab network across GCC" },
  { icon: "💰", label: "Best rates in the industry" },
  { icon: "⏱️", label: "One time report with best TAT" },
  { icon: "✅", label: "Strict Quality Checks" },
  { icon: "🖥️", label: "Seamless Integration of IT" },
  { icon: "👨‍⚕️", label: "Verified Pathologists" },
];

export const PROCESS_STEPS = [
  { icon: "📅", title: "Appointment Management", desc: "Choose your test and book online in two minutes" },
  { icon: "🧪", title: "Sample Collection", desc: "Home visit or walk-in at 100+ collection centres" },
  { icon: "🔬", title: "Laboratory Analysis", desc: "Processed in accredited labs with dual verification" },
  { icon: "✅", title: "Quality Verification", desc: "Every result reviewed by certified pathologists" },
  { icon: "📥", title: "Report Delivery", desc: "Digital reports within 24 hours, delivered securely" },
];

export const TESTIMONIALS = [
  {
    name: "Nadia Qureshi",
    role: "Teacher",
    text: "They came to my office to collect the sample and the results were ready by evening. The whole process was seamless — best experience I've had with any lab.",
  },
  {
    name: "Ahmed Farouk",
    role: "Patient",
    text: "Beautiful experience. The reception was warm and courteous, the report arrived in less than 24 hours, and the doctor explained every finding clearly. I finally understand my health data.",
  },
  {
    name: "Priya Nair",
    role: "Corporate HR",
    text: "We run annual screening for our whole company through HealthPlus Labs. From booking to results, everything was smooth, professional and perfectly organised.",
  },
];

export const FAQS = [
  {
    q: "How do I prepare for a blood test?",
    a: "Most basic blood tests don't need any fasting. For HbA1c, glucose, and lipid panels, we recommend a 8-12 hour fasting window. Water is always allowed. Your booking confirmation will list any specific preparation steps for the tests you ordered.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can book online through the booking form on this website, choose a home collection slot, or walk into any of our 100+ collection centres across the GCC. It takes under two minutes and no account is needed.",
  },
  {
    q: "How can I download my reports?",
    a: "As soon as your report is verified by our pathologists, you'll receive an SMS and email with a secure link. Simply enter the access code from the SMS to download your PDF report anytime.",
  },
  {
    q: "Do you offer home sample collection?",
    a: "Yes! Home sample collection is available in all major cities from 7 AM to 12 PM daily, and it's free for bookings above AED 100. Choose 'Home Collection' during booking.",
  },
  {
    q: "See lab reports be interpreted?",
    a: "Every report is reviewed by a certified pathologist and includes plain-language reference ranges. For any abnormal result, you can book a free 10-minute consultation with one of our physicians.",
  },
];
