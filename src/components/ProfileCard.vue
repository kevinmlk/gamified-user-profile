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
        <img :src="avatar_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">Level: {{ level }}</p>
        </div>
    </div>
</template>
