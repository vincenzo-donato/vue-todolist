//AZIONE: inizialiazzo il codice per il supporto di Vue js 
let app = new Vue({

    //AZIONE: richiamo il contenitore a cui voglio applicare Vue js 
    el: '#container',
    
    //AZIONE: assegno le var e valori
    data:{
        nomiShowRoom: ['jeans-normal-size','jeans-skinny','jeans-strappo','t-shirt-nera','t-shirt-red','t-shirt-personalizzata'],
        carrello: [],
        preferiti: [],
        classAdd: 'remove-active',
        classAddFavorite: 'remove-active',
        newClothing: '',
    },

    //AREA AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento
    methods:{

        // AZIONE: Inserimento di @click su testo show-room per aprire\chiudere la suddetta finestra 
        openShowRoom(){
            if(this.classAdd == 'remove-active'){
                this.classAdd = 'active'
            }
            else{
                this.classAdd = 'remove-active'
            }
        },

        // AZIONE: Inserimento di @click su Icons preferita per aprire\chiudere la suddetta finestra 
        openFavorite(){
            if(this.classAddFavorite == 'remove-active'){
                this.classAddFavorite = 'active'
            }
            else{
                this.classAddFavorite = 'remove-active'
            }
        },

        // AZIONE: Inserimento di @click su Icons Add per aggiungere l'elemento input al carrello controllo if 
        addElement(){
            if(!this.nomiShowRoom.includes(this.newClothing)){
                alert('Attenzione caro cliente, non abbiamo questo tipo di prodotto. Ricontrolla la Show-Room');
            }
            else if(this.carrello.includes(this.newClothing)){
                alert('Attenzione caro cliente, questo abbigliamento è gia stato inserito... Tutta via puoi aggiungere altri oggetti direttamente dal carrello tramite la casella numerica');
                this.newClothing = '';
            }
            else{
                this.carrello.push(this.newClothing);
                this.newClothing = '';
            }
        },

        // AZIONE: Inserimento di @click su Icons heart per inserimento lo spostamento di un'elemento ad un'altra array
        addElemenFavorite(index){
            this.preferiti.push(this.carrello[index]);
            this.carrello.splice(index,1);
        },

        // AZIONE: Inserimento di @click su Icons delete(close) per cancellare l'elemento dal carrello
        removeElement(index){
            this.carrello.splice(index,1);
        },

        // AZIONE: Inserimento di @click su Icons heart per aggiungere tutti gli elementi al preferiti
        addAllElementPreferiti(){
            this.carrello.forEach((element) => {
                this.preferiti.push(element);
            });
            this.carrello.splice(0);
        },
        
        // AZIONE: Inserimento di @click su Icons trash per eliminare tutti gli elementi del carrello
        deleteAllElement(){
            this.carrello.splice(0);
        },

        // AZIONE: Inserimento di @click su elemento lista per modificarlo
        modifyElement(index){
            this.newClothing = this.carrello[index];
            this.carrello.splice(index,1);
        },

        // AZIONE: Inserimento di @click su Icons delete(close) per cancellare l'elemento dai preferiti
        deleteElement(index){
            this.preferiti.splice(index,1);
        },

        // AZIONE: Inserimento di @click su Icons restore per aggiungere al carrello l'elemento dai preferiti
        restoreElement(index){
            this.carrello.push(this.preferiti[index]);
            this.preferiti.splice(index,1);
        },

        // AZIONE: Inserimento di @click su tasto per svuotare i preferiti
        emptyFavorite(){
            this.preferiti.splice(0);
        },

        // AZIONE: Inserimento di @click su tasto per rimuovere tutti gli elementi dai preferiti e aggiungerli al carrello
        restoreAllElement(){
            this.preferiti.forEach((element) => {
                this.carrello.push(element);
            });
            this.preferiti.splice(0);
        },

        // AZIONE: Inserimento di @click su tasto conferma-ordine 
        confirmPl(){
            if(this.carrello.length == 0){
                alert('Che vuoi comprare? Niente....');
            }
            else{
                alert('Ordine confermato');
                this.carrello.splice(0);
            }
        }

    }
    //FINE AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento

});
//FINE AZIONE: inizialiazzo il codice per il supporto di vue js
