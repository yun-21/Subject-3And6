const content = document.getElementById("content");
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
      
      arrPush(DataArr,allArr.id, 1)
      console.log(allArr.id)

      // DataArr.forEach((element) => {
      //   idArr.push(element[1]);
      //   titleArr.push(element[2]);
      //   contentArr.push(element[3]);
      // })
      const Make = (title, content) => {
        const id = {
          제목: title,
          내용: content
        }
        return JSON.stringify(id)
      }

      const resultArr = [];
      for (let i = 0; i < titleArr.length; i++) {
        resultArr.push(`<li>${Make(titleArr[i], contentArr[i])}</li><br>`);
      }

      content.innerHTML = resultArr.join("");
      const li = document.getElementsByTagName('li')
      for (let key in li) {
        li[key].style.listStyle = "decimal"
      }

    } else {
      console.error("Error", xhr.status, xhr.statusText)
    }
  }
}