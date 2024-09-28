import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://user:ikTe4PWKzpO371rS@cluster0.cse49.mongodb.net/todo-app');
    console.log("DB Connected");
}