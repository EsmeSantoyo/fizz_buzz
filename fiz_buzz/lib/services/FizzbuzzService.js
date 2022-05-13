class FizzbuzzService {
  static applyValidationInExplorer(explorer){
    if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
      explorer.trick = "FIZZBUZZ";
    } else if(explorer.score % 3 === 0){
      explorer.trick = "FIZZ";
    } else if(explorer.score % 5 === 0){
      explorer.trick = "BUZZ";
    } else{
      explorer.trick = explorer.score;
    }
    return explorer;
  }

  static applyValidationInNumber(score){
    let trick = score;
    if(score % 5 === 0 && score % 3 === 0){
      trick = "FIZZBUZZ";
    } else if(score % 3 === 0){
      trick = "FIZZ";
    } else if(score % 5 === 0){
      trick = "BUZZ";
    }
    return {score: score, trick: trick};
  }  
}

module.exports = FizzbuzzService;