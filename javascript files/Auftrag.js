//var url_to_endpoint = "http://localhost:3030/LAB_DATA/sparql";
var url_to_endpoint = "http://localhost:3030/solidetest/query";
var ul, li;
$("#Auftrag1").click(function() {
    $("#searchField").val("Welche sind die Auftrage?");
    $('#searchSubmit').one('click', function() {
        userQueryAuftrag1 = $("#searchField").val("Welche sind die Auftrage?");
        var base_queryAuftrag1 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?auf1
                          WHERE
                          {   
							  ?ID rdfs:label ?unit. 
							  ?ID  so:hatAuftrag ?auf1.
                          }LIMIT 10`;
        var queryUrlAuftrag1 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryAuftrag1) + "&format=json";
        $.ajax({
            url: queryUrlAuftrag1,
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

$("#Auftrag2").click(function() {
    $("#searchField").val("Welche Auftrage haben den Einheit EA 1?");
    $('#searchSubmit').one('click', function() {
        userQueryAuftrag2 = $("#searchField").val("Welche Auftrage haben den Einheit EA 1?");
        var base_queryAuftrag2 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?auf2
                          WHERE
                          {   
                             ?ID rdfs:label "EA 1". 
							 ?ID so:hatAuftrag ?auf2.
                          }LIMIT 3`;
        var queryUrlAuftrag2 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryAuftrag2) + "&format=json";

        $.ajax({
            url: queryUrlAuftrag2,
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

$("#Auftrag3").click(function() {
    $("#searchField").val("Welche Einheit hat den Auftrag Evakuirung?");

    $('#searchSubmit').one('click', function() {

        userQueryAuftrag3 = $("#searchField").val("Welche Einheit hat den Auftrag Evakuirung?");
        var base_queryAuftrag3 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT DISTINCT ?auf3
                          WHERE
                          {   
                               ?ID rdfs:label ?auf3. 
							   ?ID so:hatAuftrag "Evakuirung".
                          }LIMIT 1`;
        var queryUrlAuftrag3 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryAuftrag3) + "&format=json";
        $.ajax({
            url: queryUrlAuftrag3,
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

$("#Auftrag4").click(function() {
    $("#searchField").val("Wie viele Auftrage gibt es?");
    $('#searchSubmit').one('click', function() {
        userQueryAuftrag4 = $("#searchField").val("Wie viele Auftrage gibt es?");
        var base_queryAuftrag4 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT (count(DISTINCT ?auf4) as ?count)
                          WHERE
                          {   
                                 ?ID rdfs:label ?unit.
								 ?ID  so:hatAuftrag ?auf4.  
                          }LIMIT 1`;
        var queryUrlAuftrag4 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryAuftrag4) + "&format=json";
        $.ajax({
            url: queryUrlAuftrag4,
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

$("#Auftrag5").click(function() {
    $("#searchField").val("Wie viele Einheiten haben den Auftrag Befüllung Sandsäcke?");
    $('#searchSubmit').one('click', function() {
        userQueryAuftrag5 = $("#searchField").val("Wie viele Einheiten haben den Auftrag Befüllung Sandsäcke?");
        var base_queryAuftrag5 = `prefix xsd: <http://www.w3.org/2001/XMLSchema#>
                          prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                          prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                          prefix so:  <http://solide-projekt.de/ontology/> 
                          prefix re: <http://solide-projekt.de/resource/>
						   SELECT (count(DISTINCT ?auf5) as ?count)
                          WHERE
                          {      
         						  ?ID rdfs:label ?auf5.
								  ?ID  so:hatAuftrag "Befüllung Sandsäcke" . 
                         }LIMIT 1`;
        var queryUrlAuftrag5 = url_to_endpoint + "?query=" + encodeURIComponent(base_queryAuftrag5) + "&format=json";
        $.ajax({
            url: queryUrlAuftrag5,
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
