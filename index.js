function introduction(name) {
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log (introductionWithLanguage("Alice", "Javascript"));

console.log(introductionWithLanguage("Bob", "Python" ));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional(`Alice`));

console.log(introductionWithLanguage("Bob", "Python" ));