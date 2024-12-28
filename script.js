// Example of a countdown timer for urgency (optional)
document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date("2024-12-31T23:59:59").getTime();
    const timerElement = document.createElement('div');
    document.body.appendChild(timerElement);

    setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = deadline - now;

        if (remainingTime <= 0) {
            timerElement.innerHTML = "Offer Expired";
            clearInterval();
        } else {
            const hours = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60)) / 1000);
            const seconds = Math.floor((remainingTime % 1000) / 1000);
            timerElement.innerHTML = `Offer ends in: ${hours}h ${minutes}m ${
