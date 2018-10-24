//Write a function that memoizes the results of an asynchronous function. The asynchronous function takes in parameters and the last parameter is a callback.
//slowFunction/asynchronousFunction is a function that takes n arguments. The last argument is a function in the form of function callback(error, result).
function slowFunction(param1, param2, callback) {
  //Pretend slow function does API call and retrieves and uses data through callback
  setTimeout(() => {
    callback(null, param1 + param2)
  }, 200)
}

function memoize(asynchronousFunction) {
  //First call just to set store object in memory for returned function to use later
  let store = {};
  return function () {
    let arrayArgs = Array.from(arguments);
    let cb = arrayArgs.pop(); //callback function always last argument as specified
    let stringArgs = JSON.stringify(arrayArgs);
    if (store.hasOwnProperty(stringArgs)) {
      cb(null, store[stringArgs]); //
      console.log('USED STORE');
    } else {
      asynchronousFunction(...arrayArgs, (err, data) => {
        //Calling closured asynchronousFunction and using arguments and a 
        //dummy callback just to store data for specific params. 
        //Then run actual callback on retrieved data
        store[stringArgs] = data;
        console.log('STORED NEW INPUT')
        cb(err, data);
      });
    }
  }
}
const fastFunction = memoize(slowFunction);
fastFunction(1, 2, (a) => { });
setTimeout(() => { fastFunction(1, 2, (err, data) => { }) }, 200);
setTimeout(() => { fastFunction(1, 2, (err, data) => { }) }, 400);
setTimeout(() => { fastFunction(11, 21, (err, data) => { }) }, 600);