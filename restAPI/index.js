const content = document.getElementById("content");
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const parseData = JSON.parse(xhr.response);
      
      const arr = [];
      parseData.forEach((element) => {
        arr.push(func(element.id, element.title, element.body))
      })
      let rearr = [];
      for (let i = 0; i < 3; i++) {
        rearr.push(Object.values(arr[i]));
      }
      const titleArr = [];
      const contentArr = [];
      rearr.forEach((element) => {
        titleArr.push(element[1]);
        contentArr.push(element[2]);
      })
      const Make = (title, content) => {
        const id = {
          제목: title,
          내용: content
        }
        return JSON.stringify(id)
      }

      const resultArr =[];
      for(let i=0; i<titleArr.length; i++){
        resultArr.push(`<li>${Make(titleArr[i],contentArr[i])}</li><br>`);
      }

      content.innerHTML=resultArr.join("");
      const li = document.getElementsByTagName('li')
      for(let key in li){
        li[key].style.listStyle="decimal"
      }

      } else {
        console.error("Error", xhr.status, xhr.statusText)
    }
  }
}