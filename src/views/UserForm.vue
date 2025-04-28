<template>
    <div v-if="isNewUser">
        <SignUp @login="isNewUser = !isNewUser"></SignUp>
    </div>
    <div v-else>
        <Login @signUp="isNewUser = !isNewUser"></Login>
    </div>
</template>

<script>
import SignUp from '../components/SignUp'
import { ref } from 'vue'
import Login from '../components/Login'
export default {
    components: {
        SignUp, Login
    },
    setup() {
        const isNewUser = ref(false)

        return { isNewUser }
    }

}
</script>

<style></style>