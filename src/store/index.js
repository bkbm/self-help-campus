import { createStore } from 'vuex';
import * as firebase from '../firebase';
import router from '../router/index';

console.log(router, firebase);
export default createStore({
    state: {
        user: null,
        userProfile: {},
        worksheet: {},
        questions: { ws1: ['State the situation?', 'What emotions did it evoke? What sensations did you experience', 'What thoughts did it  b'] },
    },
    getters: {
        getUserProfile(state) {
            return state.userProfile;
        },
        getUser(state) {
            return state.user;
        },
        getWorksheet(state) {
            return state.worksheet;
        },
        getQuestions(state) {
            return state.questions;
        },
    },
    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val;
        },
        setUser(state, val) {
            state.user = val;
        },
        setUserWorksheet(state, val) {
            state.worksheet = val;
        },
    },
    actions: {
        async login({ dispatch }, form) {
            const { user } = await firebase.auth.signInWithEmailAndPassword(
                form.email,
                form.password
            );

            dispatch('fetchUserProfile', user);
            router.push('/dashboard');
        },
        async fetchUserProfile({ commit, dispatch }, user) {
            const userProfile = await firebase.usersCollection
                .doc(user.uid)
                .get();

            commit('setUserProfile', userProfile.data());
            commit('setUser', user.uid);

            dispatch('fetchUserWorksheet', user.uid);
        },
        async signup({ dispatch }, form) {
            const { user } = await firebase.auth.createUserWithEmailAndPassword(
                form.email,
                form.password
            );

            await firebase.usersCollection.doc(user.uid).set({
                firstName: form.firstName,
                secondName: form.secondName,
                title: form.title,
            });

            dispatch('fetchUserProfile', user);
            router.push('/dashboard');
        },
        //not working yet need to figure out, need to make specific to user
        async fetchUserWorksheet({ commit, state }) {
            const worksheets = {};
            console.log('User: ', state.user);
            (
                await firebase.worksheetCollection
                    .where('userid', '==', state.user)
                    .get()
            ).forEach((doc) => {
                worksheets[doc.id] = doc.data();
                console.log(state.user, doc.id, ' ', doc.data());
                return worksheets;
            });
            console.log(worksheets);
            commit('setUserWorksheet', worksheets);
        },
        async submitFormData({state},form) {
            const object = {
                uid: state.user,
                templateid: form.templateid,
                date: form.date,
                time: form.time,
                situation: form.situation,
                emotion: form.emotion, 
                thoughts: form.thoughts
            };
            console.log(object)
        },
    },
    modules: {},
});
