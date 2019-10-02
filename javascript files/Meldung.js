//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
var ul, li;
$("#Meldung1").click(function() {
    $("#searchField").val("Was ist die Betreffzeile der Nachricht?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung1 = $("#searchField").val("Was ist die Betreffzeile der Nachricht?");
        var base_queryMeldung1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel1
                          WHERE
                          {   
							  ?ID so:betreff ?mel1.
                          }LIMIT 10`;

        var queryUrlMeldung1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung1) + "&format=json";
        $.ajax({
            url: queryUrlMeldung1,
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

$("#Meldung2").click(function() {
    $("#searchField").val("Was ist der Inhalt mit dem Betreff Einsatztagebuch?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung2 = $("#searchField").val("Was ist der Inhalt mit dem Betreff Einsatztagebuch?");
        var base_queryMeldung2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel2
                          WHERE
                          {   
                             ?ID  so:betreff  "Einsatztagebuch". 
							 ?ID  so:meldung ?mel2.  
                          }LIMIT 2`;

        var queryUrlMeldung2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung2) + "&format=json";
        $.ajax({
            url: queryUrlMeldung2,
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

$("#Meldung3").click(function() {
    $("#searchField").val("Wer ist der Empfanger mit dem Betreff Auftrag?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung3 = $("#searchField").val("Wer ist der Empfanger mit dem Betreff Auftrag?");
        var base_queryMeldung3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel3
                          WHERE
                          {   
                              ?ID so:betreff "Auftrag".
                              ?ID so:nachrichtEmpfangen ?mel3.
                          }LIMIT 3`;

        var queryUrlMeldung3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung3) + "&format=json";
        $.ajax({
            url: queryUrlMeldung3,
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
$("#Meldung4").click(function() {
    $("#searchField").val("Wer ist der Absender mit dem Betreff Auftrag?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung4 = $("#searchField").val("Wer ist der Absender mit dem Betreff Auftrag?");
        var base_queryMeldung4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel4
                          WHERE
                          {   
                                 ?ID so:betreff "Auftrag".
								 ?ID so:nachrichtVersenden ?mel4.   
                          }LIMIT 3`;

        var queryUrlMeldung4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung4) + "&format=json";
        $.ajax({
            url: queryUrlMeldung4,
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

$("#Meldung5").click(function() {
    $("#searchField").val("Wie viele Nachrichten hat den Status Erledigt?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung5 = $("#searchField").val("Wie viele Nachrichten hat den Status Erledigt?");
        var base_queryMeldung5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel5
                          WHERE
                          {      
         						 ?ID  so:status  "Erledigt". 
								 ?ID  so:meldung ?mel5. 
                         }LIMIT 1`;

        var queryUrlMeldung5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung5) + "&format=json";
        $.ajax({
            url: queryUrlMeldung5,
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



$("#Meldung6").click(function() {
    $("#searchField").val("Wie ist der Status der Betreff Einsatzbefehl?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung6 = $("#searchField").val("Wie ist der Status der Betreff Einsatzbefehl?");
        var base_queryMeldung6 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel6
                          WHERE
                          {     
						     ?s so:betreff "Einsatzbefehl".
							 ?s so:status ?mel6. 
						  
                          }LIMIT 5`;

        var queryUrlMeldung6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung6) + "&format=json";
        $.ajax({
            url: queryUrlMeldung6,
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

$("#Meldung7").click(function() {
    $("#searchField").val("Wie ist der lagevortrag mit dem Betreff Kräftedisposition?");
    $('#searchSubmit').one('click', function() {
        userQueryMeldung7 = $("#searchField").val("Wie ist der lagevortrag mit dem Betreff Kräftedisposition?");
        var base_queryMeldung7 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?mel7
                          WHERE
                          { 
     						?s so:betreff "Kräftedisposition".
							?s so:lagevortrag ?mel7.
         						
                          }LIMIT 3`;

        var queryUrlMeldung7 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryMeldung7) + "&format=json";
        $.ajax({
            url: queryUrlMeldung7,
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
