function getSentence() {
    const inputElement = document.getElementById('sentence_get_and_write')
       return console.log(inputElement.value)
}

function searchVocals(sentence) {
    const inputElement = document.getElementById('searchVocals_in_sentence').value
    const vocals_for_search = ['a', 'e', 'i', 'o', 'u'];
    let foundedVocals = [];

    for(let char of inputElement.toLowerCase()) {
        if(vocals_for_search.includes(char)){
            foundedVocals.push(char);
        }
    }
    console.log(foundedVocals)
}

function deleteDuplicity(list) {
    const inputElement = document.getElementById('sentence_get_undubpicate').value
    console.log(inputElement);
    let uniqArray =[...new Set(inputElement)];
    /*let uniqArray = [...new Set(inputElement)];
    Array.from(new Set(inputElement.map(item=>item.trim())));
    */
    console.log(uniqArray)
}

/*Array.from(new Set([1,2,3,4,5,5])) // [1,2,3,4,5]
[...new Set([1,2,3,4,5,5])]  // [1,2,3,4,5]

let uniqArr = Array.from(new Set(arr.map(item=>item.trim())));

const sortArr = arr.filter((it, index) => index === arr.indexOf(it = it.trim()));
*/