<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-row h-16 z-50 bg-gray-300">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/dashboard"> Dashboard </router-link> |
                <router-link to="/worksheets"> Worksheets </router-link> |
                <router-link to="/login">Login</router-link> |
            </div>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
