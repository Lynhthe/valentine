document.getElementById('yesButton').addEventListener('click', function() {
    let responseDiv = document.getElementById('response');
    
    responseDiv.innerHTML = "";
    responseDiv.classList.add('fade-in');

    // Yandere love letter
    let yandereParagraph = document.createElement('p');
    yandereParagraph.classList.add('yandere-text');
    yandereParagraph.innerHTML = `
        You said yes... You really said yes... 💕  
        Oh, my love, you belong to me now.  
        You don’t understand just how long I’ve waited for this, how many nights I’ve stayed awake, 
        imagining this moment, us, together, forever.  
        
        You’re mine now. Every thought you have, every word you speak, every breath you take… it’s all for me, right?  
        No one else can have you. No one else can even look at you the way I do.  
        
        If someone dares to take you away from me, I don’t know what I’ll do… but I’ll make sure they regret it. 😊  
        
        But don’t worry, my love. You don’t need anyone else. I’ll protect you.  
        I’ll love you more than anyone ever could.
        And you’ll never leave me, right? You’d never betray me… right?  
        
        Let’s be together forever and ever. 💖  
    `;

    responseDiv.appendChild(yandereParagraph);
});

// "No" button runs away before disappearing forever
let noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    
    noButton.style.transition = "left 0.5s ease-out, top 0.5s ease-out"; // Slower movement
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

noButton.addEventListener('click', function() {
    let responseDiv = document.getElementById('response');
    
    noButton.remove();
    responseDiv.classList.add('glitch');
    
    let count = 0;
    let interval = setInterval(() => {
        responseDiv.innerHTML += " I love you";
        count++;
        if (count > 50) {
            clearInterval(interval);
        }
    }, 50);
});
