$(function(){
    $().timelinr({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	100,
        arrowKeys: 		'true',
        startAt:		1
    })
});

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawMultipleLines);

function drawMultipleLines() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Year');
    data.addColumn('number', 'Billboard Hot 100');
    data.addColumn('number', 'Canadian Hot 100');
    data.addColumn('number', 'Japan Hot 100');

    data.addRows([
        [new Date(2009,0), 1, 0, 0],    [new Date(2010,0), 0, 0, 0],   [new Date(2011,0), 0, 0, 2],  [new Date(2012,0), 1, 1, 4],   [new Date(2013,0), 1, 1, 3],  [new Date(2014,0), 1, 0, 3],
        [new Date(2015,0), 1, 2, 3],   [new Date(2016,0), 1, 2, 1],  [new Date(2017,0), 2, 6, 3],  [new Date(2018,0), 5, 9, 4],  [new Date(2019,0), 5, 12, 4], [new Date(2020,0), 17, 18, 4]
    ]);

    var options = {
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Number of K-Pop Songs'
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Year');
    data.addColumn('number', 'Interest');

    data.addRows([
        [new Date(2010,0), 10], [new Date(2010,1), 11], [new Date(2010,2), 12], [new Date(2010,3), 12],
        [new Date(2010,4), 14], [new Date(2010,5), 14], [new Date(2010,6), 17], [new Date(2010,7), 17],
        [new Date(2010,8), 18], [new Date(2010,9), 19], [new Date(2010,10), 19], [new Date(2010,11), 20],
        [new Date(2011,0), 23], [new Date(2011,1), 21], [new Date(2011,2), 21], [new Date(2011,3), 26],
        [new Date(2011,4), 27], [new Date(2011,5), 30], [new Date(2011,6), 33], [new Date(2011,7), 37],
        [new Date(2011,8), 35], [new Date(2011,9), 35], [new Date(2011,10), 35], [new Date(2011,11), 41],
        [new Date(2012,0), 40], [new Date(2012,1), 38], [new Date(2012,2), 40], [new Date(2012,3), 44],
        [new Date(2012,4), 44], [new Date(2012,5), 44], [new Date(2012,6), 48], [new Date(2012,7), 51],
        [new Date(2012,8), 52], [new Date(2012,9), 48], [new Date(2012,10), 50], [new Date(2012,11), 52],
        [new Date(2013,0), 45], [new Date(2013,1), 41], [new Date(2013,2), 42], [new Date(2013,3), 44],
        [new Date(2013,4), 45], [new Date(2013,5), 45], [new Date(2013,6), 47], [new Date(2013,7), 47],
        [new Date(2013,8), 42], [new Date(2013,9), 41], [new Date(2013,10), 44], [new Date(2013,11), 43],
        [new Date(2014,0), 43], [new Date(2014,1), 41], [new Date(2014,2), 44], [new Date(2014,3), 43],
        [new Date(2014,4), 44], [new Date(2014,5), 46], [new Date(2014,6), 47], [new Date(2014,7), 50],
        [new Date(2014,8), 48], [new Date(2014,9), 46], [new Date(2014,10), 47], [new Date(2014,11), 48],
        [new Date(2015,0), 47], [new Date(2015,1), 43], [new Date(2015,2), 45], [new Date(2015,3), 48],
        [new Date(2015,4), 49], [new Date(2015,5), 52], [new Date(2015,6), 55], [new Date(2015,7), 54],
        [new Date(2015,8), 49], [new Date(2015,9), 48], [new Date(2015,10), 50], [new Date(2015,11), 54],
        [new Date(2016,0), 53], [new Date(2016,1), 52], [new Date(2016,2), 53], [new Date(2016,3), 56],
        [new Date(2016,4), 56], [new Date(2016,5), 59], [new Date(2016,6), 59], [new Date(2016,7), 55],
        [new Date(2016,8), 52], [new Date(2016,9), 54], [new Date(2016,10), 52], [new Date(2016,11), 61],
        [new Date(2017,0), 60], [new Date(2017,1), 59], [new Date(2017,2), 59], [new Date(2017,3), 60],
        [new Date(2017,4), 57], [new Date(2017,5), 60], [new Date(2017,6), 61], [new Date(2017,7), 59],
        [new Date(2017,8), 55], [new Date(2017,9), 53], [new Date(2017,10), 55], [new Date(2017,11), 74],
        [new Date(2018,0), 66], [new Date(2018,1), 63], [new Date(2018,2), 63], [new Date(2018,3), 62],
        [new Date(2018,4), 62], [new Date(2018,5), 65], [new Date(2018,6), 66], [new Date(2018,7), 65],
        [new Date(2018,8), 58], [new Date(2018,9), 56], [new Date(2018,10), 60], [new Date(2018,11), 66],
        [new Date(2019,0), 65], [new Date(2019,1), 59], [new Date(2019,2), 66], [new Date(2019,3), 65],
        [new Date(2019,4), 61], [new Date(2019,5), 67], [new Date(2019,6), 65], [new Date(2019,7), 66],
        [new Date(2019,8), 59], [new Date(2019,9), 64], [new Date(2019,10), 66], [new Date(2019,11), 69],
        [new Date(2020,0), 64], [new Date(2020,1), 66], [new Date(2020,2), 62], [new Date(2020,3), 78],
        [new Date(2020,4), 86], [new Date(2020,5), 100], [new Date(2020,6), 89], [new Date(2020,7), 90],
        [new Date(2020,8), 91], [new Date(2020,9), 86], [new Date(2020,10), 84], [new Date(2020,11), 91]
    ]);

    var options = {
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Interest Level'
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('interestChart'));
    chart.draw(data, options);
}



anychart.onDocumentReady(function() {
  var language_data = [
    {"x": "Russian", "value": 100, "category": "Indo-European"},
    {"x": "Mandarin Chinese", "value": 1000, "category": "Sino-Tibetan"},
    {"x": "Turkish", "value": 300, "category": "Altaic"},
    {"x": "Arabic", "value": 400, "category": "Afro-Asiatic"},
    {"x": "French", "value": 500, "category": "Indo-European"},
    {"x": "Spanish", "value": 4500, "category": "Indo-European"},
    {"x": "English", "value": 4200, "category": "Indo-European"},
    {"x": "Malay", "value": 2200, "category": "Austronesian"},
    {"x": "Tamil", "value": 800, "category": "Dravidian"},
    {"x": "Hindi", "value": 1000, "category": "Indo-European"},
    {"x": "Vietnamese", "value": 1100, "category": "Austroasiatic"},
    {"x": "Portuguese", "value": 1500, "category": "Indo-European"},
    {"x": "Filipino", "value": 1600, "category": "Austronesian"},
    {"x": "Indonesian", "value": 1700, "category": "Austronesian"},
    {"x": "Japanese", "value": 1800, "category": "Altaic"},
    {"x": "Korean", "value": 1900, "category": "Altaic"},
    {"x": "Thai", "value": 2000, "category": "Austronesian"}
  ];

  var chart = anychart.tagCloud(language_data);

  chart.title('Most Used Languages in K-Pop Tweets')
  chart.angles([0, -45, 45])
  chart.colorRange(true);
  chart.colorRange().length('80%');

  chart.container("wordcloud");
  chart.draw();
});