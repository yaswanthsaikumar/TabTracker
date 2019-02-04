<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="email" v-model="email" placeholder="email">
    <br>
      <input type="text" name="password" v-model="password" placeholder="password">
      <br>
      <button>Register</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abc',
      password: '123'

    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {

    }, 1000)
  }
}
</script>

<style scoped>
