/* PRACTICE */

// function runFiveMiles(){
//     console.log("Go for a five-mile run");
//   }
//   function liftWeights() {
//     console.log("Pump iron");
//   }
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function exerciseRoutine(postRunActivity){
//     runFiveMiles()
//     postRunActivity()

// }

// function morningRoutine(exercise){
//     let breakfast;
//     if (exercise === liftWeights){
//         breakfast = 'protein bar'
//     }else if(exercise === swimFortyLaps){
//         breakfast = 'kale smoothie'
//     }else{
//         breakfast = 'granola'
//     }

//     exerciseRoutine(exercise)

//     return function(){
//         console.log(`Nom nom this ${breakfast} is scrumptious`)
//     }
// }

// function Monday() {
//     morningRoutine(liftWeights)()   
//   }

//   Monday()

// //   function Tuesday() {
// //     exerciseRoutine(swimFortyLaps)
// //   }
  
// //   function Wednesday() {
// //     exerciseRoutine(runFiveMiles)
// //   }
  
// //   function Thursday() {
// //     exerciseRoutine(liftWeights)
// //   }
  
// //   function Friday() {
// //     exerciseRoutine(swimFortyLaps)
// //   }

/* CONCEPTUALIZATION */

function receivesAFunction(cb){
    cb()
}

function greeting (){
    console.log('Im a callback')
}

receivesAFunction(greeting)

const returnsANamedFunction = function (){
    return function named(){
        return 'sth'
    }
}

const returnsAnAnonymousFunction = function(){
    return function(){
        return 'sth'
    }
}



