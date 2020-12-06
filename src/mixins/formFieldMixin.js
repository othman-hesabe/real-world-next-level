export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  // method from baseselect component
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
