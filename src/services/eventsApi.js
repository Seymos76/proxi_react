import axios from "axios";

function setLocalEvents(events) {
    //setLoading(true);
    const today = new Date(Date.now()).toLocaleDateString();
    const localDate = JSON.parse(localStorage.getItem('today'));
    if (localDate !== today) {
        localStorage.removeItem('todayEvents');
        localStorage.removeItem('today');
        //const events = await getTodayEvents();
        if (events?.length > 0) {
            localStorage.setItem('today',JSON.stringify(today));
            localStorage.setItem('todayEvents',JSON.stringify(events));
            //setLoading(false);
        } else {
            //setLoading(false);
        }
    }
}

function syncLocalEvents(){
    const today = new Date(Date.now()).toLocaleDateString();
    const localDate = JSON.parse(localStorage.getItem('today'));
    if (!localStorage.getItem('todayEvents') || today !== localDate) {
        //await setLocalEvents();
    }
}

async function fetchTodayEvents() {
    return await axios
        .get('https://www.grotte-cerdon.com/api/eventdates/bystart/today')
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(err => {
            console.log('err: ',err.stack || err);
        });
}

export default {
    syncLocalEvents,
    fetchTodayEvents
}