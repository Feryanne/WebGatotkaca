// toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').
    onclick = () => {
        navbarNav.classList.toggle('active');
    };


// click diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
const sf = document.querySelector('.seacrhform');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const slideData = [
    { h2: "Gatot Kaca Group", h3: "Jaminan Kualitas Berakar Kuat Sejak 2010." },
    { h2: "Batu Alam", h3: "Sentuhan Alami untuk Keindahan Abadi." },
    { h2: "Supplier Genteng", h3: "Perlindungan Maksimal, Tahan Lama." },
    { h2: "Supplier Cat", h3: "Warna Terbaik untuk Setiap Ruangan Anda." },
    { h2: "Paving ", h3: "Kuat, Rapi, dan Siap Menopang Beban Berat." },
    { h2: "Plafon Modern", h3: "Estetika Langit-langit yang Cepat dan Bersih." }
];

let slideIndex = 1;
let slides;
let dots;
let timer;
let textContainer;

// Fungsi utama untuk menampilkan slide tertentu (n)
function showSlides(n) {
    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Reset dan atur class 'active'
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');

    // Suntikkan Teks Dinamis
    const currentData = slideData[slideIndex - 1];

    // Transisi Fade-out Teks
    textContainer.classList.remove('fade-in');

    // Isi konten teks baru setelah jeda pendek
    setTimeout(() => {
        textContainer.innerHTML = `
                    <h2>${currentData.h2}</h2> 
                    <h3>${currentData.h3}</h3>
                `;

        textContainer.classList.add('fade-in');
    }, 300);
}

// Fungsi Navigasi Panah Kiri/Kanan
function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
    autoShowSlides();
}

// Fungsi Navigasi Dot
function currentSlide(n) {
    clearTimeout(timer);
    slideIndex = n;
    showSlides(slideIndex);
    autoShowSlides();
}

// Fungsi Otomatisasi (Setiap 8 detik)
function autoShowSlides() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        autoShowSlides();
    }, 8000);
}

// INISIALISASI
window.onload = function () {
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    textContainer = document.getElementById('dynamic-text-content');

    if (slides.length > 0 && textContainer) {
        showSlides(slideIndex);
        autoShowSlides();
    } else {
        console.error("Gagal inisialisasi: Elemen carousel tidak ditemukan.");
    }
};

// About Section Read More Button

// >>> KODE  <<<
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('about-text-wrapper');

readMoreBtn.addEventListener('click', () => {
    moreText.classList.toggle('expanded');
    if (moreText.classList.contains('expanded')) {
        readMoreBtn.textContent = 'Lebih Sedikit';

    } else {
        readMoreBtn.textContent = 'Baca Selengkapnya';
    }
});

// >>> AKHIR <<<


// LOGIC CAROUSEL (GAYA PRODUK)
let currentScrollIndex = 0; 
let productCarousel;
let productCards;
let cardsPerView;
let totalCards;

function updateCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1200) {
        cardsPerView = 3;
    } else if (width >= 835) {
        cardsPerView = 3;
    } else if (width >= 451) {
        cardsPerView = 2;
    } else {
        cardsPerView = 1;
    }
}

function showproductCards(step) {
    if (!productCards || productCards.length === 0) return;
    totalCards = productCards.length;
    currentScrollIndex += step;
    if (currentScrollIndex < 0) {
    }
    if (currentScrollIndex > totalCards - cardsPerView) {
        currentScrollIndex = 0;
    }
    if (totalCards <= cardsPerView) {
        currentScrollIndex = 0;
    }
    const cardWidth = productCards[0].offsetWidth;
    const gap = 32;
    const offset = currentScrollIndex * (cardWidth + gap);
    productCarousel.style.transform = `translateX(-${offset}px)`;
}

function plusproductSlides(n) {
    showproductCards(n);
}

// FUNGSI UNTUK RESET POSISI CAROUSEL PADA RESIZE
function handleResize() {
    const oldCardsPerView = cardsPerView;
    updateCardsPerView();
    if (oldCardsPerView !== cardsPerView) {
        currentScrollIndex = 0;
    }
    showproductCards(0);
}

// Inisialisasi Carousel PORTOFOLIO
productCarousel = document.getElementById('productCarousel');
productCards = document.getElementsByClassName("product-card");

if (productCarousel && productCards.length > 0) {
    updateCardsPerView();
    showproductCards(0);
    window.addEventListener('resize', handleResize);
} else {
    console.error("Gagal inisialisasi: Elemen carousel PORTOFOLIO tidak ditemukan.");
}

        const productDetails = [
            { title: "Batu Alam Palimanan RTA", detail: "Dapatkan solusi estetika instan untuk dinding Anda hanya di Istana Batu Alam dan Genteng Gatot Kaca, Pusat Batu Alam dan Genteng Gatot Kaca di Pare-Kediri. Kami menyediakan Batu Alam RTA yang dirancang untuk pemasangan cepat namun tetap menjaga kualitas visual yang mewah dan premium. Dengan jaminan ketersediaan stok batu alam terbaik, kami memastikan Anda dapat menyelesaikan renovasi secara efisien tanpa mengorbankan kemewahan desain fasad Anda." },
            { title: "Genteng Karang Pilang Goodyear ITALY", detail: "Pilih perlindungan atap terbaik dengan Genteng Karang Pilang Goodyear Italy, tersedia lengkap di toko kami, Pusat Batu Alam dan Genteng Gatot Kaca di Pare-Kediri. Kami hanya menyediakan genteng dengan daya tahan superior yang telah teruji terhadap cuaca ekstrem. Kunjungi showroom kami di Pare-Kediri untuk melihat langsung keindahan desain klasik Italia yang akan meningkatkan nilai dan estetika properti Anda secara signifikan." },
            { title: "Batu Alam Andesit Bakar", detail: "Batu Alam Andesit Bakar adalah pilihan modern yang kami sediakan dengan kualitas potongan presisi, menjadikannya sangat anti-slip dan anti-lumut. Istana Batu Alam dan Genteng Gatot Kaca memastikan batu alam yang Anda beli adalah yang terbaik untuk investasi hardscape eksterior yang tahan lama. Temukan pilihan batu alam terbaik di Pare-Kediri hanya di toko kami." },
            { title: "Counter Cat Nippon Paint", detail: "Kunjungi Counter Resmi Nippon Paint terlengkap di toko kami di Pare-Kediri. Kami tidak hanya menjual batu alam dan genteng, tetapi juga menawarkan layanan tinting akurat oleh teknisi profesional. Dapatkan konsultasi mendalam mengenai jenis cat terbaik, memastikan Anda mendapatkan Nippon Paint yang tepat dengan harga kompetitif dan hasil yang memuaskan." },
            { title: "Genteng Keramik KIA cocobrown", detail: "Tambahkan sentuhan kehangatan dan kemewahan pada atap Anda dengan Genteng KIA Cocobrown. Sebagai Pusat Batu Alam dan Genteng Gatot Kaca, kami menyediakan genteng keramik yang kokoh ini untuk melengkapi berbagai konsep arsitektur. Percayakan kebutuhan genteng Anda pada kami di Pare-Kediri, dan dapatkan stok yang terjamin serta layanan pengiriman cepat." },
            { title: "Batu Alam Wall Cladding", detail: "Ciptakan dinding berkarakter dan artistik menggunakan Batu Alam Wall Cladding Slendang. Sebagai bagian dari koleksi Istana Batu Alam dan Genteng Gatot Kaca, kami memilih secara selektif untuk menjamin pola dan tekstur terbaik. Di toko batu alam kami, Anda bisa mendapatkan konsultasi gratis untuk menentukan komposisi cladding yang paling cocok, menjadikan dinding Anda titik fokus menawan di Pare-Kediri."},
            { title: "Menjual berbagai Macam Paving ", detail: "Kami bangga menjadi pusat penyedia paving terlengkap di wilayah Pare-Kediri dan sekitarnya. Kami menawarkan solusi hardscape total, dengan beragam bentuk dan ketebalan yang menjamin daya tahan beban superior. Kunjungi Istana Batu Alam dan Genteng Gatot Kaca sekarang dan temukan semua kebutuhan paving Anda, melengkapi koleksi batu alam dan genteng kami." },
            { title: "Menjual Berbagai Macam Granit", detail: "Tingkatkan kelas interior dan eksterior rumah Anda dengan koleksi granit premium kami. Sebagai supplier terpercaya di Pare-Kediri, kami menawarkan ragam motif dan finish granit yang cocok untuk lantai atau countertop. Selain batu alam dan genteng, kami menjamin ketersediaan stok balok besar dan layanan potong custom untuk menciptakan tampilan yang megah." }
        ];

        // Variabel untuk Modal & Lightbox
        let currentImageIndex = 0;
        let lightboxModal;
        let lightboxImage;
        let lightboxCaption;

                function handleResize() {
            const oldCardsPerView = cardsPerView;
            updateCardsPerView();
            
            if (oldCardsPerView !== cardsPerView) {
                currentScrollIndex = 0; 
            }
            
            showProductCards(0); 
        }

        function openModal(index) {
            const modal = document.getElementById('projectModal');
            const titleElement = document.getElementById('modalTitle');
            const detailElement = document.getElementById('modalDetail');
            
            const detail = productDetails[index];
            
            titleElement.textContent = detail.title;
            detailElement.textContent = detail.detail;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            const modal = document.getElementById('projectModal');
            modal.style.display = 'none';
        }

                window.onclick = function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeModal();
            }
            
            if (event.target === lightboxModal) {
                closeLightbox();
            }
        }

            window.openModal = openModal; 
            window.closeModal = closeModal; 

  
            window.openLightbox = openLightbox;         
            window.closeLightbox = closeLightbox;       
            window.plusLightboxSlides = plusLightboxSlides; 


             const galleryImages = [];
        for (let i = 1; i <= 27; i++) {
            galleryImages.push({
                src: `https://placehold.co/800x600/003366/ffffff?text=Foto+Proyek+${i}`,
                alt: `Foto Proyek Gatot Kaca #${i}`
            });
        }

         // Variabel untuk Gallery Carousel
        let currentGalleryPage = 0; 
        let galleryWrapper;
        const totalGalleryPages = 2; 

        // LOGIC GALERI FOTO PROYEK
        function showGalleryPage(step) {
            if (!galleryWrapper) return;
            
            currentGalleryPage += step;

            // Logika loop carousel
            if (currentGalleryPage >= totalGalleryPages) {
                currentGalleryPage = 0; 
            }
            if (currentGalleryPage < 0) {
                currentGalleryPage = totalGalleryPages - 1; 
            }
            
            const offset = currentGalleryPage * 100; // 100% per halaman
            
            galleryWrapper.style.transform = `translateX(-${offset}%)`;
        }

        function plusGallerySlides(n) {
            showGalleryPage(n);
        }

        //  * 2. Lightbox Modal (Popup untuk Galeri Foto)
        function openLightbox(index) {
            currentImageIndex = index;
            lightboxModal.style.display = "block";
            updateLightboxImage();
        }

        function closeLightbox() {
            lightboxModal.style.display = "none";
        }
        
        function updateLightboxImage() {
            const image = galleryImages[currentImageIndex];
            
            if (image) {
                lightboxImage.src = image.src;
                lightboxCaption.textContent = image.alt;
            } else {
                closeLightbox(); 
            }
        }
        
        function plusLightboxSlides(n) {
            currentImageIndex += n;
            
            if (currentImageIndex >= galleryImages.length) {
                currentImageIndex = 0; 
            } else if (currentImageIndex < 0) {
                currentImageIndex = galleryImages.length - 1; 
            }
            
            updateLightboxImage();
        }

        // Fungsi untuk menutup modal/lightbox ketika user mengklik di luar area
        window.onclick = function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeModal();
            }
            
            if (event.target === lightboxModal) {
                closeLightbox();
            }
        }



        // pop up untuk gallery
    function openLightGL(index) {
    currentImageIndex = index;

    // Pastikan elemen modal sudah terinisialisasi
    if (lightimgModal) {
        lightimgModal.style.display = "block"; 
        updateLightboxImage();
    }
}

        // INISIALISASI

            lightboxModal = document.getElementById('lightGLbox');
            lightboxImage = document.getElementById('light-img');
            lightboxCaption = document.getElementById('caption');


            galleryWrapper = document.getElementById('galleryGridWrapper');

            window.plusGallerySlides = plusGallerySlides; 
            window.openLightbox = openLightbox;         
            window.closeLightbox = closeLightbox;       
            window.plusLightboxSlides = plusLightboxSlides; 


//     function kirimPesanWhatsAppGatotKaca() {
//     const nomorTujuan = "6285706539356"; 

//     // 2. Ambil Nilai dari Form
//     const nama = document.getElementById('namaPemesan').value;
//     const proyek = document.getElementById('RencanaPembangunan').value;
//     const material = document.getElementById('KebutuhanMatrial').value;
//     const waPelanggan = document.getElementById('PesanKonsultasi').value;

//     // 3. Teks Pesan Template Khusus Material/Supplier
//     let pesan = `\n*PERMINTAAN\nKONSULTASI\nMATERIAL\n - GATOT KACA GROUP*
    
// Assalamualaikum/Salam, saya ingin menanyakan dan berkonsultasi mengenai kebutuhan material.

// *DETAIL KEBUTUHAN:*
// Nama Lengkap: ${nama}
// Jenis Proyek/Tujuan: ${proyek}
// Material Yang Dicari: ${material}
// Isi Pesan (Pelanggan): ${waPelanggan}

// Mohon segera dihubungi kembali untuk diskusi harga dan ketersediaan barang. Terima kasih.`;

//     const pesanEncoded = encodeURIComponent(pesan);

//     // 5. Buat URL wa.me
//     const urlWaMe = `https://wa.me/${6285706539356}?text=%${pesanEncoded}%`;

//     // 6. Buka Tab Baru atau Redirect
//     window.open(urlWaMe, '_blank'); 
// }


function kirimPesanWhatsAppGatotKaca() {
    // 1. Nomor Tujuan
    const nomorTujuan = "6285706539356"; 

    // 2. Ambil Nilai dari Form (Pastikan ID form sudah benar)
    const nama = document.getElementById('namaPemesan').value;
    const proyek = document.getElementById('RencanaPembangunan').value;
    const material = document.getElementById('KebutuhanMatrial').value;
    const waPelanggan = document.getElementById('PesanKonsultasi').value;

    // 3. Teks Pesan Template 
    let pesan = `PERMINTAAN KONSULTASI MATERIAL - GATOT KACA GROUP
Assalamualaikum/Salam, saya ingin menanyakan dan berkonsultasi mengenai kebutuhan material.

*DETAIL KEBUTUHAN:*
Nama Lengkap: ${nama}
Jenis Proyek/Tujuan: ${proyek}
Material Yang Dicari: ${material}
Isi Pesan (Pelanggan): ${waPelanggan}

Mohon segera dihubungi kembali untuk diskusi harga dan ketersediaan barang. Terima kasih.`;

    const pesanFormatted = pesan.replace(/\n/g, '%0A', );

    const pesanEncoded = encodeURIComponent(pesanFormatted);

    const finalPesanEncoded = encodeURIComponent(pesan);

    // const urlWaMe = `https://wa.me/${nomorTujuan}?text=${pesanEncoded}`; 
    const urlWaMe = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${finalPesanEncoded}`;

    window.open(urlWaMe, '_blank'); 
}