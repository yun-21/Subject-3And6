let a = ["1","2","3"]
let b = ["4","5","6"]

for(let i=0; i<a.length || i<b.length; i++){
  if(a[i] !== b[i]){
    return console.log(false)
  }else{
    return console.log(true)
  }
}