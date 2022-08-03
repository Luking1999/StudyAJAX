// https://jsonplaceholder.typicode.com/
var xhr = new XMLHttpRequest()

xhr.onreadystatechange == function(){
    if(xhr.readyState == 4){
        console.log(xhr)
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1")

xhr.send()