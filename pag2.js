// Función para convertir la temperatura
function convertirTemperatura(temperaturaCelsius) {
    
   // Convertir de grados Celsius a grados Fahrenheit
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
  
    // Convertir de grados Celsius a Kelvin
    var temperaturaKelvin = temperaturaCelsius + 273.15;
  
    // Mostrar los resultados
    document.querySelector(".temperatura-celsius").textContent = temperaturaCelsius;
    document.querySelector(".temperatura-fahrenheit").textContent = temperaturaFahrenheit;
    document.querySelector(".temperatura-kelvin").textContent = temperaturaKelvin;
  }
  
 
  document.querySelector("#convertir").addEventListener("click", function() {
    // Obtener la temperatura introducida por el usuario
    var temperaturaCelsius = document.querySelector("#temperatura-celsius").value;
  
    // Convertir la temperatura
    convertirTemperatura(temperaturaCelsius);
  });
  
  