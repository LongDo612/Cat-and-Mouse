function Cat(name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;

    this.say = function () {
        alert("Meo meo");
    };

    this.chaseMouse = function (mouse) {
        if(mouse.getStatus()) {
            if (this.maxSpeed > mouse.getSpeed()) {
                this.weight += mouse.getWeight();
                mouse.status = false;
                alert("You have eaten the mouse. Your weight now is: " + this.weight);
            }
        }
        else
            alert("Ew! This rat is dead!");
    }
}