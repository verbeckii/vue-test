<template>
  <div>
    <div>
      <h1>Welcome to the Book Club</h1>
      <p>Summary of your reading progress:</p>
    </div>
    <ul>
      <li v-for="(book, index) in readingList" :key="index">
        {{ book.title }} by {{ book.author }} with {{ book.isbn }} ISBN -
        {{ book.read ? 'Read' : 'Unread' }}
        <template v-if="book.read">
          <button @click="toggleReadStatus(book)">Mark as Unread</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { readingList } from '../store'

export default {
  name: 'HomePage',
  setup() {
    return {
      readingList
    }
  },
  methods: {
    toggleReadStatus(book) {
      book.read = !book.read
    }
  }
}
</script>
