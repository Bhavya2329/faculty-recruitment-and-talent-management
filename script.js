const candidates = [
  { name: "Dr. Priya", experience: 10, publications: 5, qualification: "PhD in AI" },
  { name: "Dr. Arun", experience: 4, publications: 2, qualification: "M.Tech in ML" },
  { name: "Dr. Sneha", experience: 7, publications: 4, qualification: "PhD in Data Science" },
  { name: "Dr. Rajesh", experience: 2, publications: 1, qualification: "M.Tech in AI" },
  { name: "Dr. Kavitha", experience: 12, publications: 6, qualification: "PhD in Machine Learning" }
];

function analyzeCandidate(c) {
  if(c.experience >= 9 && c.publications >=4 && c.qualification.includes("PhD")) return "Recommended for Professor";
  else if(c.experience >=6 && c.publications >=3) return "Recommended for Associate Professor";
  else if(c.experience >=3) return "Recommended for Assistant Professor";
  else return "Not Eligible";
}

const outputDiv = document.getElementById("output");
candidates.forEach(c => {
  const decision = analyzeCandidate(c);
  const div = document.createElement("div");
  div.className = "candidate";
  div.innerHTML = `<strong>${c.name}</strong> → ${decision}`;
  outputDiv.appendChild(div);
});
