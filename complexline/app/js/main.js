$(document).ready(function() {
    var configs = {
        selector: "body div#chart",
        height: 400,
        width: 800
    };
    d3.json("data/data.json", function(err, data) {
        if (err) {
            console.error(err);
            alert(err.message);
        }
        ComplexLine(data, configs);
    });
});
