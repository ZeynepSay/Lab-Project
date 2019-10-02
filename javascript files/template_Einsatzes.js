//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";

$('#searchSubmit').on('click', function() {
    userQuery_20 = $('#searchField').val();
    if (userQuery_20.match("^Was ist das Datum von")) {
        var base_query_20 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj3 
                          WHERE
                          {   ?s   so:NameDesEinsatzes ?name. 
								?s so:datumvon ?obj3.
							  FILTER ( regex(str(\"` + userQuery_20 + `\"\) , ?name))
                          } `;

        var queryUrl_20 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_20) + "&format=json";
        $.ajax({
            url: queryUrl_20,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_21 = $('#searchField').val();
    if (userQuery_21.match("^Welche Einsatz hat den Alarmstichwort")) {
        var base_query_21 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d
                          WHERE
                          {    ?ID  so:hatAlarmstichwort  ?label. 
								?ID  so:NameDesEinsatzes ?d.
							  FILTER ( regex(str(\"` + userQuery_21 + `\"\) , ?label))
                          } `;
        var queryUrl_21 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_21) + "&format=json";
        $.ajax({
            url: queryUrl_21,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_22 = $('#searchField').val();
    if (userQuery_22.match("^Wer ist der Empfänger mit dem Betreff")) {
        var base_query_22 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d 
                          WHERE
                          {   ?ID  so:betreff   ?betreff. 
								?ID  so:nachrichtEmpfangen ?d.
							  FILTER ( regex(str(\"` + userQuery_22 + `\"\) , ?betreff))
                          }
						  LIMIT 5`;

        var queryUrl_22 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_22) + "&format=json";
        $.ajax({
            url: queryUrl_22,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_23 = $('#searchField').val();
    if (userQuery_23.match("^Wer ist der Absender mit dem Betreff")) {
        var base_query_23 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?d 
                          WHERE
                          {   ?ID  so:betreff   ?betreff. 
								?ID  so:nachrichtVersenden ?d.
							  FILTER ( contains(str(\"` + userQuery_23 + `\"\) , ?betreff))
                          }
						  LIMIT 5`;

        var queryUrl_23 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_23) + "&format=json";
        $.ajax({
            url: queryUrl_23,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_24 = $('#searchField').val();
    if (userQuery_24.match("^Wie viele Nachrichten hat den Status")) {
        var base_query_24 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
						SELECT  DISTINCT  (COUNT(distinct ?d) as ?rows)
                          WHERE
                          {     ?ID rdf:type so:Nachricht.
						        ?ID  so:status  ?obj4.
								?ID  so:meldung ?d.
							  FILTER (regex (str(\"` + userQuery_24 + `\"\),?obj4))
                          } `;

        var queryUrl_24 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_24) + "&format=json";
        $.ajax({
            url: queryUrl_24,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_25 = $('#searchField').val();
    if (userQuery_25.match("^Was ist der Inhalt der Nachricht mit dem Betreff")) {
        var base_query_25 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT ?meldung ?time
								WHERE {
								?s so:meldung ?meldung.
								  ?s so:zeitGesendet ?time.
								  ?s so:betreff ?betreff.
								
								 FILTER ( contains((\"` + userQuery_25 + `\"\),?betreff) )
								}
								ORDER BY DESC(?time)
						  LIMIT 3`;

        var queryUrl_25 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_25) + "&format=json";
        $.ajax({
            url: queryUrl_25,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_26 = $('#searchField').val();
    if (userQuery_26.match("^Wie ist der Status der Betreff")) {
        var base_query_26 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                        SELECT DISTINCT ?obj3
								WHERE {													 
								  ?s so:betreff ?betreff.
								  ?s so:status ?obj3.
								 FILTER ( regex((\"` + userQuery_26 + `\"\),?betreff) )
								}								
						  LIMIT 3`;

        var queryUrl_26 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_26) + "&format=json";
        $.ajax({
            url: queryUrl_26,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});

$('#searchSubmit').on('click', function() {
    userQuery_27 = $('#searchField').val();
    if (userQuery_27.match("^Wie ist der lagevortrag mit dem Betreff")) {
        var base_query_27 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?obj3 
                          WHERE
                          {   ?s so:betreff ?b .
							?s so:lagevortrag ?obj3.
							  FILTER ( regex(str(\"` + userQuery_27 + `\"\) , ?b))
                          }
						  LIMIT 3`;
        var queryUrl_27 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_27) + "&format=json";
        $.ajax({
            url: queryUrl_27,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
});


$('#searchSubmit').on('click', function() {
    userQuery_27_2 = $('#searchField').val();
    if (userQuery_27_2.match("^Was sind die letzten Nachrichten mit dem Betreff")) {
        var base_query_27_2 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                            SELECT DISTINCT  ?time ?mel2
                          WHERE
                          {   
                             ?ID  so:betreff  ?b. 
							 ?ID  so:meldung ?mel2. 
                              ?ID so:zeitGesendet ?time
							  FILTER ( regex(str(\"` + userQuery_27_2 + `\"\) , ?b))
						} ORDER BY DESC(?time)
						LIMIT 5`;
        var queryUrl_27_2 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_27_2) + "&format=json";
        $.ajax({
            url: queryUrl_27_2,
            data: "",
            success: function(data) {
                displayResults(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#resultsContainer").html("<b>ERROR :</b> Input could not be resolved to a query!")
            }
        });
    }
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
