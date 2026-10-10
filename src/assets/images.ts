// Direct asset imports processed and hashed by Vite for 100% production build reliability
import heroImg from './images/hero_international_students_1791560239292.jpg';
import aboutImg from './images/about_consultancy_counseling_1791560255172.jpg';
import ukCampusImg from './images/destination_uk_campus_1791560270604.jpg';
import canadaCampusImg from './images/destination_canada_campus_1791560281095.jpg';
import ieltsImg from './images/ielts_language_academy_1791560293468.jpg';
import logoSvg from './logo.svg';

export const IMAGES = {
  hero: heroImg,
  about: aboutImg,
  ukCampus: ukCampusImg,
  canadaCampus: canadaCampusImg,
  ielts: ieltsImg,
  logo: logoSvg,
  // Public static fallbacks if needed
  fallbacks: {
    hero: '/images/hero_international_students_1791560239292.jpg',
    about: '/images/about_consultancy_counseling_1791560255172.jpg',
    ukCampus: '/images/destination_uk_campus_1791560270604.jpg',
    canadaCampus: '/images/destination_canada_campus_1791560281095.jpg',
    ielts: '/images/ielts_language_academy_1791560293468.jpg',
    logo: '/logo.svg',
  }
};
