<template>
    <h1>Note</h1>
    <div>
        <button @click="showModal = true">Create</button>

        <div v-if="showModal" class="overlay" @click="closeModal">
            <div class="modal" @click.stop>
                <h3>Create Note</h3>
                <input type="text" placeholder="Header" v-bind="noteHeader">
                <textarea placeholder="Write your note here..."></textarea>
                <button @click="closeModal">Add</button>
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const showModal = ref(false)

        function closeModal() {
            showModal.value = false
        }

        return { showModal, closeModal }
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal {
    background: antiquewhite;
    padding: 20px;
    border-radius: 8px;
    z-index: 1000;
}

form {
    margin: 10px auto;
}

input {
    display: block;
    margin: 15px auto;
    padding: 10px;
    width: 300px;
    color: rgb(98, 85, 85);
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 3px rgb(123, 166, 197);
}

textarea {
    display: block;
    margin: 15px auto;
    padding: 10px;
    width: 300px;
    height: 300px;
    color: rgb(98, 85, 85);
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 3px rgb(123, 166, 197);
}
</style>

<!-- <template>
    <h1>Note</h1>

    <button @click="showNoteCard = true"> + Create</button>

    <div class="note-container" v-if="showNoteCard" @click="closeNoteCard">
        <div class="note-create-card">
            <h2>Create Note</h2>
            <form>
                <input type="text" placeholder="Header" v-bind="noteHeader">
                <textarea v-bind="noteContent"></textarea>
                <button>Add</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let showNoteCard = ref(false)

        let closeNoteCard = () => {
            showNoteCard.value = false
        }

        return { showNoteCard, closeNoteCard }
    }
}
</script>

<style scoped>
.note-container {
    position: fixed;
    width: 70%;
    height: 100vh;
    text-align: center;
    margin: 0px auto;
    z-index: 999;
}

.note-create-card {
    z-index: 1000;
}

form {
    margin: 10px auto;
}

input {
    display: block;
    margin: 15px auto;
    padding: 10px;
    width: 300px;
    color: rgb(98, 85, 85);
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 3px rgb(123, 166, 197);
}

textarea {
    display: block;
    margin: 15px auto;
    padding: 10px;
    width: 300px;
    height: 300px;
    color: rgb(98, 85, 85);
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px 3px rgb(123, 166, 197);
}
</style> -->