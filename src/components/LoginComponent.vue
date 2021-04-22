<template>
  <form @submit.prevent="login">
    <h2>Welcome Back</h2>
    <div>
      <label for="email1">Email</label>
      <input
        v-model.trim="loginForm.email"
        type="text"
        placeholder="you@email.com"
        id="email1"
      />
    </div>
    <div>
      <label for="password1">Password</label>
      <input
        v-model.trim="loginForm.password"
        type="password"
        ploaceholder="********"
        id="password1"
      />
    </div>
    <button class="button">Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
export default {
  props: [],
  setup() {
    const store = useStore()
    const loginForm = ref({ email: "", password: "" });
    const login = () => {
     store.dispatch("login", {
        email: loginForm.value.email,
        password: loginForm.value.password,
      });
    };
    return { login, loginForm };
  },
};
</script>

<style></style>
