<template>
<<<<<<< HEAD
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
=======
    <div id="login">
        <section>
            <div
                class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
            >
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
>>>>>>> ece66b8b530affcbc69cc95cb4a1d42e626d9781
</template>
<script>
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
export default {
  name: "Login",
  components: {
    LoginComponent,
    SignupComponent,
  },
  setup() {},
};
</script>
