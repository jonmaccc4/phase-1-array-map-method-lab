function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "what is the constructor oo pattern?",
    "implementing blockchain web API",
    "the test driven development workflow",
    "what is NaN and how can we check for it",
    "what is the difference between stopPropagation and preventDefault?",
    "immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  const capitalizeWord = (word) => {
    const specialCases = {
      "nan": "NaN",
      "jsonp": "JSONP",
      "stoppropagation": "StopPropagation",
      "preventdefault": "PreventDefault",
      "constructor": "Constructor", 
      "oo": "OO" 
    };

    
    if (specialCases[word.toLowerCase()]) {
      return specialCases[word.toLowerCase()];
    }

    
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => capitalizeWord(word)) 
      .join(' '); 
  });
}


console.log(titleCased());