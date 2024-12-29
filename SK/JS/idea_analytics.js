// * This file contains the JS code for the Idea Submission Charts
// Helper function for rendering mini-charts
function renderMiniChart(containerId, options) {
    const chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
}

// ? Chart for Participation Analysis
// Submission Trend Data
const submissionTrendData = [
    { date: "2024-11-01", ideas: 10 },
    { date: "2024-11-02", ideas: 15 },
    { date: "2024-11-03", ideas: 20 },
    // Add more data here...
];

const submissionTrendOptions = {
    chart: { type: 'line', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: submissionTrendData.map(d => [d.date, d.ideas]),
        },
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#008FFB'],
};
renderMiniChart("#submissionTrend", submissionTrendOptions);

// Group Submission Data by Weekday
const weekdayMapping = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdayCounts = Array(7).fill(0);

submissionTrendData.forEach(d => {
    const dayIndex = new Date(d.date).getDay();
    weekdayCounts[dayIndex] += d.ideas;
});

const weekdayOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: weekdayCounts,
        },
    ],
    xaxis: {
        categories: weekdayMapping,
        title: { text: "Weekday", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#FF4560'],
};
renderMiniChart("#weekdaySummaryChart", weekdayOptions);


// Weekly Data for Submissions
const weeklySubmissionData = {
    weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
    ideas: [35, 40, 50, 45], // Total ideas submitted per week
};

const weeklySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: weeklySubmissionData.ideas,
        },
    ],
    xaxis: {
        categories: weeklySubmissionData.weeks,
        title: { text: "Weeks", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#008FFB'],
};
renderMiniChart("#weeklySubmissionSummary", weeklySummaryOptions);

// Monthly Data for Submissions
const monthlySubmissionData = {
    months: ["January", "February", "March", "April"],
    ideas: [120, 150, 170, 200], // Total ideas submitted per month
};

const monthlySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: monthlySubmissionData.ideas,
        },
    ],
    xaxis: {
        categories: monthlySubmissionData.months,
        title: { text: "Months", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#FF4560'],
};
renderMiniChart("#monthlySubmissionSummary", monthlySummaryOptions);



// Chart for Engagement Level Analysis
var options = {
    chart: {
        type: 'bar',
        height: 350
    },
    series: [
        {
            name: "Engagement Score",
            data: [
                // Example Data: [User, Engagement Score]
                { x: "User1", y: 85 },
                { x: "User2", y: 70 },
                { x: "User3", y: 90 },
                { x: "User4", y: 60 }
            ]
        }
    ],
    xaxis: {
        title: { text: "Users", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        type: 'category',
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } }
    },
    yaxis: {
        title: { text: "Engagement Score", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } }
    },
    tooltip: {
        custom: ({ seriesIndex, dataPointIndex, w }) => {
            const data = w.globals.series[seriesIndex][dataPointIndex];
            return `<div>
                        <strong>User:</strong> ${data.x}<br>
                        <strong>Engagement Score:</strong> ${data.y}
                    </div>`;
        }
    },
    legend: {
        position: 'top',
        fontSize: '14px',
        fontFamily: 'Montserrat'
    }
};

var chart = new ApexCharts(document.querySelector("#engagementLevelAnalysis"), options);
chart.render();



  var topParticipantsOptions = {
    chart: { type: 'bar', height: 350, },
    series: [{
        name: "Top Participants",
        data: [
            { x: "User3", y: 15 }, // Highest contributions
            { x: "User1", y: 12 },
            { x: "User2", y: 8 }
        ]
    }],
    xaxis: {
        title: { text: "Users" },
        type: 'category'
    },
    yaxis: {
        title: { text: "Ideas Submitted" }
    },
    colors: ['#008FFB'],
};
renderMiniChart("#topParticipantsChart", topParticipantsOptions);

var participationShareOptions = {
    chart: { type: 'pie', height: 350 },
    series: [15, 12, 8, 5], // Total submissions for User3, User1, User2, User4
    labels: ["User3", "User1", "User2", "User4"],
    legend: { position: 'bottom' },
    colors: ['#FF4560', '#008FFB', '#00E396', '#775DD0'],
};
renderMiniChart("#participationShareChart", participationShareOptions);

  
 // Campaign Impact Data
const campaignImpactData = {
    categories: ["During Campaign", "No Campaign"],
    ideas: [120, 80], // Total ideas submitted in each period
};

const campaignImpactOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: campaignImpactData.ideas,
        },
    ],
    xaxis: {
        categories: campaignImpactData.categories,
        title: { text: "Campaign Status", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#00E396'],
};
renderMiniChart("#campaignImpactChart", campaignImpactOptions);

// * Insights Data: Focus on "Increase (%)"
const increasePercentage = 50; // The calculated percentage increase

// Options for the Increase Percentage Gauge Chart
const increaseGaugeOptions = {
    chart: { type: 'radialBar', height: 350 },
    series: [increasePercentage],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: { show: true, fontSize: '18px', fontFamily: 'Montserrat', offsetY: -10 },
                value: { show: true, fontSize: '24px', fontFamily: 'Montserrat', offsetY: 5 },
            },
        },
    },
    labels: ["Increase (%)"], // Label for the radial bar
    colors: ['#FF4560'], // Color for the gauge
};

// Render the Increase Percentage Gauge Chart
renderMiniChart("#campaignInsightsIncrease", increaseGaugeOptions);


// * Data for User Participation vs Ideas Submitted
const participationData = [
    { users: 5, ideas: 20 },   // 5 active users, 20 ideas submitted
    { users: 10, ideas: 50 },  // 10 active users, 50 ideas submitted
    { users: 15, ideas: 70 },  // 15 active users, 70 ideas submitted
    { users: 20, ideas: 100 }, // 20 active users, 100 ideas submitted
    { users: 25, ideas: 120 }, // 25 active users, 120 ideas submitted
];

// Extract data for the chart
const users = participationData.map(d => d.users);
const ideasSubmitted = participationData.map(d => d.ideas);

// Options for the User Participation vs Ideas Line Chart
const participationTrendOptions = {
    chart: { type: 'line', height: 350 },
    series: [
        {
            name: "Ideas Submitted",
            data: ideasSubmitted,
        },
    ],
    xaxis: {
        categories: users,
        title: { text: "Number of Active Users", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Ideas Submitted", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    colors: ['#FF4560'],
};

// Render the Participation vs Ideas Submitted Chart
renderMiniChart("#participationAnalysis", participationTrendOptions);


// * Insights Data: Focus on "Decrease (%)"
const decreasePercentage = 33.33; // The calculated percentage decrease (120 - 80) / 120 * 100

// Options for the Decrease Percentage Gauge Chart
const decreaseGaugeOptions = {
    chart: { type: 'radialBar', height: 350 },
    series: [decreasePercentage],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: { show: true, fontSize: '18px', fontFamily: 'Montserrat', offsetY: -10 },
                value: { show: true, fontSize: '24px', fontFamily: 'Montserrat', offsetY: 5 },
            },
        },
    },
    labels: ["Decrease (%)"], // Label for the radial bar
    colors: ['#FF4560'], // Color for the gauge
};

// Render the Decrease Percentage Gauge Chart
renderMiniChart("#campaignInsightsDecrease", decreaseGaugeOptions);



