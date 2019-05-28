/**
 * Author: Jean-Marc Rakotoarisoa
 * Created: 5/28/19
 *
 *
 *
 */

export class View {
     constructor(_$container) {
         this.$container = _$container;
     }

     handle() {
         throw new Error('Class extending View must implement its handle() method');
     }

     static getInstance() {
         throw new Error('Class extending View must implement its getInstance() method');
     }
}
