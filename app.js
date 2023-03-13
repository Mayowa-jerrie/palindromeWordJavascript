const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);


      //madam
      //noon
 
      function palindrome(){
            const word = document.querySelector(".input-text").value;
            let len = word.length;

            let start = word.substring(0, math.floor(len / 2)).
            toLowerCase();
            let end = word.substring(len - math.floor(len / 2)).
            toLowerCase();



           alert(end);
      }
