<template>
    <div v-if="cardCollection">
        <h1>Note</h1>
        <div>
            <button @click="showModal = true"> + Create</button>

            <div v-if="showModal" class="overlay" @click="closeModal">
                <div class="modal" @click.stop>
                    <h3>Create Note</h3>
                    <input type="text" placeholder="Header" v-model="noteHeader">
                    <textarea placeholder="Write your note here..." v-model="noteContent"></textarea>
                    <button @click="createNote">Add</button>
                </div>
            </div>
        </div>
        <div class="card-container">
            <div class="card" v-for="note in noteCollection" :key="note.id">
                <div class="heading">
                    <h1 class="header">{{ note.header }}</h1>
                    <span class="created-at">{{ note.created_at }}</span>
                </div>
                <p class="content" v-if="initialNoteCollection[note.id]">
                    {{ initialNoteCollection[note.id] }} <span @click="expandNote(note.id, false)"
                        v-if="initialNoteCollection[note.id].length === 200">
                        ...
                        See
                        More</span></p>
                <div class="action-btns">
                    <!-- <img src="../assets/edit-button.svg" title="Edit" class="edit-btn">
                    <img src="../assets/delete-button.svg" title="Delete" class="delete-btn"> -->
                    <button class="edit-btn" @click="toEditNote">Edit</button>
                    <button class="delete-btn" @click="toDeleteNote(note.id)">Delete</button>
                </div>
            </div>
        </div>

        <div class="overlay" v-if="showMsgBox" @click="closeAlert">
            <div class="modal" @click.stop>
                <h1>Delete</h1>
                <p>Are you sure you want to delete this note?</p>
                <div class="delete-alert">
                    <button class="cancel-btn" @click="closeAlert">Cancel</button>
                    <button class="delete-btn" @click="deleteNote">Delete</button>
                </div>
            </div>
        </div>
    </div>

    <component :is="expandNoteComponent" :noteId="noteId" :isEditableNote="isEditableNote"></component>

</template>

<script>
import ExpendNote from './ExpendNote'
import addNote from '@/composables/addNote'
import deleteItem from '@/composables/deleteNote'
import getNotes from '@/composables/getNotes'
import { onMounted, onUpdated, ref } from 'vue'

export default {
    components: { ExpendNote },
    setup() {
        const cardCollection = ref(true)
        const showModal = ref(false)
        const showMsgBox = ref(false)
        const noteHeader = ref("")
        const noteContent = ref("")
        const expandNoteComponent = ref()
        const noteId = ref("")
        const isEditableNote = ref(false)

        function closeModal() {
            showModal.value = false
        }

        function closeAlert() {
            showMsgBox.value = false
        }

        //Add Note
        const createNote = () => {
            const { addData } = addNote()
            addData(noteHeader.value, noteContent.value, closeModal)
        }

        //Expand Note
        const expandNote = (id, isEditable) => {
            noteId.value = id
            isEditableNote.value = isEditable
            cardCollection.value = false
            expandNoteComponent.value = 'ExpendNote'
        }

        //Edit Note
        const toEditNote = () => {
            console.log("Edit")
        }

        //Delete Note
        const toDeleteNote = (id) => {
            showMsgBox.value = true
            noteId = id
        }

        const deleteNote = () => {
            const { getDataToDelete } = deleteItem()
            getDataToDelete(noteId)
            closeAlert()
        }

        //Collect Note
        const { noteCollection, initialNoteCollection, getData } = getNotes()

        onMounted(() => {
            if (cardCollection.value) {
                getData()
            }
        })

        onUpdated(() => {
            if (cardCollection.value) {
                getData()
            }
        })

        return { cardCollection, showModal, showMsgBox, noteCollection, initialNoteCollection, noteHeader, noteContent, noteId, isEditableNote, expandNoteComponent, createNote, expandNote, toEditNote, toDeleteNote, deleteNote, closeModal, closeAlert }
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

.modal,
.delete-alert {
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

span {
    text-decoration: none;
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

.cancel-btn {
    width: 70px;
    height: 30px;
    background-color: rgb(181, 176, 176);
    padding: 8px;
    cursor: pointer;
}

.delete-alert {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.edit-btn:active {
    background-color: wheat;
}

.delete-btn:active {
    background-color: wheat;
}
</style>