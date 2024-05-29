const TRIVIA_API_URL = 'https://opentdb.com/api.php?amount=50'

triv_data = {}
function getTrivia() {

    fetch(TRIVIA_API_URL)
        .then(res => res.json())
        .then(data => triv_data)
    console.log(triv_data)
    return triv_data
}