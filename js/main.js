// validation for login page
function validateLogin()
{
  var citizenship = document.getElementById("exampleInputcitizenship");
  var email = document.getElementById("exampleInputEmail1");
  var password = document.getElementById("exampleInputPassword1");

  if(citizenship.value.trim()=="")
  {
    alert("Citizenship Number is Must necessary");
    return false;
  }
  else if(email.value.trim()=="" || password.value.trim()=="" )
  {
    alert("No blank values allowed");
    email.style.border = "solid 3px red";
    document.getElementById("lblusher")
    .style.visibility="visible";
    return false;
  }
  else if(password.value.trim()=="")
  {
    alert("Blank Password");
    return false;
  }
  else if(password.value.trim().length<5)
  {
    alert("Password too short");
    return false;
  }
  else
  {
    true;
  }

}


//validation for signup page

function validateSignup()
{
  var name = document.getElementById("exampleInputName");
  var father = document.getElementById("exampleInputName2");
  var mother = document.getElementById("exampleInputName3");
  var text = document.getElementById("text1").value;

  var regx = /^[9]\d{9}$/;
  if(regx.test(text))
  {
    document.getElementById("lbltext").innerHTML="Valid";
    document.getElementById("lbltext").style.visibility="visible";
    document.getElementById("lbltext").style.color="green";
  }
  else
  {
    document.getElementById("lbltext").innerHTML="InValid";
    document.getElementById("lbltext").style.visibility="visible";
    document.getElementById("lbltext").style.color="red";
  }

  var citizenship = document.getElementById("exampleInputcitizenship2");
  var email = document.getElementById("exampleInputEmail2");
  var password = document.getElementById("exampleInputPassword2");

  if(name.value.trim()=="")
  {
    alert("Enter the Name");
    return false;
  }
  else if(father.value.trim()=="")
  {
    alert("Enter the Father's Name");
    return false;
  }
  else if(mother.value.trim()=="")
  {
    alert("Enter the Mother's Name");
    return false;
  }
  else if(citizenship.value.trim()=="")
  {
    alert("Citizenship Number is Must necessary");
    return false;
  }
  else if(email.value.trim()=="" || password.value.trim()=="" )
  {
    alert("No blank values allowed");
    email.style.border = "solid 3px red";
    document.getElementById("lblusher")
    .style.visibility="visible";
    return false;
  }
  else if(password.value.trim()=="")
  {
    alert("Blank Password");
    return false;
  }
  else if(password.value.trim().length<5)
  {
    alert("Password too short");
    return false;
  }
  else
  {
    true;
  }

}






// script.js

// Sample data for election cards and candidates (replace with actual data)
const elections = [
  { name: "Present Election", date: "September 28, 2023" },
  { name: "Upcoming Election", date: "October 15, 2023" },
  { name: "Other Election", date: "November 5, 2023" }
];

const candidates = [
  {
      name: "Candidate 1",
      age: 35,
      party: "Party A",
      education: "Bachelor's in Political Science",
      // Add more candidate details as needed
  },
  {
      name: "Candidate 2",
      age: 42,
      party: "Party B",
      education: "Master's in Economics",
      // Add more candidate details as needed
  }
  // Add more candidate objects as needed
];

// Function to populate election cards
function populateElectionCards() {
  const electionCards = document.getElementById("election-cards");

  elections.forEach((election, index) => {
      const card = document.createElement("div");
      card.className = "card mb-3";
      card.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${election.name}</h5>
              <p class="card-text">Date: ${election.date}</p>
              <button class="btn btn-primary" onclick="showCandidateDetails(${index})">Vote Now</button>
          </div>
      `;
      electionCards.appendChild(card);
  });
}

// Function to show candidate details
function showCandidateDetails(candidateIndex) {
  const candidateDetails = document.getElementById("candidate-details");
  const candidateInfo = document.getElementById("candidate-info");

  // Populate candidate information
  const candidate = candidates[candidateIndex];
  candidateInfo.innerHTML = `
      <div class="col-md-4">
          <p><strong>Name:</strong> ${candidate.name}</p>
          <p><strong>Age:</strong> ${candidate.age}</p>
          <p><strong>Party:</strong> ${candidate.party}</p>
          <p><strong>Education:</strong> ${candidate.education}</p>
      </div>
      <!-- Add more candidate details here -->
  `;

  // Show the candidate details panel and hide election cards
  candidateDetails.classList.remove("d-none");
  document.getElementById("election-cards").style.display = "none";
}

// Initialize the page
populateElectionCards();


// ...

// Function to handle the "Vote" button click
function handleVoteButtonClick() {
  // Perform vote submission logic here (you can add your own logic)

  // Show the success modal
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();
}

// Initialize the page
populateElectionCards();

// Attach the "Vote" button click event handler
document.getElementById("voteButton").addEventListener("click", handleVoteButtonClick);

// ...

// ****************************************************
// Thank You Popup Notification
// ****************************************************
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})






