export const useBooksLineChart = (chartData) => {
  const series = Object.values(chartData);
  const categories = Object.keys(chartData);

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
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const { data, axisValueLabel } = params[0];

        const items = [];
        data.titles?.forEach((title) => items.push(`<li>${title}</li>`));

        const tooltip = `
              <div class="text-black">
                  <p>${axisValueLabel}: ${data.titles?.length}</p>
                  <p>Total: ${data.value}</p>
                  ${
                    items.length
                      ? `<ul class="mt-5 w-60 text-sm whitespace-normal space-y-2">
                              ${items.join('')}
                         </ul>`
                      : ''
                  }
              </div>
          `;

        return tooltip;
      },
    },
  };

  return { chartOptions };
};
