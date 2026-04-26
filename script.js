let browserInfo = { 
    appName: navigator.appName, 
    appVersion: navigator.appVersion, 
    userAgent: navigator.userAgent, 
    platform: navigator.platform, 
    language: navigator.language, 
    cookieEnabled: navigator.cookieEnabled, 
    onLine: navigator.onLine 
}; 
 
for (let key in browserInfo) { 
    localStorage.setItem(key, browserInfo[key]); 
} 
 
let storageBlock = document.getElementById("storageInfo"); 
storageBlock.innerHTML = ""; // Очищаємо початковий текст
 
for (let i = 0; i < localStorage.length; i++) { 
    let key = localStorage.key(i); 
    let value = localStorage.getItem(key); 
 
    storageBlock.innerHTML += "<b>" + key + "</b>: " + value + "<br><br>"; 
} 
 
// Заміни число 10 на свій варіант!
// Заміни число 10 на свій варіант!
fetch("https://jsonplaceholder.typicode.com/posts/10/comments") 
    .then(function(response) { 
        return response.json(); 
    }) 
    .then(function(comments) { 
 
        let commentsContainer = document.getElementById("commentsContainer"); 
        commentsContainer.innerHTML = ""; // Очищаємо текст завантаження
 
        // Створюємо масив з нашими українськими відгуками
        let ukrComments = [
            "Чудове портфоліо!.",
            "Гарний дизайн та чистий код. Продовжуй в тому ж дусі!",
            "Дуже цікава реалізація перемикання тем та роботи з формами.",
            "Швидко вчиться та використовує сучасні підходи у веб-розробці."
        ];

        let ukrNames = ["Олександр", "Марія", "Дмитро", "Олена", "Андрій"];

        for (let i = 0; i < comments.length; i++) { 
            // Підставляємо українські імена та тексти по колу
            let authorName = ukrNames[i % ukrNames.length];
            let commentText = ukrComments[i % ukrComments.length];

            commentsContainer.innerHTML += 
                "<div class='comment'>" + 
                "<b>Користувач: </b>" + authorName + "<br><br>" + 
                commentText + 
                "</div>"; 
        } 
    });
 
let modal = document.getElementById("feedbackModal"); 
let closeModal = document.getElementById("closeModal"); 
 
setTimeout(function() { 
    modal.style.display = "block"; 
}, 60000); 
 
closeModal.onclick = function() { 
    modal.style.display = "none"; 
}; 
 
window.onclick = function(event) { 
    if (event.target == modal) { 
        modal.style.display = "none"; 
    } 
}; 
 
let themeButton = document.getElementById("themeToggle"); 
 
function setThemeByTime() { 
    let hour = new Date().getHours(); 
 
    if (hour >= 7 && hour < 21) { 
        document.body.className = "light-theme"; 
    } else { 
        document.body.className = "dark-theme"; 
    } 
} 
 
setThemeByTime(); 
 
themeButton.onclick = function() { 
    if (document.body.className == "light-theme") { 
        document.body.className = "dark-theme"; 
    } else { 
        document.body.className = "light-theme"; 
    } 
};