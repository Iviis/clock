var hour = document.getElementById('hour')
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var date = document.getElementById('date')

function main(){
  var test = new Date()
  console.log(test)
  console.log(test.getTime())
  var timer = setInterval(update, 1000)
}

function update(){
  var now = new Date()
  
  var h = String(now.getHours())
  var m = String(now.getMinutes())
  var s = String(now.getSeconds())
  
  //h = '14'
  
  if (Number(h) >= 19 || Number(h) <= 6){
    //noite
    var c1 = '#001334'
    var c2 = '#000215'
  } else if (Number(h) >= 13){
    //tarde
    var c1 = '#EDE88F'
    var c2 = '#b59f3c'
  } else {
    //manhã
    var c1 = '#2BFFFA'
    var c2 = '#2B99FF'
  }
  
  document.body.style.backgroundImage = `linear-gradient(120deg, ${c1}, ${c2})`
  
  h = h.length ==1 ? '0' + h : h
  m = m.length ==1 ? '0' + m : m
  s = s.length ==1 ? '0' + s : s
  
  
  hour.innerHTML = h + '<p>hour</p>'
  min.innerHTML = m + '<p>min</p>'
  sec.innerHTML = s + '<p>sec</p>'
  
  date.innerHTML = `${now.getUTCDay()}  /  ${now.getMonth()+1}  /  ${now.getFullYear()}`
}
