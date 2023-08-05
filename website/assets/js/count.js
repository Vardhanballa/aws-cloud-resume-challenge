const counter=document.getElementById("number");
async function updataCounter(){
    let response = await fetch("https://h5crrd3nd4iqqaizxd2527wvei0blrgn.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML=`Views ${data}`;
}
updataCounter();