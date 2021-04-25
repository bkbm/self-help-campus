<template>
    <form @submit.prevent="login" class="w-2/3">
        <h2 class="font-bold text-3xl mb-3 text-gray-800">Welcome Back</h2>
        <hr class="mb-10" />
        <div class="flex mb-3">
            <div
                class="w-11 flex p-2 text-center items-center justify-center z-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    "
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
                        fill="#BBBBBB"
                    />
                </svg>
            </div>
            <input
                v-model.trim="loginForm.email"
                type="text"
                placeholder="Email"
                id="email1"
                class="border rounded-md p-3 text-sm w-full -ml-11 pl-14 outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <div class="flex mb-5">
            <div
                class="w-11 flex p-2 text-center items-center justify-center z-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    "
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74L22 18M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2z"
                        fill="#BBBBBB"
                    />
                </svg>
            </div>
            <input
                v-model.trim="loginForm.password"
                type="password"
                placeholder="Password"
                id="password1"
                class="border rounded-md p-3 text-sm w-full -ml-11 pl-14 outline-none focus:border-companyMain-light transition duration-300"
            />
        </div>
        <button class="px-6 py-3 bg-companyMain-light rounded-md">
            <h1 class="text-white text-md font-medium">LOGIN</h1>
        </button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    props: [],
    setup() {
        const store = useStore();
        const loginForm = ref({ email: '', password: '' });
        const login = () => {
            store.dispatch('login', {
                email: loginForm.value.email,
                password: loginForm.value.password,
            });
        };
        return { login, loginForm };
    },
};
</script>

<style></style>
