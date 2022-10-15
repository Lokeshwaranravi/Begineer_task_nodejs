
const gender = (req, res) => {
    try {
        let male_counter = 0;
        let female_counter = 0;
        for (i = 0; i < req.body.results.length; i++) {
            if (req.body.results[i].gender == "male") {
                male_counter++;
            } else {
                female_counter++;
            }
        }

        res.status(200).send("Total Male:" + male_counter + "\n" + "Total Female:" + female_counter);

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = gender;