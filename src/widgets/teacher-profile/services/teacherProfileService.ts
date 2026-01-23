import { TeacherProfile } from "../type/teacher";
import { mockTeacherProfile } from "../moks/teacherProfile";

// Имитация API вызова
export const teacherProfileService = {
  fetchProfile: async (teacherId: string): Promise<TeacherProfile> => {
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // В реальном приложении здесь будет:
    // const response = await fetch(`/api/teachers/${teacherId}`);
    // if (!response.ok) throw new Error('Failed to fetch profile');
    // return response.json();
    
    if (teacherId !== '1') {
      throw new Error('Teacher not found');
    }
    
    return mockTeacherProfile;
  },
  
  updateProfile: async (teacherId: string, updates: Partial<TeacherProfile>): Promise<TeacherProfile> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // В реальном приложении:
    // const response = await fetch(`/api/teachers/${teacherId}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updates),
    // });
    // if (!response.ok) throw new Error('Failed to update profile');
    // return response.json();
    
    if (teacherId !== '1') {
      throw new Error('Teacher not found');
    }
    
    return { ...mockTeacherProfile, ...updates };
  },
};