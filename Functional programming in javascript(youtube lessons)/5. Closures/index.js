/**
 * Created by i.dobrovolsky on 1/12/2016.
 */


//Basic example how closures work
function sendRequest(){
    let requestId = '123',
        apiUrl = 'http://example.com';

    fetch(apiUrl)
        .then(
            (response) =>  {
                //This function has references to the outer scope
                console.log(`Request ${requestId} returned ${response}!`);
            }
        )
}