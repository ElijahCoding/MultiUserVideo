<template>
  <ul class="controls">
    <li class="controls__item">
      <a href="#" class="controls__link">
        Unmute me
      </a>
      <a href="#" class="controls__link">
        Mute me
      </a>
    </li>
    <li class="controls__item">
      <a href="#" class="controls__link">
        Unpause me
      </a>
      <a href="#" class="controls__link">
        Pause me
      </a>
    </li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .controls {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #2b9cf2;
    color: #fff;
    margin: 0;
    list-style-type: none;
    padding: 0;

    &__item {
      flex: 1;
      font-weight: 600;
      border-right: 1px solid #0e83dc;
    }

    &__link {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 15px 18px;
      height: 100%;
      width: 100%;
      text-align: center;

      &:hover {
        background-color: #0e83dc;
      }
    }
  }
</style>
