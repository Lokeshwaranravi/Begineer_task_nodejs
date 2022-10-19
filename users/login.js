const example_data = require("../Example_data.json");

const login = (req, res) => {

    try {
        //initialize username and password value

        const user_information = (example_data.results);
        const { username, password } = req.body;
        if (!username || !password) {

            res.send("username 0r password not be null..!")
        } else {
            // iterate user  inputs
            user_information.forEach((element, index) => {

                if (element.login.username == username && element.login.password == password) {
                    const new_obj = Object.assign({}, element);
                    delete new_obj.login;
                    res.status(200).send(new_obj);

                }
                else if (element.login.username != username && element.login.password != password) {

                } else {

                    res.send("username or psssword is wrong")
                }
            });
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = login;