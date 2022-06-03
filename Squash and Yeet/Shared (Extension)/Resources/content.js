browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});


setInterval(()=>{
    var el;
    
    el = document.querySelector('.btn-group-squash');
    if (el != null){
        el.textContent = 'Squash and Yeet';
    }
    
    el = document.querySelector('[value="squash"]').querySelector('span');
    if (el != null){
        el.textContent = 'Squash and yeet';
    }
    
    el = document.querySelector('[value="squash"]').querySelector('.description');
    if (el != null){
        el.textContent = el.textContent.replace('added to', 'yeeted into').replace('commit in the base branch', 'commit and yeeted into the base branch');
    }
    
    el = document.querySelector('.js-merge-commit-button[value="squash"]')
    if (el != null){
        el.textContent = el.textContent.replace('uash and merge', 'uash and yeet');
    }
}, 250);
