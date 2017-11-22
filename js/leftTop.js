var myChartLeftTop=echarts.init(document.getElementById('leftTop'));
var option = {
    title : {
        //text: '',
        subtext:'下半年情况',
        subtextStyle:{
          fontSize:16,
        },
        x:'center',
        textStyle:{
          color:'#fff'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['内容'],
        x:'center',
        y:'bottom',
        textStyle:{
          color:'#fff'
        }
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ['0','10','20','40','60','80','100'],
            axisLabel : {
              textStyle:{
                color:'#fff'
              }
            },
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                  color: '#ccc',
                  type: 'solid',
                  width: 0
                }
            },
            splitLine : {
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
              textStyle:{
                color:'#fff'
              }
            },
            axisLine : {    // 轴线
              show: true,
              lineStyle: {
                color: '#ccc',
                type: 'solid',
                width: 0.5
              }
          },
          splitLine : {
              show:false
          }
        },

    ],
    grid:{
        width:'70%',
        borderColor:'none',
        borderWidth:0,
        containLabel: true
    },
    series : [
        {
            name:'内容',
            type:'line',
            smooth:true,
            itemStyle: {
              normal: {
                color:'#fff',  //拆线点颜色
                lineStyle:{  //拆线条颜色
                  color:'#99CCFF',
                  type:'solid'
                },
                areaStyle: {
                  color:'rgba(153,204,255,0.5)',  //区域填充
                  type: 'default'
                }
              }
            },
            data:[1320, 1132, 601, 234, 120, 500, 20],

        },


    ]
};

myChartLeftTop.setOption(option);
