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
                { type: 'text', question: 'State the situation?'  },
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
                    question: 'Write whats been bothering you',
                },
            ],
            ws3: [
                {question: 'What emotion do i want to change?'},
                {type: 'text', question: 'Emotion Name:'},
                {type: 'detail', question: 'Intensity (0-100)'},
                {type: 'range', question: 'Before:', min: '0', max:'100'},
                {type: 'range', question: 'After', min: '0', max: '100'},
                {type: 'detail', question: 'What is the prompting event for my emotional reaction?'},
                {type: 'bigtext', question: 
                'Describe Prompting Event(What happened that led you to have this emotion? Who did what to whom? What led up to what? What is it about the event that is a problem for you?)'},
                {type: 'detail', question: 'Check the facts'},
                {question: 'Look for extremes and judgements in the way you are describing the prompting event.'},
                {type:'bigtext', question: 'REWRITE the facts, if necessary, to be more accurate'},
                {type:'detail',question:'What are Interpretations(thought, belief, etc.) about the facts?'},
                {type: 'bigtext',
                question: 'What am I assuming? Am i adding my own interpretations to the description of the prompting event?'},
                {type:'detail',question: 'Check the facts'},
                {type: 'bigtext', 
                question: 'List as many other possible interpretation of the facts as you'},
                {type: 'bigtext', 
                question:'REWRITE the facts if necessary. Try to check the accuracy of your interpretations. If you can\'t check the facts, write out a likely useful interpretation'},
                {type:'bigtext', question: 'Am i assuming a THREAT? What is the threat? What about this event or situation is threatening to me? What worrisome consequences or outcomes am i expecting?'},
                {type:'detail',question: 'Check the facts'},
                {type:'bigtext', question: 'List as many other possible outcomes as you can, given the facts'},
                {type:'bigtext',
                question: 'REWRITE the facts if needed. Try check the accuracy to your expectations. If you can\'t check out probable outcomes, write out a like noncatastrophic outcome to expect'},
                {type:'bigtext',
                question:'Whats the catastrophe, even if the outcome i am worrying about does occur? Describe in detail the worst outcome i can reasonably expect'},
                {type: 'bigtext', question: 'Describe ways to cope if the worst does happen'},
                {type: 'range', question: 'Does my emotion fit the facts', min:'0', max:'5'},
                {type: 'bigtext', question: 'Describe what you did to check the facts'}
            ],
            ws4: [
                {
                    type: 'text',
                    question: 'Text',
                },
                {
                    type: 'bigtext',
                    question: 'Big Text',
                },
                {
                    type: 'date',
                    question: 'Date',
                },
                {
                    type: 'time',
                    question: 'Time',
                },
                {
                    type: 'range',
                    question: 'Range',
                },
            ],
            ws5: [
                {
                    type: 'bigtext',
                    question: 'Describe. As objectively as possible, describe the situation',
                },                
                {
                    type: 'bigtext',
                    question: 'Express how you are affected by this situation. How does the situation make you feel? Remember, keep the focus on the ‘I’',
                },
                {
                    type: 'bigtext',
                    question: 'Assert. Make your thoughts and expectations known. What do you think about the situation?',
                },
                {
                    type: 'bigtext',
                    question: 'Reinforce. Explain why you think the way you doa nd why you want what you want. Explain how what you are asking for will benefit you.',
                },
                {
                    type: 'bigtext',
                    question: 'Mindful. Be mindful about how your feelings can influence your thoughts and communication skills. Be sure avoid invalidating others or letting your emotions fuel your participation in the conversation',
                },
                {
                    type: 'bigtext',
                    question: 'Appear Confidant, Remember that your presentation is important. Things like body language and tone can make a big difference in how your message is received. What can you do to ensure you appear confident but not confrontational? ',
                },
                {
                    type: 'bigtext',
                    question: 'Negotiate. Sometimes with difficulty situations there needs to be a compromise. In most circumstances compromise is possible. In what ways can you compromise, or negotiate terms in which both parties benefit?',
                },
            ]
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
