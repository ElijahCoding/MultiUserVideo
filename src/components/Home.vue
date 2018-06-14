<template>
  <div class="home">
    <form action="#" class="join">

      <h1>Start chatting.</h1>

      <label for="room" class="label">Room ID</label>
      <input type="text" class="input" name="room" placeholder="e.g. ABC-123-456">

      <label for="name" class="label">Your name</label>
      <input type="text" class="input" name="name" placeholder="e.g.Elijah" >

      <button type="submit" class="button button--primary">
        Join
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import '~styles/app.scss';

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .join {
    width: 100%;
    max-width: 400px;
  }
</style>
