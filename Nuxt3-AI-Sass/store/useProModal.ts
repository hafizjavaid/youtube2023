
import { defineStore } from 'pinia'

export const useProModal = defineStore('ProModa', {
    state: () => ({
        isOpen: false 
    }),

    actions: {

        onOpen() {
            this.isOpen = true 
        },
        onClose() {
            this.isOpen = false  
        }

    }
})