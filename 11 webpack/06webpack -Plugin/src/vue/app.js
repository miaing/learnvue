export default{
    template: `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <p>{{name}}</p>
    </div>
    `,
    data(){
        return {
            message:'你好啊，派大星',
            name:'luo'
        }
    },
    methods: {
        btnClick(){

        }
    },
}
