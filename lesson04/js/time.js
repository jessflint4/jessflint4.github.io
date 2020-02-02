<<<<<<< HEAD
const options={hour: 'numeric', minute: 'numeric',weekday:'long', day: 'numeric', month: 'long', year:'numeric'};
=======
const options={hour: 'numeric', minute: 'numeric',weekday:'long', day: 'numeric', month: 'long', year:'numeric'};
>>>>>>> ded899524b223723093b75aa54633e84d6917694
document.getElementById('upDate').textContent= new Date().toLocaleDateString('en-US', options);