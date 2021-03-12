const mysql = require('mysql')
async function connectDB() {
    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'lucky1@'
        
        });
        const wait =await connection.query('select * from sample_data.olympic_winners limit 50'
        );console.log(wait)
    } catch (error) {
        console.log(error);
    }
    
}
connectDB();
