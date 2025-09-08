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
        },
        addXp(amount) {
            this.profile.current_xp += amount;
            if (this.profile.current_xp >= this.profile.xp_to_next_level) {
                this.profile.level += 1;
                this.profile.current_xp -= this.profile.xp_to_next_level;
                this.profile.xp_to_next_level += 500;
            }
        }
    }
});
