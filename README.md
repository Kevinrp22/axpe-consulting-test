## Ejercicio 1

```js
//PSEUDOCÓDIGO
class RegistederedUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;
    this.services.forEach((service) => total += service.getPrice());
    return total;
  }
}

class Service {
  MultimediaContent multimediaContent;  

  getFullPrice(){
    /* premiumPrice es una método de MultimediaContent que retorna un método por ejemplo
    getAdditionalFee() de la clase PremiumContent (heredada) */
    let premiumPrice = this.multimediaContent.premiumPrice()
    let price = 0

    if (premiumPrice) price += premiumPrice

    return this.getServicePrice()
  }

  getServicePrice(){
    // Cada hijo heredado establecerá un precio
  }
}

/*  El principal error a largo plazo es que al tener
  muchos condicionales, el código puede volverse inmantible, que pasa si añadimos
  un nuevo servicio? volvemos a hacer un nuevo else if/if? No.

  Lo correcto aquí desde mi punto de vista sería aplicar la herencia con polimorfismo. En la 
  clase Service tendría que haber un método que te devuelva el precio del contenido multimedia
  que el hijo heredado habrá establecido en su clase.

  Aislamos las funcionalidades en sus respectivas funciones,
  getTotal() de RegisteredUser simplemente llama al método del servicio sin saber como se hace.

  Ahora podemos añadir nuevos servicios sin que nuestro código dependa de ser modificado.

*/
```
## Ejercicio 2

Se ha usado json-server para simular un servidor api por lo que tendremos que ejecutarla junto con el front

1. ```npm install``` para instalación de dependencias
2. ```npm run server``` para ejecutar el servidor api
3. ```npm run start``` para ejecutar la aplicación

#### Librerías utilizadas:
- Redux ToolKit
- React Router Dom
- Axios

#### Datos importantes:
- Se ha cumplido todos los requisitos exepto la parte de los tests, hubieron dificultades a la hora de mockear redux y el uso de enzyme. 
- Además de poder crear meetups, se puede eliminar y editar. 
- Como no existe una base de datos con relaciones, al editar o eliminar se ha hecho métodos para que sus funciones se hagan en ambas "tablas" del fichero .json. 
Evidentemente en un caso real, esto no sería necesario ya que se podría configurar en la base de datos si al editar o eliminar cambie en todos los relacionados
