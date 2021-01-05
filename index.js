import cubejs from '@cubejs-client/core';
import Chart from 'chart.js';
import chartjsConfig from './toChartjsData';

const cubejsApi = cubejs(
    'c39ae0d9bf0205c46a10074ac758f7f4c38b2ca9a697d9effc1d6bd0f2cc03398cde0cdc3bd1e34758f4ce6ac5f218fdf06d5aa58da0cc1542a6f0ae74fb2488',
  { apiUrl: 'http://localhost:4000/cubejs-api/v1' },
);

const resultSet = await cubejsApi.load({
  measures: ['Language.count'],
  dimensions: ['Language.name'],
});


const context = document.getElementById('myChart');
new Chart(context, chartjsConfig(resultSet));