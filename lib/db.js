import mongoose from "mongoose";
const url = process.env.NEXT_PUBLIC_DATABASE_URL
let connection;

const startDb = async () => {
    if(!connection) {
        connection = await mongoose.connect(url)
        return connection;
    }
}
export default startDb;