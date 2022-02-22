function hide() {
    var x = document.getElementById("con");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function edit() {
    let nama = document.getElementById("nama").value;
    let role = document.getElementById("role").value;
    let availability = document.getElementById("availability").value;
    let usia = document.getElementById("usia").value;
    let lokasi = document.getElementById("lokasi").value;
    let pengalaman = document.getElementById("pengalaman").value;
    let email = document.getElementById("email").value;

    document.getElementById("nm").innerHTML = nama;
    document.getElementById("rol").innerHTML = role;
    document.getElementById("ava").innerHTML = availability;
    document.getElementById("age").innerHTML = usia;
    document.getElementById("loc").innerHTML = lokasi;
    document.getElementById("peng").innerHTML = pengalaman;
    document.getElementById("imel").innerHTML = email;
}
