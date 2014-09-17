// Monthly water rate data
$(function () {
            $('#water-monthly-charge').highcharts({
                title: {
                    text: 'Water Rates',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: lawrenceks.org',
                    x: -20
                },
                xAxis: {
                    categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']

                },
                yAxis: {
                    title: {
                        text: 'Price per 1,000 gallons'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valuePrefix: '$'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Residential',
                    data: [2.67, 2.78, 2.89, 2.92, 3.18, 3.52, 3.52, 3.78, 4.18, 4.51]
                }, {
                    name: 'Multifamily',
                    data: [2.31, 2.40, 2.49, 2.60, 2.80, 3.06, 3.06, 3.29, 3.26, 3.33]
                }, {
                    name: 'Commercial',
                    data: [2.05, 2.13, 2.22, 2.29, 2.58, 2.79, 2.79, 2.96, 3.33, 3.58]
                }, {
                    name: 'Industrial',
                    data: [1.88, 1.94, 2.03, 2.22, 2.44, 2.72, 2.72, 2.87, 2.84, 3.14]
                }]
            });
        });