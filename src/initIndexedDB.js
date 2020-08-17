import {messages} from "./utils/translations";
import {INDEXED_DB_VERSION_DEV, INDEXED_DB_VERSION_PROD} from "./utils/connexion";

// console.log('initIndexedDB');
let request;
// init IndexedDB
if (process.env.REACT_APP_ENV !== 'production') {
    request = indexedDB.open('grottes_cerdon_offline', INDEXED_DB_VERSION_DEV);
} else {
    request = indexedDB.open('grottes_cerdon_offline', INDEXED_DB_VERSION_PROD);
}

let db;

// handle db upgrade
request.onupgradeneeded = function () {
    db = request.result;
    //console.log('onupgradeneeded');

    // init a collection
    const stepStore = db.createObjectStore('visit_steps', { keyPath: 'key' });
    stepStore.createIndex('by_name', 'name', {unique: false});
    stepStore.createIndex('by_key', 'key', {unique: true});
    stepStore.createIndex('by_lang', 'lang', {unique: false});

     for (let messagesKey in messages) {
         // console.log('messagesKey:',messagesKey);
         const steps = messages[messagesKey].VISIT.STEPS;
         steps.map((step, i) => {
             // const audioSrc = step.INDEX !== "!" ? require(`./assets/media/${step.INDEX}_${messagesKey.toUpperCase()}.mp3`) : null;
             const audioSrc = step.INDEX !== "!" ? require(`./assets/media/${step.AUDIO}`) : null;
             const heroImage = step.INDEX !== "!" ? require(`./assets/images/diapo/${step.HERO}`) : null;
             const mapImage = step.INDEX !== "!" ? require(`./assets/images/cartes/${step.MAP}`) : null;
             return stepStore.add({
                 id: step.INDEX,
                 name: step.NAME,
                 title: step.TITLE,
                 description: step.DESCRIPTION,
                 image: heroImage,
                 map: mapImage,
                 audio: audioSrc,
                 key: `${messagesKey}_${step.INDEX}`,
                 lang: messagesKey
             });
         });
        //console.log('result map:',stepResult);
    }
    const audioStore = db.createObjectStore('audio', { keyPath: 'key' });
    audioStore.createIndex('by_key', 'key', {unique: true});
    audioStore.createIndex('by_lang', 'lang', {unique: false});
    for (let messagesKey in messages) {
        const steps = messages[messagesKey].VISIT.STEPS;
        steps.forEach((step, i) => {
            const audioSrc = step.INDEX !== "!" ? require(`./assets/media/${step.INDEX}_${messagesKey.toUpperCase()}.mp3`) : null;
            const audioFile = new File([audioSrc], `${step.INDEX}_${messagesKey.toUpperCase()}.mp3`,{type : 'audio/mpeg'});
            if (step.INDEX !== "!") {
                return audioStore.add({
                    audioSrc: audioSrc,
                    file: audioFile,
                    key: `${step.INDEX}_${messagesKey.toUpperCase()}`,
                    lang: messagesKey
                });
            }
        });
    }
    // console.log('all audio transactions succeed');
}

request.onsuccess = function () {
    db = request.result;
};

request.onblocked = function () {
    // if other tabs opened -> alert to close other tabs
    alert('Merci de fermer les autres fenêtres utilisant l\'application');
};