export const useBooksLineChart = (data) => {
  const series = Object.values(data);
  const categories = Object.keys(data);

  const chartOptions = {
    xAxis: {
      type: 'category',
      data: categories,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: series,
        type: 'line',
      },
    ],
  };

  return { chartOptions };
};
