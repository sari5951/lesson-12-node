// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const usersData = require('../data/user.json');

// const secretKey = 'sary'; 

// const login = (req, res) => {
//     const { username, password } = req.body;
//     const user = usersData.users.find(u => u.username === username);
    
//     if (!user || !bcrypt.compareSync(password, user.password)) {
//         console.log("hjhj");
//         return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
//     res.json({ token });
// };

// const signup = (req, res) => {
//     const { username, password, name, idNumber } = req.body;
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     usersData.users.push({ username, password: hashedPassword, name, idNumber });
//     // Save the updated users data to the JSON file
//     // You can use fs module to write to the file
//     res.json({ message: 'User registered successfully' });
// };

// module.exports = {
//     login,
//     signup
// };
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../modules/user'); 

const secretKey = '1334'; 

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
};

const signup = async (req, res) => {
    const { username, password, name, idNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const newUser = new UserModel({ username, password: hashedPassword, name, idNumber });
        await newUser.save();
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

module.exports = {
    login,
    signup
};
