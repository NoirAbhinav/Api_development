const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2><a href="maps&details.html?${character.Hospital_name}|${character.image}">${character.Hospital_name}</a></h2>
                <p>Address: ${character.address}</p>
                <e>Category: ${character.Category}</e>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};