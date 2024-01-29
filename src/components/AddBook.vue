<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <label for="title">Title:</label>
      <input v-model="title" type="text" id="title" required />

      <label for="author">Author:</label>
      <input v-model="author" type="text" id="author" required />

      <label for="author">ISBN:</label>
      <input v-model="isbn" type="text" id="isbn" required />

      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { readingList } from '../store'

export default {
  name: 'AddBook',
  data() {
    return {
      title: '',
      author: '',
      isbn: '',
      read: false
    }
  },
  methods: {
    addBook() {
      const newBook = { title: this.title, author: this.author, isbn: this.isbn }
      readingList.value.push(newBook)
      this.$router.push('/')
    }
  }
}
</script>
