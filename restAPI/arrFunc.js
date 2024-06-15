/**
 * 
 * @param {data} data forEach문 돌릴 매개변수 
 * @param {array} array 새로운 배열 매개변수 
 * @param {num} num 반복문으로 돌릴 인덱스번호 
 */
const arrPush = (data, array, num) => {
    data.forEach((element) => {
        array.push(element[num])
    })
}