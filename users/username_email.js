
const username_email = (req, res) => {

    let username_and_email = "";
    console.log("username_email running");
    try {
        for (i = 0; i < req.body.results.length; i++) {

            username_and_email += req.body.results[i].login.username + " | " + req.body.results[i].email + "\n";
        }
        // console.log(username_and_email);
        res.status(200).send(username_and_email);

    } catch (err) {
        console.log(err);
        res.send(err);
    }

}

module.exports = username_email;