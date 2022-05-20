let inputText=document.getElementById("inputs");
let charCount=document.getElementById("char-count");
let wordCount=document.getElementById("word-count");

inputText.addEventListener('input',()=>{
    charCount.textContent=inputText.value.length;
    //console.log(charCount.textContent);

    let txt=inputText.value.trim();
    //console.log(txt);

    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
