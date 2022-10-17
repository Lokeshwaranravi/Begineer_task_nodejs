const example_data = require("../Example_data.json");

const login = (req, res) => {

    try {
        const { username, password } = req.body
        if (!username || !password) {

            res.send("username 0r password not be null..!")
        } else {

            for (i = 0; i < example_data.results.length; i++) {
                if (example_data.results[i].login.username == username && example_data.results[i].login.password == password) {

                    // console.log("login successful");
                     delete example_data.results[i].login;
                    res.status(200).send(example_data.results[i]);
                    break;
                }
                else if (example_data.results[i].login.username != username && example_data.results[i].login.password != password) {
                }
                else {
                    res.status(200).send("username or password is wrong..!");
                }
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = login;
