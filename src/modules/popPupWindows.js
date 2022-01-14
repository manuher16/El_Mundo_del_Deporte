export default {
    namespaced: true,
    state: {
        modalWelcome: localStorage.getItem('modalWelcome') == "true" ? true : false,
        modalAbout: localStorage.getItem('modalAbout') == "true" ? true : false,
    },
    mutations: {
        setModalWelcome(state, value) {
            localStorage.setItem('modalWelcome', value);
            state.modalWelcome = value;
        },
        setModalAbout(state, value) {
            state.modalAbout = value;
        },
    },
}