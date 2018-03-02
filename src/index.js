import {sayHello} from './print';

console.log("Hi all..!");
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("content").innerHTML = "whateverK";
});

/*if (module.hot) {
  module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        sayHello();
      })
}*/
