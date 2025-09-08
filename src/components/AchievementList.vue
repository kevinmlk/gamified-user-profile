<script setup>
const props = defineProps({
    achievements: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <div class="achievement-list">
        <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="card mb-3"
        style="max-width: 540px;"
        >
        <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img
                    :src="achievement.icon_url"
                    class="img-fluid rounded-start"
                    :alt="achievement.title"
                    style="max-height: 80px;"
                />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ achievement.title }}</h5>
                        <p class="card-text">{{ achievement.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
