browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

const duration = 50;

const interval = setInterval(()=>{
    const el = document.querySelector('.btn-group-squash');
    if (el != null){
        el.textContent = 'Squash and Yeet';
        clearInterval(interval);
    }
}, duration);

const interval2 = setInterval(()=>{
    const el =     document.querySelector('[value="squash"]').querySelector('span');
    if (el != null){
        el.textContent = 'Squash and yeet';
        clearInterval(interval2);
    }
}, duration);


const interval3 = setInterval(()=>{
    const el =     document.querySelector('[value="squash"]').querySelector('.description');
    if (el != null){
        el.textContent = el.textContent.replace('added to', 'yeeted into');
        clearInterval(interval3);
    }
}, duration);
