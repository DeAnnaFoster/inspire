function TimeController() {
    var ts = new TimeService();
    var dayPeriod = ' PM';
    var dayMessage = '';
    var timeBase = 0;

    //set the interval in time to repeat then call the function.
    //keep this low. Looks like it interferes with the switch 
    //to time bases (military, etc) 
    var interval = setInterval(function () {
        drawTime();
    }, 2000);

    function getMessage(h, m) {
        var message = '';
        dayPeriod = ' PM';

        //before noon (NI) and after 11:59 PM = morning
        //between noon and 5:59 pm its afternoon
        //after 6 pm (I) and before 12 am (NI) its evening

        if (h >= 0 && h < 12) {
            message = 'Good Morning';
            dayPeriod = ' AM';
            return message;
        }
        if (h >= 12 && h < 18) {
            message = 'Good Afternoon';
            return message;
        }
        if (h >= 18 && (h < 23 && m <= 59)) {
            message = 'Good Evening';
            return message;
        }

        return 'Happy Day';
    }

    this.changeTime = function () {
        if (timeBase == 0) {
            timeBase = 12;
        } else {
            timeBase = 0;
        }
        console.log("Normal Time uses 12: Currently - " + timeBase);
    }

    function drawTime() {
        //get the date and store it. Has a time component.
        var time = new Date();
        var h = time.getHours(); //does it on a 24 hour basis.Already military
        var m = time.getMinutes();
        dayMessage = getMessage(h, m);  //? may not need minutes

        h -= timeBase;

        if (h < 10) { h = '0' + h };
        if (m < 10) { m = '0' + m };

        document.getElementById('clock').innerHTML = (h) + ':' + m + dayPeriod;

        //get name and see if it has been set
        var name = ts.getName();
        if (name != '') {
            var template2 = dayMessage + ', ' + name;
            document.getElementById('message').innerHTML = template2;
        }
    }

    function setMessage() {
        template = `
            <div><form id="theForm" onsubmit="app.controllers.timeController.formName(event) ">
                <input type="text" name="name" placeholder="What is your first name?">
			</form></div>      
            `
        document.getElementById('message').innerHTML = template;
    }

    this.formName = function (e) {
        e.preventDefault();
        var name = e.target.name.value;

        ts.setName(name);
        var localName = ts.getName();
        var template = dayMessage + ' ' + localName;
        document.getElementById('message').innerHTML = template;
    }

    this.checkName = function () {
        //get name and see if it has been set
        var name = ts.getName();

        if (name == '') {
            setMessage();
        } else {
            var template2 = dayMessage + ', ' + name;
            document.getElementById('message').innerHTML = template2;
        }
    }

    drawTime();

    this.checkName();
}

