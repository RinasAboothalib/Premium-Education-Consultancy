export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail' 
  | 'destinations' 
  | 'success-stories' 
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Admissions' | 'Visa' | 'Training' | 'Career';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  requiredDocuments: string[];
  faq: { question: string; answer: string }[];
  iconName: string;
}

export interface DestinationItem {
  id: string;
  slug: string;
  country: string;
  flagCode: string;
  image: string;
  overview: string;
  popularIntakes: string[];
  averageTuition: string;
  postStudyWork: string;
  visaRequirements: string[];
  topUniversities: string[];
  whyStudyThere: string[];
}

export interface TestimonialItem {
  id: string;
  studentName: string;
  destination: string;
  universityOrVisa: string;
  course: string;
  year: string;
  quote: string;
  verifiedBadge: string;
  avatarSeed: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phones: string[];
  email: string;
  googleMapsUrl: string;
  isHeadquarters: boolean;
  hours: string;
}
