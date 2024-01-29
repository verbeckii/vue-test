<template>
  <div>
    <h1>Reading List</h1>
    <ul>
      <li v-for="(book, index) in filteredReadingList" :key="index">
        {{ book.title }} by {{ book.author }} with {{ book.isbn }} ISBN
        <template v-if="!book.read">
          <button @click="toggleReadStatus(book)">Mark as read</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { readingList } from '../store'

export default {
  name: 'ReadingList',
  setup() {
    const filteredReadingList = computed(() => readingList.value.filter((book) => !book.read))

    return {
      filteredReadingList
    }
  },
  methods: {
    toggleReadStatus(book) {
      book.read = !book.read
    }
  }
}
</script>
