import postgres from 'postgres';

export const sql = postgres({
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "Fla2x1Flu!",
    database: "shop"
})