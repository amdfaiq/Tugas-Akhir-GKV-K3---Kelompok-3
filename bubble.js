document.addEventListener('DOMContentLoaded', function () {
    var BUBBLE = document.getElementById("bubblechart");

    var dataBubble = [
        { provinsi: "ACEH", produksi: 63.1 },
        { provinsi: "SUMATERA UTARA", produksi: 102.4 },
        { provinsi: "SUMATERA BARAT", produksi: 88.0 },
        { provinsi: "RIAU", produksi: 406.9 },
        { provinsi: "JAMBI", produksi: 114.3 },
        { provinsi: "SUMATERA SELATAN", produksi: 114.9 },
        { provinsi: "BENGKULU", produksi: 7.6 },
        { provinsi: "LAMPUNG", produksi: 79.8 },
        { provinsi: "KEP. BANGKA BELITUNG", produksi: 5.0 },
        { provinsi: "KEP. RIAU", produksi: 6.5 },
        { provinsi: "DKI JAKARTA", produksi: 0.0 },
        { provinsi: "JAWA BARAT", produksi: 92.9 },
        { provinsi: "JAWA TENGAH", produksi: 158.2 },
        { provinsi: "DI YOGYAKARTA", produksi: 50.3 },
        { provinsi: "JAWA TIMUR", produksi: 233.7 },
        { provinsi: "BANTEN", produksi: 45.2 },
        { provinsi: "BALI", produksi: 66.4 },
        { provinsi: "NUSA TENGGARA BARAT", produksi: 48.9 },
        { provinsi: "NUSA TENGGARA TIMUR", produksi: 65.7 },
        { provinsi: "KALIMANTAN BARAT", produksi: 78.3 },
        { provinsi: "KALIMANTAN TENGAH", produksi: 16.5 },
        { provinsi: "KALIMANTAN SELATAN", produksi: 22.9 },
        { provinsi: "KALIMANTAN TIMUR", produksi: 7.7 },
        { provinsi: "KALIMANTAN UTARA", produksi: 0.6 },
        { provinsi: "SULAWESI UTARA", produksi: 269.5 },
        { provinsi: "SULAWESI TENGAH", produksi: 206.3 },
        { provinsi: "SULAWESI SELATAN", produksi: 72.2 },
        { provinsi: "SULAWESI TENGGARA", produksi: 42.9 },
        { provinsi: "GORONTALO", produksi: 65.7 },
        { provinsi: "SULAWESI BARAT", produksi: 36.1 },
        { provinsi: "MALUKU", produksi: 91.2 },
        { provinsi: "MALUKU UTARA", produksi: 200.1 },
        { provinsi: "PAPUA BARAT", produksi: 16.1 },
        { provinsi: "PAPUA BARAT DAYA", produksi: 0.0 },
        { provinsi: "PAPUA", produksi: 15.3 },
        { provinsi: "PAPUA SELATAN", produksi: 0.0 },
        { provinsi: "PAPUA TENGAH", produksi: 0.0 },
        { provinsi: "PAPUA PEGUNUNGAN", produksi: 0.0 },
    ];

    var bubbleTableData = dataBubble.map((item) => ({
        provinsi: item.provinsi,
        produksi: item.produksi
    }));

    var bubbleData = [
        {
            x: dataBubble.map(item => item.provinsi),
            y: dataBubble.map(item => item.produksi),
            mode: "markers",
            marker: {
                size: dataBubble.map(item => item.produksi),
                color: dataBubble.map(item => item.produksi),
                colorscale: 'Portland',
                showscale: true
            },
        },
    ];

    var layoutBubble = {
        title: "Produksi Kelapa Sawit per Provinsi di Tahun 2023",
        xaxis: {
            title: "Provinsi",
        },
        yaxis: {
            title: "Produksi Kelapa Sawit",
        },
        font: { size: 12 },
    };

    var configBubble = { responsive: true };

    Plotly.newPlot(BUBBLE, bubbleData, layoutBubble, configBubble);

    function populateBubbleTable(data) {
        var tableBody = document.getElementById('bubbleTable').getElementsByTagName('tbody')[0];
        data.forEach(function (item) {
            var row = tableBody.insertRow();
            var cellProvinsi = row.insertCell(0);
            var cellProduksi = row.insertCell(1);
            cellProvinsi.textContent = item.provinsi;
            cellProduksi.textContent = item.produksi;
        });
    }

    populateBubbleTable(bubbleTableData);
});
