<script setup>
const props = defineProps({
    achievements: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <h3>Achievements</h3>
    <div class="row achievement-list">
        <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="col-3 mb-3 d-flex"
        >
            <div class="card" style="width: 12rem;">
                <img
                :src="achievement.icon_url"
                class="card-img-top"
                :alt="achievement.title"
                style="height: 60px; object-fit: cover;"
                />
                <div class="card-body p-2">
                    <h6 class="card-title mb-1">{{ achievement.title }}</h6>
                    <p class="card-text small mb-0">{{ achievement.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
