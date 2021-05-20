import { createStore } from 'vuex';
import * as firebase from '../firebase';
import router from '../router/index';

console.log(router, firebase);
export default createStore({
    state: {
        user: null,
        userProfile: {},
        worksheet: {},
        questions: {
            ws1: [
                { type: 'text', question: 'State the situation?' },
                {
                    type: 'text',
                    question:
                        'What emotions did it evoke? What sensations did you experience',
                },
                { type: 'text', question: 'What thoughts did it provoke?' },
            ],
            ws2: [
                {
                    type: 'bigtext',
                    question: 'Write whats been bothering you:',
                },
            ],
            ws3: [
                {
                    type: 'text',
                    question: 'Text:',
                },
                {
                    type: 'bigtext',
                    question: 'Big Text:',
                },
                {
                    type: 'date',
                    question: 'Date:',
                },
                {
                    type: 'time',
                    question: 'Time:',
                },
                {
                    type: 'range',
                    question: 'range:',
                },
            ],
        },
    },
    getters: {
        getUserProfile(state) {
            return state.userProfile;
        },
        getUser(state) {
            console.log(state.user);
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
        async fetchUserProfile({ commit }, user) {
            const userProfile = await firebase.usersCollection
                .doc(user.uid)
                .get();

            commit('setUserProfile', userProfile.data());
            commit('setUser', user.uid);
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
                    .where('uid', '==', state.user)
                    .get()
            ).forEach((doc) => {
                worksheets[doc.id] = doc.data();
                console.log(state.user, doc.id, ' ', doc.data());
                return worksheets;
            });
            console.log(worksheets);
            commit('setUserWorksheet', worksheets);
        },
        async submitFormData({ dispatch }, object) {
            console.log('hello', object);
            await firebase.worksheetCollection.add(object);
            dispatch('fetchUserWorksheet', object.uid);
        },
    },
    modules: {},
});
