let rootUrl = 'https://www.fastmock.site/mock/68321b5ea4014eb3d090d6a5c42fcd9a/api';
let myFetch = {
    post(url,body){
        return fetch(rootUrl+url,{
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
    }
}

export {myFetch}