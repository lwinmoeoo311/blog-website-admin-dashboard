<template>
    <div v-if="!isEditable" class="note-container">
        <div class="card-container">
            <div class="btn-container">
                <img src="../assets/left-arrow-svgrepo-com.svg" title="Back" class="back btn" @click="$emit('goBack')">
                <div class="action-btn-container">
                    <img src="../assets/edit-button.svg" title="Edit" class="edit btn" @click="editNote">
                    <img src="../assets/delete-button.svg" title="Delete" class="delete btn">
                </div>
            </div>
            <h1 class="header">{{ header }}</h1>
            <p class="content">{{ content }}</p>
        </div>
    </div>
    <div v-else class="edit-note-wrapper">
        <div class="edit-note-form">
            <input type="text" v-model="header" placeholder="Title" class="note-title" />

            <textarea v-model="content" placeholder="Write your note..." class="note-textarea"></textarea>

            <div class="button-group">
                <button class="edit-btn" @click="toEditNote">Edit</button>
                <button class="cancel-btn" @click="$emit('goBack')">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import getExpendNote from '@/composables/getExpendNote';
import { ref, watch } from 'vue';
import Note from './Note.vue';
import modifyNote from '@/composables/editNote';

export default {
    components: {
        Note
    },
    props: {
        noteId: String,
        isEditableNote: Boolean,
    },
    setup(props) {
        const id = ref(props.noteId)
        const isEditable = ref(props.isEditableNote)

        watch(() => props.noteId, (newId,) => {
            id.value = newId
        })

        const { header, content, getTargetNote } = getExpendNote()

        getTargetNote(id.value)

        const editNote = () => {
            isEditable.value = true
        }

        const toEditNote = () => {
            modifyNote(id.value, { header: header.value, content: content.value })
            isEditable.value = false
        }

        return { header, content, isEditable, editNote, toEditNote }
    }
}
</script>

<style scoped>
.note-container {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid #a58f8f;
    border-radius: 6px;
}

.card-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 aut;
}

.btn-container {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #a58f8f;
}

.action-btn-container {
    /* padding: 10px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* border-bottom: 1px solid #a58f8f; */
}

.btn {
    width: 20px;
    height: 20px;
    padding: 10px;
}

.back {
    border: 1px solid rgb(123, 166, 197);
    border-radius: 50%;
    background-color: rgb(123, 166, 197);
    cursor: pointer;
}

.edit {
    background-color: rgb(123, 166, 197);
    cursor: pointer;
}

.delete {
    background-color: rgb(205, 18, 18);
    cursor: pointer;
}

/* .edit-note-container {
    width: 100vh;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

input {
    width: 300px;
    padding: 10px;
    margin: 0 auto;
}

textarea {
    width: 300px;
    height: 300px;
    padding: 10px;
    margin: 0 auto;
}

.action-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
} */

.edit-note-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.edit-note-form {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 600px;
}

.note-title {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.note-textarea {
    width: 100%;
    height: 300px;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    resize: vertical;
    margin-bottom: 1.5rem;
}

.button-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.edit-btn,
.cancel-btn {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.edit-btn {
    background-color: #4f46e5;
    /* Indigo */
    color: #fff;
}

.edit-btn:hover {
    background-color: #4338ca;
}

.cancel-btn {
    background-color: #e5e7eb;
    /* Light gray */
    color: #111827;
    /* Dark text */
}

.cancel-btn:hover {
    background-color: #d1d5db;
}

/* */

.edit:active {
    background-color: aliceblue;

}

.delete:active {
    background-color: aliceblue;
}

.back:active {
    background-color: aliceblue;
}
</style>