let vocabData = [
    ["하루", "Ha-ru", "hari / sehari / satu hari"],
    ["일과", "Il-gwa", "jadwal / rutinitas harian"],
    ["시간", "Si-gan", "waktu"],
    ["시", "Si", "jam"],
    ["오전", "O-jeon", "pagi"],
    ["오후", "O-hu", "siang"],
    ["분", "Bun", "menit"],
    ["아침", "A-chim", "pagi hari"],
    ["점심", "Jeom-sim", "makan siang"],
    ["저녁", "Jeo-nyeok", "makan malam / malam hari"],
    ["새벽", "Sae-byeok", "dini hari"],
    ["낮", "Nat", "siang hari"],
    ["밤", "Bam", "malam"],
    ["몇 시", "Myeot si", "jam berapa"],
    ["보통", "Bo-tong", "biasanya"],
    ["요즘", "Yo-jeum", "akhir-akhir ini"],
    ["자다", "Ja-da", "tidur"],
    ["같이", "Ga-chi", "bersama"],
    ["읽다", "Ik-da", "membaca"],
    ["일어나다", "Ir-eo-na-da", "bangun"],
    ["씻다", "Ssit-da", "mencuci / membersihkan diri"],
    ["이를 닦다", "I-reul dak-da", "menggosok gigi"],
    ["식사하다", "Sik-sa-ha-da", "makan"],
    ["출근하다", "Chul-geun-ha-da", "berangkat kerja"],
    ["퇴근하다", "Toe-geun-ha-da", "pulang kerja"],
    ["게임하다", "Ge-im-ha-da", "bermain game"],
    ["청소하다", "Cheong-so-ha-da", "membersihkan"],
    ["장을 보다", "Jang-eul bo-da", "belanja di pasar / belanja bahan makanan"],
    ["산책하다", "San-chaek-ha-da", "berjalan-jalan"],
    ["샤워하다", "Sya-wo-ha-da", "mandi"],
    ["친구를 만나다", "Chin-gu-reul man-na-da", "bertemu teman"],
    ["휴게실", "Hyu-ge-sil", "ruang istirahat"],
    ["매점", "Mae-jeom", "kantin / toko kecil"],
    ["공원", "Gong-won", "taman"],
    ["사다", "Sa-da", "membeli"],
    ["편의점", "Pyeo-ni-jeom", "toserba 24 jam"],
    ["직장인", "Jik-jang-in", "pekerja kantoran"],
    ["직장", "Jik-jang", "tempat kerja"],
    ["시작하다", "Si-jak-ha-da", "memulai"],
    ["지하철", "Ji-ha-cheol", "kereta bawah tanah"],
    ["버스", "Beo-seu", "bus"],
    ["같다", "Gat-da", "sama / mirip / seperti"],
    ["대중교통", "Dae-jung-gyo-tong", "transportasi umum"],
    ["승용차", "Seung-yong-cha", "mobil pribadi"],
    ["이용하다", "I-yong-ha-da", "menggunakan"],
    ["출퇴근", "Chul-toe-geun", "pergi dan pulang kerja"],
    ["교통", "Gyo-tong", "lalu lintas"],
    ["매우", "Mae-u", "sangat"],
    ["혼잡하다", "Hon-jap-ha-da", "padat / macet"],
    ["예기치 않다", "Ye-gi-chi an-ta", "tidak terduga"],
    ["어렵다", "Eo-ryeop-da", "sulit"],
    ["겪다", "Gyeok-da", "mengalami"],
    ["사이", "Sa-i", "antara"],
    ["구내식당", "Gu-nae-sik-dang", "kantin kantor"],
    ["없다", "Eop-da", "tidak ada"],
    ["부서", "Bu-seo", "divisi / departemen"],
    ["못하다", "Mot-ha-da", "tidak bisa"],
    ["업무", "Eom-mu", "pekerjaan / kerja"],
    ["이야기", "I-ya-gi", "cerita / percakapan"],
    ["알고 있다", "Al-go it-da", "mengetahui"],
    ["간단하다", "Gan-dan-ha-da", "sederhana"],
    ["취미", "Chwi-mi", "hobi"],
    ["활동", "Hwal-dong", "aktivitas"],
    ["즐기다", "Jeul-gi-da", "menikmati"],
    ["다", "Da", "semua"],
    ["끝내다", "Kkeut-nae-da", "menyelesaikan"],
    ["야근", "Ya-geun", "lembur"],
    ["쌓이다", "Ssa-i-da", "menumpuk"],
    ["위해", "Wi-hae", "demi / untuk"],
    ["학원", "Hag-won", "tempat kursus"],
    ["다니다", "Da-ni-da", "pergi ke / menghadiri"],
    ["스트레스를 풀다", "Seu-teu-re-seu-reul pul-da", "melepaskan stres"],
    ["풀다", "Pul-da", "meredakan / menyelesaikan"],
    ["팀워크를 다지다", "Tim-wo-keu-reul da-ji-da", "membangun kerja tim"],
    ["상사", "Sang-sa", "atasan"],
    ["동료", "Dong-ryo", "rekan kerja"],
    ["회식", "Hoe-sik", "makan malam bersama"],
    ["어떤", "Eo-tteon", "seperti apa / yang mana"],
    ["건강", "Geon-gang", "kesehatan"],
    ["운동하다", "Un-dong-ha-da", "berolahraga"],
    ["계발", "Gye-bal", "pengembangan"],
    ["외국어", "Oe-gug-eo", "bahasa asing"],
    ["취침", "Chwi-chim", "waktu tidur"],
    ["밤", "Bam", "malam"],
    ["저녁", "Jeo-nyeok", "makan malam"],
    ["하루 일과", "Ha-ru il-gwa", "kegiatan sehari-hari"],
    ["기상", "Gi-sang", "bangun tidur"],
    ["출근", "Chul-geun", "berangkat kerja"],
    ["오후 업무", "O-hu eom-mu", "pekerjaan sore"],
    ["오전", "O-jeon", "pagi"],
    ["낮", "Nat", "siang"],
    ["에서", "E-seo", "di / dari"],
    ["(스)ㅂ니다", "-(seu)m-ni-da", "akhiran formal"],
    ["질문", "Jil-mun", "pertanyaan"],
    ["받침", "Bat-chim", "konsonan akhir"],
    ["동사", "Dong-sa", "kata kerja"],
    ["조금", "Jo-geum", "sedikit"],
    ["반", "Ban", "setengah / kelas"],
    ["몇", "Myeot", "berapa"],
    ["정원", "Jeong-won", "taman / kebun"]
];

let currentIndex = 0;

function updateDisplay() {
    const [hangeul, ejaan, arti] = vocabData[currentIndex];
    document.getElementById('hangeul').innerText = hangeul;
    document.getElementById('ejaan').innerText = ejaan;
    document.getElementById('arti').innerText = arti;
    document.getElementById('counter').innerText = `${currentIndex + 1} / ${vocabData.length}`;
    
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === vocabData.length - 1;
}

function nextCard() {
    if (currentIndex < vocabData.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function shuffleData() {
    // Algoritma Fisher-Yates untuk mengacak array
    for (let i = vocabData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocabData[i], vocabData[j]] = [vocabData[j], vocabData[i]];
    }
    currentIndex = 0;
    updateDisplay();
    alert("Daftar berhasil diacak!");
}

// Jalankan tampilan pertama kali
updateDisplay();

