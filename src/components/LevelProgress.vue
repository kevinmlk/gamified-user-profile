<script setup>
const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
});

const { current_xp, xp_to_next_level } = props.profile;

const progressPercent = Math.round((current_xp / xp_to_next_level) * 100);

</script>

<template>
    <h3>Level Progress</h3>
    <div class="progress" style="height: 24px;">
        <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: progressPercent + '%' }"
            :aria-valuenow="progressPercent"
            aria-valuemin="0"
            :aria-valuemax="100"
        >
            {{ progressPercent }}%
        </div>
    </div>
    <small>{{ current_xp }} / {{ xp_to_next_level }} XP</small>
</template>
