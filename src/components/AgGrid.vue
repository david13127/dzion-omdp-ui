<template>
  <div style="height: 800px">
    <div class="example-wrapper">
      <div class="example-header">
        <span class="legend-item ag-row-level-0"></span>
        <span class="legend-label">Top Level Group</span>
        <span class="legend-item ag-row-level-1"></span>
        <span class="legend-label">Second Level Group</span>
        <span class="legend-item ag-row-level-2"></span>
        <span class="legend-label">Bottom Rows</span>
      </div>
      <ag-grid-vue
        style="width: 100%; height: 600px;"
        class="ag-theme-alpine"
        id="myGrid"
        :gridOptions="gridOptions"
        @grid-ready="onGridReady"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :autoGroupColumnDef="autoGroupColumnDef"
        :enableRangeSelection="true"
        :groupHideOpenParents="true"
        :animateRows="true"
        :rowData="rowData"></ag-grid-vue>
    </div>
  </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue3'
export default {
  name: 'AgGrid',
  components: {
    'ag-grid-vue': AgGridVue
  },
  data: function () {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      autoGroupColumnDef: null,
      rowData: null
    }
  },
  beforeMount () {
    this.gridOptions = {}
    this.columnDefs = [
      {
        field: 'country',
        rowGroup: true,
        hide: true
      },
      {
        headerName: 'Year',
        valueGetter: 'data.year',
        rowGroup: true,
        hide: true
      },
      {
        field: 'athlete',
        minWidth: 200
      },
      {
        field: 'gold',
        aggFunc: 'sum'
      },
      {
        field: 'silver',
        aggFunc: 'sum'
      },
      {
        field: 'bronze',
        aggFunc: 'sum'
      },
      {
        field: 'total',
        aggFunc: 'sum'
      }
    ]
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
      sortable: true,
      resizable: true
    }
    this.autoGroupColumnDef = {
      minWidth: 200,
      filterValueGetter: (params) => {
        const colGettingGrouped = params.colDef.showRowGroup
        return params.api.getValue(
          colGettingGrouped,
          params.node
        )
      }
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onGridReady (params) {
      const updateData = (data) => {
        this.rowData = data
      }
      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data))
    }
  }
}
</script>
