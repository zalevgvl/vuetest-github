<template>
  <input
    type="text"
    v-model="valueInput"
    class="ui-money"
  />
</template>

<script>
export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  computed: {
    valueInput: {
      get() {
        return this.props?.value || null;
      },
      set(value) {
        this.$emit('input', Number(value));
      },
    },
  },

};
</script>
