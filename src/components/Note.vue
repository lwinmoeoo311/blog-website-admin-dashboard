<template>
    <h1>Note</h1>
    <div>
        <button @click="showModal = true"> + Create</button>

        <div v-if="showModal" class="overlay" @click="closeModal">
            <div class="modal" @click.stop>
                <h3>Create Note</h3>
                <input type="text" placeholder="Header" v-bind="noteHeader">
                <textarea placeholder="Write your note here..."></textarea>
                <button @click="closeModal">Add</button>
            </div>
        </div>
    </div>

    <div class="card-container">
        <div class="card" v-for="note in noteCollection" :key="note.id">
            <div class="heading">
                <h1 class="header">{{ note.header }}</h1>
                <span class="created-at">{{ note.created_at }}</span>
            </div>
            <p class="content">{{ initialNoteCollection[note.id] }} ...<span> See More</span></p>
            <div class="action-btns">
                <!-- <img src="../assets/edit-button.svg" title="Edit" class="edit-btn">
                <img src="../assets/delete-button.svg" title="Delete" class="delete-btn"> -->
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>
    </div>

</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    setup() {
        const showModal = ref(false)
        const noteCollection = ref([])
        const initialNoteCollection = ref([])

        function closeModal() {
            showModal.value = false
        }

        onMounted(() => {
            fetch('http://localhost:3000/note/')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    noteCollection.value = data

                    initialNoteCollection.value = noteCollection.value.map(note => note.content.substring(0, 200))
                })
                .catch(err => {
                    console.log(err.message)
                })
        })

        return { showModal, noteCollection, initialNoteCollection, closeModal }
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

.card-container {
    width: 1100px;
    margin-top: 30px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
    width: 300px;
}

.heading {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header {
    font-size: 25px;
}

.created-at {
    color: gray;
    cursor: auto;
}

.content {
    font-size: 15px;
    line-height: 1.5rem;
    width: 100%;
}

.action-btns {
    width: 100%;
    /* background-color: rgb(233, 233, 138); */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.edit-btn {
    /* width: 20px; */
    width: 70px;
    height: 30px;
    margin-right: 10px;
    background-color: #F4A931;
    padding: 8px;
    cursor: pointer;
}

.delete-btn {
    /* width: 20px; */
    width: 70px;
    height: 30px;
    background-color: rgb(205, 18, 18);
    padding: 8px;
    cursor: pointer;
}

.edit-btn:active {
    background-color: wheat;
}

.delete-btn:active {
    background-color: wheat;
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