# Pesona Nusantara | Website Portal Wisata Indonesia 🇮🇩

![Status](https://img.shields.io/badge/status-complete-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Pesona Nusantara** adalah sebuah website portal pariwisata yang kaya fitur dan interaktif, dirancang untuk menampilkan keindahan destinasi di seluruh kepulauan Indonesia. Proyek ini dibangun sepenuhnya dari awal menggunakan **teknologi web fundamental (HTML, CSS, JavaScript)** untuk menunjukkan pemahaman yang kuat tentang pengembangan front-end.
### [➡️ Lihat Live Demo](https://fahrel-handsome.github.io/wisataa/index.html)

---

### Tampilan Proyek

<table>
  <tr>
    <td align="center"><strong>Halaman Utama dengan Video Background</strong></td>
    <td align="center"><strong>Galeri Foto dengan Efek Lightbox</strong></td>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/T2JJmD7.png" alt="Tampilan Halaman Utama"></td>
    <td><img src="https://i.imgur.com/zMdGce6.jpeg" alt="Tampilan Galeri Foto"></td>
  </tr>
  <tr>
    <td align="center"><strong>Formulir Kontak di Halaman About</strong></td>
    <td align="center"><strong>Tampilan Responsif di Mobile</strong></td>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/3ILk882.png" alt="Tampilan Formulir Kontak"></td>
    <td><img src="https://i.imgur.com/KgIns6i.jpeg" alt="Tampilan Mobile"></td>
  </tr>
</table>

### 📋 Daftar Isi

1.  [**Tujuan Proyek**](#-tujuan-proyek)
2.  [**Fitur Unggulan**](#-fitur-unggulan)
3.  [**Struktur & Arsitektur Proyek**](#-struktur--arsitektur-proyek)
    -   [Struktur File](#struktur-file)
    -   [Analisis Desain (CSS)](#analisis-desain-css)
    -   [Analisis Interaktivitas (JavaScript)](#analisis-interaktivitas-javascript)
4.  [**Tantangan & Solusi**](#-tantangan--solusi)
5.  [**Cara Menjalankan Proyek Secara Lokal**](#-cara-menjalankan-proyek-secara-lokal)
6.  [**Kredit & Lisensi**](#-kredit--lisensi)

---

### 🎯 Tujuan Proyek

-   **Mempromosikan Pariwisata:** Menjadi website yang menarik untuk memperkenalkan kekayaan alam dan budaya Indonesia kepada global.
-   **Mempermudah Perencanaan Perjalanan:** Menyediakan alat bantu yang bagi calon wisatawan lokal maupun mancanegara untuk mencari dan menemukan inspirasi tujuan liburan di Indonesia.
-   **Menunjukkan Kemampuan Teknis:** Membangun portofolio yang solid dengan mengimplementasikan berbagai fitur front-end modern menggunakan teknologi dasar.

---

### ✨ Fitur Unggulan

-   **Latar Belakang Video Dinamis:** Memberikan kesan pertama yang imersif dan modern di setiap halaman utama.
-   **Filter Destinasi Interaktif:**
    -   Dropdown **Provinsi** yang diurutkan secara abjad.
    -   Dropdown **Kota/Kabupaten** yang otomatis ter-update berdasarkan pilihan provinsi.
-   **Sistem Multi-bahasa (Indonesia & Inggris):**
    -   Mengubah semua konten teks secara dinamis tanpa me-reload halaman.
    -   Menyimpan preferensi bahasa pengguna di `localStorage` untuk konsistensi antar sesi.
-   **Galeri Foto Interaktif:**
    -   Efek **Lightbox** untuk melihat gambar dalam ukuran penuh dengan latar belakang gelap.
    -   Efek **Highlight** pada kategori gambar saat diakses dari link di halaman utama.
-   **Formulir Kontak Fungsional:**
    -   Validasi input *client-side* untuk memastikan semua kolom terisi dengan benar dan format email valid.
    -   Menampilkan pesan sukses atau gagal secara dinamis tanpa me-reload halaman.
-   **Desain Responsif & Modern:**
    -   Tampilan optimal di desktop, tablet, dan mobile menggunakan `@media queries`.
    -   Navbar _floating_ dengan efek _frosted glass_ (`backdrop-filter`).
-   **Pengalaman Pengguna (UX) Premium:**
    -   **Scroll Horizontal** pada bagian "Destinasi Populer" yang ramah sentuhan.
    -   **Animasi Saat Scroll** yang elegan menggunakan `IntersectionObserver API`.
    -   Tombol **"Scroll to Top"** untuk navigasi yang mudah.

---

### 🏗️ Struktur & Arsitektur Proyek

#### Struktur File

Proyek ini diorganisir dengan struktur yang bersih dan mudah dipahami, memisahkan konten (HTML), presentasi (CSS), dan logika (JavaScript).

```
pesona-nusantara/
├── images/             # Folder untuk semua gambar (bendera,foto yang ada di beranda)
│   ├── Arum.jpg
│   └── fahrel.jpg
│   └── fahrel1.jpg
│   └── favicon.png
│   └── haikal.jpg
├── videos/             # Folder untuk video background
│   └── background.mp4
│   └── background2.mp4
│   └── background3.mp4
├── index.html          # Halaman Utama
├── about.html          # Halaman Tentang & Kontak
├── gallery.html        # Halaman Galeri Foto
├── style.css           # File styling utama
├── script.js           # File JavaScript untuk index.html
├── translation.js      # File JavaScript untuk about.html & gallery.html
└── README.md           # Dokumentasi ini
```

#### Analisis Desain (CSS)

-   **Layout:** Menggunakan **Flexbox** untuk alignment (seperti di navbar dan filter) dan **CSS Grid** untuk layouting yang lebih kompleks (seperti `gallery-grid` dan `popular-container`). Kombinasi ini memberikan kontrol penuh atas tata letak.
-   **Styling Modern:** Menerapkan efek visual seperti `backdrop-filter` pada navbar untuk menciptakan efek _frosted glass_, `linear-gradient` untuk overlay pada kartu agar teks tetap terbaca, dan `box-shadow` untuk memberikan kedalaman.
-   **Animasi:** Menggunakan `@keyframes` untuk animasi `fadeInSlideUp` pada kartu dan `zoomIn` pada lightbox, serta `transition` untuk efek _hover_ yang halus pada hampir semua elemen interaktif.
-   **Responsivitas:** Aturan `@media (max-width: 768px)` digunakan secara ekstensif untuk mengubah `grid-template-columns`, `flex-direction`, dan ukuran font, memastikan pengalaman pengguna yang optimal di perangkat mobile.

#### Analisis Interaktivitas (JavaScript)

Logika JavaScript dipisahkan menjadi dua file untuk optimisasi:
-   **`script.js`:** Mengontrol semua fungsionalitas yang **hanya ada di `index.html`**, seperti sistem filter destinasi yang kompleks.
-   **`translation.js`:** Mengontrol fungsionalitas yang **dibagikan oleh halaman lain (`about.html`, `gallery.html`)**, seperti sistem terjemahan, validasi form, dan logika lightbox.

Interaksi utama yang diimplementasikan:

-   **Manipulasi DOM:**
    -   Secara dinamis **membuat (`createElement`)** dan **menambahkan (`appendChild`)** elemen `<option>` untuk dropdown provinsi dan kota.
    -   **Mengubah konten (`innerHTML`)** secara massal untuk sistem terjemahan dan saat menampilkan kartu wisata baru.
    -   **Memodifikasi atribut (`.src`, `.style`)** untuk mengubah gambar bendera, gambar lightbox, dan menerapkan `animationDelay` untuk efek *staggered*.

-   **Event Handling:**
    -   **`change`**: Menjadi pemicu utama fitur filter destinasi.
    -   **`click`**: Mengelola semua interaksi klik, mulai dari pemilihan bahasa, pembukaan lightbox, hingga tombol "Scroll to Top".
    -   **`scroll`**: Mengawasi posisi scroll halaman untuk menampilkan tombol "Scroll to Top".
    -   **`submit`**: Digunakan pada formulir kontak dengan `event.preventDefault()` untuk menghentikan perilaku default dan menjalankan validasi kustom.

---

### 💡 Tantangan & Solusi

-   **Tantangan:** Membuat deskripsi kartu wisata berubah secara instan saat bahasa diganti, tanpa me-reload halaman.
    -   **Solusi:** Memodifikasi fungsi `setLanguage()` untuk memanggil ulang fungsi `displayAttractions()` jika ada kartu yang sedang ditampilkan. Ini akan "menggambar ulang" kartu dengan deskripsi bahasa yang baru.

-   **Tantangan:** Memastikan pilihan bahasa tetap konsisten saat berpindah antar halaman yang menggunakan file JS berbeda.
    -   **Solusi:** Menyimpan pilihan bahasa di `localStorage` dan memastikan kedua file (`script.js` dan `translation.js`) memiliki logika inisialisasi yang sama untuk membaca nilai dari `localStorage` saat halaman dimuat.

---

### 🚀 Cara Menjalankan Proyek Secara Lokal

Untuk melihat dan menjalankan proyek ini di komputer:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/fahrel-handsome/wisataa.git]
    ```

2.  **Navigasi ke Folder Proyek**
    ```bash
    cd wisataa
    ```

3.  **Buka Halaman Web**
    - **Cara Sederhana:** Langsung buka file `index.html` dengan browser Anda (klik dua kali pada file).
    - **Cara yang Direkomendasikan:** Jika Anda menggunakan **Visual Studio Code**, instal ekstensi **"Live Server"**. Setelah terinstal, klik kanan pada file `index.html` dan pilih "Open with Live Server". Ini akan membuka server lokal dan me-reload halaman secara otomatis saat Anda menyimpan perubahan.

---

### 🙏 Kredit & Lisensi

-   Proyek ini dilisensikan di bawah **Lisensi MIT**.
-   **Gambar Destinasi:** Diambil dari berbagai sumber.
-   **Video Latar Belakang:** Diambil dari [Pexels](https://www.pexels.com/videos/).
-   **Ikon Bendera:** Disediakan oleh [Flag CDN](https://flagcdn.com/).
-   **Font:** **Poppins** dari [Google Fonts](https://fonts.google.com/).
