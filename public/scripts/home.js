function querySt(ji) {
   
var urlParams = window.location.search.substring(1),
    gy = urlParams.split("&");

    for (var i=0; i<gy.length; i++) {
        var ft = gy[i].split("=");
        if (ft[0] == ji) {
            return(ft[1]);
        }
    }
}

var urlCompare = querySt("compare");

console.log(urlCompare);

document.getElementById('compare').value = urlCompare;