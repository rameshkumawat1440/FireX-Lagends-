function createGuestAccount() {

    let uid = generateUID();

    let player = {
        uid: uid,
        name: "Guest",
        level: 1,
        coins: 1000,
        emeralds: 0
    };

    savePlayer(player);
}

function generateUID() {

    return "FXL" + Math.floor(
        10000000 + Math.random() * 90000000
    );
}

function savePlayer(player) {

    localStorage.setItem(
        "FireXPlayer",
        JSON.stringify(player)
    );
}
