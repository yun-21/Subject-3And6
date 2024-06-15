/**
 * 
 * @param {*} id 객체 번호 값 
 * @param {*} title 객체 제목 값
 * @param {*} content 객체 내용 값
 * @returns 
 */
const Make = (id, title, content) => {
    const allData = {
        번호: id,
        제목: title,
        내용: content
    }
    return JSON.stringify(allData)
}