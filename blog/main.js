async function readFileContent(url, elementId) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const content = await response.text();
            displayContent(content, elementId);
        } else {
            console.error("获取文件时出错：", response.status, response.statusText);
        }
    } catch (error) {
        console.error("获取文件时出错：", error);
    }
}

function displayContent(content, elementId) {
    const fileContentElement = document.getElementById(elementId);
    fileContentElement.textContent = content;
}

const blog1FileUrl = "blog1.txt";
const blog1ElementId = "blog1-content";
readFileContent(blog1FileUrl, blog1ElementId);
