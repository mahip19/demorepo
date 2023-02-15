function onAlertClickExternal() {
    alert("This is external alert");
  }
  function onConfirmClickExternal() {
    confirm("This is external confirm alert");
  }
  function onPromptClickExternal() {
    prompt("this is external prompt");
  }

  // console.log('value of v', v)
  // let v = 10

  console.log('value of x',x)
  var x = 11


var demofunction = function(){
    console.log("this is demofunction"+", having type -> "+typeof(demofunction))
  }

  demofunction()


  var obj = new Object();
  obj.name = 'jack'
  obj.age = 12
  console.log(obj)


  //-----------------------------------------------------------------------

  var x = [235,34,345,353,53,534,35]
  var y = x.filter(key => (key&1)==0)
document.write(y)

