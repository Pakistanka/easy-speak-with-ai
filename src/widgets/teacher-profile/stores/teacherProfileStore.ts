// widgets/teacher-profile/stores/teacherProfileStore.ts
import { create } from 'zustand';
import { mockTeacherProfile } from '@/widgets/teacher-profile/moks/teacherProfile'; // путь к мокам

interface TeacherProfileState {
  profile: any; // или используй тип TeacherProfile
  isLoading: boolean;
  error: string | null;
  formattedPrice: string;
  fetchProfile: (id: string) => Promise<void>;
  refetch: () => void;
}

export const useTeacherProfile = create<TeacherProfileState>((set, get) => ({
  profile: null,
  isLoading: true, // начинаем с true
  error: null,
  formattedPrice: '',

  fetchProfile: async (id: string) => {
    console.log('fetchProfile called with id:', id);

    // Сначала показываем загрузку
    set({ isLoading: true, error: null });

    // Имитация загрузки данных
    setTimeout(() => {
      try {
        console.log('Setting mock data');
        set({
          profile: mockTeacherProfile,
          isLoading: false,
          formattedPrice: `$${mockTeacherProfile.price.toFixed(2)}`,
        });
      } catch (error) {
        console.error('Error in fetchProfile:', error);
        set({
          error: 'Failed to load profile',
          isLoading: false,
        });
      }
    }, 500); // небольшая задержка для имитации
  },

  refetch: () => {
    console.log('refetch called');
    const { fetchProfile } = get();
    const teacherId = '1'; // или передавать параметром
    fetchProfile(teacherId);
  },
}));
