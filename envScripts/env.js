require('dotenv').config();

for (let i = 0; i < process.env.CICLES; i++) {
    let message = "";
    for(let i = 0; i < process.env.COLUMNS; i++){
        message = message + process.env.MESSAGE + "    ";
    }
    console.log(message);
}