//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";

$('#searchSubmit').on('click', function() {
    userQuery_12 = $("#searchField").val();
    if (userQuery_12.match("^Wie heißen alle Leiter")) {
        var base_query_12 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                         SELECT DISTINCT ?name
						 WHERE 
						  {     ?ID so:hatLeiter ?leiter . 
						     ?ID rdfs:label ?unit .
								?leiter rdfs:label ?name.
                        FILTER NOT EXISTS {FILTER regex(str(?leiter), "Unbekannt").}}
						  `;
        var queryUrl_12 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_12) + "&format=json";
        $.ajax({
            url: queryUrl_12,
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
    userQuery_13 = $('#searchField').val();
    if (userQuery_13.match("^Wie viele Einheiten haben den Auftrag")) {
        var base_query_13 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
						SELECT (count(DISTINCT ?unit) as ?count)
							WHERE {
								 ?s rdfs:label ?unit.
							    ?s so:hatAuftrag ?obj.
								FILTER ( regex(str(\"` + userQuery_13 + `\"\) , ?obj))
							}`;
        var queryUrl_13 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_13) + "&format=json";
        $.ajax({
            url: queryUrl_13,
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
    userQuery_14 = $('#searchField').val();
    if (userQuery_14.match("^Wie viele Aufträge gibt es")) {
        var base_query_14 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/>						
								  SELECT (count(DISTINCT ?unit) as ?count)
									WHERE {
										 ?s rdfs:label ?unit.
									 ?s  so:hatAuftrag ?a .
									}`;
        var queryUrl_14 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_14) + "&format=json";
        $.ajax({
            url: queryUrl_14,
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
    userQuery_15 = $('#searchField').val();
    if (userQuery_15.match("^Welche sind die Aufträge")) {
        var base_query_15 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
                         SELECT DISTINCT ?a
							WHERE {
								 ?s rdfs:label ?unit.
							 ?s so:hatAuftrag ?a .
							}
						  LIMIT 20`;
        var queryUrl_15 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_15) + "&format=json";
        $.ajax({
            url: queryUrl_15,
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
    userQuery_16 = $('#searchField').val();
    if (userQuery_16.match("^Welche Einheit hat Auftrag und Ort")) {
        var base_query_16 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
                          SELECT DISTINCT
                            ?unit 
                          WHERE
							{    ?s rdfs:label ?unit.
								?s so:hatAuftrag ?obj.
								?s so:hatEinsatzort ?obj.
							  FILTER ( regex(str(\"` + userQuery_16 + `\"\) , ?obj))
                          }`;
        var queryUrl_16 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_16) + "&format=json";
        $.ajax({
            url: queryUrl_16,
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
    userQuery_17 = $('#searchField').val();
    if (userQuery_17.match("^Welche Aufträge haben den Einheit")) {
        var base_query_17 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
                           SELECT ?a
							WHERE {
								 ?ID rdfs:label ?obj.
								 ?ID so:hatAuftrag ?a.
							  FILTER ( regex(str(\"` + userQuery_17 + `\"\) , ?obj))
                          }`;
        var queryUrl_17 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_17) + "&format=json";
        $.ajax({
            url: queryUrl_17,
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
    userQuery_18 = $('#searchField').val();
    if (userQuery_18.match("^Welche Einheit hat den Auftrag")) {
        var base_query_18 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?Answer2 
                          WHERE
                          {   
						      ?ID  so:hatAuftrag ?label.
							  ?ID  rdfs:label  ?Answer2.
							  FILTER ( regex(str(\"` + userQuery_18 + `\"\) , ?label))
                          }
						  LIMIT 3`;
        var queryUrl_18 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_18) + "&format=json";
        $.ajax({
            url: queryUrl_18,
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
    userQuery_19 = $('#searchField').val();
    if (userQuery_19.match("^Was ist die Betreffzeile der Nachricht")) {
        var base_query_19 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 						
						  SELECT DISTINCT ?d WHERE {?ID so:betreff ?d.}LIMIT 15
						  `;
        var queryUrl_19 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_19) + "&format=json";
        $.ajax({
            url: queryUrl_19,
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
