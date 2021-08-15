<template>
  <div class="ui-data-table">

    <div class="ui-data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <div class="ui-data-table__body">
      <div class="ui-data-table__row ui-data-table__header-row">
        <div class="ui-data-table__header"
             v-for="(header, hIndex) in columns"
             :key="hIndex"
             :style="{width: header.width}">
          {{header.label}}
        </div>
      </div>
      <div class="ui-data-table__row" v-for="(row, rowIndex) in tableData" :key="rowIndex">
        <div class="ui-data-table__col"
             v-for="(col, colIndex) in row"
             :key="colIndex"
             :style="{width: col.width}">
          <span class="ui-data-table__col-header">{{col.label}}</span>
          <span class="ui-data-table__col-value">{{col.value}}</span>
        </div>
      </div>
    </div>

    <div class="ui-data-table__paginator">
      <ui-pagination v-model="page" :pages="pageCount" />
    </div>
  </div>
</template>

<script>
import numbersView from '../utils/numbersView';
import dateFormatDdMmYyyy from '../utils/dateFormatDdMmYyyy';

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
  }),

  methods: {
    setCellFormat(cellName, value) {
      switch (cellName) {
        case 'money': return numbersView(value);
        case 'date': return dateFormatDdMmYyyy(value);
        default: return value;
      }
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.filteredRows.length / this.pageSize);
    },

    filteredRows() {
      return this.rows.filter((row) => !this.moneyFilter || this.moneyFilter < 0 || row.money <= this.moneyFilter);
    },

    selectedRows() {
      const selectedRows = [];
      for (let i = (this.page - 1) * this.pageSize, ln = i + this.pageSize; i < ln; i += 1) {
        if (!this.filteredRows[i]) break;
        selectedRows.push(this.filteredRows[i]);
      }
      return selectedRows;
    },

    tableData() {
      return this.selectedRows.map((row) => this.columns.map((header) => ({
        label: header.label,
        value: this.setCellFormat(header.prop, row[header.prop]),
        width: header.width,
      })));
    },
  },
};
</script>
