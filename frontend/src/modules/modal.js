export default {
    namespaced: true,
    state: {
        modalInfoService: false,
        content: {}
    },
    mutations: {
        setModalInfoService(state, value) {
            state.modalInfoService = value;
        },
        showModalInfoService(state) {
            state.modalInfoService = false;
            state.modalInfoService = true;
        },
        hideModalInfoService(state) {
            state.modalInfoService = true;
            state.modalInfoService = false;
        },
        setContent(state, value) {
            state.content = value;
        }
    }
}