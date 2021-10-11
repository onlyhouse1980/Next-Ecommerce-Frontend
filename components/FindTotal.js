const findTotal = function(){
    let arr = document.getElementsByName('greaterThan');
    var tot=0;
    for(var i=0;i<arr.length;i++){
      if(parseInt(arr[i].value))
        tot += parseInt(arr[i].value);
    }
    document.getElementById('Anal').value = "$" + tot;
  }