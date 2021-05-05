<template>
    <div
        class="flex flex-1 flex-wrap h-full justify-center backgroundLoginImg"
        v-bind:style="{ backgroundImage: bgUrl }"
    >
        <div
            class="flex w-full lg:w-1/2 relative items-center justify-center text-center px-4 sm:px-10 my-20 border-0 lg:border-r z-10"
        >
            <LoginComponent />
        </div>
        <div
            class="flex w-full lg:w-1/2 relative items-center justify-center text-center px-6 sm:px-10 my-20 border-0 lg:border-l z-10"
        >
            <SignupComponent />
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignupComponent';

export default {
    name: 'Login',
    components: {
        LoginComponent,
        SignupComponent,
    },
    setup() {
        // eslint-disable-next-line
        const bgUrl = computed(() => {
            return `url(${require('../assets/login-landscape-bg.jpg')})`;
        });

        return { bgUrl };
    },
};
</script>
<style lang="scss">
.backgroundLoginImg {
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
