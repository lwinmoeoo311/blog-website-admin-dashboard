<template>
    <div id="user-auth">
        <form @click.prevent="true">
            <h1>Create New Account</h1>

            <input type="text" placeholder="Display Name" class="user-auth">
            <input type="email" placeholder="Email" class="user-auth">
            <input type="password" placeholder="Password" class="user-auth">

            <button class="user-auth-btn">Sign Up</button>
        </form>

        <p>Already created account? <span @click="userFormHandler">Login</span></p>
    </div>
</template>

<script>
export default {
    setup(props, context) {
        const userFormHandler = () => {
            context.emit("login")
        }

        return { userFormHandler }
    }
}
</script>

<style>
.user-auth-btn {
    margin-top: 10px;
    width: 300px;
    padding: 10px;
}

p {
    margin-top: 30px;
}

span {
    cursor: pointer;
    color: rgb(44, 67, 221);
    text-decoration: underline;
}

span:active {
    color: rgb(123, 166, 197);
}
</style>