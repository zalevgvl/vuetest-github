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
      required: true,
    },
  },

  computed: {
    valueInput: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', Number(value));
      },
    },
  },

};
</script>
