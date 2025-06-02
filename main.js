const biodata = {
    nama: "Fadhil Ahmad",
    umur: 20,
    alamat: "bandung",
    hobi: ["membaca", "belajar"],
    perkenalan: function () {
        return `Nama saya ${this.nama}, umur saya ${this.umur}, saya berasal dari ${this.alamat} dan hobi saya adalah ${this.hobi[0]} dan ${this.hobi[1]}`;
    },

};

const data = {
    pekerjaan: "software engineer",
    pendidikan: "s1 teknik informatika",
    skill: ["javascript", "python", "java"],
    paduan: function () {
        return `Saya berbakat di bidang ${this.pekerjaan} dan saya lulusan kuliah ${this.pendidikan} dan saya bisa mengoprasikan teknologi ${this.skill[0]}, ${this.skill[1]}, dan ${this.skill[2]}`;
    },
};

let statusBiodata = false;
let statuskanData = false;


function tampilkanBiodata() {
    const output1A = document.getElementById("output");
    statusBiodata = !statusBiodata;
    if (statusBiodata) {
        output1A.innerText = biodata.perkenalan();
    }
    else {
        output1A.innerText = "";
    }
}

function tampilkanData() {
    const output1b = document.getElementById("output2");
    statuskanData = !statuskanData;
    if (statuskanData) {
        output1b.innerText = data.paduan();
    }
    else {
        output1b.innerText = "";
    }
}

const outputPercakan = {
    saya: "fadhil ahmad syawaludin",
    favorite: "belajar pemrograman",
    outputPercakan1: function () {
        return `Nama saya ${this.saya}, hobi saya adalah ${this.favorite}`
    }
}
let statusOutputPercakan = false;
function percakapan1() {
    const hasilPercakapan = document.getElementById("respon1");
    statusOutputPercakan = !statusOutputPercakan;
    if (statusOutputPercakan) {
        hasilPercakapan.innerText = outputPercakan.outputPercakan1();
    }
    else {
        hasilPercakapan.innerText = "";
    }
}

const outputPercakapan2 = {
    aktivitas: "learning javascript",
    tujuan: "menjadi software engineer",
    outputTombol2: function () {
        return `aktifitas saya adalah ${this.aktivitas} dan tujuan saya adalah ${this.tujuan}`
    }
}

let statusOutputPercakapan2 = false;
function percakapan2() {
    const hasilPercakpan2 = document.getElementById("respon2");
    statusOutputPercakapan2 = !statusOutputPercakapan2;
    if (statusOutputPercakapan2) {
        hasilPercakpan2.innerText = outputPercakapan2.outputTombol2();
    }
    else {
        hasilPercakpan2.innerText = "";
    }
}

let menghilang = false;

function hilangkan() {
    const text = document.getElementById("bacaSelengkapnya");
    const tombolBtn = document.getElementById("tombolBaca");

    menghilang = !menghilang;

    if (menghilang) {
        text.classList.add('show');
        text.classList.remove('hidden');
        tombolBtn.innerText = "tampilkan lebih sedikit";
    }
    else {
        text.classList.add('hidden');
        text.classList.remove('show');
        tombolBtn.innerText = "baca selengkapnya";
    }
}

let menghilang2 = false;

function hilangkan2() {
    const text2 = document.getElementById("bacaSele2")
    const tombolBtn2 = document.getElementById("tombolBaca2")

    menghilang2 = !menghilang2;

    if (menghilang2) {
        text2.classList.add('show2');
        text2.classList.remove('hidden');
        tombolBtn2.innerText = "males baca bro!!";
    }
    else {
        text2.classList.add('hidden');
        text2.classList.remove('show2');
        tombolBtn2.innerText = "Baca semua bro!!";
    }
}
let combination1 = false;

function addBtn() {
    const btn = document.getElementById('btnCombi')
    const btn2 = document.getElementById('hilang')

    combination1 = !combination1;
    console.log("Toggle:", combination1);
    
    if (combination1){
        btn2.classList.add('hilang');
        btn2.classList.remove('muncul1');
    }
    else {
        btn2.classList.remove('hilang');
        btn2.classList.add('muncul1');
    }
}
let combination2 = false;

function addBtn2() {
    const btn2 = document.getElementById('btnCombi2')
    const btn3 = document.getElementById('hilang2')

    combination2 = !combination2;

    if (combination2){
        btn3.classList.add('hilang2');
        btn3.classList.remove('muncul2');
    }
    else {
        btn3.classList.remove('hilang2');
        btn3.classList.add('muncul2');
    }
}
let nomorCard = 1;

function tambahCard() {
  const container = document.getElementById('containerCard');

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h3>Card ke-${nomorCard}</h3>
    <p>Ini adalah deskripsi card nomor ${nomorCard}.</p>
    <button onclick="hapusCard(this)">Hapus</button>
  `;

  container.appendChild(card);
  nomorCard++;
}

function hapusCard(button) {
  const card = button.parentElement;
  card.remove();
}

let nomorCard2 = 0;

function tambahCard2() {
    const container2 = document.getElementById('containerCard2');

    const card2 = document.createElement('div');
    card2.classList.add('card2');

    card2.innerHTML = `
    <h3>Halo Tod ini kard ke ${nomorCard2}</h3>
    <p>Ini tod card ke ${nomorCard2}</p>
    <button onclick="hapusCard2(this)">Hapus Todd!!</button>
    `;

    container2.appendChild(card2);
    nomorCard2++;
}

function hapusCard2(button){
    const card2 = button.parentElement;
    card2.remove();
}
