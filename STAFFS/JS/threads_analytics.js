window.addEventListener('resize', () => {
    chartInstance.resize();
});


// Helper function for rendering mini-charts
function renderMiniChart(containerId, options) {
    const chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
}

// * Post Popularity Chart and Summaries
var postPopularityData = [
    { postLength: 50, engagement: 10 },
    { postLength: 100, engagement: 25 },
    { postLength: 150, engagement: 50 },
    { postLength: 200, engagement: 70 },
];

var postPopularityChartOptions = {
    chart: {
        type: 'scatter',
        height: 350,
    },
    series: [
        {
            name: "Posts",
            data: postPopularityData.map(d => [d.postLength, d.engagement]),
        },
    ],
    xaxis: {
        title: { text: "Post Length", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { formatter: (value) => `${value} chars`, style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Engagement (Likes + Comments)", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
};
renderMiniChart("#postPopularity", postPopularityChartOptions);

// Post Popularity Summary Chart 1: Engagement per Post
const postEngagementSeries = postPopularityData.map(d => d.engagement);
const postPopularitySummaryOptions = {
    chart: {
        type: 'bar',
        height: 350,
    },
    series: [{ name: "Engagement", data: postEngagementSeries }],
    xaxis: {
        categories: postPopularityData.map((_, i) => `Post ${i + 1}`),
        title: { text: "Posts", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
};
renderMiniChart("#postPopularityTop", postPopularitySummaryOptions);

// Post Popularity Summary Chart 2: Most Popular Post
const mostPopularPost = postPopularityData.reduce((prev, curr) =>
    curr.engagement > prev.engagement ? curr : prev
);
const mostPopularSummaryOptions = {
    chart: {
        type: 'pie',
        height: 350,
    },
    labels: ["Other Posts", "Most Popular Post"],
    series: [
        postPopularityData.reduce((sum, d) => sum + d.engagement, 0) - mostPopularPost.engagement,
        mostPopularPost.engagement,
    ],
    legend: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
    },
    dataLabels: {
        style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
        },
    },
};
renderMiniChart("#postPopularityPopular", mostPopularSummaryOptions);

// * Engagement Trend Chart and Summaries
var engagementTrendData = [
    { date: 1672531200000, engagement: 20 },
    { date: 1672617600000, engagement: 30 },
    { date: 1672704000000, engagement: 45 },
];

var engagementTrendChartOptions = {
    chart: {
        type: 'line',
        height: 350,
    },
    series: [
        {
            name: "Engagement",
            data: engagementTrendData.map(d => [d.date, d.engagement]),
        },
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Engagement", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
};
renderMiniChart("#engagementTrend", engagementTrendChartOptions);

// Engagement Trend Summary Chart 1: Daily Engagement
const engagementTrendSummaryOptions = {
    chart: {
        type: 'bar',
        height: 350,
    },
    series: [{ name: "Daily Engagement", data: engagementTrendData.map(d => d.engagement) }],
    xaxis: {
        categories: engagementTrendData.map(d => new Date(d.date).toLocaleDateString()),
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
};
renderMiniChart("#engagementTrendDaily", engagementTrendSummaryOptions);

// Engagement Trend Summary Chart 2: Peak Engagement
const peakEngagementDay = engagementTrendData.reduce((prev, curr) =>
    curr.engagement > prev.engagement ? curr : prev
);
const peakEngagementOptions = {
    chart: {
        type: 'donut',
        height: 350,
    },
    labels: ["Other Days", "Peak Engagement"],
    series: [
        engagementTrendData.reduce((sum, d) => sum + d.engagement, 0) - peakEngagementDay.engagement,
        peakEngagementDay.engagement,
    ],
    legend: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
    },
    dataLabels: {
        style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
        },
    },
};
renderMiniChart("#engagementTrendPeak", peakEngagementOptions);

// * User Activity Heatmap Chart and Summaries
var heatmapData = {
    likes: [
        { user: "User1", count: 20 },
        { user: "User2", count: 30 },
        { user: "User3", count: 15 },
        { user: "User4", count: 10 },
        { user: "User5", count: 25 },
    ],
    comments: [
        { user: "User1", count: 10 },
        { user: "User2", count: 15 },
        { user: "User3", count: 25 },
        { user: "User4", count: 5 },
        { user: "User5", count: 20 },
    ],
};

const activityDataSeries = [
    { name: "Likes", data: heatmapData.likes.map(d => d.count) },
    { name: "Comments", data: heatmapData.comments.map(d => d.count) },
];
const activityUsers = heatmapData.likes.map(d => d.user);

const heatmapChartOptions = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    series: activityDataSeries,
    xaxis: {
        categories: activityUsers,
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
    },
};
renderMiniChart("#userActivityHeatmap", heatmapChartOptions);

// User Activity Summary Chart 1: Total Likes and Comments
const userActivitySummaryOptions = {
    chart: {
        type: 'pie',
        height: 350,
    },
    labels: ["Likes", "Comments"],
    series: [
        heatmapData.likes.reduce((sum, d) => sum + d.count, 0),
        heatmapData.comments.reduce((sum, d) => sum + d.count, 0),
    ],
    legend: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
    },
    dataLabels: {
        style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
        },
    },
};
renderMiniChart("#userActivityHeatmapOverall", userActivitySummaryOptions);

// User Activity Summary Chart 2: Most Active User
const mostActiveUserData = activityDataSeries.flatMap(series =>
    series.data.map((value, index) => ({ user: activityUsers[index], activity: value }))
).reduce((totals, curr) => {
    totals[curr.user] = (totals[curr.user] || 0) + curr.activity;
    return totals;
}, {});

const mostActiveUser = Object.entries(mostActiveUserData).sort((a, b) => b[1] - a[1])[0];
const mostActiveUserOptions = {
    chart: {
        type: 'radialBar',
        height: 350,
    },
    series: [mostActiveUser[1]],
    labels: [`Most Active: ${mostActiveUser[0]}`],
    legend: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
    },
    dataLabels: {
        style: {
            fontSize: '14px',
            fontFamily: 'Montserrat',
        },
    },
};
renderMiniChart("#userActivityHeatmapMostActive", mostActiveUserOptions);