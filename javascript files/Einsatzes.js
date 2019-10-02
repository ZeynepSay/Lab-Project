//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/stats/solidetest";
var ul, li;
$("#Einsatzes1").click(function() {
    $("#searchField").val("Wie heißen alle Einsatzes?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes1 = $("#searchField").val("Wie heißen alle Einsatzes?");
        var base_queryEinsatzes1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es1
                          WHERE
                          {   
                              ?ID  so:NameDesEinsatzes ?es1.
                          }LIMIT 10`;

        var queryUrlEinsatzes1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes1) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes1,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

$("#Einsatzes2").click(function() {
    $("#searchField").val("Wie heißen alle Alarmstichworts?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes2 = $("#searchField").val("Wie heißen alle Alarmstichworts?");
        var base_queryEinsatzes2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es2
                          WHERE
                          {   
                              ?ID  so:hatAlarmstichwort ?es2.   
                          }LIMIT 10`;

        var queryUrlEinsatzes2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes2) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes2,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

$("#Einsatzes3").click(function() {
    $("#searchField").val("Was ist das Datum von Hochwasser?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes3 = $("#searchField").val("Was ist das Datum von Hochwasser?");
        var base_queryEinsatzes3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es3
                          WHERE
                          {   
                              ?obj2  so:NameDesEinsatzes "Hochwasser".
							  ?obj2 so:datumvon ?es3.
                          }LIMIT 1`;

        var queryUrlEinsatzes3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes3) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes3,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});
$("#Einsatzes4").click(function() {
    $("#searchField").val("Welche Einsatz hat den Alarmstichwort TH allgemein?");

    $('#searchSubmit').one('click', function() {

        userQueryEinsatzes4 = $("#searchField").val("Welche Einsatz hat den Alarmstichwort TH allgemein?");
        var base_queryEinsatzes4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es4
                          WHERE
                          {   
                              ?ID  so:hatAlarmstichwort   "TH allgemein". 
							  ?ID  so:NameDesEinsatzes ?es4. 
                          }LIMIT 5`;

        var queryUrlEinsatzes4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes4) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes4,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

$("#Einsatzes5").click(function() {
    $("#searchField").val("Welche Einsatzkräefte haben den Einsatz Bahnunfall in Leese?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes5 = $("#searchField").val("Welche Einsatzkräefte haben den Einsatz Bahnunfall in Leese?");
        var base_queryEinsatzes5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es5
                          WHERE
                          {      
         						  ?ID  so:NameDesEinsatzes   "Bahnunfall in Leese".
								  ?ID  so:hatEinsatzkraefte ?es5.  
                         }LIMIT 3`;

        var queryUrlEinsatzes5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes5) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes5,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

$("#Einsatzes6").click(function() {
    $("#searchField").val("Welche Einsatzes haben das Datum nach 2017-07-01?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes6 = $("#searchField").val("Welche Einsatzes haben das Datum nach 2017-07-01?");
        var base_queryEinsatzes6 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?es6
                          WHERE
                          {     
						       ?ID  so:NameDesEinsatzes ?es6.
							   ?ID  so:datumvon  ?date .
							   FILTER(?date > "2017-07-01")
						  
                          }LIMIT 5`;

        var queryUrlEinsatzes6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes6) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes6,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

$("#Einsatzes7").click(function() {
    $("#searchField").val("Welche Einsatzes haben das Datum vor 2017-07-01?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzes7 = $("#searchField").val("Welche Einsatzes haben das Datum vor 2017-07-01?");
        var base_queryEinsatzes7 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?Einsatzes7
                          WHERE
                          {       ?ID so:NameDesEinsatzes ?Einsatzes7.
 						          ?ID so:datumvon ?date.
								  FILTER(?date < "2017-07-01")
         						
                          }LIMIT 3`;

        var queryUrlEinsatzes7 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzes7) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzes7,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> No results found!")
            }
        });
    });
});

function displayResults(data) {
    var html = "";
    $.each(data["results"]["bindings"], function(i, l) {
        $.each(l, function(k, v) {
            if (i % 2 == 0) {
                html += "<tr class=\"unevenRow\">";
            } else {
                html += "<tr class=\"evenRow\">";
            }
            html += "<td> " + v["value"] + "</td></tr>";
        });
    });
    console.log(data);
    $("#tableResults").html(html);
}
