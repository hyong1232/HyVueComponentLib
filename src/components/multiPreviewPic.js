export default {
    props:{
        imglist:{
            type:Array,
            require:true
        },
        activeIndex:{
            type:String,
            require:true
        },
        isshow:{
            type:Boolean,
            require:true
        },
        width:{
            type:String,
        },
        height:{
            type:String
        }
    },
    data(){
        return {
            show:this.isshow,
            index:this.activeIndex,
        }
    },
    watch:{
        isshow(){
            this.show = this.isshow
        },
        show(val){
            this.$emit('update:isshow',val)
        },
        activeIndex(){
            this.index = this.activeIndex
        },
        index(val){
            this.$emit('update:active-index',val)
            this.$nextTick(_ => {
                let canvas = this.$refs.canvas
                let ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                this._getImg(this.imglist[this.index])
                    .then(res => {
                        canvas.width = res.width
                        canvas.height = res.height
                        ctx.drawImage(res, 0, 0, res.width, res.height)
                    }).catch(err => {
                        console.error(err);
                    })
            })
        }
    },
    methods:{
        _getImg(src){
            return new Promise(function (resolve,reject) {
                let img = new Image()
                img.onload= function (params) {
                    resolve(img)   
                }
                img.src = src
            })
        }
    },
    computed:{
        totalNum(){
            return `${this.index+1}/${this.imglist.length}`
        }
    },
    template:`
    <div class="previewbox" v-if="show" @click="show=false">
        <div class="goleft" @click.stop='index<1?index=imglist.length-1:index--;'>
            <div class="directionpicleft"></div>
        </div>
        <canvas @click.stop ref='canvas'/>
        <div class="goright" @click.stop='index>imglist.length-2?index=0:index++;'>
            <div class="directionpicright"></div>
        </div>
        <div class="totalNum">
            {{totalNum}}
        </div>
    </div>
    `
}