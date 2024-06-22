const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../models/store');

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { id: users.length + 1, username, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: 'User created successfully' });

    console.log(users);
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

module.exports = { registerUser, loginUser };