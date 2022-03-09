
Vue.component('messeges-list', {
    props : ['messages'],
    template: '<div><div v-for = "message in messages">{{ message.text }}</div></div>'
});

var app = new Vue({
    el: '#app',
    template: '<messeges-list messeges = "messages"/>',
    data: {
        messages:
            [{id: '0' , text: 'test_text'},
            { id: '1' , text: 'test_text2'}]
    }
})

