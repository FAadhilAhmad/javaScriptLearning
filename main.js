const biodata = {
    nama: "Fadhil Ahmad",
    umur: 20,
    alamat: "bandung",
    hobi: ["membaca", "belajar"],
    perkenalan: function () {
        return `Nama saya ${this.nama}, umur saya ${this.umur}, saya berasal dari ${this.alamat} dan hobi saya adalah ${this.hobi[0]} dan ${this.hobi[1]}`;
    },

};
function tampilkanBiodata() {
    const hasil = biodata.perkenalan();
    document.getElementById("output").innerText = hasil;
}

const data ={
    pekerjaan: "software engineer",
    pendidikan: "s1 teknik informatika",
    skill: ["javascript", "python", "java"],
    paduan : function (){
        return `Saya berbakat di bidang ${this.pekerjaan} dan saya lulusan kuliah ${this.pendidikan} dan saya bisa mengoprasikan teknologi ${this.skill[0]}, ${this.skill[1]}, dan ${this.skill[2]}`;
    },
};
function tampilkanData(){
    const semuaData = data.paduan();
    document.getElementById("output2").innerText = semuaData;
}
