<template>
    <div class="w-full max-w-sm">
        <form @submit.prevent="login">
            <h2 class="font-bold text-3xl mb-10 text-gray-800">Welcome Back</h2>
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
            <div class="flex justify-between items-center">
                <a
                    href="/"
                    class="text-sm text-gray-400 hover:underline hover:text-gray-500"
                    >Forgot Password?</a
                >
                <button
                    class="px-7 py-3 bg-companyMain rounded-md hover:bg-companyMain-dark transition duration-200 focus:outline-none"
                >
                    <h1 class="text-white text-md font-medium">LOGIN</h1>
                </button>
            </div>
        </form>
        <hr class="mt-14 mb-6" />
        <button
            class="px-6 py-3 my-2 block w-full rounded-lg bg-white border border-grey-300 hover:bg-gray-100 transition duration-200 focus:outline-none"
        >
            <div class="flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    class="w-6 h-6"
                    viewBox="0 0 48 48"
                >
                    <defs>
                        <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                    </defs>
                    <clipPath id="b">
                        <use xlink:href="#a" overflow="visible" />
                    </clipPath>
                    <path
                        clip-path="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                    />
                    <path
                        clip-path="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                        clip-path="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                        clip-path="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                    />
                </svg>
                <span class="text-sm text-gray-500 font-semibold ml-3"
                    >Sign In With Google</span
                >
            </div>
        </button>
        <button
            class="px-6 py-3 block w-full rounded-lg bg-white border border-grey-300 hover:bg-gray-100 transition duration-200 focus:outline-none"
        >
            <div class="flex items-center justify-center">
                <svg
                    class="h-6 w-6 fill-current"
                    viewBox="0 0 512 512"
                    style="color: #127cee"
                >
                    <path
                        d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                    />
                </svg>
                <span class="text-sm text-gray-500 font-semibold ml-3"
                    >Sign In With Facebook</span
                >
            </div>
        </button>
    </div>
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
