export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  philosophy: string;
  education: string;
  avatarUrl: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  doctor: string;
  rating: number;
  badge: string;
  date: string;
  text: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  duration: string;
  comfortLevel: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-angie-nauman',
    name: 'Dr. Angie Nauman, DDS',
    title: 'Senior Partner & Restorative Specialist',
    specialty: 'Comprehensive Restorative & Implant Prosthetics',
    bio: 'With over two decades serving Green Country families, Dr. Nauman combines surgical precision with gentle restorative craftsmanship, transforming damaged or worn smiles into vibrant, lifelong assets.',
    philosophy: '"Every smile carries an identity. Our mission is to restore comfort, function, and natural grace without compromise."',
    education: 'University of Oklahoma College of Dentistry',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813591-9e66336a9288?auto=format&fit=crop&w=800&q=80',
    highlights: ['20+ Years Clinical Mastery', 'Academy of General Dentistry', 'Full Mouth Rehabilitation']
  },
  {
    id: 'dr-rachel-standlee',
    name: 'Dr. Rachel L. Standlee, DDS',
    title: 'Partner & Family Care Director',
    specialty: 'Pediatric Care, Preventive Wellness & Gentle Therapy',
    bio: 'Beloved across Tulsa and Bixby for her radiant, infectious positivity and gentle touch. Dr. Standlee excels at transforming fearful young patients and nervous adults into confident, relaxed dental regulars.',
    philosophy: '"Dental visits should feel like visiting trusted friends. When fear dissolves, exceptional health naturally follows."',
    education: 'University of Oklahoma College of Dentistry',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Specialist in Anxious Patients', 'Pediatric Early Intervention', 'Top-Voted Bixby Family Dentist']
  },
  {
    id: 'dr-meghan-sellmeyer',
    name: 'Dr. Meghan Sellmeyer, DDS',
    title: 'Partner & Cosmetic Artisan',
    specialty: 'Handcrafted Porcelain Veneers & Advanced Sedation',
    bio: 'An artist at heart, Dr. Meghan Sellmeyer utilizes ultra-conservative microscopic preparation, digital smile previews, and conscious sedation to deliver natural, camera-ready smiles.',
    philosophy: '"A great cosmetic restoration should never look synthetic. It should radiate life, translucency, and harmonious symmetry."',
    education: 'University of Missouri-Kansas City School of Dentistry',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Custom Porcelain Veneers', 'Certified Oral Sedationist', 'Digital Smile Blueprinting']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'gentle-family-preventive',
    title: 'Preventive Wellness & Gentle Hygiene',
    category: 'Foundational Care',
    description: 'Thorough, pain-free cleanings using warm-water piezoelectric scalers, gentle remineralizing fluoride, and painless digital diagnostics.',
    benefits: ['Warm-water ultrasonic scaling', 'Sub-gingival laser therapy', 'Oral systemic health screen'],
    duration: '50 mins',
    comfortLevel: 'Zero discomfort • Spa ambiance'
  },
  {
    id: 'cosmetic-smile-design',
    title: 'Cosmetic Veneers & Smile Makeovers',
    category: 'Aesthetic Dentistry',
    description: 'Ultra-thin, custom hand-layered porcelain veneers and non-invasive composite bonding designed to complement your facial proportions.',
    benefits: ['Digital mock-up preview', 'Conservative enamel preservation', 'Natural multi-layer translucency'],
    duration: '2 appointments',
    comfortLevel: 'Completely comfortable with local sedation'
  },
  {
    id: 'anxiety-free-sedation',
    title: 'Relaxation & Conscious Sedation',
    category: 'Anxiety Relief',
    description: 'Banish dental dread forever. We offer nitrous oxide (laughing gas) and oral conscious twilight sedation so your visit passes in a flash.',
    benefits: ['Wake up with work completed', 'Amnesic effect eliminates memory of procedure', 'Constant vitals monitoring'],
    duration: 'Custom to treatment',
    comfortLevel: 'Deep tranquility & restful relaxation'
  },
  {
    id: 'dental-implants-restorations',
    title: 'Permanent Dental Implants',
    category: 'Restorative Arts',
    description: 'Precision-guided implant tooth replacement that looks, chews, and functions just like your natural tooth for decades.',
    benefits: ['Bone preservation', 'Zero damage to adjacent teeth', 'Lifetime stability & function'],
    duration: 'Staged care',
    comfortLevel: 'Minimal downtime • Gentle protocol'
  },
  {
    id: 'invisalign-clear-aligners',
    title: 'Clear Orthodontic Aligners',
    category: 'Smile Alignment',
    description: 'Discreet, removable clear aligners to correct crowding, gaps, and bite misalignment without metal wires or brackets.',
    benefits: ['Virtually invisible', 'No dietary restrictions', 'Faster average completion time'],
    duration: '6–14 months',
    comfortLevel: 'Smooth, irritation-free wear'
  },
  {
    id: 'sleep-apnea-snoring',
    title: 'Sleep Apnea & Airway Therapy',
    category: 'Whole-Body Health',
    description: 'Comfortable custom-milled oral appliances that gently hold the airway open at night, providing a restful alternative to bulky CPAP masks.',
    benefits: ['Silent, CPAP-free sleep', 'Custom ergonomic fit', 'Clinically proven airway stabilization'],
    duration: '2 visits',
    comfortLevel: 'Lightweight night wear'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    location: 'Bixby, OK',
    doctor: 'Dr. Rachel Standlee',
    rating: 5,
    badge: '100% Recommended on Facebook',
    date: 'Verified Patient',
    text: 'Dr. Standlee is wonderful! She is so upbeat, compassionate, and crystal clear on treatment options. I used to panic before any dental visit, but here I actually look forward to my appointments.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'David & Kelly H.',
    location: 'South Tulsa, OK',
    doctor: 'Dr. Angie Nauman',
    rating: 5,
    badge: 'Facebook Community Review',
    date: 'Verified Family',
    text: 'Our entire family of five has trusted Dr. Nauman for 12 years. From our kids’ first cleanings to my recent crown, their gentle approach and warmth are second to none in Oklahoma.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Courtney T.',
    location: 'Broken Arrow, OK',
    doctor: 'Dr. Meghan Sellmeyer',
    rating: 5,
    badge: 'Cosmetic Transformation',
    date: 'Verified Patient',
    text: 'Dr. Sellmeyer crafted 6 porcelain veneers for my front teeth. The results look so breathtaking and natural! Nobody guesses I have veneers, they just tell me I have a movie star smile.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Mark R.',
    location: 'Jenks, OK',
    doctor: 'Sedation Team',
    rating: 5,
    badge: 'Anxiety-Free Sedation Patient',
    date: 'Verified Patient',
    text: 'I avoided the dentist for nearly 8 years due to traumatic childhood memories. Care Family Dentistry used oral sedation, and I felt absolutely zero pain or fear. They literally changed my life.',
    verified: true
  }
];
