export function showElement(element) {
    // console.log(`showing`);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        // console.log('shown');
    }
}

export function hideElement(element) {
    console.log('hiding');
    if(!element.classList.contains('hidden')) {
        element.classList.add('hidden');
        // console.log('hidden');
    }
}

