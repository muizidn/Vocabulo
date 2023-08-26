var data = {
  day: [
    { label: "Day 1", value: 10 },
    { label: "Day 2", value: 15 },
    { label: "Day 3", value: 20 },
    { label: "Day 4", value: 12 },
    { label: "Day 5", value: 18 }
  ],
  week: [
    { label: "Week 1", value: 70 },
    { label: "Week 2", value: 85 },
    { label: "Week 3", value: 100 },
    { label: "Week 4", value: 92 }
  ],
  month: [
    { label: "January", value: 300 },
    { label: "February", value: 380 },
    { label: "March", value: 420 },
    { label: "April", value: 390 },
    { label: "May", value: 430 }
  ]
};


var currentInterval = "day"; // Default interval

var chartOptions = {
  type: "bar",
  data: {
    labels: [],
    datasets: [{
      backgroundColor: '#58cc02',
      data: []
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Words Learned by Time Interval"
      }
    }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, chartOptions);

function updateChart(interval) {
  chartOptions.data.labels = data[interval].map(entry => entry.label);
  chartOptions.data.datasets[0].data = data[interval].map(entry => entry.value);
  myChart.update();
}

var timeIntervalSelect = document.getElementById("timeInterval");
timeIntervalSelect.addEventListener("change", function() {
  currentInterval = timeIntervalSelect.value;
  updateChart(currentInterval);
});

// Initial chart update
updateChart(currentInterval);