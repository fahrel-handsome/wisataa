document.addEventListener('DOMContentLoaded', function() {
    
    // Kamus Terjemahan Diperbarui
    const translations = {
        "id": {
            "title_home": "Pesona Nusantara - Mau Kemana?",
            "title_about": "Tentang Indonesia - Pesona Nusantara",
            "title_gallery": "Galeri - Pesona Nusantara",
            "nav_home": "Mau Kemana?",
            "nav_about": "Tentang Indonesia",
            "nav_gallery": "Galeri",
            "hero_title_home": "Temukan Keindahan Tersembunyi Indonesia",
            "hero_subtitle_home": "Jelajahi setiap sudut negeri yang penuh pesona dari gunung megah hingga pantai tropis yang memikat",
            "hero_title_about": "Tentang Indonesia",
            "hero_subtitle_about": "Negara Kepulauan Zamrud Khatulistiwa",
            "hero_title_gallery": "Galeri Pesona Indonesia",
            "hero_subtitle_gallery": "Lihat Keindahan Indonesia Melalui Lensa",
            "filter_title": "Pilih Destinasi Anda",
            "filter_province": "Pilih Provinsi:",
            "filter_province_option": "-- Provinsi --",
            "filter_city": "Pilih Kota/Kabupaten:",
            "filter_city_option": "-- Kota/Kabupaten --",
            "results_title": "Hasil Rekomendasi",
            "results_placeholder": "Silakan pilih provinsi dan kota untuk melihat rekomendasi wisata.",
            "about_title_1": "Sekilas Tentang Indonesia",
            "about_p_1": "Indonesia adalah negara kepulauan terbesar di dunia yang terbentang dari Sabang hingga Merauke, dengan lebih dari 17.000 pulau yang membentuk jantung keanekaragaman alam dan budaya dunia. Dari puncak gunung berapi yang menjulang hingga laut biru yang menenangkan, Indonesia menawarkan keindahan yang tak tertandingi bagi siapa pun yang ingin menjelajahinya. Sebagai rumah bagi lebih dari 270 juta penduduk, Indonesia dikenal dengan keramahan warganya dan kekayaan tradisi yang melekat kuat di setiap daerah. Setiap pulau memiliki keunikan tersendiri-mulai dari tarian sakral di Bali, rumah adat unik di Sumatera, hingga festival budaya meriah di Sulawesi dan Papua.",
            "about_title_2": "Keanekaragaman Hayati",
            "about_p_2": "Indonesia terletak di garis khatulistiwa dan termasuk dalam wilayah “Cincin Api Pasifik”, menjadikannya salah satu negara dengan ekosistem paling menakjubkan di dunia. Hutan tropisnya menampung ribuan spesies flora dan fauna endemik, termasuk orangutan Kalimantan, komodo di Nusa Tenggara Timur, dan burung cendrawasih di Papua. Dengan lebih dari 50 taman nasional dan kawasan konservasi, Indonesia menjadi destinasi utama bagi para pecinta alam, peneliti, dan fotografer yang ingin menyaksikan langsung kekayaan kehidupan liar yang luar biasa.",
            "about_title_3": "Budaya dan Suku Bangsa",
            "about_p_3": "Keindahan Indonesia bukan hanya terletak pada alamnya, tetapi juga pada keanekaragaman budayanya. Terdapat lebih dari 1.300 suku bangsa dan ratusan bahasa daerah yang hidup berdampingan dengan harmonis. Setiap wilayah memiliki seni, musik, pakaian adat, dan kuliner khas yang mencerminkan jiwa masyarakatnya. Tradisi seperti upacara adat, batik, gamelan, dan tari-tarian menjadi bagian tak terpisahkan dari identitas bangsa. Dari upacara Nyepi di Bali hingga tradisi Tabuik di Sumatera Barat, Indonesia selalu menyuguhkan pengalaman budaya yang memikat hati setiap pengunjung.",
            "contact_details_title": "Detail Kontak",
            "contact_form_title": "Hubungi Kami",
            "form_placeholder_name": "Nama Anda",
            "form_placeholder_email": "Email Anda",
            "form_placeholder_subject": "Subjek",
            "form_placeholder_message": "Pesan Anda",
            "form_button_send": "Kirim Pesan",
            "form_success_message": "Pesan Anda telah berhasil terkirim. Terima kasih!",
            "form_error_message": "Gagal mengirim pesan. Mohon periksa kembali isian Anda.",
            "footer_text": "© 2025 Pesona Nusantara. Dibuat dengan Penuh Cinta."
        },
        "en": {
            "title_home": "Pesona Nusantara - Where to Go?",
            "title_about": "About Indonesia - Pesona Nusantara",
            "title_gallery": "Gallery - Pesona Nusantara",
            "nav_home": "Where to Go?",
            "nav_about": "About Indonesia",
            "nav_gallery": "Gallery",
            "hero_title_home": "Discover The Hidden Beauty",
            "hero_subtitle_home": "Explore Every Corner of Indonesia's Wonders",
            "hero_title_about": "About Indonesia",
            "hero_subtitle_about": "The Emerald Archipelago of the Equator",
            "hero_title_gallery": "Indonesian Charm Gallery",
            "hero_subtitle_gallery": "See the Beauty of Indonesia Through the Lens",
            "filter_title": "Choose Your Destination",
            "filter_province": "Select Province:",
            "filter_province_option": "-- Province --",
            "filter_city": "Select City/Regency:",
            "filter_city_option": "-- City/Regency --",
            "results_title": "Recommendation Results",
            "results_placeholder": "Please select a province and city to see travel recommendations.",
            "about_title_1": "A Glimpse of Indonesia",
            "about_p_1": "Indonesia is the world's largest archipelago, stretching from Sabang to Merauke, consisting of more than 17,000 islands that form the heart of global natural and cultural diversity. From towering volcanoes to tranquil blue seas, Indonesia offers unparalleled beauty for those who seek adventure and discovery. Home to over 270 million people, Indonesia is known for its warm hospitality and deeply rooted traditions. Every island tells its own story—from the sacred dances of Bali, the traditional houses of Sumatra, to the vibrant festivals of Sulawesi and Papua.",
            "about_title_2": "Biodiversity",
            "about_p_2": "Situated along the equator and part of the Pacific “Ring of Fire,” Indonesia boasts one of the most extraordinary ecosystems on Earth. Its tropical rainforests shelter thousands of endemic species such as the Bornean orangutan, the Komodo dragon of East Nusa Tenggara, and the bird-of-paradise from Papua. With more than 50 national parks and conservation areas, Indonesia is a haven for nature lovers, researchers, and photographers eager to witness the magnificent wildlife and biodiversity that thrive across its islands.",
            "about_title_3": "Culture and Ethnic Groups",
            "about_p_3": "Indonesia's beauty extends beyond its landscapes—it shines through its people and traditions. With over 1,300 ethnic groups and hundreds of local languages, the nation celebrates a mosaic of arts, music, crafts, and cuisines that embody the soul of its people. From the serene Nyepi festival in Bali to the lively Tabuik celebration in West Sumatra, each region offers a unique glimpse into Indonesia’s living heritage—an endless journey of colors, rituals, and stories.",
            "contact_details_title": "Contact Details",
            "contact_form_title": "Call Us",
            "form_placeholder_name": "Your Name",
            "form_placeholder_email": "Your Email",
            "form_placeholder_subject": "Subject",
            "form_placeholder_message": "Your Message",
            "form_button_send": "Send Message",
            "form_success_message": "Your message has been sent successfully. Thank you!",
            "form_error_message": "Failed to send message. Please check your inputs.",
            "footer_text": "© 2025 Pesona Nusantara. Made with Love."
        }
    };
    
    const langButton = document.getElementById('lang-button');
    const langOptions = document.querySelectorAll('.lang-dropdown a');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const flag = lang === 'id' ? 'https://flagcdn.com/id.svg' : 'https://flagcdn.com/gb.svg';
        langButton.querySelector('img').src = flag;
        langButton.querySelector('span').textContent = lang.toUpperCase();

        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if(translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);
    };

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang-code');
            setLanguage(selectedLang);
        });
    });

    // --- LOGIKA VALIDASI FORMULIR KONTAK ---
    const contactForm = document.getElementById('get-in-touch-form');
    if (contactForm) {
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form submit default

            // Sembunyikan pesan-pesan sebelumnya
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Ambil nilai dari setiap field
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Fungsi validasi email sederhana
            function isValidEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            // Validasi
            if (name === '' || email === '' || subject === '' || message === '') {
                errorMessage.style.display = 'block'; // Tampilkan pesan error jika ada yang kosong
            } else if (!isValidEmail(email)) {
                errorMessage.style.display = 'block'; // Tampilkan pesan error jika email tidak valid
            } else {
                successMessage.style.display = 'block'; // Tampilkan pesan sukses
                contactForm.reset(); // Kosongkan form setelah berhasil
            }
        });
    }

    // ======== KODE BARU: LOGIKA LIGHTBOX ========
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightboxClose = document.querySelector('.lightbox-close');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // ======== KODE BARU: LOGIKA HIGHLIGHT KATEGORI DARI URL ========
    const highlightCategory = () => {
        if (window.location.hash) {
            const category = window.location.hash.substring(1);
            const targetItem = document.querySelector(`.gallery-item[data-category="${category}"]`);
            
            if (targetItem) {
                targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetItem.classList.add('highlight');
                
                setTimeout(() => {
                    targetItem.classList.remove('highlight');
                }, 2500);
            }
        }
    };
    highlightCategory();

    // ======== KODE BARU: SCROLL TO TOP ========
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
    setLanguage(localStorage.getItem('language') || 'id');
});