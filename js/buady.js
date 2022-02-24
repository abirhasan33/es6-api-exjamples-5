const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(deta => displyBuddies(deta))
}

loadBuddies()

const displyBuddies = data => {
    const buddis = data.results;
    const buddiesDiv = document.getElementById('buddy');
    for(const buddy of buddis){
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `${buddy.name.first}, ${buddy.name.last}, ${buddy.phone}, ${buddy.email}`
        buddiesDiv.appendChild(p);        
    }
}