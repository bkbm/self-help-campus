<template>
    <div class="flex flex-wrap h-full">
        <div
            class="flex w-full md:w-1/2 relative items-center justify-center text-center md:px-16"
        >
            <LoginComponent />
        </div>
        <div
            class="flex w-full md:w-1/2 items-center justify-center text-center md:px-16"
        >
            <SignupComponent />
        </div>
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignupComponent';
export default {
    name: 'Login',
    components: {
        LoginComponent,
        SignupComponent,
    },
    setup() {},
};
</script>
