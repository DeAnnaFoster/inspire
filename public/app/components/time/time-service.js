function TimeService() {
    var myName = '';
    getLocalName();

    function setName(myName) {
        localStorage.setItem('myName', JSON.stringify(myName));
        getLocalName();
    }

    function formName(e) {
        e.preventDefault();
        var name = e.target.name.value;
        setName(name);
    }

    function getLocalName() {
        myName = JSON.parse(localStorage.getItem('myName')) || '';        
    }

    this.getName = function(){   
        return myName;       
    }

    this.setName = function(name){
        setName(name);
    }
    
}