let tabCount = 0
let activeTab = null

function openTab(){

let url = document.getElementById("url").value

if(!url.startsWith("http")){
url = "https://www.google.com/search?q=" + encodeURIComponent(url)
}

const tabId = "tab" + tabCount++
const frameId = "frame" + tabId

/* create tab */

const tab = document.createElement("div")
tab.className = "tab"
tab.id = tabId
tab.innerText = "Tab"

tab.onclick = () => switchTab(tabId)

document.getElementById("tabs").appendChild(tab)

/* create frame */

const frame = document.createElement("iframe")
frame.id = frameId

frame.src =
"/api/proxy?url=" + encodeURIComponent(url)

document.getElementById("frames").appendChild(frame)

switchTab(tabId)

}

function switchTab(tabId){

document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))
document.querySelectorAll("iframe").forEach(f=>f.classList.remove("active"))

document.getElementById(tabId).classList.add("active")
document.getElementById("frame"+tabId).classList.add("active")

activeTab = tabId

}