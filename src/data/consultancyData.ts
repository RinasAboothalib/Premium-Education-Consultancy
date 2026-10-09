import { DestinationItem, OfficeLocation, ServiceItem, TestimonialItem } from '../types';

export const BRAND_INFO = {
  name: 'Premium Education Consultancy',
  shortName: 'Premium Education',
  tagline: 'Your Global Future Starts Here',
  subtagline: 'Expert guidance for overseas education, university admissions, scholarships, and visa support — helping you take the next step with confidence.',
  foundingYear: '2020',
  founders: [
    {
      name: 'Mr. Vinayakamoorthi Livisanan',
      role: 'Founder & Managing Director',
      bio: 'Visionary educationist directing strategic global university alignments, career pathways, and international student advisory with extensive expertise in overseas academic transitions.'
    },
    {
      name: 'Mrs. Pavithra Livisanan',
      role: 'Co-Founder & Head of Admissions & Language Training',
      bio: 'Legal professional heading admissions compliance, visa document validation, and leading the IELTS Academy with dedicated interview coaching and language mastery.'
    }
  ],
  stats: [
    { label: 'Global Partner Network', value: '1,000+', unit: 'Universities' },
    { label: 'Admissions & Visas Supported', value: '700+', unit: 'Students' },
    { label: 'Direct Guidance', value: '100%', unit: 'Personalized' },
    { label: 'Student Advisory Experience', value: '6+', unit: 'Years' }
  ],
  contact: {
    hotlines: ['+94 70 781 8299', '+94 71 087 6988', '+94 77 799 5204', '+94 76 567 8883'],
    primaryPhone: '+94 70 781 8299',
    whatsappNumber: '+94 70 781 8299',
    whatsappLink: 'https://wa.me/94707818299?text=Hello%20Premium%20Education%20Consultancy%2C%20I%20would%20like%20to%20inquire%20about%20study%20abroad%20and%20visa%20guidance.',
    emails: ['admission@premiumeducation.lk', 'info@premiumeducation.lk', 'premiumeducationconsultancyuk@gmail.com'],
    primaryEmail: 'admission@premiumeducation.lk',
    facebookUrl: 'https://web.facebook.com/premiumeducation.lk/'
  }
};

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Manaachenai (Headquarters)',
    address: 'No. 96 Kiddanky Road, Manaachenai, Eastern Province, Sri Lanka',
    phones: ['+94 70 781 8299', '+94 71 087 6988'],
    email: 'admission@premiumeducation.lk',
    googleMapsUrl: 'https://maps.google.com/?q=Manaachenai+Sri+Lanka',
    isHeadquarters: true,
    hours: 'Mon – Sat: 8:30 AM – 5:30 PM'
  },
  {
    city: 'Kalmunai (IELTS Academy & Branch)',
    address: '128 Vayal Road, Natpiddimunai - 02, Kalmunai 32300, Sri Lanka',
    phones: ['+94 76 567 8883', '+94 77 799 5204'],
    email: 'info@premiumeducation.lk',
    googleMapsUrl: 'https://maps.google.com/?q=Kalmunai+Sri+Lanka',
    isHeadquarters: false,
    hours: 'Mon – Sun: 8:00 AM – 6:00 PM'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    slug: 'overseas-education-counselling',
    title: 'Overseas Education Counselling',
    category: 'Admissions',
    shortDescription: 'One-on-one personalized evaluation to select the best academic course, institution, and destination tailored to your career ambitions and budget.',
    fullDescription: 'Our overseas education counselling provides comprehensive, unhurried guidance from experienced advisors. We evaluate your past academic credentials, English proficiency, budget parameters, and long-term residency or career aspirations to recommend realistic, accredited pathways.',
    benefits: [
      'Individual profile assessment and academic transcript audit',
      'Country comparison (tuition fees, living expenses, post-study work rules)',
      'Budget planning and return-on-investment career outlook',
      'Guidance for both undergraduate and postgraduate applicants'
    ],
    process: [
      'Initial Discovery Consultation (Virtual or In-Person at our offices)',
      'Academic Record & Career Profile Assessment',
      'Curated Shortlist of Universities and Countries',
      'Action Plan for Intakes, Deadlines, and Requirements'
    ],
    requiredDocuments: [
      'G.C.E. O/L and A/L Examination certificates',
      'University transcripts and provisional degree certificates (for Postgraduates)',
      'Updated Curriculum Vitae (CV)',
      'Valid passport copy'
    ],
    faq: [
      {
        question: 'How early should I begin education counselling before my intake?',
        answer: 'We recommend starting 6 to 9 months before your intended university intake to allow adequate time for document verification, offer letters, and visa processing.'
      },
      {
        question: 'Are your counselling sessions free?',
        answer: 'Yes, our initial exploratory counselling session is complimentary so you can understand your eligible opportunities without obligation.'
      }
    ],
    iconName: 'GraduationCap'
  },
  {
    id: '2',
    slug: 'university-college-admissions',
    title: 'University and College Admissions',
    category: 'Admissions',
    shortDescription: 'End-to-end admission management across top institutions in the UK, Canada, Australia, New Zealand, USA, and Europe.',
    fullDescription: 'Navigating international application portals and admission requirements can be complex. Our admissions team directly oversees application preparation, statement of purpose (SOP) review, academic reference coordination, and offer letter tracking to ensure timely approvals.',
    benefits: [
      'Direct application submission through partner university portals',
      'Expert review of Statement of Purpose (SOP) and Personal Statements',
      'Assistance in securing Conditional and Unconditional Offer Letters',
      'Fast-track admission liaison with international admissions desks'
    ],
    process: [
      'Course and university finalization',
      'Document vetting and formatting according to faculty standards',
      'Official submission and portal tracking',
      'Acceptance letter issuance and tuition fee deposit guidance'
    ],
    requiredDocuments: [
      'Official academic transcripts & certificates',
      'Statement of Purpose (SOP)',
      'Two Academic or Professional Letters of Recommendation (LOR)',
      'English test score certificate (IELTS/PTE/TOEFL) or MOI letter'
    ],
    faq: [
      {
        question: 'Can I apply for UK universities without an IELTS score?',
        answer: 'Certain UK universities accept Medium of Instruction (MOI) letters or high G.C.E. A/L English scores. We evaluate your eligibility during admissions assessment.'
      },
      {
        question: 'What is the difference between conditional and unconditional offers?',
        answer: 'A conditional offer requires fulfilling specific criteria (such as pending exam results or fee deposit), while an unconditional offer confirms full admission.'
      }
    ],
    iconName: 'Building'
  },
  {
    id: '3',
    slug: 'scholarship-assistance',
    title: 'Scholarship Assistance',
    category: 'Admissions',
    shortDescription: 'Identifying international merit-based, regional, and early-bird scholarship opportunities to make your education accessible.',
    fullDescription: 'International tuition costs can be substantially reduced with strategic scholarship applications. We identify available institutional grants, bursaries, merit scholarships, and vice-chancellor awards that align with your profile.',
    benefits: [
      'Screening for partial tuition grants (up to £2,000 – £8,000 / $5,000 – $15,000)',
      'Dedicated guidance on scholarship essays and motivational letters',
      'Early-submission advantages for high-competition grant deadlines',
      'Transparency on terms, maintenance requirements, and disbursements'
    ],
    process: [
      'Profile audit for GPA, academic honors, and extracurricular merits',
      'Matching against partner institution scholarship databases',
      'Drafting and refining competitive scholarship motivation letters',
      'Formal submission alongside or after university offer issuance'
    ],
    requiredDocuments: [
      'Academic certificates with high percentile/merit proofs',
      'Scholarship statement or essay draft',
      'Extracurricular or community leadership achievements',
      'Valid university admission offer letter'
    ],
    faq: [
      {
        question: 'Are 100% full scholarships common for international students?',
        answer: 'Full scholarships are highly competitive and primarily awarded for specialized research or doctoral tracks. Most undergraduate and master’s programs offer partial tuition discounts (15% to 50%), which we actively secure.'
      }
    ],
    iconName: 'Award'
  },
  {
    id: '4',
    slug: 'student-visa-assistance',
    title: 'Student Visa Assistance',
    category: 'Visa',
    shortDescription: 'Meticulous visa documentation, financial proof structuring, and mock visa interview preparation with legal diligence.',
    fullDescription: 'Student visa approval requires strict adherence to immigration policy, proof of funds, genuine student intention, and complete transparency. Our team, led by legal background expertise, meticulously compiles your visa dossier to prevent common refusal causes.',
    benefits: [
      'Compliance check against current immigration regulations (UK VI, IRCC, Home Affairs)',
      'Financial documentation structuring (bank balances, source of funds, sponsorships)',
      'Personalized Genuine Student (GS / GTE) statement structuring',
      'One-on-one mock interview preparation to build student confidence'
    ],
    process: [
      'Confirmation of Acceptance / CAS / CoE verification',
      'Financial documentation preparation and bank letter verification',
      'Online visa portal filing, biometric scheduling, and document upload',
      'Pre-submission audit and interview rehearsal'
    ],
    requiredDocuments: [
      'Valid CAS (UK), CoE (Australia), LOA & PAL (Canada), or I-20 (USA)',
      'Financial proof: Bank statement, solvency certificates, and sponsorship deeds',
      'Tuberculosis (TB) test certificate & medical reports (where applicable)',
      'Police clearance report and proof of relationship for sponsors'
    ],
    faq: [
      {
        question: 'Do you guarantee visa approval?',
        answer: 'In line with professional ethics and consumer protection laws, no legitimate consultancy can guarantee a visa decision, as final authority rests solely with the immigration department. However, our rigorous legal verification ensures your application is flawless, compliant, and prepared to the highest standard.'
      },
      {
        question: 'What if I have had a previous visa refusal?',
        answer: 'We specialize in analyzing refusal letters, diagnosing procedural or documentation deficiencies, and preparing comprehensive rectification statements for reapplications.'
      }
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: '5',
    slug: 'visitor-visa-eta-assistance',
    title: 'Visitor Visa and ETA Assistance',
    category: 'Visa',
    shortDescription: 'Consultancy support for Canada 10-year multiple-entry visitor visas, UK standard visitor, Australia tourist visas, and Electronic Travel Authorizations.',
    fullDescription: 'Whether visiting family, attending university graduation ceremonies, exploring international trade opportunities, or holiday travel, our visitor visa consultancy provides reliable advice and application preparation for individuals and families.',
    benefits: [
      'Canada Visitor Visa support (sponsored, self-funded, family & friends visits)',
      'Electronic Travel Authorization (ETA) and e-Visa expedited filings',
      'Preparation of strong ties to home country (employment, assets, family responsibilities)',
      'Careful handling of previous refusal history with structured legal explanations'
    ],
    process: [
      'Travel purpose evaluation and invitation letter verification',
      'Home country ties and asset/employment documentation collation',
      'Immigration portal lodging, fee payment, and biometric appointment',
      'Passport submission guidance upon decision notice'
    ],
    requiredDocuments: [
      'Valid international passport with at least 6 months validity',
      'Invitation letter from host abroad with proof of status (PR/Citizen/Student)',
      'Proof of employment, business registration, or leave approval',
      'Bank statements showing travel solvency and property/land ownership proofs'
    ],
    faq: [
      {
        question: 'Can parents travel to attend their child’s graduation abroad?',
        answer: 'Yes! We frequently handle graduation visitor visa applications for parents, preparing verified university confirmation letters and sponsorship files.'
      },
      {
        question: 'How long are Canadian visitor visas typically granted for?',
        answer: 'Canadian multiple-entry visitor visas are frequently granted up to the remaining validity of your passport (often up to 10 years).'
      }
    ],
    iconName: 'FileCheck'
  },
  {
    id: '6',
    slug: 'family-reunion-visa-guidance',
    title: 'Family Reunion Visa Guidance',
    category: 'Visa',
    shortDescription: 'Clear advisory for spouse dependent visas, family unification, and student dependent permits to keep families together.',
    fullDescription: 'Being separated from loved ones during international studies or relocation is challenging. We provide structured guidance for spouse and dependent visa applications, establishing genuine relationship evidence and financial capability.',
    benefits: [
      'Spouse dependent student visa regulations across the UK, Australia, and Canada',
      'Child dependent permit documentation and schooling considerations',
      'Compilation of relationship proof (marriage certificate, communication records, joint accounts)',
      'Coordination of simultaneous or post-arrival dependent submissions'
    ],
    process: [
      'Eligibility assessment based on principal applicant course level and policy',
      'Relationship documentation validation and translation checks',
      'Dependent maintenance fund calculation and bank file preparation',
      'Submission and tracking of dependent permits'
    ],
    requiredDocuments: [
      'Principal student’s visa copy, university enrollment letter, and biometric card',
      'Official marriage certificate (duly translated and authenticated by Foreign Ministry)',
      'Joint photo albums, wedding invitations, and verifiable communication history',
      'Sufficient living cost funds for dependents as prescribed by immigration rules'
    ],
    faq: [
      {
        question: 'Can my spouse work full-time while I study abroad?',
        answer: 'Work rights depend on the destination and course level. In Australia and certain master’s programs in other countries, eligible spouses are granted work authorization. We guide you on the exact rules applicable to your study intake.'
      }
    ],
    iconName: 'Users'
  },
  {
    id: '7',
    slug: 'english-language-training',
    title: 'English Language Training & IELTS Academy',
    category: 'Training',
    shortDescription: 'Dedicated physical and online training in Academic IELTS, General IELTS, English grammar, and embassy interview coaching at our Kalmunai Academy.',
    fullDescription: 'Strong English proficiency is the gateway to university admissions, visa success, and professional confidence. Our specialized IELTS Academy, supervised by Mrs. Pavithra Livisanan, provides structured curricula, mock exam simulations, and targeted score improvement.',
    benefits: [
      'Comprehensive coverage of all 4 modules: Listening, Reading, Writing, and Speaking',
      'Foundational English grammar booster courses for students transitioning to English medium',
      'Band 7.0+ score strategies with certified test-format practice materials',
      'Personalized speaking interview mock sessions with real-time feedback'
    ],
    process: [
      'Baseline Diagnostic Proficiency Assessment',
      'Customized 1-month intensive or 3-month comprehensive study plan',
      'Weekly mock tests with detailed writing task feedback',
      'Final test registration and examination strategy'
    ],
    requiredDocuments: [
      'National Identity Card (NIC) or passport copy for test registration',
      'Registration at our Kalmunai Academy branch or online portal enrollment'
    ],
    faq: [
      {
        question: 'Where are IELTS classes conducted?',
        answer: 'Classes are conducted both physically at our Kalmunai IELTS Academy (128 Vayal Road, Natpiddimunai - 02) and via live interactive online sessions for students across Sri Lanka.'
      },
      {
        question: 'What is the passing score needed for international university entry?',
        answer: 'Most undergraduate programs require an overall IELTS band of 6.0 with no band less than 5.5. Postgraduate programs typically require 6.5 with no band less than 6.0. We guide you to reach your university’s specific benchmark.'
      }
    ],
    iconName: 'BookOpen'
  },
  {
    id: '8',
    slug: 'career-counselling-international-opportunities',
    title: 'Career Counselling and International Opportunities',
    category: 'Career',
    shortDescription: 'Strategic alignment between global educational courses and high-demand international employment and permanent residency pathways.',
    fullDescription: 'An overseas education is an investment in your future career. We help you choose courses with strong international employability, post-study work visa eligibility, and long-term residency options in sectors like Healthcare, Engineering, IT, and Business.',
    benefits: [
      'Analysis of national skills shortage lists (Australia, UK, New Zealand, Canada)',
      'International CV formatting and professional LinkedIn profile guidance',
      'Post-study work visa rights comparison (2 to 5 years duration)',
      'Long-term strategic roadmap from graduation to career development'
    ],
    process: [
      'Career Interest and Strengths Evaluation',
      'Industry Demand and Immigration Skill Shortage Mapping',
      'Degree Program Selection with Integrated Internships/Co-op',
      'Pre-departure career orientation'
    ],
    requiredDocuments: [
      'Current educational history & work experience letters',
      'Curriculum Vitae',
      'Career objective brief'
    ],
    faq: [
      {
        question: 'Which study fields have the highest post-study work demand currently?',
        answer: 'Information Technology (Cybersecurity, Data, Software), Nursing & Allied Healthcare, Early Childhood Education, and Engineering disciplines currently offer strong post-study career opportunities across Australia, the UK, and Canada.'
      }
    ],
    iconName: 'TrendingUp'
  }
];

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'uk',
    slug: 'united-kingdom',
    country: 'United Kingdom',
    flagCode: 'GB',
    image: '/src/assets/images/destination_uk_campus_1791560270604.jpg',
    overview: 'World-renowned academic heritage, accelerated 1-year Master’s degrees, vibrant multicultural student cities, and the 2-year Graduate Route post-study work visa.',
    popularIntakes: ['September / October (Major)', 'January / February (Secondary)', 'May (Select courses)'],
    averageTuition: '£12,000 – £22,000 / year',
    postStudyWork: '2-Year Graduate Visa (3 Years for PhD graduates)',
    visaRequirements: [
      'Valid CAS (Confirmation of Acceptance for Studies) from licensed sponsor',
      'Maintenance funds (£1,334/month for London, £1,023/month outside London for 9 months)',
      'Tuberculosis (TB) test certificate from authorized IOM clinic in Sri Lanka',
      'Valid passport and biometric submission at VFS Colombo'
    ],
    topUniversities: [
      'University of Huddersfield',
      'University of Greenwich',
      'University of East London',
      'Coventry University',
      'University of Hertfordshire',
      'Ulster University'
    ],
    whyStudyThere: [
      '1-Year Master’s programs save living and tuition expenses',
      'Diverse scholarships for South Asian students',
      'High global employer recognition and academic rigor',
      'Opportunity to work 20 hours/week during term time'
    ]
  },
  {
    id: 'canada',
    slug: 'canada',
    country: 'Canada',
    flagCode: 'CA',
    image: '/src/assets/images/destination_canada_campus_1791560281095.jpg',
    overview: 'High quality of life, welcoming multicultural society, post-graduation work permits (PGWP), and renowned public colleges and research universities.',
    popularIntakes: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
    averageTuition: 'CAD $16,000 – $32,000 / year',
    postStudyWork: 'Post-Graduation Work Permit (PGWP) up to 3 years',
    visaRequirements: [
      'Letter of Acceptance (LOA) and Provincial Attestation Letter (PAL)',
      'Proof of financial support (GIC / Bank deposit demonstrating first-year tuition + living costs)',
      'Upfront immigration medical exam and biometric appointment',
      'Clear Statement of Purpose addressing study intent and ties to Sri Lanka'
    ],
    topUniversities: [
      'Seneca Polytechnic',
      'George Brown College',
      'Humber College',
      'University of Windsor',
      'Conestoga College',
      'Brock University'
    ],
    whyStudyThere: [
      'Practical, co-op work terms embedded into degrees',
      'Clear, transparent post-graduation work pathways',
      'High safety standards and clean urban environments',
      'Visitor visa options available for visiting family members'
    ]
  },
  {
    id: 'australia',
    slug: 'australia',
    country: 'Australia',
    flagCode: 'AU',
    image: '/src/assets/images/hero_international_students_1791560239292.jpg',
    overview: 'World-ranked universities, high student minimum wages, pleasant climate, and clear regional study incentives with extended post-study work rights.',
    popularIntakes: ['February / March (Semester 1)', 'July / August (Semester 2)', 'November (Trimester 3)'],
    averageTuition: 'AUD $22,000 – $42,000 / year',
    postStudyWork: 'Subclass 485 Temporary Graduate Visa (2 to 4 years based on level/location)',
    visaRequirements: [
      'Confirmation of Enrolment (CoE) from registered CRICOS institution',
      'Genuine Student (GS) criteria evaluation and evidence',
      'Overseas Student Health Cover (OSHC)',
      'Proof of funds for living expenses (AUD $29,710/year benchmark) and tuition'
    ],
    topUniversities: [
      'Deakin University',
      'La Trobe University',
      'Western Sydney University',
      'Federation University Australia',
      'Charles Sturt University',
      'Torrens University'
    ],
    whyStudyThere: [
      'Flexible study tracks in Healthcare, IT, Early Childhood, and Engineering',
      'Work rights up to 48 hours per fortnight during study terms',
      'Regional study bonus points for long-term career seekers',
      'High standard of living and multicultural Sri Lankan community presence'
    ]
  },
  {
    id: 'europe-germany',
    slug: 'europe-germany',
    country: 'Europe (Germany & Ireland)',
    flagCode: 'EU',
    image: '/src/assets/images/about_consultancy_counseling_1791560255172.jpg',
    overview: 'High innovation hubs, English-taught Master’s degrees, low-to-moderate tuition costs, and post-study opportunities across the Schengen zone.',
    popularIntakes: ['September / October (Winter Semester)', 'March / April (Summer Semester)'],
    averageTuition: '€0 – €14,000 / year (Nominal public uni admin fees in Germany; €10k–€16k in Ireland)',
    postStudyWork: '18 months (Germany) / 2 years (Ireland Third Level Graduate Scheme)',
    visaRequirements: [
      'Admission letter from state-recognized European institution',
      'Blocked bank account (Sperrkonto approx. €11,904 in Germany) or Irish bank proof',
      'APS certificate (where applicable) and recognized degree equivalence',
      'Valid Schengen travel & student health insurance'
    ],
    topUniversities: [
      'IU International University of Applied Sciences',
      'National College of Ireland (NCI)',
      'Griffith College Dublin',
      'Berlin School of Business and Innovation',
      'University of Europe for Applied Sciences'
    ],
    whyStudyThere: [
      'Exceptional value-to-cost ratio and engineering/tech prominence',
      'Opportunity to travel across 29 Schengen European countries',
      'Booming technology and pharmaceutical European headquarters',
      'Strong post-graduation employment markets'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    studentName: 'N. Tharshan',
    destination: 'United Kingdom',
    universityOrVisa: 'University of Huddersfield',
    course: 'MSc International Business Management',
    year: '2024',
    quote: 'Premium Education Consultancy guided me from course selection to securing my UK student visa seamlessly. Their admissions team handled my documents with utmost precision, and Mrs. Pavithra coached me through interview preparation. Truly grateful for their honest guidance!',
    verifiedBadge: 'UK Student Visa Approved',
    avatarSeed: 'Tharshan'
  },
  {
    id: 't2',
    studentName: 'K. Sangeetha & Family',
    destination: 'Canada',
    universityOrVisa: '10-Year Multiple Entry Visitor Visa',
    course: 'Family Visit & Tourism',
    year: '2024',
    quote: 'We had heard about high refusal rates for Canada visitor visas, but Mr. Livisanan and the team structured our financial proofs and ties to Sri Lanka so thoroughly that our visas were granted without any hassle. The transparency of this consultancy is unmatched.',
    verifiedBadge: 'Canada 10-Yr Visa Granted',
    avatarSeed: 'Sangeetha'
  },
  {
    id: 't3',
    studentName: 'M. Dilshan',
    destination: 'Australia',
    universityOrVisa: 'Master of Information Technology',
    course: 'Cybersecurity & Cloud Computing',
    year: '2023',
    quote: 'From getting my IELTS Band 7.0 at the Kalmunai Academy to receiving my Australian Confirmation of Enrolment, Premium Education took care of every step. They never made false promises and kept me updated every week until my grant arrived.',
    verifiedBadge: 'Australia Student Subclass 500',
    avatarSeed: 'Dilshan'
  },
  {
    id: 't4',
    studentName: 'R. Fathima',
    destination: 'IELTS Academic',
    universityOrVisa: 'Kalmunai IELTS Academy',
    course: 'Overall Band Score 7.5',
    year: '2024',
    quote: 'The personalized writing reviews and mock speaking tests at Premium Education IELTS Academy transformed my confidence. The instructors pinpointed my grammar weak spots immediately, allowing me to exceed my required entry score.',
    verifiedBadge: 'IELTS Band 7.5 Verified',
    avatarSeed: 'Fathima'
  }
];

export const UNIVERSITY_PARTNERS = [
  { name: 'University of Huddersfield', country: 'United Kingdom' },
  { name: 'Deakin University', country: 'Australia' },
  { name: 'University of Greenwich', country: 'United Kingdom' },
  { name: 'Seneca Polytechnic', country: 'Canada' },
  { name: 'Western Sydney University', country: 'Australia' },
  { name: 'Coventry University', country: 'United Kingdom' },
  { name: 'George Brown College', country: 'Canada' },
  { name: 'National College of Ireland', country: 'Ireland' },
  { name: 'La Trobe University', country: 'Australia' },
  { name: 'University of East London', country: 'United Kingdom' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalized Academic Roadmaps',
    description: 'We do not push one-size-fits-all options. Every recommendation is tailored to your academic history, budget, and long-term ambition.',
    iconName: 'Compass'
  },
  {
    title: 'Licensed Legal & Admissions Expertise',
    description: 'Our leadership brings legal and admissions acumen, ensuring compliance with evolving embassy criteria and immigration policies.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Transparent, Ethical Advisory',
    description: 'We offer realistic assessments without exaggerated claims or deceptive guarantees, respecting your time, money, and future.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'In-House IELTS Academy',
    description: 'Specialized language preparation and interview mock tests conducted at our physical Kalmunai center and live online.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Refusal Diagnosis & Recovery',
    description: 'Specialized experience analyzing prior visa refusal letters and reconstructing applications with strong factual documentation.',
    iconName: 'RotateCcw'
  },
  {
    title: 'Comprehensive Pre-Departure Care',
    description: 'From currency exchange and flight bookings to accommodation searches and airport arrival checklists, we stay beside you.',
    iconName: 'PlaneTakeoff'
  }
];
