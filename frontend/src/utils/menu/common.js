export const handleActiveLinkState = (value) => {
    // Accessing the label class
    const labels = document.getElementsByClassName('label');

    // Loop through the label elements
    for (let i = 0; i < labels.length; i++) {
        const item = labels[i];

        // Check if the label contains the span element with text "Blacklist"
        if (item.querySelector('span').innerText === value) {
            // Add the "link-active-exact" class to the label
            item.classList.add('link-active-exact');
        } else {
            // Remove the "link-active-exact" class to the label
            item.classList.remove('link-active-exact');
        }
    }
}