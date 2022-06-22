const dadosFilmes= {
    "results": [
        {
          "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
          "id": 338953,
          "original_language": "en",
          "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
          "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          "popularity": 4223.547,
          "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
          "release_date": "2022-04-06",
          "title": "Fantastic Beasts: The Secrets of Dumbledore",
          "vote_average": 6.8,
        },
        {
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3360.038,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "vote_average": 6.8,
          },
          {
            "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            "id": 675353,
            "original_language": "en",
            "original_title": "Sonic the Hedgehog 2",
            "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
            "popularity": 3534.768,
            "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
            "release_date": "2022-03-30",
            "title": "Sonic the Hedgehog 2",
            "vote_average": 7.8,
          },
          {
            "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
            "id": 818397,
            "original_language": "en",
            "original_title": "Memory",
            "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
            "popularity": 3028.594,
            "poster_path": "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
            "release_date": "2022-04-28",
            "title": "Memory",
            "vote_average": 7.3,
          }
    ]
}

const cartaz = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem ('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="card col-4">
        <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${filme.title}</h5>
            <p class="card-text">${filme.overview}</p>
            <a href="detalhe.html?id=${filme.id}" class="btn btn-primary">Veja Mais</a>
        </div>
    </div>
        `
    }
    document.getElementById ('divListaFilmes').innerHTML = dadosHTML
}

const init = () => {
    let xhr = new XMLHttpRequest ();
    let url= "https://api.themoviedb.org/3/movie/popular?api_key=12a20bbb438c66556d085ff2a3aa1fce&language=pt-BR"
    xhr.onload = cartaz;
    xhr.open ('GET', url, true);
    xhr.send();





}


document.body.onload = init;