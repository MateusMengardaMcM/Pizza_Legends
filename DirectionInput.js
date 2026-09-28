class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            "ArrowUp":"up",
            "KeyW":"up",
            "ArrowDown":"down",
            "KeyS":"down",
            "ArrowLeft":"left",
            "KeyA":"left",
            "ArrowRight":"right",
            "KeyD":"right",
        }
    }
    get directions() {
        return this.heldDirections[0]
    }

    init() {
        document.addEventListener("keydown", e => {
            const dir = this.map[e.code];
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                
            }
        })
    }
}