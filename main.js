      var add = document.getElementById("add");
      var sub = document.getElementById("sub");
      var count = document.getElementById("count");
      var auto_add = document.getElementById("auto_add");
      var auto_sub = document.getElementById("auto_sub");
      var stopp = document.getElementById("stop");
      var x, y;

      add.onclick = () => {
        count.innerHTML++;
      };
      sub.onclick = () => {
        count.innerHTML--;
      };

      function plus() {
        count.innerHTML++;
      }

      auto_add.onclick = () => {
        if(x){
          return false
        }else{
         clearInterval(y);
         x = setInterval(plus, 1000);
        }
      };

      function min() {
        count.innerHTML--;
      }

      auto_sub.onclick = () => {
        if(y){
          return false;
        }else{
           clearInterval(x);
        y = setInterval(min, 1000);
        }
      };

      stopp.onclick = () => {
        clearInterval(x);
        x=null;
        clearInterval(y);
        y=null;
      }
