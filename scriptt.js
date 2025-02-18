const repoOwner = "your-username";
const repoName = "your-repo";
const branch = "main"; // Change if needed
const fileListElement = document.getElementById("file-list");

// Fetch file list from GitHub API
async function fetchFiles() {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;
    try {
        const response = await fetch(apiUrl);
        const files = await response.json();
        displayFiles(files);
    } catch (error) {
        console.error("Error fetching files:", error);
    }
}

// Display files as links
function displayFiles(files) {
    fileListElement.innerHTML = "";
    files.forEach(file => {
        if (file.name.endsWith(".html")) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${file.name}" target="_blank">${file.name}</a>`;
            fileListElement.appendChild(listItem);
        }
    });
}

// Search functionality
function searchFiles() {
    const query = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll("#file-list li");
    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
}

// Initialize
fetchFiles();
