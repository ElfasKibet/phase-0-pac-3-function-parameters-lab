// Define a function that uses a parameter
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Define a function that uses two parameters
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define a function with a parameter that has a default value
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Export functions for testing (if required)
module.exports = {
  introduction,
  introductionWithLanguage,
  introductionWithLanguageOptional,
};
