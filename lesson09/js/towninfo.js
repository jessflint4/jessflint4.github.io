const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const towns = jsonObject['towns'];

        for (let town of towns){

            if (['Preston', 'Soda Springs', 'Fish Haven'].includes(town.name)) {
                let card = document.createElement('section');
                let childdiv = document.createElement('div'); 
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                // I set the classes in java
                card.setAttribute('class', 'townsection');
                h2.setAttribute('class','townname');
                motto.setAttribute('class', 'townmotto');
                founded.setAttribute('class', 'towndetails');
                population.setAttribute('class', 'towndetails');
                rainfall.setAttribute('class', 'towndetails');
                image.setAttribute('class', 'townimage');

                h2.textContent = town.name;
                motto.textContent = town.motto;
                founded.textContent = "Year Founded: " + town.yearFounded;
                population.textContent = "Population: " + town.currentPopulation;
                rainfall.textContent = "Annual Rainfall: " + town.averageRainfall;

                image.setAttribute('src', "images/" + town.photo);            
                image.setAttribute('alt', "picture of: " + h2.textContent);

                childdiv.appendChild(h2);
                childdiv.appendChild(motto);
                childdiv.appendChild(founded);
                childdiv.appendChild(population);
                childdiv.appendChild(rainfall);
                card.appendChild(childdiv);
                card.appendChild(image);

                document.querySelector('div.towninfo').appendChild(card);
            }
        }
    });

