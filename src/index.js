import dbclickEdit from "@/components/dblclickEditInput";

new Vue({
    el:'#app',
    components:{
        dbclickEdit
    },
    data:{
        isEdit:true
    },
    template:`
        <div>
            <dbclick-edit :isEdit="isEdit"/>
            <dbclick-edit :isEdit="isEdit"/>
            <dbclick-edit :isEdit="isEdit"/>
            <dbclick-edit :isEdit="isEdit"/>
        </div>
    `
})