import { reactive, toRefs } from "vue";

const state = reactive({

    isOpen: false

})

export default () => {

    const { isOpen } = toRefs(state);

    const onOpen = () => {
        state.isOpen = true
    }
    const onClose = () => {
        state.isOpen = false
    }

    return {
        isOpen,
        onClose,
        onOpen
    }

}