function searchAirline(){
    search = document.getElementById('ocitySearch').value;
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-GB/?query=" + search);
    xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "d467aa12b2msh7af0e36fc9e086ap177a9djsn287c58d0ab7d");
    
    xhr.onload = function (){
        var data = JSON.parse(this.response)
        console.log(data);
        var airlines = [];

        addDropdown = document.getElementById('oDropdown');
        if (isCalledOnce = true){
        elements = addDropdown.getElementsByTagName('a')

        while (elements[0]){
            elements[0].parentNode.removeChild(elements[0])     
        }

        data.Places.forEach(place => airlines.push(place.PlaceId))
   
        function iterate(item){
            var drop = document.createElement('a');
            drop.innerHTML = item;
            addDropdown.appendChild(drop)
        }

        airlines.forEach(iterate)
        }

        else{
                
        data.Places.forEach(place => airlines.push(place.PlaceId))
   
        function iterate(item){
            var drop = document.createElement('a');
            drop.innerHTML = item;
            addDropdown.appendChild(drop)
        }

        airlines.forEach(iterate)
        }


    }


    xhr.send(data);
    
}

function searchAirline2(){
    search = document.getElementById('dcitySearch').value;
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-GB/?query=" + search);
    xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "d467aa12b2msh7af0e36fc9e086ap177a9djsn287c58d0ab7d");
    
    xhr.onload = function (){
        var data = JSON.parse(this.response)
        console.log(data);
        var airlines = [];

        addDropdown2 = document.getElementById('dDropdown');
        if (isCalledOnce = true){
        elements2 = addDropdown2.getElementsByTagName('a')

        while (elements2[0]){
            elements2[0].parentNode.removeChild(elements2[0])     
        }

        data.Places.forEach(place => airlines.push(place.PlaceId))
   
        function iterate(item){
            var drop = document.createElement('a');
            drop.innerHTML = item;
            addDropdown2.appendChild(drop)
        }

        airlines.forEach(iterate)
        }

        else{
                
        data.Places.forEach(place => airlines.push(place.PlaceId))
   
        function iterate(item){
            var drop = document.createElement('a');
            drop.innerHTML = item;
            drop.setAttribute('class', 'selector')
            addDropdown.appendChild(drop);

        }

        airlines.forEach(iterate)
        }


    }


    xhr.send(data);
    
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var isCalledOnce = false;

function myFunction() {
    if (isCalledOnce = true) {
        document.getElementById("oDropdown").classList.toggle("show");
        console.log(isCalledOnce);
        isCalledOnce = true;

    }
    else{
        document.getElementById("oDropdown").classList.toggle("hide");
        words = document.getElementById('dropBtn');
        console.log(isCalledOnce);
        isCalledOnce = false;


    }
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("airlineDrop");
    filter = input.value.toUpperCase();
    div = document.getElementById("oDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function myFunction2() {
    document.getElementById("dDropdown").classList.toggle("show");
  }
  
  function filterFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("airlineDrop");
    filter = input.value.toUpperCase();
    div = document.getElementById("dDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

function searchFunction(){
    searchAirline();
    myFunction();
}

function searchFunction2(){
    searchAirline2();
    myFunction2();
}

function selectAir(){
    selected = this.innerHTML;
    console.log(selected);
}

function saveTrip(){
    origin = document.getElementById;
    var trip = {
        origin:'', 
        destination:'', 
        departure:'',
        return:''};
}