// * This section contains the JS code for the Emergency Report Charts

window.addEventListener('resize', () => {
    chartInstance.resize();
});

// Helper function for rendering mini-charts
function renderMiniChart(containerId, options) {
    const chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
}

// ? Chart for Complaint Report Trend
var options = {
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    series: [
        {
            name: "Noise",
            data: [
                // Example Data: [Timestamp, Count]
                [1672531200000, 7],
                [1672617600000, 12],
                [1672704000000, 9]
            ]
        },
        {
            name: "Sanitation",
            data: [
                [1672531200000, 10],
                [1672617600000, 15],
                [1672704000000, 11]
            ]
        },
        {
            name: "Fighting",
            data: [
                [1672531200000, 5],
                [1672617600000, 8],
                [1672704000000, 6]
            ]
        }
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date" }
    },
    yaxis: {
        title: { text: "Number of Complaints" }
    },
    legend: {
        position: 'top'
    },
    tooltip: {
        shared: true
    },
    colors: ['#FF4560', '#00E396', '#008FFB']
};

var chart = new ApexCharts(document.querySelector("#complaintTypeOverall"), options);
chart.render();

// Complaint Trend - Total Complaints Over Time
const complaintTrendData = [
    { date: "2024-11-01", noise: 12, sanitation: 10, fighting: 5 },
    { date: "2024-11-02", noise: 15, sanitation: 13, fighting: 8 },
    { date: "2024-11-03", noise: 14, sanitation: 11, fighting: 6 },
];

var totalComplaintsTrendOptions = {
    chart: { type: 'line', height: 350 },
    series: [
        {
            name: "Total Complaints",
            data: complaintTrendData.map(d => [d.date, d.noise + d.sanitation + d.fighting]),
        },
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Complaints", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#complaintTrend", totalComplaintsTrendOptions);


// ? Chart for Complaint Type Distribution
var options = {
    chart: {
        type: 'donut',
        height: 350
    },
    series: [40, 35, 25], // Example Data: Noise, Sanitation, Fighting
    labels: ["Noise", "Sanitation", "Fighting"],
    colors: ['#FF4560', '#00E396', '#008FFB'],
    legend: {
        position: 'top'
    },
    tooltip: {
        custom: ({ series, seriesIndex, w }) => {
            return `<div>
                        <strong>Type:</strong> ${w.globals.labels[seriesIndex]}<br>
                        <strong>Reports:</strong> ${series[seriesIndex]}
                    </div>`;
        }
    }
};

var chart = new ApexCharts(document.querySelector("#complaintTypeDistribution"), options);
chart.render();

// Complaint Summary by Week
var complaintWeeklySummaryData = {
    weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
    complaints: [45, 55, 65, 50], // Total complaints per week
};

const complaintWeeklySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Total Complaints",
            data: complaintWeeklySummaryData.complaints,
        },
    ],
    xaxis: {
        categories: complaintWeeklySummaryData.weeks,
        title: { text: "Weeks", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Complaints", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#complaintWeeklySummary", complaintWeeklySummaryOptions);

// Complaint Summary by Month
var complaintMonthlySummaryData = {
    months: ["October", "November", "December"],
    complaints: [130, 140, 160], // Total complaints per month
};

const complaintMonthlySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Total Complaints",
            data: complaintMonthlySummaryData.complaints,
        },
    ],
    xaxis: {
        categories: complaintMonthlySummaryData.months,
        title: { text: "Months", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Complaints", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#complaintMonthlySummary", complaintMonthlySummaryOptions);

// Complaint Summary by Type (No Location)
document.addEventListener("DOMContentLoaded", function () {
    const complaints = [
        { type: "Noise", count: 30 },
        { type: "Sanitation", count: 25 },
        { type: "Fighting", count: 10 },
        { type: "Noise", count: 15 },
        { type: "Sanitation", count: 20 },
    ];

    // Aggregate the total counts per complaint type
    const summary = complaints.reduce((acc, { type, count }) => {
        if (!acc[type]) {
            acc[type] = 0;
        }
        acc[type] += count;
        return acc;
    }, {});

    const types = Object.keys(summary);  // Get all complaint types (keys)
    const counts = types.map(type => summary[type]);  // Get total counts for each type

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        series: [
            { name: "Complaints", data: counts },
        ],
        xaxis: {
            categories: types,  // Categories are the complaint types
            title: { text: "Complaint Types", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
            labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        },
        yaxis: {
            title: { text: "Number of Complaints", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        },
        colors: ['#FF4560', '#00E396', '#008FFB'],
        legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    };

    const chart = new ApexCharts(document.querySelector("#complaintTypeNumber"), options);
    chart.render();
});


// ? Complaint Location Map Analysis
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map("complaintMap").setView([14.5995, 120.9842], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const complaints = [
        { lat: 14.5995, lng: 120.9842, type: "Noise", count: 30 },
        { lat: 14.6042, lng: 120.9828, type: "Sanitation", count: 25 },
        { lat: 14.6099, lng: 120.9818, type: "Fighting", count: 10 },
    ];

    complaints.forEach(({ lat, lng, type, count }) => {
        L.circleMarker([lat, lng], {
            color: type === "Noise" ? "#FF4560" : type === "Sanitation" ? "#00E396" : "#008FFB",
            radius: count * 2,
            fillOpacity: 0.6,
        })
            .addTo(map)
            .bindPopup(`<b>Type:</b> ${type}<br><b>Count:</b> ${count}`);
    });
});

// Complaint Summary by Location
document.addEventListener("DOMContentLoaded", function () {
    const complaints = [
        { lat: 14.5995, lng: 120.9842, type: "Noise", count: 30, location: "Location 1" },
        { lat: 14.6042, lng: 120.9828, type: "Sanitation", count: 25, location: "Location 2" },
        { lat: 14.6099, lng: 120.9818, type: "Fighting", count: 10, location: "Location 1" },
    ];

    const summary = {};
    complaints.forEach(({ location, type, count }) => {
        if (!summary[location]) {
            summary[location] = { Noise: 0, Sanitation: 0, Fighting: 0 };
        }
        summary[location][type] += count;
    });

    const locations = Object.keys(summary);
    const noiseData = locations.map(location => summary[location].Noise);
    const sanitationData = locations.map(location => summary[location].Sanitation);
    const fightingData = locations.map(location => summary[location].Fighting);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        series: [
            { name: "Noise", data: noiseData },
            { name: "Sanitation", data: sanitationData },
            { name: "Fighting", data: fightingData }
        ],
        xaxis: {
            categories: locations,
            title: { text: "Locations", style: { fontSize: '14px', fontFamily: 'Montserrat' } }
        },
        yaxis: {
            title: { text: "Number of Reports", style: { fontSize: '14px', fontFamily: 'Montserrat' } }
        },
        colors: ['#FF4560', '#00E396', '#008FFB']
    };

    const chart = new ApexCharts(document.querySelector("#complaintNumberLocation"), options);
    chart.render();
});

// Complaint Summary Pie Chart
document.addEventListener("DOMContentLoaded", function () {
    const complaints = [
        { type: "Noise", count: 30 },
        { type: "Sanitation", count: 25 },
        { type: "Fighting", count: 10 },
    ];

    const pieData = complaints.map(({ count }) => count);
    const pieLabels = complaints.map(({ type }) => type);

    const options = {
        chart: {
            type: 'pie',
            height: 350
        },
        series: pieData,
        labels: pieLabels,
        legend: {
            position: 'bottom',
            fontSize: '14px',
            fontFamily: 'Montserrat'
        },
        colors: ['#FF4560', '#00E396', '#008FFB']
    };

    const chart = new ApexCharts(document.querySelector("#complaintPercentageLocation"), options);
    chart.render();
});
