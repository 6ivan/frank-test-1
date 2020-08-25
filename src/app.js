import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
// import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    },
    created(){
    },
    methods: {
        inputChange (e) {
            console.log(e)
        }
    }
})
//单元测试
// import chai from 'chai'
//
// const expect = chai.expect
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     button.$mount('#test')
//     let useElement = button.$el.querySelector('use');
//     console.log(useElement);
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
// }
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     })
//     button.$mount()
//     let useElement = button.$el.querySelector('use');
//     console.log(useElement);
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
// }
//
//
//
//





