document.addEventListener("DOMContentLoaded", function() {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40800,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
        },
        {
            templeName: "Hong Kong China",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 23000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong_kong_china_temple_exterior1.jpeg"
        }
    ];

    const gallery = document.getElementById('temple-gallery');
    const filters = document.querySelectorAll('nav a');

    function createTempleCard(temple) {
        const card = document.createElement('figure');
        card.classList.add('temple-card');
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            </figcaption>
        `;
        return card;
    }

    function displayTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            gallery.appendChild(createTempleCard(temple));
        });
    }

    function filterTemples(filter) {
        let filteredTemples;
        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'home':
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    }

    filters.forEach(filter => {
        filter.addEventListener('click', (event) => {
            event.preventDefault();
            filterTemples(event.target.getAttribute('data-filter'));
        });
    });

    filterTemples('home');

    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });

    document.getElementById('copyright').textContent =
        'Copyright ©️' + new Date().getFullYear() + ' - Last modified: ' + document.lastModified;
});
