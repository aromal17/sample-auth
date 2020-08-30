const guidelist = document.querySelector(".guides");

//in  the below function data is received in the form of an array and each items in the array is accessed using the for each method
const setUpGuides = (data) => {

  if(setUpGuides.length!=0){
  
    let html ='';

    data.forEach(docs => {
      const guide = docs.data();
      const li = `<li>
                    <div class="collapsible-header grey lighten-4">${guide.title}</div>
                    <div class="collapsible-body white">${guide.content}</div>
                  </li>`   
      html += li;
    });
  
    guidelist.innerHTML = html;
  
  }
  else{

    guidelist.innerHTML = `<h5>User is logged out so no data to be displayed</h5>`;


  }
  
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });