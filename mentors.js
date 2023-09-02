var mentors = ["John Smith/Cornell University/Computer Science/john.smith@cornell.edu",
"Emily Johnson/Stanford University/Electrical Engineering/emily.johnson@stanford.edu",
"Michael Williams/Harvard University/Psychology/michael.williams@harvard.edu",
"Sarah Brown/MIT/Physics/sarah.brown@mit.edu",
"David Wilson/University of California, Berkeley/History/david.wilson@berkeley.edu",
"Jessica Martin/Princeton University/Mathematics/jessica.martin@princeton.edu",
"Kevin Davis/Yale University/Economics/kevin.davis@yale.edu",
"Linda Anderson/California Institute of Technology (Caltech)/Chemistry/linda.anderson@caltech.edu",
"Robert Garcia/University of Chicago/Linguistics/robert.garcia@uchicago.edu",
"Amanda Lee/University of Oxford/Philosophy/amanda.lee@oxford.edu",
"Jacob Fing/Cornell University/Astronomy/jacob.fing@cornell.edu"];


const sfilterInput = document.getElementById('scholarshipfilterInput');
const sitemList = Array.from(document.getElementById('scholarshipitemList').getElementsByTagName('li'));
const sitemListContainer = document.getElementById('scholarshipitemList');

sfilterInput.addEventListener('input', function() {
    filterItems(sfilterInput, sitemList, sitemListContainer)
});

const afilterInput = document.getElementById('appfilterInput');
const aitemList = Array.from(document.getElementById('appitemList').getElementsByTagName('li'));
const aitemListContainer = document.getElementById('appitemList');

afilterInput.addEventListener('input', function() {
    filterItems(afilterInput, aitemList, aitemListContainer)
});


function filterItems(input, list, container) {
    const filterValue = input.value.toLowerCase();
    let matchingItemCount = 0; // Keep track of matching items
  
    list.forEach(item => {
      const itemText = item.textContent.toLowerCase();
      
      if (itemText.includes(filterValue)) {
        item.style.display = 'list-item'; // Show matching items
        matchingItemCount++;
      } else {
        item.style.display = 'none'; // Hide non-matching items
      }
    });
  
    // Show or hide the item list container based on matching items
    if (filterValue === '') {
      container.style.display = 'none'; // Hide the item list container if filter is empty
    } else if (matchingItemCount > 0) {
      container.style.display = 'block'; // Show the item list container
    } else {
      container.style.display = 'none'; // Hide the item list container if no matches
    }
  }
  
  
  function mentor() {
      const mentorName = document.getElementById('mentorName');
      const mentorUni = document.getElementById('mentorUni');
      const mentorDept = document.getElementById('mentorDept');
      const mentorEmail = document.getElementById('mentorEmail');
      const mentorOut = document.getElementById('mentorOut');
      let entry = "";
      entry+=mentorName.value;
      entry+="/";
      entry+=mentorUni.value;
      entry+="/";
      entry+=mentorDept.value;
      entry+="/";
      entry+=mentorEmail.value;
  
      mentors.push(entry);
      let outputText = "Thanks for becoming a mentor, your information has been recorded as: " + mentors[mentors.length-1];
      mentorOut.innerHTML = outputText;
  }
  
  function search() {
      const searchUni = document.getElementById('searchUni');
      const searchDept = document.getElementById('searchDept');
      const searchOut = document.getElementById('searchOut');
  
      let outputText = "Contact List (from most to least relevant): <br>";
  
      const uni = searchUni.value.toLowerCase()
      const dept = searchDept.value.toLowerCase();
      console.log(uni);
  
      done = [];
  
      for (let i = 0; i < mentors.length; i++) {
          separated = mentors[i].split("/");
          if (separated[1].toLowerCase() == uni && separated[2].toLowerCase() == dept) {
              outputText+= separated[0] + " who works at " + separated[1] + " in the " + separated[2] + " department at the email " + separated[3] + "<br>";
              done.push(i);
          }
          else if (separated[1].toLowerCase().indexOf(uni) >=0 && separated[2].toLowerCase().indexOf(dept) >=0)
          {
              outputText+= separated[0] + " who works at " + separated[1] + " in the " + separated[2] + " department at the email " + separated[3] + "<br>";
              done.push(i);
          }
      }
  
      for (let j = 0; j < mentors.length; j++) {
          separated = mentors[j].split("/");
          if (!done.includes(j) && (separated[1].toLowerCase() == uni || separated[2].toLowerCase() == dept)) {
              outputText+= separated[0] + " who works at " + separated[1] + " in the " + separated[2] + " department at the email " + separated[3] + "<br>";
          }
          else if (!done.includes(j) && (separated[1].toLowerCase().indexOf(uni) >=0 || separated[2].toLowerCase().indexOf(dept) >=0))
          {
              outputText+= separated[0] + " who works at " + separated[1] + " in the " + separated[2] + " department at the email " + separated[3] + "<br>";
          }
      }
  
      searchOut.innerHTML = outputText;
  
  }
  
  
  function readFile() {
      const wordAlternatives = {
          "assisted": "aided",
          "handled": "managed",
          "helped": "supported",
          "worked": "contributed",
          "involved": "participated",
          "responsible": "accountable",
          "did": "performed",
          "made": "created",
          "role": "position",
          "part": "role",
          "took": "undertook",
          "managed": "oversaw",
          "led": "guided",
          "ran": "operated",
          "implemented": "executed",
          "utilized": "used",
          "collaborated": "worked together",
          "gained": "acquired",
          "learned": "acquired",
          "challenges": "obstacles",
          "dealt": "handled",
          "time": "schedule",
          "resources": "assets",
          "pressure": "stress",
          "performed": "executed",
          "care": "manage",
          "contributed": "added",
          "opportunity": "chance",
          "chance": "opportunity",
          "able": "capable",
          "allowed": "permitted",
          "served": "worked",
          "part": "component",
          "job": "role",
          "tasks": "duties",
          "collaborated": "worked together",
          "charge": "responsibility",
          "use": "utilize",
          "acquired": "obtained",
          "tasked": "assigned",
        };
      const fileInput = document.getElementById("fileInput");
      const output = document.getElementById("output");
  
      const file = fileInput.files[0];
      if (file) {
          const reader = new FileReader();
    
          reader.onload = function(event) {
            const fileContent = event.target.result;
            const words = fileContent.split(/\s+/);
    
            output.innerHTML = "Consider making these switches: <br>";
    
            for (let i = 0; i < words.length; i++) {
              if (wordAlternatives.hasOwnProperty(words[i].toLowerCase())) {
                output.innerHTML += words[i] + " to " + wordAlternatives[words[i].toLowerCase()] + "<br>";
              }
            }
          };
    
          reader.readAsText(file);
        } else {
          output.innerHTML = "No file selected.";
        }
  }
  