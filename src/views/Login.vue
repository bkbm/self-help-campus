<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Self Help Campus</h1>
      </div>
      <div class="login">
        <LoginComponent />
      </div>
      <div class="signup">
        <SignupComponent />
      </div>
    </section>
  </div>
</template>
<script>
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
export default {
  name: "Login",
  components: {
    LoginComponent,
    SignupComponent
  },
  setup() {},
};
</script>
