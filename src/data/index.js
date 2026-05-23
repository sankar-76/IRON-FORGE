export const NAV_LINKS = ['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Contact']

export const STATS = [
  { value: '12K+', label: 'Active Members' },
  { value: '50+',  label: 'Expert Trainers' },
  { value: '200+', label: 'Weekly Classes'  },
  { value: '98%',  label: 'Satisfaction Rate' },
]

// icon is a lucide icon name string — resolved in Programs.jsx
export const PROGRAMS = [
  {
    iconName: 'Zap',
    title: 'HIIT Training',
    desc: 'High-intensity interval training to incinerate fat and skyrocket your metabolism in record time.',
    tag: 'Fat Burn',
    duration: '45 min',
    level: 'All Levels',
  },
  {
    iconName: 'Dumbbell',
    title: 'Strength & Power',
    desc: 'Build raw, functional muscle with progressive overload and periodised programming.',
    tag: 'Muscle',
    duration: '60 min',
    level: 'Intermediate',
  },
  {
    iconName: 'Wind',
    title: 'Yoga & Flexibility',
    desc: 'Restore mobility, sharpen focus, and build the flexibility your body deserves.',
    tag: 'Recovery',
    duration: '60 min',
    level: 'All Levels',
  },
  {
    iconName: 'Shield',
    title: 'Boxing & MMA',
    desc: 'Master combat techniques while getting an insane full-body conditioning workout.',
    tag: 'Combat',
    duration: '75 min',
    level: 'Beginner+',
  },
  {
    iconName: 'Bike',
    title: 'Cycle Studio',
    desc: 'High-energy group cycling classes synced to driving beats. Zero to hero on two wheels.',
    tag: 'Cardio',
    duration: '50 min',
    level: 'All Levels',
  },
  {
    iconName: 'Trophy',
    title: 'Olympic Lifting',
    desc: 'Snatch, clean & jerk — coached technique sessions for serious performance athletes.',
    tag: 'Advanced',
    duration: '90 min',
    level: 'Advanced',
  },
]

export const TRAINERS = [
  {
    name: 'Marcus Cole',
    role: 'Strength Coach',
    experience: '12 yrs',
    speciality: 'Powerlifting',
    initials: 'MC',
    gradient: 'from-orange-900 to-red-900',
    certifications: ['NSCA-CSCS', 'USAW Level 2'],
    clients: 340,
  },
  {
    name: 'Aisha Patel',
    role: 'HIIT & Cardio',
    experience: '8 yrs',
    speciality: 'Fat Loss',
    initials: 'AP',
    gradient: 'from-purple-900 to-indigo-900',
    certifications: ['ACE-CPT', 'Precision Nutrition'],
    clients: 280,
  },
  {
    name: 'Ryo Tanaka',
    role: 'Combat Sports',
    experience: '15 yrs',
    speciality: 'MMA & Boxing',
    initials: 'RT',
    gradient: 'from-zinc-800 to-neutral-900',
    certifications: ['IMMAF Coach', 'AIBA Level 2'],
    clients: 190,
  },
  {
    name: 'Sara Voss',
    role: 'Yoga & Wellness',
    experience: '10 yrs',
    speciality: 'Mobility & Breath',
    initials: 'SV',
    gradient: 'from-teal-900 to-emerald-900',
    certifications: ['RYT-500', 'Anatomy Trains'],
    clients: 215,
  },
]

// Prices in INR
export const PLANS = [
  {
    name: 'Starter',
    price: 599,
    period: 'mo',
    highlight: false,
    badge: null,
    features: [
      'Gym Access (6am – 10pm)',
      '2 Group Classes / week',
      'Locker Room & Showers',
      'App Progress Tracking',
      'Community Forum Access',
    ],
  },
  {
    name: 'Elite',
    price: 999,
    period: 'mo',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '24 / 7 Gym Access',
      'Unlimited Group Classes',
      '1 PT Session / month',
      'Nutrition Guide',
      'Priority Class Booking',
      'Guest Pass (1 / mo)',
    ],
  },
  {
    name: 'Pro',
    price: 1499,
    period: 'mo',
    highlight: false,
    badge: null,
    features: [
      'Everything in Elite',
      '4 PT Sessions / month',
      'Body Composition Analysis',
      'Custom Meal Planning',
      'Recovery Suite Access',
      'Guest Passes (2 / mo)',
    ],
  },
]

export const CONTACT_INFO = [
  { iconName: 'MapPin',  label: 'Location', value: '123 Iron Avenue, Downtown District' },
  { iconName: 'Phone',   label: 'Phone',    value: '+91 98765 43210' },
  { iconName: 'Mail',    label: 'Email',    value: 'info@ironforge.gym' },
  { iconName: 'Clock',   label: 'Hours',    value: 'Mon – Sun: 5 am – 12 am' },
]

export const MARQUEE_WORDS = [
  'STRENGTH', '·', 'ENDURANCE', '·', 'POWER', '·', 'DISCIPLINE',
  '·', 'FOCUS', '·', 'RESULTS', '·', 'GRIT', '·', 'CONSISTENCY',
  '·', 'STRENGTH', '·', 'ENDURANCE', '·', 'POWER', '·', 'DISCIPLINE',
  '·', 'FOCUS', '·', 'RESULTS', '·', 'GRIT', '·', 'CONSISTENCY',
]

export const ABOUT_FEATURES = [
  'Olympic Platform',
  'Recovery Spa',
  'Nutrition Bar',
  'Combat Zone',
  'Cardio Suite',
  'PT Studios',
]

export const ABOUT_STATS = [
  { value: '12+', label: 'Years Running',     accent: true  },
  { value: '50+', label: 'Certified Coaches', accent: false },
  { value: '25K', label: 'Sq Ft Facility',    accent: false },
  { value: '18',  label: 'Awards Won',        accent: true  },
]