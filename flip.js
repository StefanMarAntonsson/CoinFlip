const CoinFlip = async () => {
    const id = "coin";
    const el = document.getElementById(id);
    el.innerHTML = ".....";
    
    // console.log(document.getElementById(id));
    
    await delay(200);
    
    const outcome = Math.round(Math.random());
    if(outcome == 1) {
        el.innerHTML = "HEADS";
    }
    else {
        el.innerHTML = "TAILS";
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));