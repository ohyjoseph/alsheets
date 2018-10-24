//Create a function that limits the current amount of running asynchronous functions
//to a specified number at a time. If one is complete, run the next async function
//that was called
//After running queued functions face problem of not running more queued functions.
//Solve problem by queueing up returnFunction instead of the actual function.
function promiseLimiter(cb, limit) {
  const queue = []; let numRunning = 0;
  // CANNOT declare returnFunction using arrow syntax because it makes 
  //the arguments object reference promiseLimiter and not itself for some reason
  function returnFunction() {
    if (numRunning < limit) {
      numRunning++;
      return cb.apply(null, arguments).then((results) => {
        numRunning--;
        if (queue.length) {
          queue.shift()();
          //Because queue contains returnFunction binded functions 
          //will continiously call queued functions
          console.log('REMOVED FROM QUEUE', queue.length);
        }
        return results;
      });
    } else {
      queue.push(returnFunction.bind(null, ...arguments));
      //Binding returnFunction to essentially cause recursion
      console.log('ADDED TO QUEUE', queue.length)
    }
  }
  return returnFunction;
}
let totalRuns = 0; //only used to test solution
function promiseFunction(a, b) { //this function can be any promise-based function
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(a, b, 'TOTALRUNS', ++totalRuns);
      resolve(`RESOLVE ${a}`);
    }, 500);
  });
}
