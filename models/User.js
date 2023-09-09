import { Schema, model } from 'mongoose';

const userSchema = Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, default: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" },
    is_online: { type: Boolean, default: false },
}, {
    timestamps: true
});
const User = model('users', userSchema);
export default User;