<script setup>
const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
});

const { name, avatar_url, level } = props.profile;

</script>

<template>
    <h3>Profile</h3>
    <div class="card" style="width: 18rem;">
        <img :src="profile.avatar_url" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ profile.name }}</h5>
            <p class="card-text">Level: {{ profile.level }}</p>
        </div>
    </div>
</template>
