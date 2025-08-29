// @code.start: LswControlError API | @$section: Vue.js (v2) Components » Lsw Formtypes API » LswControlError component
Vue.component("LswControlError", {
  template: $template,
  props: {
    
  },
  data() {
    this.$trace("lsw-control-error-control.data");
    return {
      
    };
  },
  methods: {
    removeError() {
      this.$trace("lsw-control-error-control.methods.removeError");
      this.$refs.errorBox.$xform.$clearError();
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-control-error-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
// @code.end: LswControlError API