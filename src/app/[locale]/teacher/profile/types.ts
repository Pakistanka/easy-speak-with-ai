export interface Teacher {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  lessonsCount: number;
  studentsCount: number;
  speaks: string[];
  teaches: string[];
  about: string;
  topics: string[];
  timezone: string;
  price: number;
  currency: string;
}