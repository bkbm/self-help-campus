<template>
    <form @submit="submitWorksheet" class='p-10 md:w-3/4 lg:w-3/4 mx-auto'>
        <div class="" v-for="item in array" :key="item">
            <div v-if="item.type == 'detail'" class="md:font-bold">
                <label> {{ item.question }} </label>
            </div>
            <div v-if="item.type == 'text'" >
                <label> {{ item.question }} </label>
                <input
                    v-model="worksheetAnswers[item.question]"
                    type="textarea"
                />
            </div>
            <div v-if="item.type == 'date'" >
                <label> {{ item.question }} </label>
                <input v-model="worksheetAnswers[item.question]" type="date" />
            </div>
            <div v-if="item.type == 'time'" >
                <label> {{ item.question }} </label>
                <input v-model="worksheetAnswers[item.question]" type="time" />
            </div>
            <div v-if="item.type == 'range'" >
                <label> {{ item.question }} </label>
                <vue-slider v-model="worksheetAnswers[item.question]" :min=" item.min " :max=" item.max "/>
            </div>
            <div v-if="item.type == 'bigtext'">
                <label> {{ item.question }} </label>
                <textarea v-model="worksheetAnswers[item.question]" cols="30" rows="10" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"></textarea>
            </div>
        </div>
        <button>Submit</button>
    </form>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
export default {
    components: {VueSlider},
    props: ['id'],
    setup(props) {
        const store = useStore();
        const worksheetid = ref(props.id);
        const array = computed(() => {
            return store.getters.getQuestions[worksheetid.value];
        });
        const userId = computed(() => {
            return store.getters.getUser;
        });
        const worksheetAnswers = ref({
            uid: userId.value,
            templateId: worksheetid.value,
        });

        const submitWorksheet = () => {
            console.log('before', worksheetAnswers.value);
            store.dispatch('submitFormData', worksheetAnswers.value);
        };
        return { worksheetid, array, submitWorksheet, worksheetAnswers };
    },
};
</script>

<style></style>
