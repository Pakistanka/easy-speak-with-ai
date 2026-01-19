export interface TeacherProfile {
  id: string;
  name: string;
  avatar: string;
  profession: string;
  speaks: string[];
  teaches: string[];
  about: string;
  topics: string[];
  timezone: string;
  rating: number;
  lessonsCount: number;
  studentsCount: number;
  price: number;
  currency: string;
  isEditable: boolean;
}
