document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // BAGIAN TERJEMAHAN BAHASA 
    // =======================================================

    const translations = {
        "id": {
            "title_home": "Pesona Nusantara - Mau Kemana?",
            "nav_home": "Mau Kemana?",
            "nav_about": "Tentang Indonesia",
            "nav_gallery": "Galeri",
            "hero_title_home": "Temukan Keindahan Tersembunyi Indonesia",
            "hero_subtitle_home": "Jelajahi setiap sudut negeri yang penuh pesona dari gunung megah hingga pantai tropis yang memikat",
            "filter_title": "Pilih Destinasi Anda",
            "filter_province": "Pilih Provinsi:",
            "filter_province_option": "-- Provinsi --",
            "filter_city": "Pilih Kota/Kabupaten:",
            "filter_city_option": "-- Kota/Kabupaten --",
            "results_title": "Hasil Rekomendasi",
            "results_placeholder": "Silakan pilih provinsi dan kota untuk melihat rekomendasi wisata.",
            "popular_title": "Pilih Petualangan Anda",
            "popular_subtitle": "Indonesia menawarkan pengalaman luar biasa dari menjelajahi hutan tropis hingga menikmati kekayaan budaya yang memukau. Selalu ada sesuatu untuk setiap wisatawan!",
            "popular_button": "Lihat Semua",
            "popular_card_nature": "Alam",
            "popular_card_nature_desc": "Selami keindahan alam kami yang luas.",
            "popular_card_culture": "Budaya",
            "popular_card_culture_desc": "Rasakan kekayaan warisan budaya kami.",
            "popular_card_beach": "Pantai",
            "popular_card_beach_desc": "Bersantai di salah satu pantai surga kami.",
            "popular_card_food": "Kuliner",
            "popular_card_food_desc": "Cicipi cita rasa kuliner yang otentik.",
            "footer_text": "© 2025 Pesona Nusantara. Dibuat dengan Penuh Cinta."
        },
        "en": {
            "title_home": "Pesona Nusantara - Where to Go?",
            "nav_home": "Where to Go?",
            "nav_about": "About Indonesia",
            "nav_gallery": "Gallery",
            "hero_title_home": "Discover Indonesia's Hidden Wonders",
            "hero_subtitle_home": "Indonesia offers unforgettable experiences from exploring tropical rainforests to discovering its rich cultural heritage.There's always something for every traveler!",
            "filter_title": "Choose Your Destination",
            "filter_province": "Select Province:",
            "filter_province_option": "-- Province --",
            "filter_city": "Select City/Regency:",
            "filter_city_option": "-- City/Regency --",
            "results_title": "Recommendation Results",
            "results_placeholder": "Please select a province and city to see travel recommendations.",
            "popular_title": "Pick Your Own Journey",
            "popular_subtitle": "Traveling to Indonesia offers a kaleidoscope of experiences, from dancing to the vibrant beats of samba in the streets of Rio de Janeiro to exploring the lush Amazon rainforest's biodiversity. There's a place in Indonesia for everyone! Explore our selection of stunning destinations.",
            "popular_button": "See All",
            "popular_card_nature": "Nature",
            "popular_card_nature_desc": "Immerse yourself in the beauty of our vast nature.",
            "popular_card_culture": "Culture",
            "popular_card_culture_desc": "Experience the richness of our cultural heritage.",
            "popular_card_beach": "Beach",
            "popular_card_beach_desc": "Relax in any of our paradise beaches.",
            "popular_card_food": "Culinary",
            "popular_card_food_desc": "Taste the authentic flavors of our cuisine.",
            "footer_text": "© 2025 Pesona Nusantara. Made with Love."
        }
    };
    
const langButton = document.getElementById('lang-button');
    const langOptions = document.querySelectorAll('.lang-dropdown a');
    let currentLang; 

const setLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;
        
    
        const flag = lang === 'id' ? 'https://flagcdn.com/id.svg' : 'https://flagcdn.com/gb.svg';
        langButton.querySelector('img').src = flag;
        langButton.querySelector('span').textContent = lang.toUpperCase();

        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        localStorage.setItem('language', lang);
        
        const province = provinceSelect.value;
        const city = citySelect.value;
        if (province && city) {
            displayAttractions(province, city);
        }
    };

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang-code');
            setLanguage(selectedLang);
        });
    });

    // =======================================================
    // BAGIAN REKOMENDASI WISATA 
    // =======================================================
    
const tourismData = {
        "Jawa Timur": {
            Surabaya: [
            {
                name: "Tugu Pahlawan",
                description_id:
                "Monumen ikonik yang didedikasikan untuk para pahlawan yang gugur dalam Pertempuran Surabaya.",
                description_en:
                "An iconic monument dedicated to the heroes who died in the Battle of Surabaya.",
                image:
                "https://tiketwisata.surabaya.go.id/storage/tour/monumen-tugu-pahlawan_1680340884.jpeg    ",
                gmaps_link: "https://maps.app.goo.gl/EAqwwVJEt5FwHrHc9",
            },
            {
                name: "Kenjeran Park",
                description_id:
                "Taman rekreasi di tepi laut dengan berbagai wahana dan pemandangan Jembatan Suramadu.",
                description_en:
                "A seaside amusement park with various rides and a view of the Suramadu Bridge.",
                image:
                "https://travelspromo.com/wp-content/uploads/2022/10/Patung-Dewi-Kwan-Im-dan-Naga-di-Kenjeran-Park.jpg",
                gmaps_link: "https://maps.app.goo.gl/DQUz5pQSPWCekzta9",
            },
            ],
            Malang: [
            {
                name: "Gunung Bromo",
                description_id:
                "Gunung berapi aktif yang terkenal dengan pemandangan matahari terbitnya yang magis dan lautan pasirnya yang luas.",
                description_en:
                "An active volcano famous for its magical sunrise views and vast sea of sand.",
                image:
                "https://www.pesonaindo.com/wp-content/uploads/2016/04/bromo-1140x530.jpg",
                gmaps_link: "https://maps.app.goo.gl/G5Tv7YuyhshN2ofT9",
            },
            ],
            Blitar: [
            {
                name: "Makam Bung Karno",
                description_id:
                "Makam presiden pertama Indonesia, Ir. Soekarno, yang menjadi ikon sejarah dan tempat wisata edukatif di Kota Blitar.",
                description_en:
                "The tomb of Indonesia's first president, Ir. Soekarno, an iconic historical and educational site in Blitar.",
                image:
                "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1053/2025/07/03/Makam-Bung-Karno-Blitar-506872211.jpg",
                gmaps_link: "https://maps.app.goo.gl/RSd6nhRuo78KZuYJA",
            },
            {
                name: "Candi Penataran",
                description_id:
                "Kompleks candi terbesar di Jawa Timur yang berasal dari masa Kerajaan Majapahit, kaya akan relief dan nilai sejarah.",
                description_en:
                "The largest temple complex in East Java from the Majapahit era, rich in carvings and historical value.",
                image:
                "https://ik.imagekit.io/tvlk/blog/2025/04/shutterstock_2547831683.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
                gmaps_link: "https://maps.app.goo.gl/vrGnGjXDoLyeoPia6",
            },
            {
                name: "Pantai Tambakrejo",
                description_id:
                "Pantai berpasir putih dengan ombak yang tenang, cocok untuk wisata keluarga dan menikmati hasil laut segar.",
                description_en:
                "A white sandy beach with calm waves, perfect for family trips and enjoying fresh seafood.",
                image:
                "https://static.promediateknologi.id/crop/0x109:800x598/0x0/webp/photo/p2/227/2025/06/25/32acdffa-73ad-4015-9279-982f94c6cb1c-294085924.jpeg",
                gmaps_link: "https://maps.app.goo.gl/Mk1JbeCixj6bnihX9",
            },
            {
                name: "Pantai Serang",
                description_id:
                "Pantai dengan panorama indah dan sering menjadi lokasi festival budaya serta pelepasan larung sesaji.",
                description_en:
                "A beautiful beach often used for cultural festivals and traditional sea offerings.",
                image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1470&auto=format&fit=crop",
                gmaps_link: "https://maps.app.goo.gl/24TrSocUMbhb4i6T8",
            },
            {
                name: "Kebon Rojo",
                description_id:
                "Taman kota yang hijau dan asri, menjadi tempat favorit warga untuk berolahraga dan bersantai.",
                description_en:
                "A green city park popular among locals for exercising and relaxing.",
                image:
                "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/220/2025/02/03/fakta-menarik-taman-kebon-rojo-1536x863-4131287980.jpg",
                gmaps_link: "https://maps.app.goo.gl/Buk3uPdssKy6iYTAA",
            },
            {
                name: "Kampung Coklat",
                description_id:
                "Destinasi wisata edukatif dan kuliner bertema cokelat, di mana pengunjung dapat belajar proses pembuatan cokelat.",
                description_en:
                "An educational and culinary destination focused on chocolate, where visitors can learn about chocolate making.",
                image:
                "https://ik.imagekit.io/tvlk/blog/2024/08/CQrsO8VI-image-3-edited.png?tr=q-70,c-at_max,w-500,h-250,dpr-2",
                gmaps_link: "https://maps.app.goo.gl/YGopYMCDTTZJLAwt5",
            },
            {
                name: "Gunung Kelud",
                description_id:
                "Gunung berapi aktif di perbatasan Blitar yang menawarkan panorama menakjubkan dan udara sejuk di puncaknya.",
                description_en:
                "An active volcano on the Blitar border offering stunning views and cool mountain air at its peak.",
                image:
                "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/850/2024/03/13/Misteri-Gunung-kelud-1455096063.jpeg",
                gmaps_link: "https://maps.app.goo.gl/mxtbVnCe33RGkhGJA",
            },
            ],
        },
        Bali: {
            Badung: [
            {
                name: "Garuda Wisnu Kencana Cultural Park (GWK)",
                description_id:
                "Taman budaya dengan patung raksasa Garuda Wisnu, sering juga menjadi lokasi pertunjukan dan event budaya.",
                description_en:
                "A cultural park featuring the giant Garuda Wisnu statue, also a venue for performances and cultural events.",
                image: "https://bythecliffbali.com/storage/2024/08/Explore-GWK.webp",
                gmaps_link: "https://maps.app.goo.gl/ZyG2ijf92d1Np7796",
            },
            {
                name: "Pantai Padang Padang",
                description_id:
                "Pantai kecil dengan pasir putih dan tebing-tebing di sekitarnya, sangat populer untuk surfing dan suasana santai.",
                description_en:
                "A small white sandy beach surrounded by cliffs, very popular for surfing and relaxed vibes.",
                image:
                "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_435665278.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
                gmaps_link: "https://maps.app.goo.gl/6yNiMnGhdDWFsyUt8",
            },
            {
                name: "Pura Luhur Uluwatu",
                description_id:
                "Pura yang berada di atas tebing di Uluwatu, indah terutama saat matahari terbenam dan ada pertunjukan tarian kecak.",
                description_en:
                "Temple perched on a cliff in Uluwatu, beautiful especially at sunset and hosts Kecak dance performances.",
                image:
                "https://akcdn.detik.net.id/community/media/visual/2021/04/24/pura-luhur-uluwatu-bali_169.jpeg?w=700&q=90",
                gmaps_link: "https://maps.app.goo.gl/k3X3nhrhtfNzrECM9",
            },
            {
                name: "Pantai Kuta",
                description_id:
                "Pantai yang sangat terkenal dengan pasir putih, ombak santai, dan suasana pantai yang ramai terutama saat sunset.",
                description_en:
                "A very famous beach with white sand, gentle waves, and a lively beach atmosphere especially at sunset.",
                image:
                "https://www.gotravelaindonesia.com/wp-content/uploads/Pantai-Kuta-Beach-V2.webp",
                gmaps_link: "https://maps.app.goo.gl/kmP7PaSsL7z8c1b79",
            },
            ],
            Gianyar: [
            {
                name: "Tegallalang Rice Terraces",
                description_id:
                "Sawah terasering hijau yang indah dekat Ubud, menawarkan panorama sawah dan budaya pertanian tradisional.",
                description_en:
                "Beautiful green terraced rice fields near Ubud, offering panoramic views of rice paddies and traditional farming culture.",
                image:
                "https://roadtripsandsuitcases.com/wp-content/uploads/2025/03/DSC_2816_7_8_Optimizer_edited_edited-2048x1365.jpg",
                gmaps_link: "https://maps.app.goo.gl/JRGmdLCTgxHdqccS9",
            },
            {
                name: "Goa Gajah",
                description_id:
                "Situs bersejarah berupa gua kuno dengan relief batu dan patung suci yang menjadi tempat spiritual umat Hindu.",
                description_en:
                "An ancient cave temple featuring stone carvings and sacred statues, serving as a spiritual site for Hindus.",
                image:
                "https://www.baligoldentour.com/images/bali-interest-place/goa-gajah-temple-bali-golden-tour.jpg",
                gmaps_link: "https://maps.app.goo.gl/vi9T4C1PSnQk59GbA",
            },
            {
                name: "Tirta Empul Temple",
                description_id:
                "Pura air suci yang terkenal dengan kolam pemurnian dan tradisi melukat yang dilakukan umat Hindu Bali.",
                description_en:
                "A sacred water temple famous for its purification pools and the traditional Balinese ritual of Melukat.",
                image:
                "https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/80235---the-temple-of-tirta-empul---an-ancient-rit/format-2560x1600-80235/jcr%3Acontent",
                gmaps_link: "https://maps.app.goo.gl/fCZZpFHXdHDsyJYc8",
            },
            {
                name: "Bali Safari & Marine Park",
                description_id:
                "Taman safari modern yang menampilkan berbagai satwa langka dan pertunjukan budaya Bali yang menarik.",
                description_en:
                "A modern safari park featuring rare animals and captivating Balinese cultural performances.",
                image:
                "https://res.klook.com/image/upload/w_1265,h_785,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tu9bdl1a7xvhc5swrznu.webp",
                gmaps_link: "https://maps.app.goo.gl/p527Rvep355TFPpK9",
            },
            ],
            Tabanan: [
            {
                name: "Tanah Lot",
                description_id:
                "Pura yang berdiri di atas batu karang di tepi laut, terkenal dengan pemandangan matahari terbenam yang menakjubkan.",
                description_en:
                "A temple built on a rock formation by the sea, famous for its stunning sunset views.",
                image:
                "https://travelspromo.com/wp-content/uploads/2019/07/Pura-Tanah-Lot-Bali-Etienne-Edwin-Levenstone-1200x750.jpg",
                gmaps_link: "https://maps.app.goo.gl/oNF64RStq8PLMmHk8",
            },
            {
                name: "Jatiluwih Rice Terrace",
                description_id:
                "Kawasan sawah berundak yang menjadi warisan budaya dunia UNESCO, menawarkan panorama hijau yang menyejukkan.",
                description_en:
                "A UNESCO World Heritage site with breathtaking views of lush terraced rice fields.",
                image:
                "https://jatiluwih.id/wp-content/uploads/2024/07/DJI_0792-1200x800.png",
                gmaps_link: "https://maps.app.goo.gl/Jy5x7RaYiTELHeD3A",
            },
            {
                name: "Ulun Danu Beratan Temple",
                description_id:
                "Pura ikonik yang terletak di tepi Danau Beratan dengan latar pegunungan dan udara yang sejuk.",
                description_en:
                "An iconic temple located on Lake Beratan, surrounded by mountains and cool air.",
                image:
                "https://indonesia.travel/contentassets/ad738028d41746929231fc831fcb4072/bali_ulun_banner.jpg",
                gmaps_link: "https://maps.app.goo.gl/1Pkaam6o3dae2AQ68",
            },
            {
                name: "Bali Butterfly Park (Taman Kupu-Kupu)",
                description_id:
                "Taman konservasi kupu-kupu terbesar di Bali, menampilkan berbagai spesies kupu-kupu dan serangga tropis.",
                description_en:
                "The largest butterfly conservation park in Bali, showcasing various tropical butterfly and insect species.",
                image:
                "https://www.djkn.kemenkeu.go.id/files/images/2022/11/BBP_1.jpeg",
                gmaps_link: "https://maps.app.goo.gl/2fcebhN7ohPYx98K7",
            },
            {
                name: "Bunut Bolong",
                description_id:
                "Pohon raksasa dengan lubang besar di tengah batangnya yang menjadi jalur jalan raya dan dipercaya memiliki nilai spiritual.",
                description_en:
                "A giant tree with a natural hole in its trunk that serves as a roadway and is believed to hold spiritual significance.",
                image:
                "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/301/2023/12/14/bunut-bolong-2024181481.jpg",
                gmaps_link: "https://maps.app.goo.gl/fCjLCrr6EyYUzRpp8",
            },
            ],
            karangasem: [
            {
                name: "Pura Besakih",
                description_id:
                "Pura terbesar dan paling suci di Bali, terletak di kaki Gunung Agung, terdiri dari banyak pura kecil dalam satu kompleks.",
                description_en:
                "The largest and holiest temple in Bali, located on the slopes of Mount Agung, comprising many smaller temples in one complex.",
                image:
                "https://www.baliagatour.co.id/wp-content/uploads/2025/05/Sejarah-Pura-Besakih-yang-Menjadi-Pura-Terbesar-di-Bali.jpg",
                gmaps_link: "https://maps.app.goo.gl/TZj3DC57Rio17scA8",
            },
            ],
            bangli: [
            {
                name: "Mount Batur",
                description_id:
                "Gunung berapi aktif yang populer untuk pendakian pagi hari dan melihat matahari terbit di atas danau Batur.",
                description_en:
                "An active volcano popular for early morning treks to see sunrise over Lake Batur.",
                image:
                "https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/indonesia_bali_mount-batur.jpg",
                gmaps_link: "https://maps.app.goo.gl/DYij3dPLDVsqxMPXA",
            },
            ],
        },
        "Jawa Barat": {
            Bandung: [
            {
                name: "Kawah Putih",
                description_id:
                "Danau kawah vulkanik dengan air berwarna putih kehijauan yang sureal dan pemandangan dramatis.",
                description_en:
                "A surreal volcanic crater lake with turquoise-white water and dramatic landscapes.",
                image:
                "https://travelspromo.com/wp-content/uploads/2019/06/Menikmati-matahari-terbit-dari-spot-Sunan-Ibu-Kawah-Putih-Bandung-bandunginframe-e1561615406588.jpg",
                gmaps_link: "https://maps.app.goo.gl/6s1ojzvXQ9SWp8GN9",
            },
            ],
        },
        "Jawa Tengah": {
            Magelang: [
            {
                name: "Candi Borobudur",
                description_id:
                "Candi Buddha terbesar di dunia, sebuah mahakarya arsitektur kuno dengan ribuan panel relief dan stupa.",
                description_en:
                "The world's largest Buddhist temple, a masterpiece of ancient architecture with thousands of relief panels and stupas.",
                image:
                "https://pdv.co.id/wp-content/uploads/2025/04/6225c0669e6d2.webp",
                gmaps_link: "https://maps.app.goo.gl/aRHKvg5oHM2xDwFA9",
            },
            ],
        },
        "D.I. Yogyakarta": {
            Yogyakarta: [
            {
                name: "Jalan Malioboro",
                description_id:
                "Jalan perbelanjaan dan pusat keramaian utama di Yogyakarta, penuh dengan toko, pedagang kaki lima, dan pertunjukan seni.",
                description_en:
                "The main shopping street and bustling heart of Yogyakarta, filled with shops, street vendors, and art performances.",
                image:
                "https://terasmalioboro.jogjaprov.go.id/wp-content/uploads/2022/08/5ee208425be9b.jpg",
                gmaps_link: "https://maps.app.goo.gl/Jdcn9mmBGuC9YVov7",
            },
            ],
        },
        "Sumatera Utara": {
            "Toba Samosir": [
            {
                name: "Danau Toba",
                description_id:
                "Danau vulkanik terbesar di dunia, dengan Pulau Samosir di tengahnya, menawarkan budaya Batak yang unik.",
                description_en:
                "The largest volcanic lake in the world, with Samosir Island in its center, offering unique Batak culture.",
                image:
                "https://unesco.or.id/wp-content/uploads/2025/08/Danau-Toba-1.webp",
                gmaps_link: "https://maps.app.goo.gl/ezoNCA41LBgX7kZu9",
            },
            ],
        },
        "Nusa Tenggara Timur": {
            "Manggarai Barat": [
            {
                name: "Pulau Komodo",
                description_id:
                "Habitat asli Komodo, kadal terbesar di dunia. Dikenal juga dengan pantai pink dan spot menyelam kelas dunia.",
                description_en:
                "The native habitat of the Komodo dragon, the world's largest lizard. Also known for its pink beach and world-class diving spots.",
                image:
                "https://www.refoindonesia.com/wp-content/uploads/2021/06/Pemandangan-P-Komodo.jpg",
                gmaps_link: "https://maps.app.goo.gl/yDfQ5EbnBAeGuJa48",
            },
            ],
        },
        "Papua Barat": {
            "Raja Ampat": [
            {
                name: "Kepulauan Raja Ampat",
                description_id:
                "Surga bagi penyelam dengan keanekaragaman hayati laut terkaya di bumi, terkenal dengan pulau-pulau karst ikoniknya.",
                description_en:
                "A diver's paradise with the richest marine biodiversity on earth, famous for its iconic karst islands.",
                image:
                "https://unesco.or.id/wp-content/uploads/2025/08/Raja-Ampat.webp",
                gmaps_link: "https://maps.app.goo.gl/VDtSLRSs6K6VAsVN8",
            },
            ],
        },
        Riau: {
            Siak: [
            {
                name: "Istana Siak Sri Indrapura",
                description_id:
                "Kompleks istana Kesultanan Siak yang megah dengan arsitektur Melayu, Arab, dan Eropa.",
                description_en:
                "A magnificent palace complex of the Siak Sultanate with Malay, Arabic, and European architecture.",
                image:
                "https://digitiket.com/data/image/1367?group=1&m=240802093237&x=4",
                gmaps_link: "https://maps.app.goo.gl/ktP2N3i9uDCfQ1YM8",
            },
            ],
        },
        "Bangka Belitung": {
            Belitung: [
            {
                name: "Pantai Tanjung Tinggi",
                description_id:
                "Pantai unik yang terkenal dengan formasi batu granit raksasa, menjadi lokasi syuting film 'Laskar Pelangi'.",
                description_en:
                "A unique beach famous for its giant granite rock formations, the filming location for the movie 'Laskar Pelangi'.",
                image:
                "https://asset.kompas.com/crops/QjIwvgNQsUZ8miqqZse4_CEyXmg=/0x0:780x390/1200x800/data/photo/2016/08/27/1046485pantai-21780x390.jpg",
                gmaps_link: "https://maps.app.goo.gl/DfXPoUJNQckecqEN6",
            },
            ],
        },
        Banten: {
            Pandeglang: [
            {
                name: "Taman Nasional Ujung Kulon",
                description_id:
                "Situs Warisan Dunia UNESCO, habitat terakhir bagi badak Jawa yang terancam punah, dengan keindahan alam liar yang luar biasa.",
                description_en:
                "A UNESCO World Heritage Site, the last habitat for the critically endangered Javan rhinoceros, with incredible wilderness.",
                image:
                "https://static.promediateknologi.id/crop/0x695:720x1162/750x500/webp/photo/p1/397/2025/09/16/Screenshot_20250916_100728-4181664382.jpg", // Placeholder
                gmaps_link: "https://maps.app.goo.gl/vRKFcgapMhH3zsUv9",
            },
            ]
        },
        "Kalimantan Timur": {
            Berau: [
            {
                name: "Kepulauan Derawan",
                description_id:
                "Gugusan pulau surga tropis yang menjadi salah satu spot menyelam terbaik dunia untuk melihat penyu, pari manta, dan ubur-ubur tak menyengat.",
                description_en:
                "A tropical paradise archipelago, one of the world's best diving spots to see turtles, manta rays, and stingless jellyfish.",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Aerial_of_Derawan_2017-09-16.jpg",        gmaps_link: "https://maps.app.goo.gl/4x82cpHPxyDng9nk8",
            },
            ],
        },
        "Sulawesi Utara": {
            Manado: [
            {
                name: "Taman Nasional Bunaken",
                description_id:
                "Taman laut dengan biodiversitas yang sangat tinggi, terkenal dengan dinding karang vertikal yang spektakuler dan menjadi favorit para penyelam.",
                description_en:
                "A marine park with extremely high biodiversity, famous for its spectacular vertical coral walls, a favorite among divers.",
                image: "https://digitani.ipb.ac.id/wp-content/uploads/2023/07/2.-Muhammad-Yudistira-Perikanan-Sumber-Daya-Perikanan-dan-Pariwisata-Taman-Nasional-Bunaken-Keajaiban-Surga-Terumbu-Karang-Tani-Nelayan-Center-IPB-University-DIGITANI-1-1024x768.jpg", 
                gmaps_link: "https://maps.app.goo.gl/HENQoYfRh9oJVi346",
            },
            ],
        },
        Maluku: {
            "Maluku Tengah": [
            {
                name: "Pantai Ora",
                description_id:
                "Pantai eksotis dengan resor di atas air yang jernih, sering disebut sebagai 'Maladewa-nya Indonesia'.",
                description_en:
                "An exotic beach with overwater resorts on crystal clear water, often referred to as the 'Maldives of Indonesia'.",
                image: "https://www.gotravelaindonesia.com/wp-content/uploads/pantai-ora-maluku.jpg", 
                gmaps_link: "https://maps.app.goo.gl/k1mT3APUznUNth6F9",
            },
            ],
        },
        Lampung: {
            "Lampung Timur": [
            {
                name: "Taman Nasional Way Kambas",
                description_id:
                "Pusat konservasi gajah sumatera, di mana pengunjung dapat melihat gajah di habitat alaminya dan belajar tentang upaya pelestarian.",
                description_en:
                "A conservation center for Sumatran elephants, where visitors can see elephants in their natural habitat and learn about conservation efforts.",
                image: "https://www.intiwhiz.com/images/planner/waykambas.jpg",
                gmaps_link: "https://maps.app.goo.gl/4sgFGpTMQEhvsE6f6",
            },
            ],
        },
        "Kalimantan Tengah": {
            "Kotawaringin Barat": [
            {
                name: "Taman Nasional Tanjung Puting",
                description_id:
                "Salah satu tempat terbaik di dunia untuk melihat orangutan liar. Pengunjung menyusuri sungai dengan perahu klotok untuk pengalaman tak terlupakan.",
                description_en:
                "One of the best places in the world to see wild orangutans. Visitors cruise the river on a klotok boat for an unforgettable experience.",
                image: "https://osccdn.medcom.id/images/content/2021/07/21/455b8df2109634c9553887df7b3ed02f.jpg",
                gmaps_link: "https://maps.app.goo.gl/KHaWjc7p8MFmEay78",
            },
            ],
        },
        "Sulawesi Tenggara": {
            Wakatobi: [
            {
                name: "Taman Nasional Wakatobi",
                description_id:
                "Kawasan cagar biosfer dunia UNESCO yang menawarkan beberapa titik selam terbaik di Indonesia dengan terumbu karang yang luar biasa.",
                description_en:
                "A UNESCO World Biosphere Reserve offering some of Indonesia's best diving spots with extraordinary coral reefs.",
                image: "https://media.suara.com/pictures/970x544/2025/05/07/46474-taman-nasional-wakatobi-instagramcomatwisata-alam-indonesia.jpg",
                gmaps_link: "https://maps.app.goo.gl/dzxDupJrzGCrSA9c6",
            },
            ],
        },
        "Nusa Tenggara Barat": {
            "Lombok Timur": [
            {
                name: "Gunung Rinjani",
                description_id:
                "Gunung berapi tertinggi kedua di Indonesia, menawarkan jalur pendakian yang menantang dengan pemandangan danau kawah 'Segara Anak' yang spektakuler.",
                description_en:
                "The second highest volcano in Indonesia, offering a challenging trekking route with spectacular views of the 'Segara Anak' crater lake.",
                image: "https://kwriu.kemdikbud.go.id/wp-content/uploads/2017/04/Rinjani.jpg",
                gmaps_link: "https://maps.app.goo.gl/1iF46MXqWxdyUF218",
            },
            ],
        },
        Papua: {
            Jayawijaya: [
            {
                name: "Lembah Baliem",
                description_id:
                "Lembah indah di pegunungan Jayawijaya yang menjadi rumah bagi suku Dani, terkenal dengan festival budayanya yang unik.",
                description_en:
                "A beautiful valley in the Jayawijaya mountains, home to the Dani tribe, famous for its unique cultural festival.",
                image: "https://img.inews.co.id/media/1200/files/inews_new/2022/12/08/lembah_baliem_wamena.jpg",
                gmaps_link: "https://maps.app.goo.gl/QS7scNkcxhKxhf5K6",
            },
            ],
        },
        Aceh: {
            "Banda Aceh": [
            {
                name: "Masjid Raya Baiturrahman",
                description_id:
                "Masjid agung yang megah dan bersejarah, menjadi ikon kebanggaan masyarakat Aceh dan selamat dari tsunami 2004.",
                description_en:
                "A grand and historic great mosque, an icon of pride for the Acehnese people that survived the 2004 tsunami.",
                image: "https://www.djkn.kemenkeu.go.id/files/images/2022/11/Salinan_dari_KPKNL_BANDA_ACEH1.jpg",
                gmaps_link: "https://maps.app.goo.gl/eCBpuELkP57GT3hz7",
            },
            ],
            Sabang: [
            {
                name: "Monumen Kilometer Nol",
                description_id:
                "Tugu yang menandai titik paling barat Indonesia, sebuah destinasi simbolis di Pulau Weh dengan pemandangan laut yang menakjubkan.",
                description_en:
                "A monument marking the westernmost point of Indonesia, a symbolic destination on Weh Island with stunning sea views.",
                image: "https://www.safariwisata.co.id/wp-content/uploads/2021/06/monumen-kilometer-0-indonesia.jpg",
                gmaps_link: "https://maps.app.goo.gl/YSe48H6maQz1SmWH8",
            },
            ],
        },
        "Sumatera Barat": {
            Padang: [
            {
                name: "Pantai Air Manis (Batu Malin Kundang)",
                description_id:
                "Pantai yang terkenal dengan legenda Batu Malin Kundang, menawarkan pemandangan indah dan ombak yang tenang.",
                description_en:
                "A beach famous for the legend of the Malin Kundang stone, offering beautiful scenery and calm waves.",
                image: "https://responradio.com/wp-content/uploads/2023/12/Menelusuri-Keindahan-dan-Misteri-Batu-Malin-Kundang-di-Pantai-Air-Manis.jpg",
                gmaps_link: "https://maps.app.goo.gl/MmyaHBwYCH236vtQ7",
            },
            ],
            "Tanah Datar": [
            {
                name: "Istana Pagaruyung",
                description_id:
                "Replika istana Kerajaan Pagaruyung dengan arsitektur rumah gadang yang megah, pusat budaya Minangkabau.",
                description_en:
                "A replica of the Pagaruyung Kingdom palace with magnificent Rumah Gadang architecture, a center of Minangkabau culture.",
                image: "https://wonderfulimage.s3-id-jkt-1.kilatstorage.id/1619677431-istana_pagaruyung-3-medium.jpg",
                gmaps_link: "https://maps.app.goo.gl/uA4KJw9ersTDZHFq9",
            },
            ],
        },
        "DKI Jakarta": {
            "Jakarta Pusat": [
            {
                name: "Monumen Nasional (Monas)",
                description_id:
                "Landmark ikonik ibukota Indonesia, simbol perjuangan bangsa dengan puncak emas dan museum sejarah di dasarnya.",
                description_en:
                "The iconic landmark of Indonesia's capital, a symbol of the nation's struggle with a golden flame on top and a history museum at its base.",
                image: "https://cozzy.id/uploads/0000/630/2024/09/04/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-monumen-nasional-monas-ikon-jakarta-yang-membanggakan-sumber-gambar-kompas.jpg",
                gmaps_link: "https://maps.app.goo.gl/s62rmhCPqHcNJHzZ6",
            },
            ],
            "Jakarta Utara": [
            {
                name: "Kota Tua Jakarta",
                description_id:
                "Kawasan bersejarah dengan arsitektur peninggalan kolonial Belanda, museum, dan suasana tempo dulu yang kental.",
                description_en:
                "A historic area with Dutch colonial heritage architecture, museums, and a strong old-town atmosphere.",
                image: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/wisata-kota-tua-jakarta-1-Wikipedia.jpg",
                gmaps_link: "https://maps.app.goo.gl/wWd3qwz8vx5V5JpG9",
            },
            ],
        },
        "Kalimantan Barat": {
            Pontianak: [
            {
                name: "Tugu Khatulistiwa",
                description_id:
                "Monumen yang menandai garis ekuator. Pengunjung dapat merasakan pengalaman berdiri di dua belahan bumi sekaligus.",
                description_en:
                "A monument marking the equator line. Visitors can experience standing in two hemispheres at once.",
                image: "https://getlost.id/wp-content/uploads/2021/10/tugu_1986129362.jpg",
                gmaps_link: "https://maps.app.goo.gl/E9voPPJ33ZaFdnkf8",
            },
            ],
            "Kapuas Hulu": [
            {
                name: "Taman Nasional Danau Sentarum",
                description_id:
                "Sistem danau musiman yang unik dan lahan basah yang luas, kaya akan keanekaragaman hayati flora dan fauna.",
                description_en:
                "A unique system of seasonal lakes and vast wetlands, rich in biodiversity of flora and fauna.",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiq-Lzf_N-AcSXk2gPISv640pWh2RsoJZuvSk_43Tzh1LG1AC4WJ5RiKkbA7CskpktwcN7pFzoW-YU90AZfe_MXcPB2Tg_rsxPPT1pQCYb0-Mga1NluPQuoGy90fKdZJgxii_8wjirwQd3seS7wU47IZIjfEH1-LJvHQGPIQ6LxAvIQL3Rq7hL0mk1Mjmv-/s640/taman-nasional-danau-sentarum8.jpg",
                gmaps_link: "https://maps.app.goo.gl/BYndvdCjb6YX4s279",
            },
            ],
        },
        "Sulawesi Selatan": {
            Makassar: [
            {
                name: "Pantai Losari",
                description_id:
                "Ikon kota Makassar, sebuah anjungan pantai yang ramai saat senja untuk menikmati matahari terbenam dan kuliner khas.",
                description_en:
                "The icon of Makassar city, a beach promenade that is bustling at dusk for enjoying the sunset and local culinary delights.",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDp2RlXSVUofPvdhPwiXDk772hgDA5Pot6Ls-vH1b-eWd5GKQ76UoRvhq93riUjkupR65FE_oUoNOin3ANT9C1wVexggnKAlI1FYabbBufkRkYRp2yCkwdSTE1emaRB6YBKPMaqv0kN2Q/w1200-h630-p-k-no-nu/Pantai-Losari.jpg",
                gmaps_link: "https://maps.app.goo.gl/8HJAr8F5r3mWPFei9",
            },
            ],
            "Tana Toraja Utara": [
            {
                name: "Desa Adat Kete Kesu'",
                description_id:
                "Desa tradisional Toraja yang terkenal dengan deretan rumah Tongkonan yang megah dan situs pemakaman kuno di tebing batu.",
                description_en:
                "A traditional Torajan village famous for its row of magnificent Tongkonan houses and ancient burial sites on stone cliffs.",
                image: "https://asset.kompas.com/crops/2GKzedlwe2KoiwXsajEHZ1Hhw7g=/0x0:2000x1333/1200x800/data/photo/2021/05/16/60a0afe9f01ce.jpg",
                gmaps_link: "https://maps.app.goo.gl/e6ftkKfeXL6eb7sr9",
            },
            ],
        },
        "Papua Barat Daya": {
            "Raja Ampat": [
            {
                name: "Puncak Pianemo",
                description_id:
                "Spot pemandangan ikonik di Raja Ampat yang menyajikan panorama gugusan pulau-pulau karst dari gardu pandang.",
                description_en:
                "An iconic viewpoint in Raja Ampat that presents a panoramic view of the karst island clusters from a viewing deck.",
                image: "https://statik.tempo.co/data/2021/10/17/id_1059231/1059231_720.jpg",
                gmaps_link: "https://maps.app.goo.gl/WKvYVM2VqueKc3VaA",
            },
            {
                name: "Desa Wisata Arborek",
                description_id:
                "Desa kecil yang ramah di Raja Ampat, dikelilingi oleh terumbu karang yang indah, sempurna untuk snorkeling.",
                description_en:
                "A small, friendly village in Raja Ampat, surrounded by beautiful coral reefs, perfect for snorkeling.",
                image: "https://cdn1-production-images-kly.akamaized.net/-mSQidnN2pn9kTU0XsAWgV6lDqg=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4042234/original/013758300_1654314241-shutterstock_743579182.jpg",
                gmaps_link: "https://maps.app.goo.gl/2MmJDeF6oWFxUYFJ7",
            },
            ],
        },
        "Kepulauan Riau": {
            Bintan: [
            {
                name: "Lagoi Bay",
                description_id:
                "Kawasan resort terpadu di Pulau Bintan dengan pantai berpasir putih yang indah, hotel mewah, dan berbagai aktivitas air.",
                description_en:
                "An integrated resort area on Bintan Island with beautiful white sandy beaches, luxury hotels, and various water activities.",
                image: "https://image.idn.media/post/20201118/123563206-356020875698010-3548550171428727286-n-08eed7fa6530aa7a1f8599aa1e3b1d2d.jpg",
                gmaps_link: "https://maps.app.goo.gl/hCUmH77bRfF7HiqA9",
            },
            ],
            Batam: [
            {
                name: "Jembatan Barelang",
                description_id:
                "Ikon Kota Batam, serangkaian enam jembatan megah yang menghubungkan beberapa pulau dengan pemandangan laut yang spektakuler.",
                description_en:
                "The icon of Batam City, a series of six magnificent bridges connecting several islands with spectacular sea views.",
                image: "https://rentalmobilbatam212.com/wp-content/uploads/2024/11/Keindahan-Senja-di-Jembatan-Barelang-Daya-Tarik-Utama-Batam-bagi-Wisatawan-dan-Warga-Lokal.jpg",
                gmaps_link: "https://maps.app.goo.gl/3UHSFwfUaGg9sHeA6",
            },
            ],
        },
        Jambi: {
            Kerinci: [
            {
                name: "Gunung Kerinci",
                description_id:
                "Gunung berapi tertinggi di Indonesia dan puncak tertinggi di Sumatera, bagian dari Taman Nasional Kerinci Seblat yang kaya akan biodiversitas.",
                description_en:
                "The highest volcano in Indonesia and the highest peak in Sumatra, part of the biodiversity-rich Kerinci Seblat National Park.",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Gunung_Kerinci.jpg",
                gmaps_link: "https://maps.app.goo.gl/8eWDzp3H54UwuJUB8",
            },
            ],
            "Muaro Jambi": [
            {
                name: "Candi Muaro Jambi",
                description_id:
                "Kompleks percandian Buddha terluas di Asia Tenggara, peninggalan Kerajaan Sriwijaya yang bersejarah.",
                description_en:
                "The largest Buddhist temple complex in Southeast Asia, a historical relic of the Srivijaya Kingdom.",
                image: "https://jambiprov.go.id/jambiprov-zxcvbnm/editor/gambar/Image/cmj.jpg",
                gmaps_link: "https://maps.app.goo.gl/g2QBBBXJC6MUUPNK9",
            },
            ],
        },
        Bengkulu: {
            Bengkulu: [
            {
                name: "Benteng Marlborough",
                description_id:
                "Benteng pertahanan peninggalan Inggris terbesar di Asia Tenggara, menghadap langsung ke Samudra Hindia.",
                description_en:
                "The largest British heritage fortress in Southeast Asia, directly facing the Indian Ocean.",
                image: "https://cdn1-production-images-kly.akamaized.net/ie2llMwDvAuYG8ZRicyyuHJzoy8=/500x500/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3053932/original/063127900_1582027253-bengkulu.jpg",
                gmaps_link: "https://maps.app.goo.gl/9mo1hbNyWHwhhQDCA",
            },
            ],
            Kepahiang: [
            {
                name: "Kebun Teh Kabawetan",
                description_id:
                "Perkebunan teh yang menghampar hijau di dataran tinggi, menawarkan udara sejuk dan pemandangan yang menenangkan.",
                description_en:
                "A vast green tea plantation in the highlands, offering cool air and calming scenery.",
                image: "https://cdn.rri.co.id/berita/26/images/1705720442478-O/grkfsu2xi25ud17.jpeg",
                gmaps_link: "https://maps.app.goo.gl/yeqsNE1HQYegVYY66",
            },
            ],
        },
        "Sumatera Selatan": {
            Palembang: [
            {
                name: "Jembatan Ampera",
                description_id:
                "Jembatan megah yang menjadi ikon Kota Palembang, melintasi Sungai Musi dengan pemandangan malam yang indah.",
                description_en:
                "A magnificent bridge that is the icon of Palembang City, crossing the Musi River with beautiful night views.",
                image: "https://klcstatic.kemenkeu.go.id/portal-bppk-uploads/admin_bdk_palembang/2022/12/13/image-20221213150740-1.png",
                gmaps_link: "https://maps.app.goo.gl/TovDf4xsayb1sbXX6",
            },
            ],
            "Pagar Alam": [
            {
                name: "Gunung Dempo",
                description_id:
                "Gunung tertinggi di Sumatera Selatan dengan perkebunan teh yang luas di kakinya, populer untuk pendakian.",
                description_en:
                "The highest mountain in South Sumatra with extensive tea plantations at its foot, popular for hiking.",
                image: "https://sumsel.jadesta.com/imgpost/97175.jpg",
                gmaps_link: "https://maps.app.goo.gl/4gxWkSQGjuCqfdz66",
            },
            ],
        },
        "Kalimantan Selatan": {
            Banjarbaru: [
            {
                name: "Pendulangan Intan Cempaka",
                description_id:
                "Area pertambangan intan tradisional di mana pengunjung dapat melihat langsung proses mendulang intan dari sungai.",
                description_en:
                "A traditional diamond mining area where visitors can see firsthand the process of panning for diamonds from the river.",
                image: "https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/pendulangan-intan-dan-permata-cempaka-2.jpeg",
                gmaps_link: "https://maps.app.goo.gl/RqTCXWPTfnnqaxUQA",
            },
            ],
            "Hulu Sungai Selatan": [
            {
                name: "Loksado (Bamboo Rafting)",
                description_id:
                "Petualangan menyusuri sungai Amandit dengan rakit bambu tradisional, melewati pemandangan hutan tropis yang asri.",
                description_en:
                "An adventure down the Amandit river on a traditional bamboo raft, passing through beautiful tropical forest scenery.",
                image: "https://cdn.antaranews.com/cache/1200x800/2023/06/05/IMG_20230605_133419_1.jpg",
                gmaps_link: "https://maps.app.goo.gl/vECxBTUqm8WX4mGQ8",
            },
            ],
        },
        "Kalimantan Utara": {
            Tarakan: [
            {
                name: "Hutan Mangrove dan Bekantan",
                description_id:
                "Kawasan konservasi di tengah kota Tarakan, menjadi habitat bagi monyet Bekantan yang berhidung panjang dan satwa lainnya.",
                description_en:
                "A conservation area in the middle of Tarakan city, serving as a habitat for the long-nosed Proboscis monkeys and other wildlife.",
                image: "https://cdn0-production-images-kly.akamaized.net/5MJVzr8bxJZCPmtWN3CE3klWkUQ=/0x84:1772x1082/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3654308/original/070532400_1638786628-KKMB9.jpg",
                gmaps_link: "https://maps.app.goo.gl/uVQp7yLDegk39QTq9",
            },
            ],
            Malinau: [
            {
                name: "Taman Nasional Kayan Mentarang",
                description_id:
                "Salah satu blok hutan hujan primer terbesar di Asia Tenggara, rumah bagi keanekaragaman hayati dan budaya suku Dayak.",
                description_en:
                "One of the largest primary rainforest blocks in Southeast Asia, home to rich biodiversity and Dayak tribal culture.",
                image: "https://biodiversitywarriors.kehati.or.id/files/media/image/thumb_715571the-krayan-river_copyright_andy-paul_5618667239.jpg",
                gmaps_link: "https://maps.app.goo.gl/4D4BEtYC8Mpmhr8M9",
            },
            ],
        },
        Gorontalo: {
            "Bone Bolango": [
            {
                name: "Taman Laut Olele",
                description_id:
                "Spot menyelam yang terkenal dengan terumbu karang Salvador Dali yang unik dan keanekaragaman biota laut yang kaya.",
                description_en:
                "A diving spot famous for its unique Salvador Dali sponge corals and rich marine biodiversity.",
                image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2025/02/21/4002392487.jpg",
                gmaps_link: "https://maps.app.goo.gl/KMNpy8ePLHdixKy96",
            },
            ],
            "Gorontalo Utara": [
            {
                name: "Pulau Saronde",
                description_id:
                "Pulau kecil berpasir putih yang indah dengan air laut yang jernih, cocok untuk berenang dan bersantai.",
                description_en:
                "A beautiful small island with white sand and clear seawater, perfect for swimming and relaxing.",
                image: "https://backpackerjakarta.com/wp-content/uploads/2017/03/sarondeislands.jpg",
                gmaps_link: "https://maps.app.goo.gl/cbws6aG2XdoVswbk6",
            },
            ],
        },
        "Sulawesi Tengah": {
            Poso: [
            {
                name: "Danau Poso",
                description_id:
                "Salah satu danau terdalam dan terindah di Indonesia, dengan air yang sangat jernih dan dikelilingi perbukitan hijau.",
                description_en:
                "One of the deepest and most beautiful lakes in Indonesia, with crystal clear water and surrounded by green hills.",
                image: "https://fdp.posokab.go.id/assets/foto/profil/danauposo.png",
                gmaps_link: "https://maps.app.goo.gl/bfF6f474MPdrhHGe6",
            },
            ],
            "Kepulauan Togean": [
            {
                name: "Taman Nasional Kepulauan Togean",
                description_id:
                "Gugusan pulau terpencil di Teluk Tomini, surga bagi penyelam dan pecinta snorkeling dengan terumbu karang yang masih alami.",
                description_en:
                "A remote cluster of islands in the Gulf of Tomini, a paradise for divers and snorkelers with pristine coral reefs.",
                image: "https://picture.triptrus.com/image/2014/06/taman-nasional-kepulauan-togean-1.jpeg",
                gmaps_link: "https://maps.app.goo.gl/WgWhJ6j2pGXmVe8y8",
            },
            ],
        },
        "Sulawesi Barat": {
            Mamuju: [
            {
                name: "Pulau Karampuang",
                description_id:
                "Pulau di seberang Kota Mamuju yang terkenal dengan sumur jodoh tiga rasa dan keindahan bawah lautnya.",
                description_en:
                "An island across from Mamuju City, famous for its 'three-flavored soulmate well' and its underwater beauty.",
                image: "https://jadesta.kemenparekraf.go.id/imgpost/132231.jpg",
                gmaps_link: "https://maps.app.goo.gl/KvGqWv7cp2FkWrHc8",
            },
            ],
            "Polewali Mandar": [
            {
                name: "Pulau Gusung Toraja",
                description_id:
                "Pulau pasir putih tak berpenghuni yang muncul di tengah laut, tempat yang sempurna untuk berfoto dan menikmati suasana laut lepas.",
                description_en:
                "An uninhabited white sand island that appears in the middle of the sea, a perfect place for photos and enjoying the open sea atmosphere.",
                image: "https://wartaevent.com/wp-content/uploads/2019/08/Gusung-Toraja-Island-Drone.jpg",
                gmaps_link: "https://maps.app.goo.gl/Y2yyd4kW7ZqHk2qm7",
            },
            ],
        },
        "Maluku Utara": {
            "Halmahera Barat": [
            {
                name: "Jailolo",
                description_id:
                "Teluk yang indah dengan pemandangan gunung berapi, terkenal dengan festival budaya tahunannya yang meriah.",
                description_en:
                "A beautiful bay with volcano views, famous for its lively annual cultural festival.",
                image: "https://asset.kompas.com/crops/Fhx_o4HrLjXOpOlvA8nS3as6w1Q=/0x0:2074x1383/750x500/data/photo/2019/10/07/5d9ae0a279b28.jpg",
                gmaps_link: "https://maps.app.goo.gl/BpHj6NgGs1ktmYdE9",
            },
            ],
            "Pulau Morotai": [
            {
                name: "Pulau Dodola",
                description_id:
                "Dua pulau yang terhubung oleh jembatan pasir putih saat laut surut, menciptakan pemandangan yang unik dan menakjubkan.",
                description_en:
                "Two islands connected by a white sand bridge at low tide, creating a unique and stunning landscape.",
                image: "https://www.jababekamorotai.com/wp-content/uploads/2019/08/1.jpg",
                gmaps_link: "https://maps.app.goo.gl/KBVsVKFwi3B59TsU8",
            },
            ],
        },
        "Papua Tengah": {
            Nabire: [
            {
                name: "Taman Nasional Teluk Cenderawasih",
                description_id:
                "Taman nasional laut terluas di Indonesia, tempat terbaik untuk berenang bersama hiu paus (whale shark) yang jinak.",
                description_en:
                "The largest marine national park in Indonesia, the best place to swim with gentle whale sharks.",
                image: "https://backpackerjakarta.com/wp-content/uploads/2017/07/TAMAN-NASIONAL-TELUK-CENDRAWASIH-PAPUA-5-birdsheadseascape.com_.jpg",
                gmaps_link: "https://maps.app.goo.gl/WDkhgS1n5KixHrrr8",
            },
            ],
            "Puncak Jaya": [
            {
                name: "Puncak Jaya (Carstensz Pyramid)",
                description_id:
                "Puncak tertinggi di Indonesia dan Oseania, salah satu dari Tujuh Puncak Dunia yang tertutup salju abadi.",
                description_en:
                "The highest peak in Indonesia and Oceania, one of the Seven Summits of the world, covered in eternal snow.",
                image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01j96cf0535nz6xfgpgn4kqnwz.jpg",
                gmaps_link: "https://maps.app.goo.gl/vECxBTUqm8WX4mGQ8",
            },
            ],
        },
        };

    const provinceSelect = document.getElementById('province-select');
    const citySelect = document.getElementById('city-select');
    const wisataContainer = document.getElementById('wisata-container');
    const resultsTitle = document.getElementById('results-title');

    function populateProvinces() {
        const provinces = Object.keys(tourismData).sort(); // Mengambil kunci LALU LANGSUNG MENGURUTKANNYA
        provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
    });
}

    function populateCities(province) {
        citySelect.innerHTML = `<option value="">${translations[currentLang].filter_city_option}</option>`;
        citySelect.disabled = true;
        if (province && tourismData[province]) {
            const cities = Object.keys(tourismData[province]);
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        }
    }

    function updateResultsTitle(province, city) {
        if (currentLang === 'en') {
            resultsTitle.textContent = `Recommendations in ${city}, ${province}`;
        } else {
            resultsTitle.textContent = `Rekomendasi di ${city}, ${province}`;
        }
    }

    function displayAttractions(province, city) {
        wisataContainer.innerHTML = '';
        updateResultsTitle(province, city);
        
        const attractions = tourismData[province][city];

        if (!attractions || attractions.length === 0) {
            wisataContainer.innerHTML = `<p class="placeholder">No tourism data available for this location.</p>`;
            return;
        }
        
        attractions.forEach((attraction, index) => {
            const link = document.createElement('a');
            link.href = attraction.gmaps_link;
            link.target = "_blank";
            link.className = "wisata-link";
            
            const card = document.createElement('div');
            card.className = 'wisata-card';
            
            const description = currentLang === 'en' ? attraction.description_en : attraction.description_id;

            card.innerHTML = `
                <img src="${attraction.image}" alt="${attraction.name}">
                <div class="wisata-card-content">
                    <h3>${attraction.name}</h3>
                    <p>${description}</p>
                </div>
            `;
            
            link.appendChild(card);
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('card-enter-animation');
            wisataContainer.appendChild(link);
        });
    }

    provinceSelect.addEventListener('change', function() {
        const selectedProvince = this.value;
        populateCities(selectedProvince);
        wisataContainer.innerHTML = `<p class="placeholder">${translations[currentLang].results_placeholder}</p>`;
        resultsTitle.textContent = translations[currentLang].results_title;
    });

    citySelect.addEventListener('change', function() {
        const selectedProvince = provinceSelect.value;
        const selectedCity = this.value;
        if (selectedCity) {
            displayAttractions(selectedProvince, selectedCity);
        } else {
            wisataContainer.innerHTML = `<p class="placeholder">${translations[currentLang].results_placeholder}</p>`;
            resultsTitle.textContent = translations[currentLang].results_title;
        }
    });

    // =======================================================
    // ANIMASI SCROLL DENGAN INTERSECTION OBSERVER
    // =======================================================
    const popularSection = document.querySelector('.popular-destinations');

    if (popularSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Jika elemen masuk ke viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.15 
        });

        observer.observe(popularSection);
    }

    // ======== SCROLL TO TOP ========
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if(scrollTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        scrollTopBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // --- Inisialisasi ---
    populateProvinces();

    setLanguage(localStorage.getItem('language') || 'id');
});