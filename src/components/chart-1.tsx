import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '兰州新区', count: 10},
    {name: '普陀新区', count: 20},
    {name: '拱墅新区', count: 30},
    {name: '大华新区', count: 35},
    {name: '中原新区', count: 50},
    {name: '东区', count: 15},
    {name: '水洞区', count: 40},
    {name: '建设区', count: 20},
    {name: '开发区', count: 10},
  ];

  useEffect(() => {
    setInterval(() => {
        const newData = [
          {name: '兰州新区', count: Math.random() * 100},
          {name: '普陀新区', count: Math.random() * 100},
          {name: '拱墅新区', count: Math.random() * 100},
          {name: '大华新区', count: Math.random() * 100},
          {name: '中原新区', count: Math.random() * 100},
          {name: '东区', count: Math.random() * 100},
          {name: '水洞区', count: Math.random() * 100},
          {name: '建设区', count: Math.random() * 100},
          {name: '开发区', count: Math.random() * 100},
        ];
        x(newData)
    }, 2000);
})

const x = (data) => {
  myChart.current.setOption(createEchartsOptions({
    xAxis: {
      data: data.map( i => i.name),
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        fontSize: px(12),
        formatter(val) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
 
    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      },
    },
    series: [{
      type: 'bar',
      data: data.map( i => i.count)
    }]
  }));
}

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
