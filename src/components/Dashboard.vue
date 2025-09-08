<script setup>
import { onMounted } from 'vue';
import { useProfileStore } from '@/stores/profile';

import ProfileCard from '@/components/ProfileCard.vue';
import LevelProgress from '@/components/LevelProgress.vue';

const store = useProfileStore();

onMounted(() => {
    store.fetchData();
});

</script>

<template>
    <div class="dashboard">
        <ProfileCard
            v-if="!store.loading"
            :profile="store.profile"
        />

        <LevelProgress
            v-if="!store.loading"
            :profile="store.profile"
        />
    </div>
</template>
