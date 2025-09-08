import { defineStore } from 'pinia';
import { mockData } from '@/data/mockApi';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {},
        achievements: [],
        loading: true
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.profile = mockData.profile;
            this.achievements = mockData.achievements;
            this.loading = false;
        }
    }
});
