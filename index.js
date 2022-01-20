import express from 'express';

const server = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/7/2022", name: "Páscoa" },
    { date: "4/1/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get('/holidays', (req, res) => {

    res.send(holidays);
});
server.get('/is-today-holiday', (req, res) => {
    const hoje = new Date();
    
    const dataAtual = hoje.toLocaleDateString();
       console.log(dataAtual);
    let frase = '';

    for (let i = 0; i < holidays.length; i++) {  
           console.log(holidays[i].date);
        if (holidays[i].date == dataAtual) {            
            frase=`Sim, hoje é ${holidays[i].name}`;
            break;
        } else {
            frase='Não, hoje não é feriado';
        }
    }
    res.send(frase);
});
server.listen(3000);