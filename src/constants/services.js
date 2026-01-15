export const SPA_SERVICES = {
  Waxing: [
    { id: "w1", name: "Underarm", price: "Ksh 500" },
    { id: "w2", name: "Underarm Brightening", price: "Ksh 500" },
    { id: "w3", name: "Chin / Face", price: "Ksh 1,000" },
    { id: "w4", name: "Half Arms", price: "Ksh 1,000" },
    { id: "w5", name: "Full Arms", price: "Ksh 1,500" },
    { id: "w6", name: "Half Leg", price: "Ksh 2,000" },
    { id: "w7", name: "Full Leg", price: "Ksh 3,500" },
    { id: "w8", name: "Bikini", price: "Ksh 1,000" },
    { id: "w9", name: "Brazilian", price: "Ksh 1,500" },
    { id: "w10", name: "Manzillian", price: "Ksh 3,000" },
    { id: "w11", name: "Armfacial", price: "Ksh 1,000" },
  ],

  Facials: [
    {
      id: "f1",
      name: "Dr. Organic (Rose Otto) – Dry Skin",
      price: "Ksh 3,000",
    },
    {
      id: "f2",
      name: "Dr. Organic (Tea Tree) – Oily Skin",
      price: "Ksh 3,500",
    },
    { id: "f3", name: "CeraVe Facial", price: "Ksh 3,500" },
    { id: "f4", name: "Neutrogena Facial", price: "Ksh 3,000" },
    { id: "f5", name: "Esthemax Facial", price: "Ksh 5,000" },
    { id: "f6", name: "Dermaplaning", price: "Ksh 800" },
    { id: "f7", name: "Facial Extraction / Steaming", price: "Ksh 800" },
    {
      id: "f8",
      name: "Facial Scrubbing / Extraction / Steaming",
      price: "Ksh 1,600",
    },
  ],

  "Spa Treatments": [
    { id: "s1", name: "Pre-Natal Massage", price: "Ksh 4,000" },
    { id: "s2", name: "Swedish Massage", price: "Ksh 3,000" },
    { id: "s3", name: "Deep Tissue Massage", price: "Ksh 4,000" },
    { id: "s4", name: "Hot Stone Massage", price: "Ksh 5,000" },
    { id: "s5", name: "Pressure Points Massage", price: "Ksh 1,500" },
    { id: "s6", name: "Aromatherapy", price: "Ksh 3,500" },
    { id: "s7", name: "Reflexology", price: "Ksh 4,500" },
    { id: "s8", name: "Hybrid Massage", price: "Ksh 3,500" },
  ],

  "Body Scrub": [
    { id: "b1", name: "Moroccan Scrub", price: "Ksh 5,000" },
    { id: "b2", name: "Coffee Scrub", price: "Ksh 3,000" },
    { id: "b3", name: "Turmeric Scrub", price: "Ksh 3,500" },
  ],

  "V-Spa": [
    { id: "v1", name: "V Steaming", price: "Ksh 1,500" },
    { id: "v2", name: "Vajacial", price: "Ksh 2,000" },
    { id: "v3", name: "Peach Treatment", price: "Ksh 3,000" },
  ],

  Eyebrows: [
    { id: "e1", name: "Micro-Shading", price: "Ksh 10,000" },
    { id: "e2", name: "Eyebrow Waxing", price: "Ksh 300" },
  ],

  Sauna: [{ id: "sa1", name: "Sauna Hut", price: "Ksh 1,000" }],

  Packages: [
    { id: "p1", name: "Couples Massage", price: "Ksh 6,000" },
    {
      id: "p2",
      name: "Birthday Package",
      includes: ["Facials", "Body Scrub", "Massage"],
      price: "Ksh 9,000",
    },
    {
      id: "p3",
      name: "Bridal Package",
      includes: ["Facials", "Body Scrub", "Brazilian Underarm"],
      price: "Ksh 8,500",
    },
  ],
};
