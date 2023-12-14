/*Implementare un programma che permetta di gestire gli esami di uno studente universitario.

Requisiti

●	implementare classi per gestire studenti, professori, materie ed esami sostenuti
●	per uno studente devono essere memorizzati:
○	nome e cognome
○	data di nascita (come stringa DD/MM/YYYY)
○	email (deve essere univoca tra tutti gli utenti del sistema)
○	numero di matricola
○	esami sostenuti
●	per un professore devono esseri memorizzati:
○	nome e cognome
○	data di nascita (come stringa DD/MM/YYYY)
○	email (deve essere univoca tra tutti gli utenti del sistema)
○	materie insegnate
●	per uno studente deve essere possibile ottenere le seguenti info:
○	nome completo
○	media (maggiorata di 0.25 per ogni lode)
○	voto per uno specifico esame
○	stampa piano di studi (gli esami devono essere ordinati in base alla data in cui sono stati sostenuti)
●	per un professore deve essere possibile ottenere le seguenti info:
○	nome completo
●	il programma deve consentire di elencare la lista di studenti che hanno sostenuto un determinato esame (con relativo voto)

Nota: i costruttori e i setter devono prevedere meccanismi di validazione lì dove possibile

Non è necessario fare persistenza su database.*/

class studente{

    studente(nome,cognome,dataNascità,email,matricola,esamiSostenuti){
        this.nome=nome;
        this.cognome=cognome;
        this.dataNascità=dataNascità;
        this.email=email;
        this.matricola=matricola;
        this.esamiSostenuti=[];
    }

    getNomeCompleto(){
        return nome && cognome;
    }

    sostieniEsami(materia,voto){
        this.esamiSostenuti.push({materia,voto});
    }


    getVotoEsame(materia) {
        esame = this.esamiSostenuti.find((e) => e.materia === materia);
        return esame ? esame.voto : "Esame non sostenuto";
    }

    getMedia(){
        if(this.esamiSostenuti.length===0){
            console.log("Nessun esame sostenuto");
        }
        else{
            let somma=0;

            for(let esame of this.esamiSostenuti){
                somma+=esame;
            }

            media=somma/this.esamiSostenuti.length;

            return media;
        }
    }
    
    stampaPianoStudi() {
        pianoStudiOrdinato = this.esamiSostenuti.sort((a, b) => a.data - b.data);
        let result = '';

        for (let esame of pianoStudiOrdinato) {
            result += `${esame.materia}: ${esame.voto}\n`;
        }
    
        return result;
    }

}

class professore{
    
    professore(nome,cognome,dataNascità,materieInsegnate){
        this.nome=nome;
        this.cognome=cognome;
        this.dataNascità=dataNascità;
        this.materieInsegnate=materieInsegnate;
    }

    getNomeCompleto(){
        return nome && cognome;
    }
}