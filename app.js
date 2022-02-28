

const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player))

}

const showPlayerDetails = players => {
    console.log(players);
    const playerContainer = document.getElementById('player-container');
    playerContainer.textContent = '';
    if(!players){
        alert('Error: not found')
    }
    else{ 
    players?.forEach( player => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card border">
        <img class="img-fluid" src="${player.Thumb}" alt="">
        <div class="card-body">
            <h3 class="card-title">
            ${player.strPlayer}
            </h3>
            <h5>${player.strNationality}</h5>
            <p></p>
            <div class="allButton">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-success">Details</button>
            </div>
        </div>
    </div>
        `
        playerContainer.appendChild(div);
    })
    }
}