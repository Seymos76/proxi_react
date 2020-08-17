window.addEventListener("load", function() {
    let installButton = document.getElementById("installButton");
    let installLoader = document.getElementById("loader");
    const { engine, platform } = bowser.getParser(navigator.userAgent).getResult();
    const browserEngine = engine.name;
    // get current platform type
    const isMobile = platform.type === 'mobile';
    const isTablet = platform.type === 'tablet';

    if (localStorage.getItem('data_saved')) {
        console.log('application is installed, ready to serve or update !');
    } else {
        if (isMobile || isTablet) {
            // check if serviceWorker feature is available
            if ('serviceWorker' in navigator) {
                // console.log('serviceWorker is supported');
                if (installLoader) {
                    console.log('installLoader is ok:',installLoader);
                    showElement(installLoader);
                }

                // check browser engine for the a2hs behavior
                const isChrome = browserEngine === "WebKit" || browserEngine === "Blink";
                // const isFirefox = browserEngine !== "WebKit" && browserEngine !== "Blink" && browserEngine === "Gecko";

                // if browser engine is not webkit or blink, just return
                if (isChrome) {
                    // if browser engine is webkit or blink, create var to store native install prompt event
                    var deferredPrompt;

                    // listen to native install prompt event
                    window.addEventListener('beforeinstallprompt', function(beforeInstallPromptEvent) {
                        // capture native install prompt event
                        beforeInstallPromptEvent.preventDefault();
                        console.log('before install prompt event:',beforeInstallPromptEvent);
                        deferredPrompt = beforeInstallPromptEvent;
                        // show install button
                        hideElement(installLoader);
                        showElement(installButton);
                        // console.log('install button shown');
                    });

                    // listen to install button click
                    installButton.addEventListener('click', function (clickInstallEvent) {
                        // console.log('install button clicked');
                        // hide install button
                        hideElement(installButton);
                        if(!deferredPrompt) {
                            // console.log('no prompt event');
                            return;
                        }
                        // prompt install event
                        deferredPrompt.prompt();

                        // wait for install event Promise
                        deferredPrompt.userChoice.then(
                            (choiceResult) => {
                                if(choiceResult.outcome === "accepted") {
                                    // console.log("User accepted A2HS");
                                    deferredPrompt = null;
                                } else {
                                    // console.log("User dismissed A2HS");
                                    showElement(installButton);
                                }
                            }
                        );
                    });
                } else {
                    // hideElement(installLoader);
                    // console.log('it is firefox !');
                }
            } else {
                console.log('Service Worker is not supported by browser.');
            }
        } else {
            alert("Pour installer ce guide audio, merci d'ouvrir ce site sur votre mobile.");
        }
    }
});

function showElement(element) {
    // console.log(`element must be shown`);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}

function hideElement(element) {
    // console.log('element must be hidden');
    if(!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}


