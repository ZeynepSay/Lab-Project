function autocomplete(inp, arr) {

    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;

                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

/*An array containing all questions templates:*/
var questions = ["Was sind die Einsatzkräefte",
"Wo ist der Einsatzkraft",
"Wie viele Personen hat die Einsatzkraft",
"Wie ist der Status der Einsatzkraft",
"Wie lautet die Telefonnummer der Einsatzkraft",
"Wie viele Pa-Träger sind im Einsatzkraft",
"Was sind Funknamen der Einsatzkraft",
"Was ist der typ der Einsatzkraft",
"Welche Einsatzkräefte haben den Status",
"Welche datumzeit hat die Einsatzkraft",
"Was sind die Einsatzabschnitte",
"Was ist der Funkkanal der Einsatzabschnitt",
"Wo ist der Einsatzabschnitt",
"Welche Einsatzkräefte haben den Einsatzabschnitt",
"Welche datumzeit hat die Einsatzabschnitt",
"Welche Einsatzabschnitt hat die Einsatzkraft",
"Wie heißen alle Einsatzes",
"Wie heißen alle Alarmstichworts",
"Was ist das Datum von",
"Welche Einsatz hat den Alarmstichwort",
"Welche Einsatzkräefte haben den Einsatz",
"Welche Einsatzes haben das Datum nach",
"Welche Einsatzes haben das Datum vor",
"Wie heißen alle Leiter",
"Welche Einheiten haben einen Leiter",
"Welche Einheit hat der Leiter",
"Wer ist der Leiter der Einheit",
"Wie lautet die Telefonnummer von Leiter",
"Wie viele unterleiter hat Einsatzkraft",
"Wie viele leiter hat Einsatzkraft",
"Wie viele Einheiten haben einen Leiter",
"Wie viele Einheiten haben keinen Leiter",
"Wie viele Einheiten hat der Leiter",
"Was ist die Betreffzeile der Nachricht",
"Was ist der Inhalt mit dem Betreff",
"Wer ist der Empfänger mit dem Betreff",
"Wer ist der Absender mit dem Betreff",
"Wie viele Nachrichten hat den Status",
"Wie ist der Status der Betreff",
"Wie ist der lagevortrag mit dem Betreff",
"Welche sind die Aufträge",
"Welche Aufträge haben den Einheit",
"Welche Einheit hat den Auftrag",
"Wie viele Aufträge gibt es",
"Wie viele Einheiten haben den Auftrag"
];



/*initiate the autocomplete function on the "myInput" element, and pass along the questions array as possible autocomplete values:*/
autocomplete(document.getElementById("searchField"), questions);
