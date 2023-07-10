async function readTxtFile(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const content = await response.text();
            displayContent(content);
        } else {
            console.error("Error fetching the TXT file:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error fetching the TXT file:", error);
    }
}

function displayContent(content) {
    const txtContentElement = document.getElementById("txt-content");
    txtContentElement.textContent = content;
}

const txtFileUrl = "https://your-github-pages-url.com/path/to/your/txt/file.txt";
readTxtFile(txtFileUrl);
