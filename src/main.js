import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ReadingList from './components/ReadingList.vue'
import HomePage from './components/HomePage.vue'
import SearchPage from './components/SearchPage.vue'
import AddBook from './components/AddBook.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/reading-list', component: ReadingList },
  { path: '/add-book', component: AddBook }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
