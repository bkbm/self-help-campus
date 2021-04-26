<template>
    <div class="flex flex-wrap md:h-full">
        <div
            class="flex w-full md:w-1/2 relative items-center justify-center text-center px-10 my-20"
        >
            <LoginComponent />
        </div>
        <div
            class="flex w-full md:w-1/2 relative items-center justify-center text-center px-10 my-20"
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
