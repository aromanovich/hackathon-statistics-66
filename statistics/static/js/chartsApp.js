$(function () {
    var chart;

    var wColor = "#ff66cc";
    var mColor ="#006699";
    
    var cBlue = '#42aaff';
    var cGreen = '#34c924';
    var cBrown = '#b7410e';
    var cGray = '#808080';
    var cBlack = '#000000';
    var cProgrammer = '#ff0000';

    $(document).ready(function () {

        heightsData = _.map(heightsData, function(o) {
            var t = {};
            t.color = (o.sex==='m')?mColor:wColor;
            t.y = o.data
            return t;
        })
        // data: [{
        //     name: 'Point 1',
        //     color: '#00FF00',
        //     y: 0
        // }, {
        //     name: 'Point 2',
        //     color: '#FF00FF',
        //     y: 5
        // }]
        
        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Пол'
            },
            tooltip: {
                pointFormat: '{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: 'Пол: ',
                data: [
                    {
                        name: 'Девочки',
                        color: wColor,
                        y: sexData[0][0]
                        },
                    {
                        name: 'Мальчики',
                        color: mColor,
                        y: sexData[0][1]
                    }
                ]
            }]
        });

        var i=15;
        var dataM = [];
        var dataW = [];
        var labels = [];
        for (i=15;i<100;i++)
            {
                labels.push(i);
                dataM.push(parseInt(Math.random()*20));
                dataW.push(parseInt(Math.random()*20));
            }     

         $('#container2').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Возраст'
            },
            subtitle: {
                text: 'в годах'
            },
            xAxis: {
                categories: agesData[0],
                title: {
                    text: 'Возраст'
                },
                tickInterval: 5
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Число сотрудников',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function() {
                    return 'Возраст: '+ this.x + ' <br> '+ this.series.name + ': '+ this.y;
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'All',
                data: agesData[1],
                color: mColor
            }]
        });
    


        $('#container3').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Рост'
            },
            subtitle: {
                text: 'в сантиметрах'
            },
            xAxis: {
                categories: heightsData.labels,
                title: {
                    text: 'Рост'
                },
                tickInterval: 5

            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Число сотрудников',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function() {
                    return 'Рост: '+ this.x + ' см <br> '+ this.series.name + ': '+ this.y;
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                data: heightsData
            }]
        });

        var dataMF = [];
        var dataWF = [];
        var labelsF = [];
        for (i=30;i<50;i++)
            {
                labelsF.push(i);
                dataMF.push(parseInt(Math.random()*50));
                dataWF.push(parseInt(Math.random()*50));
            }

        $('#container4').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Размер ноги'
            },
            subtitle: {
                text: 'в размерах'
            },
            xAxis: {
                categories: labelsF,
                title: {
                    text: 'Размер ноги'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Число сотрудников',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function() {
                    return 'Размер ноги: '+ this.x + ' <br> '+ this.series.name + ': '+ this.y;
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Мальчики',
                data: dataMF,
                color: mColor
            }, {
                name: 'Девочки',
                data: dataWF,
                color: wColor
            }]
        });

        var dataMM = [];
        var dataWM = [];
        var labelsM = [];
        for (i=30;i<200;i++)
            {
                labelsM.push(i);
                dataMM.push(parseInt(Math.random()*50));
                dataWM.push(parseInt(Math.random()*50));
            }

        $('#container7').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Масса сотрудников компании'
            },
            subtitle: {
                text: 'в килограммах'
            },
            xAxis: {
                categories: weightsData.labels,
                title: {
                    text: 'Масса'
                },
                tickInterval: 5
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Число сотрудников',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function() {
                    return 'Масса: '+ this.x + ' кг <br> '+ this.series.name + ': '+ this.y;
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Мальчики',
                data: weightsData.maleData,
                color: mColor
            }, {
                name: 'Девочки',
                data: weightsData.femaleData,
                color: wColor
            }]
        });



        $('#container5').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Цвет глаз:'
            },
            tooltip: {
                pointFormat: '{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: 'Цвет глаз: ',
                data: [

                {
                    name: 'Голубой',
                    color: cBlue,
                    y: 30
                },
                {
                    name: 'Серый',
                    color: cGray,
                    y: 40
                },
                {
                    name: 'Зелёный',
                    color: cGreen,
                    y: 60
                },
                {
                    name: 'Чёрный',
                    color: cBlack,
                    y: 10
                },
                {
                    name: 'Карий',
                    color: cBrown,
                    y: 20
                },
                {
                    name: 'Красный',
                    color: cProgrammer,
                    y: 100
                },
                
                ]
            }]
        });
   
        $('#container6').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Число сотрудников компании'
            },
            subtitle: {
                text: 'В людях'
            },
            xAxis: {
                categories: ['2006','2007','2008','2009','2010','2011','2012','2013','2014',],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Число сотрудников',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Число сотрудников',
                data: [10,12,25,35,55,56,70,102,201],
                color: mColor
            }]
        });

    
    });
    
});