<template>
  <input
    type="text"
    :value="value | moneyView"
    @input="setInputValue"
    class="ui-money"
  />
</template>

<script>
import numbersView from '../../utils/numbersView';

export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
    },
  },

  filters: {
    moneyView(value) {
      if (!value) return '';
      return numbersView(value);
    },
  },

  methods: {
    setInputValue(event) {
      let numValue = event.target.value?.replace(',', '.')?.replace(/(^\.|[^0-9.])/g, '') || '';
      const decIndex = numValue.indexOf('.');
      if (numValue && decIndex !== -1) {
        numValue = `${numValue.substring(0, decIndex)}.${numValue.substring(decIndex + 1).replace('.', '').substring(0, 2)}`;
      }
      event.target.value = numbersView(numValue);
      console.log(numValue ? Number(numValue) : undefined);
      this.$emit('input', numValue ? Number(numValue) : undefined);
    },
  },

};
</script>
