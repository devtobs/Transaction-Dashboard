document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen tab-item
  const tabItems = document.querySelectorAll(".tab-item");

  // Tambahkan event listener ke setiap tab-item
  tabItems.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Hapus kelas aktif dari semua tab-item
      tabItems.forEach((item) => {
        item.classList.remove("bg-primary-btn", "text-white");
        item.classList.add("bg-secondary-btn", "text-primary");
      });

      // Tambahkan kelas aktif ke tab yang diklik
      this.classList.remove("bg-secondary-btn", "text-primary");
      this.classList.add("bg-primary-btn", "text-white");

      // Dapatkan status dari teks tab yang dipilih
      const selectedStatus = this.querySelector("h3")
        .textContent.trim()
        .toLowerCase();

      // Ambil semua baris dalam tabel
      const tableRows = document.querySelectorAll("tbody tr");

      // Loop melalui setiap baris tabel
      tableRows.forEach((row) => {
        // Ambil status dari kolom "Status" di baris tersebut
        const rowStatusElement = row.querySelector(
          "td:nth-child(4) span:last-child"
        );
        const rowStatus = rowStatusElement.textContent.trim().toLowerCase();

        // Tampilkan atau sembunyikan baris berdasarkan status
        if (selectedStatus === "all trx" || rowStatus === selectedStatus) {
          row.style.display = ""; // Tampilkan baris
        } else {
          row.style.display = "none"; // Sembunyikan baris
        }
      });
    });
  });

  // Aktifkan tab pertama secara default saat halaman dimuat
  tabItems[0].click();
});
