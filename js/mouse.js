function Mouse(name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;

    this.say = function () {
        alert("chit chit");
    };

    this.getWeight = function () {
        return this.weight;
    }

    this.getSpeed = function () {
        return this.speed;
    }

    this.getStatus = function () {
        return this.status;
    }
}
