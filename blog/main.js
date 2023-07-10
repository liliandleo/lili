async function readFileContent(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const content = await response.text();
            displayContent(content);
        } else {
            console.error("获取文件时出错：", response.status, response.statusText);
        }
    } catch (error) {
        console.error("获取文件时出错：", error);
    }
}

function displayContent(content) {
    const fileContentElement = document.getElementById("file-content");
    fileContentElement.textContent = content;
}

const fileUrl = "blog1.txt";
readFileContent(fileUrl);
