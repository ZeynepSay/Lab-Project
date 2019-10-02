//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
$('#searchSubmit').on('click', function() {
    userQuery_28 = $('#searchField').val();
    if (userQuery_28.match("^Welche Einsatzkräefte haben den Einsatz")) {
        var base_query_28 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                     
							        SELECT DISTINCT  ?d
							WHERE {
								 ?ID  so:NameDesEinsatzes  ?obj . 
								 ?ID  so:hatEinsatzkraefte ?d.
								  FILTER (regex (str(\"` + userQuery_28 + `\"\),?obj))
                          }
						  LIMIT 5`;
        var queryUrl_28 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_28) + "&format=json";
        $.ajax({
            url: queryUrl_28,
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
    userQuery_29 = $("#searchField").val();

    if (userQuery_29.match("^Wie viele Pa-Träger sind im Einsatzkraft")) {
        var base_query_29 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?label 
                          WHERE
                          {   
								 ?ID  so:patraeger ?label.
							     ?ID so:takteinheit ?obj2.

							  FILTER ( contains(str(\"` + userQuery_29 + `\"\) ,?obj2 ))
                          }
						  LIMIT 5`;

        var queryUrl_29 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_29) + "&format=json";
        $.ajax({
            url: queryUrl_29,
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
    userQuery_30 = $("#searchField").val();
    if (userQuery_30.match("^Welche Einsatzkräefte haben den Status")) {
        var base_query_30 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?ID 
                          WHERE
                          {   
								 ?ID  so:hatStatus ?label.
								 ?ID rdf:type so:Einsatzkraft.
							  FILTER ( regex(str(\"` + userQuery_30 + `\"\) , ?label))
                          }
						  LIMIT 5`;
        var queryUrl_30 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_30) + "&format=json";
        $.ajax({
            url: queryUrl_30,
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
    userQuery_31 = $("#searchField").val();
    if (userQuery_31.match("^Was sind die Einsatzkräefte")) {
        var base_query_31 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                        SELECT DISTINCT ?name WHERE {
							  ?s so:hatEinsatzkraefte ?obj2.
							?obj2 so:takteinheit ?name.}
							LIMIT 15`;
        var queryUrl_31 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_31) + "&format=json";
        $.ajax({
            url: queryUrl_31,
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
    userQuery_32 = $("#searchField").val();
    if (userQuery_32.match("^Wo ist der Einsatzkraft")) {
        var base_query_32 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj1 
                          WHERE
                          {  							 
							  ?ID so:takteinheit ?obj2.
							  ?ID rdf:type so:Einsatzkraft.
							  ?ID so:hatEinsatzort ?obj1.
							  FILTER ( contains(str(\"` + userQuery_32 + `\"\) , ?obj2))
                          } `;

        var queryUrl_32 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_32) + "&format=json";
        $.ajax({
            url: queryUrl_32,
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
    userQuery_33 = $("#searchField").val();
    if (userQuery_33.match("^Welche datumzeit hat die Einsatzkraft")) {
        var base_query_33 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj1 
                          WHERE
                          {    ?ID so:takteinheit ?obj2.
							  ?ID rdf:type so:Einsatzkraft.
							  ?ID so:datumzeit ?obj1.
							  FILTER ( contains(str(\"` + userQuery_33 + `\"\) , ?obj2))
                          }  `;

        var queryUrl_33 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_33) + "&format=json";
        $.ajax({
            url: queryUrl_33,
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
    userQuery_34 = $("#searchField").val();
    if (userQuery_34.match("^Wie ist der Status der Einsatzkraft")) {
        var base_query_34 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj1
                          WHERE
                          {   
							 ?ID rdfs:label  "TaktEinheit".
							 ?ID so:takteinheit ?obj2.
								?ID so:hatStatus ?obj1.
							  FILTER ( contains(str(\"` + userQuery_34 + `\"\) , ?obj2))
                          }  `;

        var queryUrl_34 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_34) + "&format=json";
        $.ajax({
            url: queryUrl_34,
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
    userQuery_35 = $("#searchField").val();
    if (userQuery_35.match("^Wie viele Personen hat die Einsatzkraft")) {
        var base_query_35 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                         SELECT DISTINCT  ?obj1
                          WHERE
                          {   
							 ?ID rdfs:label  "TaktEinheit".
							 ?ID so:takteinheit ?obj2.
								?ID so:einsatzstärkemannschaft ?obj1.
							  FILTER ( contains(str(\"` + userQuery_35 + `\"\) , ?obj2))
                          }  `;

        var queryUrl_35 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_35) + "&format=json";
        $.ajax({
            url: queryUrl_35,
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
    userQuery_36 = $("#searchField").val();
    if (userQuery_36.match("^Was sind die Einsatzabschnitte")) {
        var base_query_36 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT ?label WHERE {?ID so:hatEinsatzabschnitt ?obj1. 
							?obj1 rdfs:label ?label.} LIMIT 20`;
        var queryUrl_36 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_36) + "&format=json";
        $.ajax({
            url: queryUrl_36,
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
    userQuery_37 = $("#searchField").val();
    if (userQuery_37.match("^Wie lautet die Telefonnummer der Einsatzkraft")) {
        var base_query_37 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?tel
                          WHERE
                          {   
									 ?ID so:telefon ?tel.
							?ID so:takteinheit ?obj2.
						
							  FILTER ( contains(str(\"` + userQuery_37 + `\"\) , ?obj2))

                          } `;

        var queryUrl_37 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_37) + "&format=json";
        $.ajax({
            url: queryUrl_37,
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
    userQuery_38 = $("#searchField").val();
    if (userQuery_38.match("^Was ist der typ der Einsatzkraft")) {
        var base_query_38 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?typ 
                          WHERE
                          {   ?s so:takteinheit ?obj3.
								?s so:typ ?typ .
							  FILTER ( contains(str(\"` + userQuery_38 + `\"\) , ?obj3))
                          }  `;
        var queryUrl_38 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_38) + "&format=json";
        $.ajax({
            url: queryUrl_38,
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
    userQuery_39 = $("#searchField").val();
    if (userQuery_39.match("^Wo ist der Einsatzabschnitt")) {
        var base_query_39 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj1 
                          WHERE
                          {   ?s so:einteilungDesEinsatzes ?obj2.
							  ?obj2 rdfs:label ?obj3.
							  ?obj2 so:hatEinsatzort ?obj1.
							  FILTER ( regex(str(\"` + userQuery_39 + `\"\) , ?obj3))
                          }
						  `;
        var queryUrl_39 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_39) + "&format=json";
        $.ajax({
            url: queryUrl_39,
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
    userQuery_40 = $("#searchField").val();
    if (userQuery_40.match("^Welche datumzeit hat die Einsatzabschnitt")) {
        var base_query_40 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?obj1 
                          WHERE
                          {    ?s so:einteilungDesEinsatzes ?obj2. 
								 ?obj2 rdfs:label ?obj3.
								  ?obj2 so:datumzeit ?obj1.
							 FILTER ( regex(str(\"` + userQuery_40 + `\"\) , ?obj3))
                          }  `;

        var queryUrl_40 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_40) + "&format=json";
        $.ajax({
            url: queryUrl_40,
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
    userQuery_41 = $("#searchField").val();
    if (userQuery_41.match("^Was sind Funknamen der Einsatzkraft")) {
        var base_query_41 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                          SELECT DISTINCT
                            ?s 
                          WHERE
                          {    ?ID  so:takteinheit ?obj3 .
								?ID  so:funkbos ?s.
							  FILTER ( contains(str(\"` + userQuery_41 + `\"\) , ?obj3))
                          } `;

        var queryUrl_41 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_41) + "&format=json";
        $.ajax({
            url: queryUrl_41,
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
    userQuery_42 = $("#searchField").val();
    if (userQuery_42.match("^Welche Einsatzabschnitt hat die Einsatzkraft")) {
        var base_query_42 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?label
                          WHERE
                          {  
							 
						       ?s so:hatEinsatzkraefte ?o. 
							?o so:hatEinsatzabschnitt ?obj1.
								?ID  so:takteinheit ?obj3 .
								?obj1 rdfs:label ?label
							  FILTER ( contains(str(\"` + userQuery_42 + `\"\) , ?obj3))
                          }`;

        var queryUrl_42 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_42) + "&format=json";
        $.ajax({
            url: queryUrl_42,
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
    userQuery_43 = $("#searchField").val();
    if (userQuery_43.match("^Welche Einsatzkräefte haben den Einsatzabschnitt")) {
        var base_query_43 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
						
                          SELECT DISTINCT
                            ?obj3
                          WHERE
                          {  
							 
						       ?s so:hatEinsatzkraefte ?o. 
							?o so:hatEinsatzabschnitt ?obj1.
								?ID  so:takteinheit ?obj3 .
								?obj1 rdfs:label ?label
							  FILTER ( contains(str(\"` + userQuery_43 + `\"\) , ?label))
                          }`;

        var queryUrl_43 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_43) + "&format=json";
        $.ajax({
            url: queryUrl_43,
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
    userQuery_44 = $("#searchField").val();
    if (userQuery_44.match("^Wie heißen alle Einsatzes")) {
        var base_query_44 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                        SELECT DISTINCT  ?d WHERE {         ?ID  so:NameDesEinsatzes ?d.      }
						  `;
        var queryUrl_44 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_44) + "&format=json";
        $.ajax({
            url: queryUrl_44,
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
    userQuery_45 = $("#searchField").val();
    if (userQuery_45.match("^Wie heißen alle Alarmstichworts")) {
        var base_query_45 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                        SELECT DISTINCT  ?d WHERE {         ?ID  so:hatAlarmstichwort ?d.      }
						  `;
        var queryUrl_45 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_45) + "&format=json";
        $.ajax({
            url: queryUrl_45,
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
   
   var main_string = $("#searchField").val();
   var sub_string = main_string.substring (38, 48);
    if (main_string.match("^Welche Einsatzes haben das Datum nach")) {
        var base_query_46 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                       
					   SELECT DISTINCT ?obj1
                          WHERE
                          {     
						       ?ID  so:NameDesEinsatzes ?obj1.
							   ?ID  so:datumvon  ?date .
							   FILTER(?date > \"` + sub_string + `\"\ )

				    		  
                          }LIMIT 5
						  `;
						  
						  
        var queryUrl_46 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_46) + "&format=json";
        $.ajax({
            url: queryUrl_46,
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
   
   var main_string = $("#searchField").val();
   var sub_string = main_string.substring (37, 47);
    if (main_string.match("^Welche Einsatzes haben das Datum vor")) {
        var base_query_47 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                       
					   SELECT DISTINCT ?obj1
                          WHERE
                          {     
						       ?ID  so:NameDesEinsatzes ?obj1.
							   ?ID  so:datumvon  ?date .
							   FILTER(?date < \"` + sub_string + `\"\ )

				    		  
                          }LIMIT 5
						  `;
						  
						  
        var queryUrl_47 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_47) + "&format=json";
        $.ajax({
            url: queryUrl_47,
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
    userQuery_48 = $("#searchField").val();
    if (userQuery_48.match("^Was ist der Funkkanal der Einsatzabschnitt")) {
        var base_query_48 = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> 
						  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
						  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
						  PREFIX so:    <http://solide-projekt.de/ontology/> 
						  PREFIX re: <http://solide-projekt.de/resource/> 
                        SELECT DISTINCT  ?d WHERE {  
						    ?ID rdfs:label ?obj3.
                             ?ID so:hatLeiter ?t.
                             ?tel rdfs:label ?u.
                             ?tel so:TMO_4M ?d.
							  FILTER ( contains(str(\"` + userQuery_48 + `\"\) , ?obj3))
							 }
							 
						  `;
        var queryUrl_48 = url_to_endpoint + "?query=" + encodeURIComponent(base_query_48) + "&format=json";
        $.ajax({
            url: queryUrl_48,
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
