$(function () {


String.prototype.capitalize=function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}

    var chart;

    var wColor = "#ff66cc";
    var mColor ="#006699";
    
    var cBlue = '#42aaff';
    var cGreen = '#34c924';
    var cBrown = '#b7410e';
    var cGray = '#808080';
    var cBlack = '#000000';
    var cProgrammer = '#ff0000';

    var cols = {
        black: cBlack,
        green: cGreen,
        gray: cGray,
        blue: cBlue,
        red: cProgrammer,
        hazel: cBrown
    }

    var colsNames = {
        black:  'Чёрные',
        green: 'Зелёные',
        gray: 'Серые',
        blue: 'Голубые',
        red: 'Красные )',
        hazel: 'Карие'
    }

    $(document).ready(function () {


    var eye=_.zip(eyeColorsData[1],eyeColorsData[0]);
        eye = _.map(eye, function(o){
            var t={};
            t.name=colsNames[o[0]];
            t.color=cols[o[0]];
            t.y = o[1];
            return t;
        });

    console.log(eye);    
    
    var hLabels=[]; 
    heightsData = _.map(heightsData, function(o) {
        var t = {};
        t.color = (o.sex==='m')?mColor:wColor;
        t.y = o.data;
        hLabels.push(t.y);
        return t;
    });

    var wLabels=[]; 
    weightsData = _.map(weightsData, function(o) {
        var t = {};
        t.color = (o.sex==='m')?mColor:wColor;
        t.y = o.data;
        wLabels.push(t.y);
        return t;
    });

    var aLabels=[]; 
    agesData = _.map(agesData, function(o) {
        var t = {};
        t.color = (o.sex==='m')?mColor:wColor;
        t.y = o.data;
        aLabels.push(t.y);
        return t;
    });

    var fLabels=[]; 
    footSizesData = _.map(footSizesData, function(o) {
        var t = {};
        t.color = (o.sex==='m')?mColor:wColor;
        t.y = o.data;
        fLabels.push(t.y);
        return t;
    });

    
        
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
                categories: aLabels,
                title: {
                    text: 'Возраст'
                },
                tickInterval: 5
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Возраст',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0.5,
                    groupPadding: 0,
                    shadow: false,
                    borderColor: '#cccccc'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                data: agesData
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
                categories: hLabels,
                title: {
                    text: 'Рост'
                },
                tickInterval: 5

            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Рост',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
                enabled: false
//                formatter: function() {
//                    return 'Рост: '+ this.x + ' см <br> '+ this.series.name + ': '+ this.y;
//                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0.5,
                    groupPadding: 0,
                    shadow: false,
                    borderColor: '#cccccc'
                }
            },
           legend: {
                enabled: false
           },
            credits: {
                enabled: false
            },
            series: [{
                data: heightsData
            }]
        });

   

        


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
                categories: wLabels,
                title: {
                    text: 'Масса'
                },
                tickInterval: 5
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Масса',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
               enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0.5,
                    groupPadding: 0,
                    shadow: false,
                    borderColor: '#cccccc'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                data: weightsData
            }]
        });

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
                categories: fLabels,
                title: {
                    text: 'Размер ноги'
                },
                tickInterval: 5
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Размер ноги',
                    //align: 'high'
                },
                labels: {
                    //overflow: 'justify'
                }
            },
            tooltip: {
               enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0.5,
                    groupPadding: 0,
                    shadow: false,
                    borderColor: '#cccccc'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                data: footSizesData
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
                data: eye
            }]
        });
   
        $('#container6').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Стаж сотрудников компании'
            },
            subtitle: {
                text: 'В годах'
            },
            xAxis: {
                categories: yearStartedWorkingData[1],
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
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Число сотрудников',
                data: yearStartedWorkingData[0],
                color: mColor
            }]
        });


        var mobile=_.zip(mobilePlatformsData[1],mobilePlatformsData[0]);
        mobile = _.map(mobile, function(o){
            var t={};
            t.name=o[0].capitalize();
            t.y = o[1];
            return t;
        });

        $('#container8').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Телефон'
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
                name: 'Телефон: ',
                data: mobile
            }]
        });

        $.get('/static/data/first_names.json', function(names) {
            var $container = $('#names tbody'),
              child;

              for (var i=0; i<names.length; i++) {
                child ='<tr class="' + (names[i].sex ? 'man' : 'woman') + '">\
                <td>' + names[i].name + '</td>\
                <td>' + names[i].count + '</td>\
              </tr>';
              $container.append(child);
            }
          });

    });


    
});
