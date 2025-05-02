<template>
    <div class="card-container">
        <div class="card">
            <div class="card-header">Header 1</div>
            <div class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <button class="toggle-button">See more</button>
            <div class="card-actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <!-- Add more cards as needed -->
    </div>


</template>

<script>
export default {

}
</script>

<style>
.card-container {
    display: flex;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
}

.card {
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-header {
    font-weight: bold;
    margin-bottom: 8px;
}

.card-content {
    max-height: 5.5em;
    line-height: 1.375em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    transition: max-height 0.3s ease;
}

.card-content.expanded {
    max-height: none;
    -webkit-line-clamp: unset;
    overflow: visible;
}

.toggle-button {
    background: none;
    border: none;
    color: blue;
    cursor: pointer;
    margin-top: 8px;
    align-self: flex-start;
    padding: 0;
}

.card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
</style>