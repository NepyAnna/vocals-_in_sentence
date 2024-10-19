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

function deleteDuplicity() {
    let inputElement = document.getElementById('sentence_get_undubpicate').value;
    inputElement = inputElement.replace(/[\[\]']/g, '');
    let array = inputElement.split(',').map(item => item.trim());
    let uniqArray = [... new Set(array)];
    console.log(uniqArray);
}
