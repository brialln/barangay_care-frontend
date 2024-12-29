// * This section contains the JS code for the Emergency Report Charts
window.addEventListener('resize', () => {
    chartInstance.resize();
});

// Helper function for rendering mini-charts
function renderMiniChart(containerId, options) {
    const chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
}

// ? Chart for Emergency Report Trend
var options = {
    chart: {
        type: 'area',
        height: 350,
        stacked: true
    },
    series: [
        {
            name: "Fire",
            data: [
                // Example Data: [Timestamp, Count]
                [1672531200000, 5],
                [1672617600000, 10],
                [1672704000000, 7]
            ]
        },
        {
            name: "Flood",
            data: [
                [1672531200000, 8],
                [1672617600000, 12],
                [1672704000000, 10]
            ]
        },
        {
            name: "Medical",
            data: [
                [1672531200000, 4],
                [1672617600000, 6],
                [1672704000000, 8]
            ]
        }
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date" }
    },
    yaxis: {
        title: { text: "Number of Emergency Reports" }
    },
    legend: {
        position: 'top'
    },
    tooltip: {
        shared: true
    },
    colors: ['#FF4560', '#00E396', '#008FFB']
  };
  
  var chart = new ApexCharts(document.querySelector("#emergencyType"), options);
  chart.render();

// Emergency Trend - Total Emergencies Over Time
const emergencyTrendData = [
    { date: "2024-11-01", flood: 10, fire: 5, earthquake: 3 },
    { date: "2024-11-02", flood: 15, fire: 8, earthquake: 5 },
    { date: "2024-11-03", flood: 12, fire: 10, earthquake: 4 },
];

var totalEmergenciesTrendOptions = {
    chart: { type: 'line', height: 350 },
    series: [
        {
            name: "Total Emergencies",
            data: emergencyTrendData.map(d => [d.date, d.flood + d.fire + d.earthquake]),
        },
    ],
    xaxis: {
        type: 'datetime',
        title: { text: "Date", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Emergencies", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#emergencyTrend", totalEmergenciesTrendOptions);


// Emergency Trend - Volume vs Resolved
const emergencyResolvedData = emergencyTrendData.map(d => ({
    date: d.date,
    volume: d.flood + d.fire + d.earthquake,
    resolved: Math.round((d.flood + d.fire + d.earthquake) * 0.7), // Assume 70% are resolved
}));

var volumeResolvedComparisonOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    series: [
        { name: "Volume of Emergencies", data: emergencyResolvedData.map(d => d.volume) },
        { name: "Resolved Emergencies", data: emergencyResolvedData.map(d => d.resolved) },
    ],
    xaxis: {
        type: 'datetime',
        categories: emergencyResolvedData.map(d => new Date(d.date).toLocaleDateString()),
        title: { text: "Date", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Number of Emergencies", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560', '#008FFB'],
};
renderMiniChart("#emergencyTrendComparison", volumeResolvedComparisonOptions);

  
  // ? Chart for Emergency Type Distribution
  var options = {
    chart: {
        type: 'donut',
        height: 350
    },
    series: [30, 25, 45], // Example Data: Fire, Flood, Medical
    labels: ["Fire", "Flood", "Medical"],
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
  
  var chart = new ApexCharts(document.querySelector("#emergencyTypeDistribution"), options);
  chart.render();
  

// Emergency Summary by Week
var emergencyWeeklySummaryData = {
    weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
    emergencies: [50, 60, 80, 70], // Total emergencies per week
};

const emergencyWeeklySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Total Emergencies",
            data: emergencyWeeklySummaryData.emergencies,
        },
    ],
    xaxis: {
        categories: emergencyWeeklySummaryData.weeks,
        title: { text: "Weeks", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Emergencies", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#emergencyWeeklySummary", emergencyWeeklySummaryOptions);


// Emergency Summary by Month
var emergencyMonthlySummaryData = {
    months: ["October", "November", "December"],
    emergencies: [120, 150, 180], // Total emergencies per month
};

const emergencyMonthlySummaryOptions = {
    chart: { type: 'bar', height: 350 },
    series: [
        {
            name: "Total Emergencies",
            data: emergencyMonthlySummaryData.emergencies,
        },
    ],
    xaxis: {
        categories: emergencyMonthlySummaryData.months,
        title: { text: "Months", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    yaxis: {
        title: { text: "Total Emergencies", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
    },
    legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    colors: ['#FF4560'],
};
renderMiniChart("#emergencyMonthlySummary", emergencyMonthlySummaryOptions);

// ? Emergency Location Map Analysis
  document.addEventListener("DOMContentLoaded", function () {
    const map = L.map("emergencyMap").setView([14.5995, 120.9842], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const emergencies = [
        { lat: 14.5995, lng: 120.9842, type: "Flood", count: 20 },
        { lat: 14.6042, lng: 120.9828, type: "House Fire", count: 15 },
        { lat: 14.6099, lng: 120.9818, type: "Earthquake", count: 10 },
    ];

    emergencies.forEach(({ lat, lng, type, count }) => {
        L.circleMarker([lat, lng], {
            color: type === "Flood" ? "#00E396" : type === "House Fire" ? "#FF4560" : "#008FFB",
            radius: count * 2,
            fillOpacity: 0.6,
        })
            .addTo(map)
            .bindPopup(`<b>Type:</b> ${type}<br><b>Count:</b> ${count}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emergencies = [
        { lat: 14.5995, lng: 120.9842, type: "Flood", count: 20, location: "Location 1" },
        { lat: 14.6042, lng: 120.9828, type: "House Fire", count: 15, location: "Location 2" },
        { lat: 14.6099, lng: 120.9818, type: "Earthquake", count: 10, location: "Location 1" },
    ];

    const summary = {};
    emergencies.forEach(({ location, type, count }) => {
        if (!summary[location]) {
            summary[location] = { Flood: 0, "House Fire": 0, Earthquake: 0 };
        }
        summary[location][type] += count;
    });

    const locations = Object.keys(summary);
    const floodData = locations.map(location => summary[location].Flood);
    const fireData = locations.map(location => summary[location]["House Fire"]);
    const earthquakeData = locations.map(location => summary[location].Earthquake);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        series: [
            { name: "Flood", data: floodData },
            { name: "House Fire", data: fireData },
            { name: "Earthquake", data: earthquakeData }
        ],
        xaxis: {
            categories: locations,
            title: { text: "Locations", style: { fontSize: '14px', fontFamily: 'Montserrat' } }
        },
        yaxis: {
            title: { text: "Number of Reports", style: { fontSize: '14px', fontFamily: 'Montserrat' } }
        },
        colors: ['#00E396', '#FF4560', '#008FFB']
    };

    const chart = new ApexCharts(document.querySelector("#emergencyNumberLocation"), options);
    chart.render();
});

document.addEventListener("DOMContentLoaded", function () {
    const emergencies = [
        { type: "Flood", count: 20 },
        { type: "House Fire", count: 15 },
        { type: "Earthquake", count: 10 },
    ];

    const pieData = emergencies.map(({ count }) => count);
    const pieLabels = emergencies.map(({ type }) => type);

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
        colors: ['#00E396', '#FF4560', '#008FFB']
    };

    const chart = new ApexCharts(document.querySelector("#emergencyPercentageLocation"), options);
    chart.render();
});

// Emergency Summary by Type (No Location)
document.addEventListener("DOMContentLoaded", function () {
    const emergencies = [
        { type: "Fire", count: 10 },
        { type: "Flood", count: 15 },
        { type: "Medical", count: 5 },
        { type: "Fire", count: 8 },
        { type: "Flood", count: 12 },
        { type: "Medical", count: 7 },
    ];

    // Aggregate the total counts per emergency type
    const summary = emergencies.reduce((acc, { type, count }) => {
        if (!acc[type]) {
            acc[type] = 0;
        }
        acc[type] += count;
        return acc;
    }, {});

    const types = Object.keys(summary);  // Get all emergency types (keys)
    const counts = types.map(type => summary[type]);  // Get total counts for each type

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        series: [
            { name: "Emergencies", data: counts },
        ],
        xaxis: {
            categories: types,  // Categories are the emergency types
            title: { text: "Emergency Types", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
            labels: { style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        },
        yaxis: {
            title: { text: "Number of Emergencies", style: { fontSize: '14px', fontFamily: 'Montserrat' } },
        },
        colors: ['#FF4560', '#00E396', '#008FFB'],
        legend: { fontSize: '14px', fontFamily: 'Montserrat' },
    };

    const chart = new ApexCharts(document.querySelector("#emergencyTypeNumber"), options);
    chart.render();
});
