//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
var ul, li;
$("#Einsatzabschnitte1").click(function() {
    $("#searchField").val("Was sind die Einsatzabschnitte?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte1 = $("#searchField").val("Was sind die Einsatzabschnitte?");
        var base_queryschnitte1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte1
                          WHERE
                          {   
                               ?ID a so:Einsatzabschnitt.
                               ?ID rdfs:label ?tte1. 
                          }LIMIT 10`;

        var queryUrlschnitte1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte1) + "&format=json";
        $.ajax({
            url: queryUrlschnitte1,
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

$("#Einsatzabschnitte2").click(function() {
    $("#searchField").val("Was ist der Funkkanal der Einsatzabschnitt EA 2?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte2 = $("#searchField").val("Was ist der Funkkanal der Einsatzabschnitt EA 2?");
        var base_queryschnitte2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte2
                          WHERE
                          {   
                             ?ID rdfs:label "EA 2".
                             ?ID so:hatLeiter ?t.
                             ?tel rdfs:label ?u.
                             ?tel so:TMO_4M ?tte2.
                          }LIMIT 5`;

        var queryUrlschnitte2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte2) + "&format=json";
        $.ajax({
            url: queryUrlschnitte2,
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

$("#Einsatzabschnitte3").click(function() {
    $("#searchField").val("Wo ist der Einsatzabschnitt EA 1- UAE 2?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte3 = $("#searchField").val("Wo ist der Einsatzabschnitt EA 1- UAE 2?");
        var base_queryschnitte3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte3
                          WHERE
                          {   
                             ?s so:einteilungDesEinsatzes ?obj2.
                             ?obj2 rdfs:label "EA 1- UAE 2".  
                             ?obj2 so:hatEinsatzort ?tte3.
                          }LIMIT 1`;

        var queryUrlschnitte3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte3) + "&format=json";
        $.ajax({
            url: queryUrlschnitte3,
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
$("#Einsatzabschnitte4").click(function() {
    $("#searchField").val("Welche Einsatzkräefte haben den Einsatzabschnitt EA 3?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte4 = $("#searchField").val("Welche Einsatzkräefte haben den Einsatzabschnitt EA 3?");
        var base_queryschnitte4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte4
                          WHERE
                          {   
                             ?ID  so:takteinheit ?tte4.
							 ?ID so:hatEinsatzabschnitt ?obj1. 
							 ?obj1 rdfs:label "EA 3".
                          }LIMIT 5`;

        var queryUrlschnitte4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte4) + "&format=json";
        $.ajax({
            url: queryUrlschnitte4,
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

$("#Einsatzabschnitte5").click(function() {
    $("#searchField").val("Welche datumzeit hat die Einsatzabschnitt TEL?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte5 = $("#searchField").val("Welche datumzeit hat die Einsatzabschnitt TEL?");
        var base_queryschnitte5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte5
                          WHERE
                          {      
         						?s so:einteilungDesEinsatzes ?obj2.
                                  ?obj2 rdfs:label "TEL". 
                                  ?obj2 so:datumzeit ?tte5.
                         }LIMIT 3`;

        var queryUrlschnitte5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte5) + "&format=json";
        $.ajax({
            url: queryUrlschnitte5,
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

$("#Einsatzabschnitte6").click(function() {
    $("#searchField").val("Welche Einsatzabschnitt hat die Einsatzkraft Bundespolizei?");
    $('#searchSubmit').one('click', function() {
        userQueryschnitte6 = $("#searchField").val("Welche Einsatzabschnitt hat die Einsatzkraft Bundespolizei?");
        var base_queryschnitte6 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?tte6
                          WHERE
                          {    ?s so:hatEinsatzkraefte re:Bundespolizei.   
                               re:Fw-Vechta so:hatEinsatzabschnitt ?tte6.
                          }LIMIT 1`;

        var queryUrlschnitte6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryschnitte6) + "&format=json";
        $.ajax({
            url: queryUrlschnitte6,
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
