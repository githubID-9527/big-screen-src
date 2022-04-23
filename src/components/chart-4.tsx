import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { time: 0, count: 0.15 },
    { time: 2, count: 0.13 },
    { time: 4, count: 0.11 },
    { time: 6, count: 0.13 },
    { time: 8, count: 0.14 },
    { time: 10, count: 0.15 },
    { time: 12, count: 0.16 },
    { time: 14, count: 0.18 },
    { time: 16, count: 0.21 },
    { time: 18, count: 0.19 },
    { time: 20, count: 0.16 },
    { time: 22, count: 0.17 },
    { time: 24, count: 0.15 },
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        { time: 0, count: Math.random() },
        { time: 2, count: Math.random() },
        { time: 4, count: Math.random() },
        { time: 6, count: Math.random() },
        { time: 8, count: Math.random() },
        { time: 10, count: Math.random() },
        { time: 12, count: Math.random() },
        { time: 14, count: Math.random() },
        { time: 16, count: Math.random() },
        { time: 18, count: Math.random() },
        { time: 20, count: Math.random() },
        { time: 22, count: Math.random()},
        { time: 24, count: Math.random() },
      ];
      x(newData)
    }, 3000);
  })

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i => i.time),
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        name: '故意伤人',
        type: 'line',
        data: data.map(i => i.count),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: { width: px(2) },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};