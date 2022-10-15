
const age_between = (req, res) => {
    try {
        let user_counter = 0;
        for (i = 0; i < req.body.results.length; i++) {

            if (req.body.results[i].dob.age > 50 && req.body.results[i].dob.age < 70) {
                user_counter++;
            }

        }
        // console.log("Users between 50 and 70:", user_counter);

        res.status(200).send("Users between 50 and 70:" + user_counter);

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = age_between;