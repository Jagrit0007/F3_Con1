document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const errorElement = document.getElementById('error');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            errorElement.style.visibility = 'hidden';
            updateCounter();
        } else {
            errorElement.style.visibility = 'visible';
        }
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    function updateCounter() {
        counterElement.innerHTML =`Your current count is: ${count}`;
        clearButton.style.display = count > 1 ? 'block' : 'none';
    }
});
