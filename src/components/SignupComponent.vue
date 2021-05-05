<template>
    <form
        @submit.prevent="signup"
        class="w-full max-w-md px-11 py-16 sm:px-14 sm:py-20 rounded-sm"
    >
        <h2 class="font-light text-4xl mb-14 text-gray-200">Create Account</h2>
        <!--
        //? Do we really need this?
        <div class="mb-3">
            <input
                v-model.trim="signupForm.title"
                type="text"
                placeholder="Title"
                id="title"
                class="border rounded-md p-3 text-sm w-full outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        -->
        <div class="mb-3">
            <input
                v-model.trim="signupForm.firstName"
                type="text"
                placeholder="First Name"
                id="fname"
                class="border rounded-sm p-3 text-sm w-full outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <div class="mb-3">
            <input
                v-model.trim="signupForm.secondName"
                type="text"
                placeholder="Surname"
                id="sname"
                class="border rounded-sm p-3 text-sm w-full outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <div class="mb-3">
            <input
                v-model.trim="signupForm.email"
                type="text"
                placeholder="Email"
                id="email"
                class="border rounded-sm p-3 text-sm w-full outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <div class="mb-5">
            <input
                v-model.trim="signupForm.password"
                type="password"
                placeholder="Password"
                id="password2"
                class="border rounded-sm p-3 text-sm w-full outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <button
            class="px-6 py-3 block w-full bg-companyMain rounded-sm hover:bg-companyMain-dark transition duration-200 focus:outline-none"
        >
            <h1 class="text-white text-md font-medium">REGISTER</h1>
        </button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

//TODO Add icons each input.

export default {
    setup() {
        const store = useStore();
        const signupForm = ref({
            firstName: '',
            secondName: '',
            title: '',
            email: '',
            password: '',
        });
        const signup = () => {
            store.dispatch('signup', {
                email: signupForm.value.email,
                password: signupForm.value.password,
                firstName: signupForm.value.firstName,
                secondName: signupForm.value.secondName,
                title: signupForm.value.title,
            });
        };
        return { signup, signupForm };
    },
};
</script>

<style></style>
