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
        <section class="col-4">
            <article>
                <ProfileCard
                    v-if="!store.loading"
                    :profile="store.profile"
                />
            </article>
        </section>

        <section class="col-7 d-flex flex-column gap-5">
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
