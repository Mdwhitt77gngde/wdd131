document.addEventListener('DOMContentLoaded', () => {
    function getCurrentYear() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    function getLastModifiedDate() {
        const lastModifiedDate = document.lastModified;
        return lastModifiedDate;
    }

    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = getCurrentYear();
    }

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${getLastModifiedDate()}`;
    }
});
