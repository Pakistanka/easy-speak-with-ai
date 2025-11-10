import { TeacherProfile } from '../type/teacher';

export const mockTeacherProfile: TeacherProfile = {
  id: '1',
  name: 'Adam Smith',
  avatar: 'AS',
  profession: 'Teacher',
  speaks: ['English'],
  teaches: ['English'],
  about:
    'Hi! I am Adam. Experienced English teacher, 20 years of experience. And 1k+ classes on iTalki in 2 years. During my spare time I love reading books, writing articles, and listening to music. Watching and debating movies is also one my favorite passtimes. Having the opportunity to travel around the world, I have been to China, Turkey, France, Russia etc, I managed to grasp the very importance of language and its communicative aspects.',
  topics: ['Traveling', 'Films & TV Series'],
  timezone: 'Living in London, United Kingdom (GMT+01:00)',
  rating: 5.0,
  lessonsCount: 1000,
  studentsCount: 200,
  price: 15.0,
  currency: 'USD',
  isEditable: true,
};
