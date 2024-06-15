const div = document.getElementById("div");
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const parseData = JSON.parse(xhr.response);


      const idArr = [];
      const titleArr = [];
      const contentArr = [];
      const id = arrPush(parseDataFunc(parseData), idArr, 1)
      const title = arrPush(parseDataFunc(parseData), titleArr, 2)
      const content = arrPush(parseDataFunc(parseData), contentArr, 3)

      const resultArr = [];
      for (let i = 0; i < idArr.length; i++) {
        resultArr.push(`<div style="border-radius:5px; background-color:lightblue;"><p style="text-align:center">${id[i]}번</p><p>제목 : ${title[i]}</p><p>내용 : ${content[i]}</p></div>`);
      }
      div.innerHTML = resultArr.join("")
      console.log(div.children)
      const a = div.children
      const event = (eventType, color) => {
        a.addEventListener(eventType, () => {
          a.style.backgroundColor = color
        })
      }
      event("mouseover", "red")
      event("mouseout", "lightblue")
      // box.addEventListener('mouseover',()=>{
      //   box.style.backgroundColor="red"
      // })
      // box.addEventListener('mouseout',()=>{
      //   box.style.backgroundColor="lightblue"
      // })

    } else {
      console.error("Error", xhr.status, xhr.statusText)
    }
  }
}