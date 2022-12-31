const ayats = [
    {
        ayah: '"Kushdo që i kthen shpinën këshillës Sime, do të ketë jetë të mjeruar dhe Ne, në Ditën e Kiametit, do ta ringjallim të verbër."',
        surah: '___ Ta-Ha 124'
    },
    {
        ayah: '"E mos e teproni, se Allahu nuk i do ata që e teprojnë."',
        surah: '___ Bekare 190'
    },
    {
        ayah: '"Zoti ynë, mos na i lako zemrat tona pasi na drejtove, na dhuro mëshirën Tënde, sepse vetëm Ti je dhuruesi i madh."',
        surah: '___ Ali Imran 8'
    },
    {
        ayah: '"Mjerë për secilin që ofendon e përqesh (njerëzit)."',
        surah: '___ Humezeh 1'
    },
    {
        ayah: '"Mos jini nga ata të cilët e harruan Zotin e tyre dhe Allahu i harroi ata."',
        surah: '___ Hashr 19'
    },
    {
        ayah: '"Të keqen ktheje me të mirë."',
        surah: '___ Fusilet 34'
    },
    {
        ayah: '"E me lutjen time ndaj Teje o Zoti im, asnjëherë nuk kam qenë i dëshpëruar."',
        surah: '___ Merjem 4'
    },
];

let ayah = document.querySelector('.ayah');
let surah = document.querySelector('.surah');

function nextAyah() {
    const randomAyah = ayats[Math.floor(Math.random() * ayats.length)];
    ayah.innerText = randomAyah.ayah;
    surah.innerText = randomAyah.surah;
}

function copyAyah() {
    navigator.clipboard.writeText(ayah.innerText);
}