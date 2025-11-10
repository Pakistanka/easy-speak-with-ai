import { create } from 'zustand';
import { TeacherProfile } from '../type/teacher';
import { teacherProfileService } from '../services/teacherProfileService';

interface TeacherProfileStore {
  profile: TeacherProfile | null;
  isLoading: boolean;
  isEditing: boolean;
  error: string | null;
  
  // Actions
  fetchProfile: (teacherId: string) => Promise<void>;
  updateProfile: (teacherId: string, updates: Partial<TeacherProfile>) => Promise<void>;
  setIsEditing: (isEditing: boolean) => void;
  clearError: () => void;
  reset: () => void;
}

const initialState = {
  profile: null,
  isLoading: false,
  isEditing: false,
  error: null,
};

export const useTeacherProfileStore = create<TeacherProfileStore>((set, get) => ({
  ...initialState,

  fetchProfile: async (teacherId: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const profile = await teacherProfileService.fetchProfile(teacherId);
      set({ profile, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to load profile', 
        isLoading: false 
      });
    }
  },

  updateProfile: async (teacherId: string, updates: Partial<TeacherProfile>) => {
    set({ isLoading: true, error: null });
    
    try {
      const updatedProfile = await teacherProfileService.updateProfile(teacherId, updates);
      set({ 
        profile: updatedProfile, 
        isLoading: false,
        isEditing: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to update profile', 
        isLoading: false 
      });
    }
  },

  setIsEditing: (isEditing: boolean) => set({ isEditing }),
  
  clearError: () => set({ error: null }),
  
  reset: () => set(initialState),
}));

// Hook для удобного использования
export const useTeacherProfile = (teacherId?: string) => {
  const { 
    profile, 
    isLoading, 
    isEditing, 
    error,
    fetchProfile, 
    updateProfile, 
    setIsEditing,
    clearError,
    reset 
  } = useTeacherProfileStore();

  // Computed values
  const formattedPrice = profile ? `${profile.currency} ${profile.price.toFixed(2)}` : '';
  const ratingStars = profile ? '★'.repeat(Math.floor(profile.rating)) : '';

  return {
    // State
    profile,
    isLoading,
    isEditing,
    error,
    
    // Actions
    updateProfile: (updates: Partial<TeacherProfile>) => 
      teacherId ? updateProfile(teacherId, updates) : Promise.resolve(),
    setIsEditing,
    clearError,
    reset,
    
    // Convenience methods
    startEditing: () => setIsEditing(true),
    stopEditing: () => setIsEditing(false),
    refetch: () => teacherId ? fetchProfile(teacherId) : Promise.resolve(),
    
    // Computed values
    formattedPrice,
    ratingStars,
  };
};