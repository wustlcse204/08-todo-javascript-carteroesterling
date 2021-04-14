
//Initial call of refresh
refresh();

//Simple refresh function
function refresh(){
    sendRequest("GET");
}

//Calls for POST of current text value of entry box when button is pressed
function buttonPress(){
    var input = document.getElementById("entry-box").value;
    send("POST",{"text": input});
    submit.parentElement.reset();
    refresh();
}


function append(todos){

}

//Sends the request. Takes the type of request and the data to go along with it 
function send(t, d){
    var xhttp = new XMLHttpRequest();
    var endpointURL1 = "https://cse204.work/todos";

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //Check to see what type of request it is
            if(t == "GET"){
                var todos = JSON.parse(this.responseText);
                append(todos);
            }
            else if(t == "PUT"){
                refresh();
            }
            else if(t == "DELETE"){
                refresh();
            }
        }
    }

    //Check to see if request is DELETE or PUT
    if(t == "DELETE"){
        endpointURL1 += "/" + event.target.parentNode.id;
    }
    if(t == "PUT"){
        endpointURL1 += "/" + event.target.parentNode.id;
    }

    xhttp.open(t,endpointURL1,true);
    xhttp.setRequestHeader("x-api-key", "436e43-c10a11-0b4d66-aca258-8b38cb");

    //Sends request according to type
    if (type == "POST") {
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
    }
    else if (type == "PUT") {
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
    }
    else if (type == "GET" || type == "DELETE") {
        xhttp.send();
    }
}
