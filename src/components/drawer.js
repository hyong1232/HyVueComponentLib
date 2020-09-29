export default {
    props:{
        isshow:{
            type:Boolean,
            require:true,
        },
        position:{
            type:String,
            default:'right',
            require:true,
        },
        width:{
            type:String,
            default:'100%',
        },
        height:{
            type:String,
            default:'100%',
        }
    },
    data(){
        return {
            
        }
    },
    watch:{
        isshow(val){
            this.$emit('update:isshow',val)
        }
    },
    methods:{

    },
    template:`
        <div class="drawerbox" v-if="isshow" @click="isshow=false">
            <div class="drawercontent" :style={width,height,[position]:0} @click.stop>
                <slot>default slot</slot>
            </div>
        </div>
    `
}