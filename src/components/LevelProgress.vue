<script setup>
import { computed } from 'vue';

const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
});

const progressPercent = computed(() => {
    return Math.round((props.profile.current_xp / props.profile.xp_to_next_level) * 100);
});

</script>

<template>
  <div>
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
    <small>{{ profile.current_xp }} / {{ profile.xp_to_next_level }} XP</small>
  </div>
</template>
