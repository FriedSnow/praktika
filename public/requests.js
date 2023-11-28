export default function getAllitem(){
    return fetch('/item', {
        method: 'GET'
    }).then(e => e.json())
}