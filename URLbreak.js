function urlParts(url) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");


    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://facebook.com/waqaswadiwala"
console.log("Original address: "+url_add)
console.log(urlParts(url_add))
