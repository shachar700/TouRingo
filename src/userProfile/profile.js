document.getElementById('edit-btn').addEventListener('click', function () {
    const name = prompt('Enter your name:', 'John Doe');
    const bio = prompt('Enter your bio:', 'Web Developer | Tech Enthusiast | Lifelong Learner');
    const about = prompt('Enter about me text:', 'I am a passionate web developer...');

    if (name) document.getElementById('name').textContent = name;
    if (bio) document.getElementById('bio').textContent = bio;
    if (about) document.getElementById('about').textContent = about;
});
