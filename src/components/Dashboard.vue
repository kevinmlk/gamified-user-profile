<script setup>
import { onMounted } from 'vue';
import { useProfileStore } from '@/stores/profile';

import ProfileCard from '@/components/ProfileCard.vue';
import LevelProgress from '@/components/LevelProgress.vue';
import AchievementList from '@/components/AchievementList.vue';

const store = useProfileStore();

onMounted(() => {
    store.fetchData();
});

</script>

<template>
    <div id="dashboard" class="p-4 row">
        <div v-if="store.loading" class="d-flex justify-content-center align-items-center" style="height: 200px;">
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <section id="profile" class="col-4">
            <article>
                <ProfileCard
                    v-if="!store.loading"
                    :profile="store.profile"
                />
            </article>

            <button
                v-if="!store.loading"
                class="btn btn-success mt-3"
                @click="store.addXp(450)"
            >
                Add 450 XP
            </button>
        </section>

        <section id="levels" class="col-7 d-flex flex-column gap-4">
            <article>
                <LevelProgress
                    v-if="!store.loading"
                    :profile="store.profile"
                />
            </article>

            <article>
                <AchievementList
                    v-if="!store.loading"
                    :achievements="store.achievements"
                />
            </article>
        </section>
    </div>
</template>
