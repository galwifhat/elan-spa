// src/data/treatmentImages.js
export const treatmentImages = [
  {
    id: 1,
    title: "Waxing",
    alt: "Professional waxing treatment",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    hasOverlay: true,
    hoverEffect: true,
    category: "hair-removal",
  },
  {
    id: 2,
    title: "Signature Facials",
    alt: "Luxury facial treatment",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    hasOverlay: true,
    hoverEffect: true,
    textSize: "text-xl",
    category: "skincare",
  },
  {
    id: 3,
    title: "Nails",
    alt: "Professional nail care",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    hasOverlay: false,
    hoverEffect: false,
    category: "nail-care",
  },
  {
    id: 4,
    title: "V-Spa",
    alt: "Intimate spa treatment",
    src: "https://images.unsplash.com/photo-1540555700478-4be2890c5d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    hasOverlay: true,
    hoverEffect: true,
    category: "intimate-care",
  },
  {
    id: 5,
    title: "Body Scrub",
    alt: "Exfoliating body treatment",
    src: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    hasOverlay: false,
    hoverEffect: false,
    category: "body-treatment",
  },
  {
    id: 6,
    title: "Massage",
    alt: "Relaxing massage therapy",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    hasOverlay: false,
    hoverEffect: false,
    category: "massage",
  },
];

export const promoImages = [
  {
    id: 1,
    title: "Couples Package",
    alt: "Couples spa experience",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Romantic spa experience for two",
    price: "KSh 12,500",
    duration: "2.5 hours",
  },
  {
    id: 2,
    title: "Detox Special",
    alt: "Detox spa treatment",
    src: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Full body detox & rejuvenation",
    price: "KSh 8,900",
    duration: "2 hours",
  },
  {
    id: 3,
    title: "Membership",
    alt: "Spa membership benefits",
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Exclusive member benefits & discounts",
    price: "KSh 25,000/month",
    duration: "Unlimited access",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Client",
    duration: "2+ years",
    quote:
      "The best spa experience in Nairobi. The gold standard of care and relaxation.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    duration: "6 months",
    quote:
      "Perfect escape from the city hustle. Professional staff and serene environment.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Frequent Visitor",
    duration: "1 year",
    quote: "Their facial treatments transformed my skin. Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
];

// You can also add a function to filter by category if needed
export const getTreatmentsByCategory = (category) => {
  return treatmentImages.filter((treatment) => treatment.category === category);
};

export const getTreatmentById = (id) => {
  return treatmentImages.find((treatment) => treatment.id === id);
};
