document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
        {
            id: 1,
            name: "andesit bakaran1",
            img: "1.jpg",
            price: {
                "30x30cm=11/pkt": { price: 220000, isi: 11, satuan: "pcs" },
                "40x40cm=6/pkt": { price: 300000, isi: 6, satuan: "pcs" },
                "50x50cm=4/m²": { price: 300000, isi: 4, satuan: "pcs" },
                "30x30cm/pcs": { price: 20000, isi: 1, satuan: "pcs" },
                "40x40cm/pcs": { price: 50000, isi: 1, satuan: "pcs" },
                "50x50cm/pcs": { price: 75000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "30x30=11isi 40x40=6isi 50x50=4isi"
        },
        {
            id: 2,
            name: "andesit bakaran2",
            img: "2.jpg",
            price: {
                "30x30cm tebal=11/pkt": { price: 400000, isi: 11, satuan: "pcs" },
                "30x30cm tebal/pcs": { price: 36500, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "30x30cm tebal=11pcs"
        },
        {
            id: 3,
            name: "Andesit Bakaran3",
            img: "3.jpg",
            price: {
                "20x20cm=25isi/m²": { price: 220000, isi: 25, satuan: "pcs" },
                "15x30cm=22isi/pkt": { price: 220000, isi: 22, satuan: "pcs" },
                "20x40cm=12isi/pkt": { price: 220000, isi: 12, satuan: "pcs" },
                "30x60cm=5isi/pkt": { price: 250000, isi: 5, satuan: "pcs" },
                "10x20cm=50isi/m²": { price: 220000, isi: 50, satuan: "pcs" },
                "20x20cm/pcs": { price: 20000, isi: 1, satuan: "pcs" },
                "15x30cm/pcs": { price: 10000, isi: 1, satuan: "pcs" },
                "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" },
                "30x60cm/pcs": { price: 50000, isi: 1, satuan: "pcs" },
                "10x20cm/pcs": { price: 4500, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "Kami menjual dengan bilangan bulat permeter"
        },
        {
            id: 4,
            name: "Andesit Bakar4",
            img: "4.jpg",
            price: {
                "60x60cm/pcs": { price: 100000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "60x60=3pcs"
        },
        {
            id: 5,
            name: "And. Motif matahari",
            img: "5.jpg",
            price: {
                "15x30cm=22/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40cm=12/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30cm/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30=22pcs 20x40=12pcs"
        },
        {
            id: 6,
            name: "Andesit catur",
            img: "6.jpg",
            price: {
                "15x30=22/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40=12/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                "20x40/pcs": { price: 20000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30=22pcs 20x40=12pcs"
        },
        {
            id: 7,
            name: "Andesit minimalis napoli",
            img: "7.jpg",
            price: {
                "15x30=22isi/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40=12isi/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                "20x40/pcs": { price: 20000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30=22pcs 20x40=12pcs"
        },
        {
            id: 8,
            name: "Andesit minimalis rel",
            img: "8.jpg",
            price: {
                "15x30=22pcs/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40=12pcs/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                "20x40/pcs": { price: 20000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30=22pcs 20x40=12pcs"
        },
        {
            id: 9,
            name: "andesit alur",
            img: "9.jpg",
            price: {
                "20x40cm=12pcs alur5cm/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "20x40cm=12pcs alur2cm/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "20x40cm=12pcs alur1cm/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30cm=22pcs alur1cm/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40cm/pcs alur5cm": { price: 20000, isi: 1, satuan: "pcs" },
                "20x40cm/pcs alur2cm": { price: 20000, isi: 1, satuan: "pcs" },
                "20x40cm/pcs alur1cm": { price: 20000, isi: 1, satuan: "pcs" },
                "15x30cm/pcs alur1cm": { price: 10500, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30=22isi 20x40=12isi"
        },
        {
            id: 10,
            name: "Andesit Napoli",
            img: "10.jpg",
            price: {
                "15x30cm=12isi/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "20x40cm=12isi/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                "20x40/pcs": { price: 20000, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 15x30cm=12pcs 20x40cm=12pcs"
        },
        {
            id: 11,
            name: "Andesit Polos",
            img: "11.jpg",
            price: {
                "20x40cm=12isi/pkt": { price: 235000, isi: 12, satuan: "pcs" },
                "15x30cm=22isi/pkt": { price: 235000, isi: 22, satuan: "pcs" },
                "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" },
                "15x30cm/pcs": { price: 10500, isi: 1, satuan: "pcs" }
            },
            size: "",
            description: "ukuran 20x40cm=12isi 15x30cm=22isi"
        },
          {
              id: 12,
              name: "Susun siri warna",
              img: "12.jpg",
              price: {
                  "18x50cm=11pcs/pkt": { price: 300000, isi: 11, satuan: "pcs" },
                  "18x50cm/pcs": { price: 27500, isi: 1, satuan: "pcs" }
              },
              size: "",
              description: "18x50cm=11pcs"
          },
          {
              id: 13,
              name: "Candi",
              img: "13.jpg",
              price: {
                  "10x20cm=50isi/m²": { price: 220000, isi: 50, satuan: "pcs" },
                  "15x30cm=22isi/pkt": { price: 220000, isi: 22, satuan: "pcs" },
                  "20x40cm=12isi/pkt": { price: 220000, isi: 12, satuan: "pcs" },
                  "10x20cm/pcs": { price: 4500, isi: 1, satuan: "pcs" },
                  "15x30cm/pcs": { price: 10000, isi: 1, satuan: "pcs" },
                  "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" }
              },
              size: "",
              description: "Kami menjual dengan bilangan bulat permeter"
          },
          {
              id: 14,
              name: "Andesit catur",
              img: "14.jpg",
              price: {
                  "10x20cm=50isi/m²": { price: 220000, isi: 50, satuan: "pcs" },
                  "15x30cm=22pcs/pkt": { price: 220000, isi: 22, satuan: "pcs" },
                  "20x40cm=12pcs/pkt": { price: 220000, isi: 12, satuan: "pcs" },
                  "10x20cm/pcs": { price: 4500, isi: 1, satuan: "pcs" },
                  "15x30cm/pcs": { price: 10000, isi: 1, satuan: "pcs" },
                  "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" }
              },
              size: "",
              description: "ukuran 10x20=50pcs 15x30=22isi 20x40=12pcs"
          },
          {
              id: 15,
              name: "Palimanan RTM rata samping",
              img: "15.jpg",
              price: {
                  "15x30cm=22isi/pkt": { price: 220000, isi: 22, satuan: "pcs" },
                  "20x40cm=22isi/pkt": { price: 220000, isi: 22, satuan: "pcs" },
                  "15x30cm/pcs": { price: 10500, isi: 1, satuan: "pcs" },
                  "20x40cm/pcs": { price: 20000, isi: 1, satuan: "pcs" }
              },
              size: "",
              description: "15x30cm=22pcs 20x40cm=22pcs"
          },
          {
              id: 16,
              name: "Palimanan motif",
              img: "16.jpg",
              price: {
                  "20x40cm=12pcs/pkt pal.napoli": { price: 235000, isi: 12, satuan: "pcs" },
                  "20x40cm=12pcs/pkt pal.gelombang": { price: 265000, isi: 12, satuan: "pcs" },
                  "20x40cm/pcs pal.napoli": { price: 20000, isi: 1, satuan: "pcs" },
                  "20x40cm/pcs pal.gelombang": { price: 22000, isi: 1, satuan: "pcs" }
              },
              size: "",
              description: "20x40cm=12pcs pal.napoli dan pal.gelombang"
          },
          {
              id: 17,
              name: "RTA Rata Alam",
              img: "17.jpg",
              price: {
                  "10x20cm=50pcs/m² andesit": { price: 200000, isi: 50, satuan: "pcs" },
                  "10x20cm=50pcs/m² palimanan": { price: 190000, isi: 50, satuan: "pcs" }
              },
              size: "",
              description: "10x20cm=50pcs/m² andesit dan palimanan"
          },
          {
              id: 18,
              name: "Susun siri biasa",
              img: "18.jpg",
              price: {
                  "5x40cm=50pcs/m² palimanan": { price: 190000, isi: 50, satuan: "pcs" },
                  "5x40cm=50pcs/m² andesit": { price: 190000, isi: 50, satuan: "pcs" },
                  "3x30cm=111pcs/pkt andesit": { price: 190000, isi: 111, satuan: "pcs" }
              },
              size: "",
              description: "5x40cm=50pcs/m² palimanan dan andesit, 3x30cm=111pcs"
          },
          {
              id: 19,
              name: "Koral/karung",
              img: "19.jpg",
              price: {
                  "hitam/14kg": { price: 100000, isi: 1, satuan: "karung" },
                  "putih/14kg": { price: 100000, isi: 1, satuan: "karung" },
                  "pink/14kg": { price: 100000, isi: 1, satuan: "karung" },
                  "merah hati/14kg": { price: 100000, isi: 1, satuan: "karung" }
              },
              size: "",
              description: "per karung, 14kg"
          },
          {
              id: 20,
              name: "Koral, pancawarna & italic per pack",
              img: "20.jpg",
              price: {
                  "koral/pack": { price: 40000, isi: 1, satuan: "pack" },
                  "pancawarna/pack": { price: 65000, isi: 1, satuan: "pack" },
                  "italic/pack": { price: 65000, isi: 1, satuan: "pack" }
              },
              size: "",
              description: "Harga terjangkau per pack untuk koral, pancawarna, dan italic"
          }      
         ], // Tambahkan item lainnya sesuai kebutuhan...
     selectedItem: null,
     viewDetail(item) {
       this.selectedItem = item;
     },
     updatePrice(item, size) {
       if (item.price[size]) {
         item.size = size;
         const selectedPrice = item.price[size];
         item.selectedPrice = selectedPrice.price;
         item.selectedPcs = selectedPrice.isi;
       } else {
         item.selectedPrice = null;
         item.selectedPcs = null;
       }
       function rupiah(value) {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      }
      
     },
     addToCart(item) {
       if (!item.size) {
         alert("Silakan pilih ukuran terlebih dahulu.");
         return;
       }
       const selectedPrice = item.price[item.size];
       Alpine.store("cart").add({
         ...item,
         quantity: 1,
         total: selectedPrice.price,
         isiPerItem: selectedPrice.isi
       });
       this.selectedItem = null; // Tutup modal setelah menambahkan ke keranjang
     },
   }));
   const cartStore = {
    items: [],
    total: 0,
    totalIsi: 0,

    calculateTotals() {
        this.total = this.items.reduce((sum, item) => {
            item.total = item.quantity * item.price[item.size].price;
            return sum + item.total;
        }, 0);

        this.totalIsi = this.items.reduce((sum, item) => {
            return sum + (item.quantity * item.price[item.size].isi);
        }, 0);
    },

    increment(id, size) {
        const item = this.items.find(i => i.id === id && i.size === size);
        if (item) {
            item.quantity++;
            this.calculateTotals();
        }
    },

    decrement(id, size) {
        const item = this.items.find(i => i.id === id && i.size === size);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.calculateTotals();
        }
    },

    remove(id, size) {
        this.items = this.items.filter(i => !(i.id === id && i.size === size));
        this.calculateTotals();
    }
};
   Alpine.store("cart", {
    items: [],
    quantity: 0,
    total: 0,
    totalIsi: 0,
    add(item) {
      if (!item.size) {
        alert("Silakan pilih ukuran terlebih dahulu.");
        return;
      }
      const existingItem = this.items.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );
      if (existingItem) {
        this.increment(item.id, item.size);
      } else {
        const itemPrice = item.price[item.size].price;
        const itemIsi = item.price[item.size].isi;
        this.items.push({
          ...item,
          quantity: 1,
          total: itemPrice,
          totalIsi: itemIsi,
        });
        this.quantity += 1;
        this.total += itemPrice;
        this.totalIsi += itemIsi;
      }
    },
    increment(itemId, size) {
      const item = this.items.find(
        (item) => item.id === itemId && item.size === size
      );
      if (item) {
        const itemPrice = item.price[size].price;
        const itemIsi = item.price[size].isi;
        item.quantity += 1;
        item.total += itemPrice;
        item.totalIsi += itemIsi;
        this.quantity += 1;
        this.total += itemPrice;
        this.totalIsi += itemIsi;
      }
    },
    decrement(itemId, size) {
      const item = this.items.find(
        (item) => item.id === itemId && item.size === size
      );
      if (item && item.quantity > 1) {
        const itemPrice = item.price[size].price;
        const itemIsi = item.price[size].isi;
        item.quantity -= 1;
        item.total -= itemPrice;
        item.totalIsi -= itemIsi;
        this.quantity -= 1;
        this.total -= itemPrice;
        this.totalIsi -= itemIsi;
      } else if (item) {
        this.remove(itemId, size);
      }
    },
    remove(itemId, size) {
      const itemToRemove = this.items.find(
        (item) => item.id === itemId && item.size === size
      );
      if (itemToRemove) {
        this.quantity -= itemToRemove.quantity;
        this.total -= itemToRemove.total;
        this.totalIsi -= itemToRemove.totalIsi;
        this.items = this.items.filter(
          (item) => item.id !== itemId || item.size !== size
        );
      }
    },
    isEmpty() {
      return this.items.length === 0;
    },
  });
  
  // Fungsi untuk memformat angka dalam format Rupiah
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
  };
  
  window.rupiah = rupiah;
  
  document.addEventListener("DOMContentLoaded", () => {
    const checkoutButton = document.querySelector("#checkout-button");
    const checkoutForm = document.querySelector("#checkout-form");
  
    if (checkoutButton && checkoutForm) {
      checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const name = encodeURIComponent(checkoutForm.querySelector("#name").value.trim());
        const phone = encodeURIComponent(checkoutForm.querySelector("#phone").value.trim());
        const status = encodeURIComponent(checkoutForm.querySelector("#status").value);
  
        if (name && phone && status) {
          const items = Alpine.store("cart").items.map((item) => {
            const satuan = item.price[item.size].satuan || '';
            return {
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              size: item.size,
              price: item.price[item.size].price,
              totalPrice: item.total,
              formattedTotal: rupiah(item.total),
              isi: item.price[item.size].isi * item.quantity,
              satuan: satuan
            };
          });
  
          const totalPrice = Alpine.store("cart").total;
          const formattedTotalPrice = rupiah(totalPrice);
          const totalIsi = Alpine.store("cart").totalIsi;
  
          let message = `Data customer%0A`;
          message += `Nama          : ${name}%0A`;
          message += `Nomor penerima: ${phone}%0A`;
          message += `Status        : ${status}%0A`;
          message += `Items:%0A`;
          items.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (${item.size}): ${rupiah(item.price)} (${item.isi} ${item.satuan}, ${item.quantity} Barang) = ${item.formattedTotal}%0A`;
          });
          message += `Total Harga: ${formattedTotalPrice}%0A`;
          message += `Total Isi: ${totalIsi} items`;
  
          const waNumber = "6287760064252";
          const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`;
  
          window.open(waUrl, "_blank").addEventListener("load", () => {
            window.location.href = "halaman-baru.html";
          });
        }
      });
  
      checkoutForm.addEventListener("input", () => {
        const name = checkoutForm.querySelector("#name").value.trim();
        const phone = checkoutForm.querySelector("#phone").value.trim();
        const status = checkoutForm.querySelector("#status").value;
  
        checkoutButton.disabled = !(name && phone && status);
      });
    }
  
    feather.replace();
  });
}); 