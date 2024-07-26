// Neobutton Colouring
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.neobutton a').forEach(function(element) {
        var bgColor = element.getAttribute('data-bg');
        var fgColor = element.getAttribute('data-fg');
        if (bgColor) {
            element.style.setProperty('--tooltip-bg-color', bgColor);
        }
        if (fgColor) {
            element.style.setProperty('--tooltip-fg-color', fgColor);
        }
    });
});



// For Firebase JS SDK v7.20.0 and later, measurementId is optional


document.addEventListener('DOMContentLoaded', function() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAirJ3nWPASwoDY29lbNFGjTCRxwBW2qos",
        authDomain: "echo-vr-b9ebe.firebaseapp.com",
        databaseURL: "https://echo-vr-b9ebe-default-rtdb.firebaseio.com",
        projectId: "echo-vr-b9ebe",
        storageBucket: "echo-vr-b9ebe.appspot.com",
        messagingSenderId: "501299409537",
        appId: "1:501299409537:web:ec63d21335cdb2a5921380",
        measurementId: "G-4F2VC90750"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    function isQuestBrowser() {
        const userAgent = navigator.userAgent;
        return /Quest( 2| Pro| 3)?/.test(userAgent);
    }

    function updateIndicator(isQuest) {
        const indicator = document.getElementById('indicator');
        if (isQuest) {
            indicator.style.backgroundColor = 'green';
        } else {
            indicator.style.backgroundColor = 'red';
        }
    }

    function increaseCounter() {
        const counterRef = database.ref('counter');
        counterRef.transaction((currentValue) => {
            return (currentValue || 0) + 1;
        });
    }

    function displayCounter() {
        const counterRef = database.ref('counter');
        counterRef.on('value', (snapshot) => {
            const counterValue = snapshot.val();
            document.getElementById('counter-display').innerText = counterValue || 0;
        });
    }

    const onQuest = isQuestBrowser();
    updateIndicator(onQuest);
    if (onQuest) {
        console.log('User is on a Quest headset');
        increaseCounter();
    } else {
        console.log('User is not on a Quest headset');
    }

    displayCounter();
});