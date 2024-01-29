<template>
  <div>
    <h1>Search Books</h1>
    <form @submit.prevent="searchBooks">
      <label for="search">Search:</label>
      <input
        v-model="searchTerm"
        type="text"
        id="search"
        placeholder="Search by title, author, or ISBN"
        required
      />

      <button type="submit">Search</button>
    </form>

    <h2>Search Results:</h2>
    <ul>
      <li v-for="(book, index) in searchResults" :key="index">
        {{ book.title }} by {{ book.author }} with {{ book.isbn }} ISBN
      </li>
    </ul>
  </div>
</template>

<script>
import { readingList } from '../store'

export default {
  name: 'SearchPage',
  data() {
    return {
      searchTerm: '',
      searchResults: []
    }
  },
  methods: {
    searchBooks() {
      this.searchResults = readingList.value.filter(
        (book) =>
          book.title.toLowerCase().trim().includes(this.searchTerm.toLowerCase()) ||
          book.author.toLowerCase().trim().includes(this.searchTerm.toLowerCase()) ||
          book.isbn.toLowerCase().trim().includes(this.searchTerm.toLowerCase())
      )
    }
  }
}
</script>
