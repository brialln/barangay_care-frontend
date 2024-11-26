// * This file contains the JavaScript code for the charts in the dashboard page.
window.addEventListener('resize', () => {
  chartInstance.resize();
});

// * This section contains the JavaScript code for the document request trends charts in the dashboard page.
// Pie Chart Data
const pieData = [44, 55, 13];
const pieLabels = ["Barangay ID", "Barangay Clearance", "Barangay Indigency"];
const totalRequests = pieData.reduce((sum, value) => sum + value, 0);

// Initialize Pie Chart
const pieOptions = {
  chart: {
    type: "pie",
    height: 350,
  },
  series: pieData,
  labels: pieLabels,
  legend: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
  dataLabels: {
    style: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      fontWeight: "500",
    },
  },
  title: {
    text: "Barangay Request Trends",
    align: 'center',
    style: {
      fontSize: '14px',
      fontFamily: 'Montserrat'
    }
  }
};
const pieChart = new ApexCharts(document.querySelector("#requestTrends"), pieOptions);
pieChart.render();

// Text Summary
const mostRequestedIndex = pieData.indexOf(Math.max(...pieData));
const mostRequestedLabel = pieLabels[mostRequestedIndex];
const mostRequestedPercentage = ((pieData[mostRequestedIndex] / totalRequests) * 100).toFixed(2);

const requestSummaryHTML = `
  <h4 class="summary-title">Barangay Request Trends Summary</h4>
  <p class="summary-text">Total Requests: <b>${totalRequests}</b></p>
  <p class="summary-text">Most Requested Document: <b>${mostRequestedLabel}</b> (${mostRequestedPercentage}% of total)</p>
  <p class="summary-text">Breakdown:</p>
  <ul class="summary-list">
    ${pieLabels.map((label, i) =>
      `<li class="summary-list-item">${label}: <b>${pieData[i]}</b> (${((pieData[i] / totalRequests) * 100).toFixed(2)}%)</li>`
    ).join("")}
  </ul>
`;
document.querySelector("#requestTrendsSummary").innerHTML = requestSummaryHTML;

// * This section contains the JavaScript code for the feedback charts in the dashboard page.
// Sample Feedback Data
const feedbackData = [
  { rating: 5, text: "Excellent service and very friendly staff." },
  { rating: 4, text: "Great experience but could be faster." },
  { rating: 3, text: "Average, nothing exceptional." },
  { rating: 5, text: "Amazing quality and quick delivery!" },
  { rating: 2, text: "Poor service, not satisfied with the experience." },
  { rating: 5, text: "Highly recommended for everyone!" },
  { rating: 1, text: "Terrible experience. Won't return!" },
];

// Calculate Ratings Distribution
const ratingCounts = feedbackData.reduce((counts, feedback) => {
  counts[feedback.rating] = (counts[feedback.rating] || 0) + 1;
  return counts;
}, {});

// Star Ratings Chart
const ratingsChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  series: [
    {
      name: "Number of Ratings",
      data: Object.values(ratingCounts),
    },
  ],
  xaxis: {
    categories: Object.keys(ratingCounts).map(rating => `${rating} Stars`),
    title: { text: "Ratings", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
  },
  yaxis: {
    title: { text: "Number of Feedbacks", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
  },
  title: {
    text: "Feedback Ratings Distribution",
    align: 'center',
    style: { fontSize: '14px', fontFamily: 'Montserrat' }
  }
};
new ApexCharts(document.querySelector("#feedbackRatingsChart"), ratingsChartOptions).render();

// Text Summary
const totalFeedbacks = feedbackData.length;
const avgRating = (
  feedbackData.reduce((sum, fb) => sum + fb.rating, 0) / totalFeedbacks
).toFixed(2);

const feedbackSummaryHTML = `
  <h4 class="summary-title">Feedback Analysis Summary</h4>
  <p class="summary-text">Total Feedbacks: <b>${totalFeedbacks}</b></p>
  <p class="summary-text">Average Rating: <b>${avgRating} Stars</b></p>
  <p class="summary-text">Most Common Rating: <b>${Object.keys(ratingCounts).reduce((a, b) =>
    ratingCounts[a] > ratingCounts[b] ? a : b)} Stars</b></p>
`;
document.querySelector("#feedbackRatingsSummary").innerHTML = feedbackSummaryHTML;