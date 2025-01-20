document.getElementById('arrow-right').addEventListener('click', function() {
    document.getElementById('muvue-container').scrollBy({ left: 200, behavior: 'smooth' });
});

document.getElementById('arrow-left').addEventListener('click', function() {
    document.getElementById('muvue-container').scrollBy({ left: -200, behavior: 'smooth' });
});

const api_key = 'a7f934f9';
const muvue_titles = ['Brave', 'Cruel Intentions', 'The Dark Knight', 'Thor', 'Avatar'];

muvue_titles.forEach((title, index) => {
    fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${title}`)
        .then(response => response.json())
        .then(data => {
            const poster = data.Poster;
            const year = data.Year;
            const muvueTitle = data.Title;
            const imge = document.getElementById(`m${index + 1}`);
            const titlee = document.getElementById(`mtitle${index + 1}`);
            const yeare = document.getElementById(`myear${index + 1}`);
            if (imge) {
                imge.src = poster;
            }
            if (titlee) {
                titlee.textContent = muvueTitle
            }
            if (yeare) {
                yeare.textContent = year;
            }
        })
        .catch(error => console.error(error));
});