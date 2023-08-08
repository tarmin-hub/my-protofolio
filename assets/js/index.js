const portfolioData = [
  { title: "Proyek 1", description: "deskripsi proyek 1." },
  { title: "Proyek 2", description: "deskripsi proyek 2." },
  { title: "Proyek 3", description: "deskripsi proyek 3." },
];
const portfolioContainer = document.getElementById("portfolioContainer");
portfolioData.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "item";
  projectItem.innerHTML = `
<h2>${project.title}</h2>
<p>${project.description}</p>
`;
  portfolioContainer.appendChild(projectItem);
});

// Section form search
const form = document.querySelector("form");
const item = document.querySelectorAll(".item");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = form.search.value.toLowerCase();
  item.forEach((item) => {
    const projectTitle = item
      .querySelector("h2")
      .textContent.toLocaleLowerCase();
    const projectDescription = item
      .querySelector("p")
      .textContent.toLocaleLowerCase();
    if (
      projectTitle.include(searchTerm) ||
      projectDescription.includes(searchTerm)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
