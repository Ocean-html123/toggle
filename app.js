const link = document.querySelector('.links');
const toggle = document.querySelector('.toggle-bar');

toggle.addEventListener('click', function() {
    // console.log(link.classList);
    if (link.classList.contains('show-links')) {
        link.classList.remove('show-links');
    } else {
        link.classList.add('show-links');
    }
});