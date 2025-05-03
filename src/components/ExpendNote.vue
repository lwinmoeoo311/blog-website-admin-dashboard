<template>
    <div class="note-container">
        <div class="card-container">
            <h1 class="header">{{ header }}</h1>
            <p class="content">{{ content }}</p>
        </div>
    </div>
</template>

<script>
import getExpendNote from '@/composables/getExpendNote';
import { ref, watch } from 'vue';


export default {
    props: {
        noteId: String,
        isEditableNote: Boolean,
    },
    setup(props) {
        const id = ref(props.noteId)

        watch(() => props.noteId, (newId,) => {
            id.value = newId
        })

        const { header, content, getTargetNote } = getExpendNote()

        getTargetNote(id.value)

        return { header, content }
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
}
</style>