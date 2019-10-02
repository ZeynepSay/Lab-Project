//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
var ul, li;
$("#Leiter1").click(function() {
    $("#searchField").val("Wie heißen alle Einsatzes?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter1 = $("#searchField").val("Wie heißen alle Einsatzes?");
        var base_queryLeiter1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt
                          WHERE
                          {   
                              ?ID so:hatLeiter ?lt1 .
							  ?lt1 rdfs:label ?lt.
							  ?ID rdfs:label ?unit .
							  FILTER NOT EXISTS {FILTER regex(str(?leiter), "Unbekannt").}
                          }LIMIT 10`;

        var queryUrlLeiter1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter1) + "&format=json";
        $.ajax({
            url: queryUrlLeiter1,
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

$("#Leiter2").click(function() {
    $("#searchField").val("Welche Einheiten haben einen Leiter?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter2 = $("#searchField").val("Welche Einheiten haben einen Leiter?");
        var base_queryLeiter2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt2
                          WHERE
                          {   
                              ?ID so:hatLeiter ?leiter .
							  ?ID rdfs:label ?lt2 . 
							  FILTER NOT EXISTS {FILTER regex(str(?leiter), "Unbekannt").}  
                          }LIMIT 10`;

        var queryUrlLeiter2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter2) + "&format=json";
        $.ajax({
            url: queryUrlLeiter2,
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

$("#Leiter3").click(function() {
    $("#searchField").val("Welche Einheit hat der Leiter Andreas Haake?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter3 = $("#searchField").val("Welche Einheit hat der Leiter Andreas Haake?");
        var base_queryLeiter3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt3
                          WHERE
                          {   
                               ?ID so:hatLeiter ?obj.
                               ?obj rdfs:label "Andreas Haake".
                               ?ID rdfs:label ?lt3 .
                          }LIMIT 1`;

        var queryUrlLeiter3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter3) + "&format=json";
        $.ajax({
            url: queryUrlLeiter3,
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
$("#Leiter4").click(function() {
    $("#searchField").val("Wer ist der Leiter der Einheit 2. Zug?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter4 = $("#searchField").val("Wer ist der Leiter der Einheit 2. Zug?");
        var base_queryLeiter4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt4
                          WHERE
                          {   
                                ?ID rdfs:label "2. Zug" .
                                ?ID so:hatLeiter ?obj.
                                ?obj rdfs:label ?lt4.    
                          }LIMIT 1`;

        var queryUrlLeiter4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter4) + "&format=json";
        $.ajax({
            url: queryUrlLeiter4,
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

$("#Leiter5").click(function() {
    $("#searchField").val("Wie lautet die Telefonnummer von Leiter Sven-Döding?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter5 = $("#searchField").val("Wie lautet die Telefonnummer von Leiter Sven-Döding?");
        var base_queryLeiter5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt5
                          WHERE
                          {      
         						 ?ID so:hatLeiter ?obj.
                                 ?obj rdfs:label "Sven Döding". 
                                 ?obj so:telefon ?lt5.
                         }LIMIT 3`;

        var queryUrlLeiter5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter5) + "&format=json";
        $.ajax({
            url: queryUrlLeiter5,
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

$("#Leiter6").click(function() {
    $("#searchField").val("Wie viele unterleiter hat Einsatzkraefte RD Lk Oldenburg?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter6 = $("#searchField").val("Wie viele unterleiter hat Einsatzkraefte RD Lk Oldenburg?");
        var base_queryLeiter6 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt6
                          WHERE
                          {     
						     ?s so:hatEinsatzkraefte ?obj2.
                             ?obj2 so:takteinheit "RD Lk Oldenburg".
                             ?obj2 so:einsatzstärkeunterführer ?lt6.
						  
                          }LIMIT 5`;

        var queryUrlLeiter6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter6) + "&format=json";
        $.ajax({
            url: queryUrlLeiter6,
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



$("#Leiter7").click(function() {
    $("#searchField").val("Wie viele leiter hat Einsatzkraefte 1.Löschzug?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter7 = $("#searchField").val("Wie viele leiter hat Einsatzkraefte 1.Löschzug?");
        var base_queryLeiter7 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?lt7
                          WHERE
                          { 
     						 ?obj2 so:takteinheit "1.Löschzug".
                             ?obj2 so:einsatzstärkeführer ?lt7.
         						
                          }LIMIT 3`;

        var queryUrlLeiter7 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter7) + "&format=json";
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

$("#Leiter8").click(function() {
    $("#searchField").val("Wie viele Einheiten haben einen Leiter?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter8 = $("#searchField").val("Wie viele Einheiten haben einen Leiter?");
        var base_queryLeiter8 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT (COUNT(DISTINCT ?lt8) as ?count)
                          WHERE
                          { 
     						  ?ID so:hatLeiter ?leiter .
							  ?ID rdfs:label ?lt8 .
							  FILTER NOT EXISTS {FILTER regex(str(?leiter), "Unbekannt").} 
         						
                          }LIMIT 3`;

        var queryUrlLeiter8 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter8) + "&format=json";
        $.ajax({
            url: queryUrlLeiter8,
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

$("#Leiter9").click(function() {
    $("#searchField").val("Wie viele Einheiten haben keinen Leiter?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter9 = $("#searchField").val("Wie viele Einheiten haben keinen Leiter?");
        var base_queryLeiter9 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT (COUNT(DISTINCT ?lt9) as ?count)
                          WHERE
                          { 
     						  ?ID so:hatLeiter ?leiter .
							  ?ID rdfs:label ?lt9.
							  FILTER regex(str(?leiter), "Unbekannt"). 
         						
                          }LIMIT 3`;
        var queryUrlLeiter9 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter9) + "&format=json";
        $.ajax({
            url: queryUrlLeiter9,
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

$("#Leiter10").click(function() {
    $("#searchField").val("Wie viele Einheiten hat der Leiter Lars Engelke?");
    $('#searchSubmit').one('click', function() {
        userQueryLeiter10 = $("#searchField").val("Wie viele Einheiten hat der Leiter Lars Engelke?");
        var base_queryLeiter10 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT (COUNT(DISTINCT ?lt10) as ?count)
                          WHERE
                          { 
     						?ID so:hatLeiter ?lei.
							?lei rdfs:label "Lars Engelke".
                            ?ID rdfs:label ?lt10.
         						
                          }LIMIT 3`;

        var queryUrlLeiter10 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryLeiter10) + "&format=json";
        $.ajax({
            url: queryUrlLeiter10,
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
