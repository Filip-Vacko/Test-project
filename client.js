var time1 = "20170302";
var time2 = "20170406";
var requestedURL = "https://jizdenky.regiojet.cz/Booking/from/10202003/to/10202000/tarif/REGULAR/departure/" + time1 + "/retdep/" + time2 +"/return/false?0#search-results"

document.getElementById("saButton").onclick = function () {

    var requestedDate = document.getElementById("date").value;

    time1 = requestedDate.replace(/-/g, "");

    time2 = time1; //provisionary, for testing only

    myFrame.contentWindow.location.reload(true);
    document.getElementById("saIframe").src = requestedURL;
    var myFrame=document.querySelector('iframe');


}



