let button = document.querySelector('#start-button');
let output = document.querySelector('#output');

button.addEventListener('click', () => {
    // Erzeugen Sie sich hier ein Promise-Objekt und fuegen die 
    // setTimeout-Funktion in die Funktion, die dem Konstruktor uebergeben wird
    // rufen Sie stets nur resolve auf

    /*
    setTimeout(function() { // <- das hier soll in das Promise-Objekt 
        // "Resolve" diese Url: https://jsonplaceholder.typicode.com/posts/1
    }, 1000);
    */

    // Teil 1:

    // Behandeln Sie die "response" der Promise und geben Sie ein fetch() zurueck
    // darin wird der Wert uebergeben, der "resolved" wurde (die Url)
    // das fetch() ist hier ein GET, Sie muessen deshalb nichts weiter angeben

    // Behandeln Sie nun auch diese "response" des fetch()-Aufrufes indem Sie
    // die response als JSON-Daten zurueckgeben (json())

    // die JSON-Daten haben die Form: 
    //{
    // "userId": 1,
    // "id": 1,
    // "title": "sunt aut facere repellat provident  
    //occaecati excepturi optio reprehenderit",
    // "body": "quia et suscipit\nsuscipit recusandae
    // consequuntur expedita et cum\nreprehenderit 
    // molestiae ut ut quas totam\nnostrum rerum est 
    // autem sunt rem eveniet architecto"
    // }

    // Behandeln Sie diese JSON-Daten, indem Sie den Wert von "title" in das 
    // "output"-Element schreiben (output.textContent =  data.title;)  

    // Teil 2:

    // Wiederholen Sie diese Uebung mit einem POST request an 
    // diese url: https://jsonplaceholder.typicode.com/posts

    // dazu müssen Sie nun die Methode dem fetch()-Aufruf angeben
    // ausserdem muss fuer headers jetzt auch der Content-Type und Accept
    // angegeben werden (jeweils 'application/json')

    // Erstellen Sie ein JSON fuer den body, welches die Eigenschaften 'body', 'title' und 'userId' enthält. Der Wert fuer 'id' wird im Backend erzeugt
    // greifen Sie auf einen oder mehrere Werte zu und uebergeben Sie sie 
    // an das output-Element

    // Teil 3:

    // Schauen Sie sich die Response an, wenn die URL nicht korrekt ist, z.B. https://jsonplaceholder.typicode.com/post
    // Haben Sie eine Idee, wie Sie mit diesem fehler umgehen koennen und an ein catch() weiterleiten?
    // Versuchen Sie auch einmal ein reject im timeout aufzurufen
});