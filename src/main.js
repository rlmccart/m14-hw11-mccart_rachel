let forecast = {"coord":{"lon":-86.5,"lat":30.39},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":278.9,"pressure":1018,"humidity":70,"temp_min":276.45,"temp_max":282.05},"visibility":16093,"wind":{"speed":3.1,"deg":320},"clouds":{"all":1},"dt":1543283940,"sys":{"type":1,"id":649,"message":0.0034,"country":"US","sunrise":1543321316,"sunset":1543358716},"id":4178775,"name":"Pensacola","cod":200}; 

const weatherWrapper = document.getElementByTagName('span');

const currentWeather = document.createTextNode(forecast.weather[2].description);

weatherWrapper.appendChild(currentWeather);