const  div = document.getElementById("div");
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const parseData = JSON.parse(xhr.response);
      let DataArr = [];
      for (let i = 0; i < parseData.length; i++) {
        DataArr.push(Object.values(parseData[i]));
      }

      const idArr = [];
      const titleArr = [];
      const contentArr = [];
      const id = arrPush(DataArr, idArr, 1)
      const title = arrPush(DataArr, titleArr, 2)
      const content = arrPush(DataArr, contentArr, 3)

      const resultArr = [];
      for (let i = 0; i < idArr.length; i++) {
        resultArr.push(`<div style="border-radius:5px;background-color:lightblue;"><p style="text-align:center">${id[i]}번</p><p>제목 : ${title[i]}</p><p>내용 : ${content[i]}</p></div><br>`);
      }

      div.innerHTML = resultArr.join("")
    } else {
      console.error("Error", xhr.status, xhr.statusText)
    }
  }
}