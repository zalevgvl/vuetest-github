<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <div class="t-body">
      <div class="t-header-row" v-if="!isMobileView">
        <div class="t-header" v-for="(header, hIndex) in columns" :key="hIndex">
          {{header.label}}
        </div>
      </div>
      <div class="t-row" v-for="(row, rowIndex) in selectedRows" :key="rowIndex">
        <div class="t-col"
             v-for="(col, colIndex) in row"
             :key="colIndex"
             :style="{width: col.width}">
          {{col.value}}
        </div>
      </div>
    </div>

    <div class="data-table__paginator">
      <ui-pagination v-model="page" :pages="pageCount" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
    isMobileView: false,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },

    selectedRows() {
      return this.rows.filter(() => true).map((row) => this.columns.map((header) => ({
        label: header.label,
        value: row[header.prop],
        width: header.width,
      })));
    },
  },
};
</script>
