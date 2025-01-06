import feach from 'node-fetch';

console.log("Start");
try {
    const rep = await fetch('https://github.com/MicrosoftDocs/node-essentials')
    console.log("statueCode", rep.status);
}
catch(error){
    console.log("Error", error);
}
console.log("end");
