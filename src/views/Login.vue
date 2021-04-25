<template>
    <div class="container">
        <div class="flex w-1/2">
            <div class="p-6">
                <h1>Self Help Campus</h1>
            </div>
            <LoginComponent />
        </div>
        <div class="flex w-1/2">
            <SignupComponent />
        </div>
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignupComponent';
export default {
  name: "Login",
  components: {
    LoginComponent,
    SignupComponent,
  },
  setup() {},
};
</script>
