<template>
    <form @submit.prevent="signup">
        <h1>Get Started</h1>
        <div>
            <label for="fname">First Name</label>
            <input
                v-model.trim="signupForm.firstName"
                type="text"
                placeholder="placeholder"
                id="fname"
            />
        </div>
        <div>
            <label for="sname">Second Name</label>
            <input
                v-model.trim="signupForm.secondName"
                type="text"
                placeholder="placeholder"
                id="sname"
            />
        </div>
        <div>
            <label for="title">Title</label>
            <input
                v-model.trim="signupForm.title"
                type="text"
                placeholder="placeholder"
                id="title"
            />
        </div>
        <div>
            <label for="email2">Email</label>
            <input
                v-model.trim="signupForm.email"
                type="text"
                placeholder="you@hotmail.com"
                id="email2"
            />
        </div>
        <div>
            <label for="password2">Password</label>
            <input
                v-model.trim="signupForm.password"
                type="password"
                placeholder="min 6 characters"
                id="password2"
            />
        </div>
        <button class="button">Signup</button>
    </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const signupForm = ref({
            firstName: "",
            secondName: "",
            title: "",
            email: "",
            password: "",
        });
        const signup = () => {
            store.dispatch("signup", {
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
