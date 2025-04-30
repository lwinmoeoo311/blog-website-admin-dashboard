<template>
    <h1>Setting</h1>

    <div class="settings-container">
        <div class="setting">
            <p class="settting-label">Upload photo in full resolution</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="setting">
            <p class="settting-label">Notifications</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="setting">
            <p class="settting-label">Dark Mode</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="setting">
            <p class="settting-label">Never Autoplay Videos</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>

        <div class="setting">
            <p class="settting-label">Video starts with sound</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="policy">
        <p>Terms and Conidition</p>
        <p>Cookies Policy</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.policy {
    margin-left: 110px;
}

.policy p {
    color: #257db4;
    cursor: pointer;
}

.settings-container {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 100px;
}

.setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    border-bottom: 1px solid;
    padding: 10px;
}

.settting-label {
    display: inline-block;
    font-size: 18px;
    height: 1px;
    margin: auto 0;
    margin-bottom: 25px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 30px;
    margin: auto 0;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}

.slider::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #4CAF50;
}

input:checked+.slider::before {
    transform: translateX(26px);
}

.policy p:active {
    color: rgb(203, 212, 86);
}
</style>