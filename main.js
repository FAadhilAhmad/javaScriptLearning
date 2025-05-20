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

