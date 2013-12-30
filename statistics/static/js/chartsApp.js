var hasPenis = [
    {
        value: 65,
        color:"#F38630"
    },
    {
        value : 55,
        color : "#E0E4CC"
    }
]

var i=15;
var dataM = [];
var dataW = [];
var labels = [];
for (i=15;i<100;i++)
    {
        labels[] = i;
        dataW[] = Math.random(20);
        dataM[] = Math.random(20);
    }    

var isOld = {
            labels : labels,
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    data : dataM
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    data : dataW
                }
            ]
            
        }

var myLine = new Chart(document.getElementById("hasPenis").getContext("2d")).Pie(hasPenis);    
var myLine2 = new Chart(document.getElementById("isOld").getContext("2d")).Bar(isOld);