document.addEventListener('DOMContentLoaded', function () {
    BAR = document.getElementById('barplot');

    var dataBar = [{
        x: ['ACEH', 'SUMATERA UTARA', 'SUMATERA BARAT', 'RIAU', 'JAMBI', 'SUMATERA SELATAN', 'BENGKULU', 'LAMPUNG', 'KEP. BANGKA BELITUNG', 'KEP. RIAU', 'DKI JAKARTA', 'JAWA BARAT', 'JAWA TENGAH', 'DI YOGYAKARTA', 'JAWA TIMUR', 'BANTEN', 'BALI', 'NUSA TENGGARA BARAT', 'NUSA TENGGARA TIMUR', 'KALIMANTAN BARAT', 'KALIMANTAN TENGAH', 'KALIMANTAN SELATAN', 'KALIMANTAN TIMUR', 'KALIMANTAN UTARA', 'SULAWESI UTARA', 'SULAWESI TENGAH', 'SULAWESI SELATAN', 'SULAWESI TENGGARA', 'GORONTALO', 'SULAWESI BARAT', 'MALUKU', 'MALUKU UTARA', 'PAPUA BARAT', 'PAPUA BARAT DAYA', 'PAPUA', 'PAPUA SELATAN', 'PAPUA TENGAH', 'PAPUA PEGUNUNGAN'],
        y: [63.9, 307.8, 122, 214.8, 285.5, 767, 87.1, 116.7, 38.6, 10.3, 0, 36.9, 23.7, 0, 17.4, 8.4, 0, 0, 0, 183.2, 136.4, 153.2, 66.3, 0.2, 0, 2.5, 3.8, 0.1, 0, 0, 0.7, 0, 0, 0, 4.8, 0, 0, 0],
        type: 'bar'
    }];

    var layoutBar = {
        title: "Produksi Karet per Provinsi Tahun 2023 (Ribu Ton)",
        font: { size: 10 }
    };

    var configBar = { responsive: true };
    Plotly.newPlot(BAR, dataBar, layoutBar, configBar);

    var barTableData = dataBar[0].x.map((provinsi, index) => ({
        provinsi: provinsi,
        produksi: dataBar[0].y[index]
    }));

    function populateBarTable(data) {
        var tableBody = document.getElementById('barTable').getElementsByTagName('tbody')[0];
        data.forEach(function (item) {
            var row = tableBody.insertRow();
            var cellProvinsi = row.insertCell(0);
            var cellProduksi = row.insertCell(1);
            cellProvinsi.textContent = item.provinsi;
            cellProduksi.textContent = item.produksi;
        });
    }

    populateBarTable(barTableData);
});
