/**
 * 1 
 */
export default {
    'RwCardTitle-有标题':`<RwCardTitle title="行情动态" />`,
    'RwCardTitle-无标题':`<RwCardTitle notitle />`,
    '基础页面':`<RwTable  :data="dataList" :height="tableHeight">
    <elColumn v-for="i in cols" v-bind="i" :key="i.prop" />
  </RwTable>
  
  <script>
          dataList:[],
        tableHeight:400,
        cols: [
          {
            prop: "arbitrageCode",
            label: "套利代码",
            align: "center",
            renderJsx: (h, params) => {
              return <div>{params.row[params.column.property]}</div>;
            },
          },
          {
            prop: "arbitrageName",
            label: "套利名称",
            align: "center",
            renderJsx: (h, params) => {
              return <div>{params.row[params.column.property]}</div>;
            },
          }
        ]
  </script>`
}