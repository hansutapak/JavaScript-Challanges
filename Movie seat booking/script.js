 const container = document.querySelector('.container');
 const seats = document.querySelectorAll('.row .seat:not(.occupied)');
 const count = document.getElementById('count');
 const total = document.getElementById('total');
 const movieSelect = document.getElementById('movie');

 populateUI();

 let ticketPrice = movieSelect.value;
 

//Select Movie Index and Price 

function setMovieData (movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


//Update Count and Total


function calcUpdate() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


//Data to Local Storage

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    console.log(seatsIndex);

 //local storage
 
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
} 



//Data From Local Storage and Populate UI

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1)  {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}


//movie select eventListener

movieSelect.addEventListener('change', e => {
   ticketPrice = +e.target.value;
   setMovieData(e.target.selectedIndex, e.target.value);
   calcUpdate();
} )



//seat click eventListener

 container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) 
    {
     e.target.classList.toggle('selected');

     calcUpdate();
    }
   
});

//Initial Count and Total

calcUpdate();