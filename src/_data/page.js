import  { ref } from 'vue'

const currentPage = ref('inicio')

function setCurrentPage(page) {
    currentPage.value = page
}

export { currentPage, setCurrentPage}