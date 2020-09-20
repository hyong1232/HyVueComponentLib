const dbclickEdit = {
  props: ["isEdit"],
  methods: {
    change() {
        this.$parent.$children.filter((v) => v.name === "dbclickEdit").forEach(v=>{
            v.isEdit = true
        });
        this.isEdit = false;
    },
    sub() {
      this.isEdit = true;
      this.val = this.editval;
    },
    cancel() {
      this.isEdit = true;
    },
  },
  data() {
    return {
      val: "",
      name:'dbclickEdit',
      editval: "",
    };
  },
  template: `
    <div class="editableText">
        <div v-if="isEdit === true" @dblclick="change" >
            <input disabled v-model="val" >
        </div>
        <div v-else>
            <input type="text" v-model="editval">
            <button class="primary" @click="sub">确定</button>
            <button class="text" @click="cancel">取消</button>
        </div>
    </div>
    `,
};
export default dbclickEdit