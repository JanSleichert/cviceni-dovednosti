console.log('funguju!');
const questionHTML = prompt("Zadej svoji úroveň znalosti HTML")
const questionCSS = prompt("Zade svoji úroveň znalosti CSS")
const questionJavaScript = prompt("Zade svoji úroveň znalosti JavaScript")

const updateSkill = (id, value) => {
    document.querySelector(`#${id}`).style = `width: ${value}%`
}

const HTML = document.querySelector("#skill01")
HTML.textContent = `${questionHTML} / 100`
//document.querySelector("#skill__progress01").style = `width: ${questionHTML}%`
updateSkill("skill__progress01", questionHTML)

const CSS = document.querySelector("#skill02")
CSS.textContent = `${questionCSS} / 100`
//document.querySelector("#skill__progress02").style = `width: ${questionCSS}%`
updateSkill("skill__progress02", questionCSS)

const JavaScript = document.querySelector("#skill03")
JavaScript.textContent = `${questionJavaScript} / 100`
//document.querySelector("#skill__progress03").style = `width: ${questionJavaScript}%`
updateSkill("skill__progress03", questionJavaScript)