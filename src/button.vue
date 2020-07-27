<template>
    <button class='g-button'>按钮</button>
</template>
<script>
    export default {
        name
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--fons-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg)
    }

    .g-button:hover {
        border-color: var(--boder-color-hover);
    }

    .g-button:active {
        background-color: var(--button-active-bg);
    }

    .g-button:focus {
        outline: none;
    }

</style>