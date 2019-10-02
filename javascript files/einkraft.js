//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
var ul, li;
$("#Einsatzkraefte1").click(function() {
    $("#searchField").val("Was sind die Einsatzkräefte?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte1 = $("#searchField").val("Was sind die Einsatzkräefte?");
        var base_queryEinsatzkraefte1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?kraefte1
                          WHERE
                          {   
                               ?ID so:takteinheit ?kraefte1.
							   ?ID rdfs:label  "TaktEinheit".
                          }LIMIT 10`;
        var queryUrlEinsatzkraefte1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte1) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte1,
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

$("#Einsatzkraefte2").click(function() {
    $("#searchField").val("Wo ist der Einsatzkraft Fw Schierbrok?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte2 = $("#searchField").val("Wo ist der Einsatzkraft Fw Schierbrok?");
        var base_queryEinsatzkraefte2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?kraeftezort
                          WHERE
                          {   
                                ?ID so:takteinheit "Fw Schierbrok".
							    ?ID rdfs:label  "TaktEinheit".
						        ?ID so:hatEinsatzort ?kraeftezort.
                          }LIMIT 1`;
        var queryUrlEinsatzkraefte2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte2) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte2,
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

$("#Einsatzkraefte3").click(function() {
    $("#searchField").val("Wie viele Personen hat die Einsatzkraft 1.Löschzug?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte3 = $("#searchField").val("Wie viele Personen hat die Einsatzkraft 1.Löschzug?");
        var base_queryEinsatzkraefte3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte3
                          WHERE
                          {   
                               ?ID so:takteinheit "1.Löschzug".
							   ?ID rdfs:label  "TaktEinheit".
                               ?ID so:einsatzstärkemannschaft ?fte3.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte3) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte3,
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
$("#Einsatzkraefte4").click(function() {
    $("#searchField").val("Wie ist der Status der Einsatzkraft Landespolizei?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte4 = $("#searchField").val("Wie ist der Status der Einsatzkraft Landespolizei?");
        var base_queryEinsatzkraefte4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte4
                          WHERE
                          {   
                             ?ID so:takteinheit "Landespolizei".
							 ?ID rdfs:label  "TaktEinheit".
							 ?ID so:hatStatus ?fte4.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte4) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte4,
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

$("#Einsatzkraefte5").click(function() {
    $("#searchField").val("Wie lautet die Telefonnummer der Einsatzkraft Polizei?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte5 = $("#searchField").val("Wie lautet die Telefonnummer der Einsatzkraft Polizei?");
        var base_queryEinsatzkraefte5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte5
                          WHERE
                          {      
         						?s rdfs:label "Polizei".
								?s so:telefon ?fte5.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte5) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte5,
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

$("#Einsatzkraefte6").click(function() {
    $("#searchField").val("Wie viele PA-Träger sind im Einsatzkraft Fachzug Rüst/Rettung?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte6 = $("#searchField").val("Wie viele PA-Träger sind im Einsatzkraft Fachzug Rüst/Rettung?");
        var base_queryEinsatzkraefte6 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte6
                          WHERE
                          {      
         						?ID  so:takteinheit "Fachzug Rüst/Rettung ".
								?ID  so:patraeger ?fte6.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte6 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte6) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte6,
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

$("#Einsatzkraefte7").click(function() {
    $("#searchField").val("Was sind Funknamen der Einsatzkraftt Fw Vechta?");

    $('#searchSubmit').one('click', function() {

        userQueryEinsatzkraefte7 = $("#searchField").val("Was sind Funknamen der Einsatzkraftt Fw Vechta?");
        var base_queryEinsatzkraefte7 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte7
                          WHERE
                          {      ?ID  so:takteinheit "Fw Vechta".
        						 ?ID  so:funkbos ?fte7.  
         						
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte7 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte7) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte7,
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

$("#Einsatzkraefte8").click(function() {
    $("#searchField").val("Was ist der typ der Einsatzkraft BTW?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte8 = $("#searchField").val("Was ist der typ der Einsatzkraft BTW?");
        var base_queryEinsatzkraefte8 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte8
                          WHERE
                          {      
         						 ?s so:takteinheit "BTW ".
								 ?s so:typ ?fte8 .
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte8 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte8) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte8,
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

$("#Einsatzkraefte9").click(function() {
    $("#searchField").val("Welche Einsatzkräefte haben den Status 1.0?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte9 = $("#searchField").val("Welche Einsatzkräefte haben den Status 1.0?");
        var base_queryEinsatzkraefte9 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte9
                          WHERE
                          {      
         						 ?ID  so:hatStatus "1.0". 
								 ?ID  so:takteinheit ?fte9.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte9 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte9) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte9,
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

$("#Einsatzkraefte10").click(function() {
    $("#searchField").val("Welche datumzeit hat die Einsatzkraft Polizei?");
    $('#searchSubmit').one('click', function() {
        userQueryEinsatzkraefte10 = $("#searchField").val("Welche datumzeit hat die Einsatzkraft Polizei?");
        var base_queryEinsatzkraefte10 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?fte10
                          WHERE
                          {      
         						?s so:takteinheit "Polizei".
							    ?s so:datumzeit ?fte10.
                          }LIMIT 1`;

        var queryUrlEinsatzkraefte10 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryEinsatzkraefte10) + "&format=json";
        $.ajax({
            url: queryUrlEinsatzkraefte10,
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
