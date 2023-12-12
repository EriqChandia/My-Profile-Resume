function RunData(){
    let Name=document.getElementById('fname').value;

    localStorage.setItem('FullName',Name);

    window.location.href='index.html'
}