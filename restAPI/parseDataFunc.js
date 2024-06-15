/**
 * 
 * @param {*} parse 매개변수 길이만큼 반복한다. 
 * @returns 매개변수들을 새로운 배열에 집어넣음.
 */
const parseDataFunc = (parse) => {
    let DataArr = [];
    for (let i = 0; i < parse.length; i++) {
        DataArr.push(Object.values(parse[i]));
    }
    return DataArr
}