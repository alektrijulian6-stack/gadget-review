const phones = [
  {
    name: "Samsung Galaxy s25 Ultra",
    price: "Rp 22.595.000",
    specs: "Samsung S25 Ultra hadir dengan Snapdragon 8 Elite, layar Dynamic AMOLED 2X 6,9″ QHD+ 120 Hz, kamera quad 200 MP + 50 MP + 10 MP + 50 MP ultra-wide, baterai 5.000 mAh fast charge 45 W & wireless Qi2, RAM 12 GB (hingga 16 GB untuk varian 1 TB), IP68, S Pen, AI Galaxy, dan garansi update 7 tahun (Android 15 + One UI 7).",
    image: "samsung-galaxy-s25-ultra-sm-s938.jpg",
    link: "https://www.samsung.com/id/smartphones/galaxy-s25-ultra/buy/"
  },
  {
    name: "Xiaomi 15 Ultra",
    price: "Rp 12.400.000",
    specs: "Xiaomi 15 Ultra pakai Snapdragon 8 Elite, layar 6,73inch AMOLED 120Hz, kamera Leica 50MP+50MP+50MP+200MP periskop, kamera depan 32MP, baterai 5.410mAh fast charge 90W wireless 80W, RAM hingga 16GB+1TB, fitur IP68,",
    image: "xiaomi-15-ultra-.jpg",
    link: "https://www.mi.co.id/id/product/xiaomi-15-ultra/"
  },
  {
    name: "Infinix GT 30 Pro",
    price: "Rp 3.899.000",
    specs: "Infinix GT 30 Pro memakai chipset Dimensity 8350 dengan layar 6,78inch AMOLED 144Hz, kamera 108MP + 8MP + 13MP, baterai 5.500mAh fast charge 45W dan wireless 30W, RAM hingga 12GB+512GB, fitur gaming trigger L1/R1 dan lampu RGB",
    image: "infinix-gt30-pro.jpg",
    link: "https://wap.id.infinixmobility.com/gt-30-pro"
  },
  {
    name: "Realme GT 7T",
    price: "Rp 7.000.000",
    specs: "Realme GT 7T hadir dengan prosesor MediaTek Dimensity 8400‑Max, layar 6,8″ AMOLED 120 Hz (puncak 6.000 nits), kamera belakang 50 MP + 8 MP, kamera depan 32 MP, baterai jumbo 7.000 mAh dengan fast charge 120 W, RAM hingga 12 GB + storage 512 GB, sertifikasi IP68/IP69, serta Android 15 (Realme UI 6).",
    image: "realme-gt-7t.jpg",
    link: "https://www.realme.com/id/realme-gt-7t-5g"
  },
  {
    name: "Xiaomi Poco X7 Pro",
    price: "Rp 4.799.000",
    specs: "Poco X7 Pro dibekali Dimensity 8400 Ultra, layar AMOLED 6,67″ 1.5K 120 Hz 3.200 nits, RAM hingga 12 GB + UFS 4.0, dual-kamera 50 MP + 8 MP, baterai 6.000 mAh Fast Charge 90 W, NFC, IP68, Android 15 (HyperOS 2).",
    image: "xiaomi-poco-x7-pro.jpg",
    link: "https://www.mi.co.id/id/product/poco-x7-pro/"
  },
  {
    name: "Iqoo Neo10",
    price: "Rp 7.499.000",
    specs: "iQOO Neo 10 pakai Snapdragon 8s Gen 4, layar AMOLED 6,78″ 1.5K 144 Hz, kamera belakang 50 MP+8 MP, selfie 32 MP, baterai 7.000 mAh 120 W, RAM hingga 16 GB + storage 512 GB, IP65, dan Android 15.",
    image: "vivo-iqoo-neo-10.jpg",
    link: "https://www.iqoo.com/id/products/iqoo-neo10"
  },
  {
    name: "Xiaomi Poco F7",
    price: "Rp 5.599.000",
    specs: "POCO F7 pakai chipset Snapdragon 8s Gen 4, layar AMOLED 6,83″ 1.5K 120 Hz (peak 3.200 nits), RAM 12 GB + storage 256/512 GB, baterai 6.500 mAh dengan fast charge 90 W dan reverse charge 22,5 W, kamera utama Sony 50 MP + ultra‑wide 8 MP + selfie 20 MP, IP68/IP69, HyperOS 2 (Android 15).",
    image: "xiaomi-poco-f7-new.jpg",
    link: "https://www.mi.co.id/id/product/poco-f7/"
  },
  {
    name: "Tecno Camon 40 Pro",
    price: "Rp 4.200.000",
    specs: "Tecno Camon 40 Pro hadir dengan chipset MediaTek Dimensity 7300‑Ultimate, layar 6,78″ AMOLED 120 Hz ber-Gorilla Glass 7i dengan sertifikasi IP68/IP69, dual-camera 50 MP OIS + 8 MP ultrawide, kamera selfie 50 MP, baterai 5.200 mAh fast charge 45 W, RAM 8/12 GB + 256 GB, Android 15 (HiOS 15).",
    image: "tecno-camon-40-pro-5g.jpg",
    link: "https://www.tecno-mobile.com/id/phones/product-detail/product/camon-40-pro-5g/"
  },
  {
    name:"Oppo A5 Pro",
    price:"Rp 4.289.000",
    specs:"OPPO A5 Pro (4G/5G) hadir dengan layar LCD 6,67″ 90–120 Hz, chipset Snapdragon 6s Gen 1 (4G) atau Dimensity 6300 (5G), RAM 8 GB + 128/256 GB (ekspansi microSD), kamera belakang 50 MP + 2 MP, depan 8 MP, baterai 5.800 mAh fast‑charge 45 W, sertifikasi IP68/IP69, Gorilla Glass 7i, ColorOS 15 (Android 15).",
    image:"oppo-a5-pro-int.jpg",
    link: "https://www.oppo.com/id/product/oppo-a5-pro-5g.P.P1100085"
  },
  {
    name:"Infinix Note 50 Pro",
    price:"Rp 2.739.000",
    specs:"Infinix Note 50 Pro pakai Helio G100 Ultimate, layar 6,78″ AMOLED 144 Hz 1300 nits, kamera 50 MP OIS + 8 MP ultrawide + selfie 32 MP, baterai 5.200 mAh fast charge 90 W & wireless 30 W, RAM hingga 12 GB + 256 GB (ekspansi RAM virtual), IP64, AI Lighting & sensor kesehatan Halo, Android 15 (XOS 15).",
    image:"infinix-note50-pro.jpg",
    link: "https://wap.id.infinixmobility.com/note-50-pro"
  },
  {
    name:"Iqoo Z10",
    price:"Rp 4.699.000",
    specs:"iQOO Z10 mengusung Snapdragon 7s Gen 3, layar AMOLED 6,77″ 120 Hz (peak 5.000 nits), RAM hingga 12 GB + storage 512 GB, baterai jumbo 7.300 mAh dengan fast charge 90 W + reverse charge, kamera 50 MP OIS + 2 MP depth + selfie 32 MP, sertifikasi IP65 & MIL‑STD‑810H, Android 15 (Funtouch OS 15), berat 199 g.",
    image:"vivo-iqoo-z10.jpg",
    link: "https://www.iqoo.com/my/products/z10-5g"
  },
  {
    name:"Asus Rog Phone 9 Pro",
    price:"Rp 16.299.000",
    specs:"ASUS ROG Phone 9 Pro hadir dengan Snapdragon 8 Elite, layar AMOLED 6,78″ FHD+ LTPO hingga 185 Hz, RAM 16–24 GB + storage 512 GB–1 TB, kamera 50 MP + 32 MP tele + 13 MP ultrawide, baterai 5.800 mAh fast charge 65 W (plus wireless 15 W), pendingin AeroActive Cooler X Pro, port audio 3,5 mm, IP68.",
    image:"asus-rog-phone-9-pro.jpg",
    link: "https://rog.asus.com/id/phones/rog-phone-9-pro/"
  },
  {
    name:"Samsung Galaxy A56",
    price:"Rp 7.000.000",
    specs:"Samsung Galaxy A56 5G menggunakan chipset Exynos 1580, layar Super AMOLED 6,7″ FHD+ 120 Hz (peak 1.900 nits), RAM 8/12 GB + 128/256 GB, kamera belakang 50+12+5 MP + depan 12 MP, baterai 5.000 mAh fast charge 45 W, IP67, Android 15 (One UI 7) dengan 6 tahun update.",
    image:"samsung-galaxy-a56-.jpg",
    link: "https://www.samsung.com/id/smartphones/galaxy-a/galaxy-a56-5g-awesome-olive-256gb-sm-a566bzguxid/"
  },
    {
    name:"Samsung Galaxy A36",
    price:"Rp 5.499.000",
    specs:"Samsung Galaxy A36 5G hadir dengan Snapdragon 6 Gen 3, layar Super AMOLED 6,7″ FHD+ 120 Hz (1.900 nits), RAM hingga 12 GB + storage 256 GB, triple-camera 50 MP OIS + 8 MP + 5 MP, selfie 12 MP, baterai 5.000 mAh fast charge 45 W, IP67, 6 tahun update Android 15 & One UI 7.",
    image:"samsung-galaxy-a36.jpg",
    link: "https://www.samsung.com/id/smartphones/galaxy-a/galaxy-a36-5g-awesome-black-256gb-sm-a366bzkuxid/buy/"
  },
  {
    name:"Samsung Galaxy A26",
    price:"Rp 3.949.000",
    specs:"Samsung Galaxy A26 5G hadir dengan layar 6,7″ FHD+ Super AMOLED 120 Hz (Gorilla Glass Victus+), chipset Exynos 1280/1380, RAM 6–8 GB + 128/256 GB (microSD), triple-camera 50 MP OIS + 8 MP + 2 MP, selfie 13 MP, baterai 5.000 mAh fast charge 25 W, sertifikasi IP67, 6 tahun update Android 15 + One UI 7.",
    image:"samsung-galaxy-a26.jpg",
    link: "https://www.samsung.com/id/smartphones/galaxy-a/galaxy-a26-5g-black-256gb-sm-a266bzkhxid/buy/?cid=id_pd_ppc_google_galaxy-a26_launch_043-mx-galaxy.a26-25q3-lc-r1-ppc-conv-w-cpc-kwb.na.a26-search.text-none-none-text-none-none_search-text-ads_brand.product-warm-none-20250410_none_none_none_conv_bap_keyword&gclsrc=aw.ds&gad_source=1&gad_campaignid=22429611835&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9BymsqKtCxlCnROay_m2tRScwFJKT-X4TtJMSapEw7WN52Xv7CEM8hoC2TQQAvD_BwE"
  },
  {
    name:"Samsung Galaxy A55",
    price:"Rp 5.630.000",
    specs:"Samsung Galaxy A55 5G hadir dengan chipset Exynos 1480, layar 6,6″ Super AMOLED FHD+ 120 Hz (peak 1.000 nits), RAM hingga 12 GB + 256 GB (plus microSD), kamera 50 MP OIS + 12 MP ultrawide + 5 MP macro, selfie 32 MP, baterai 5.000 mAh fast charge 25 W, IP67, stereo speaker, One UI 7 (Android 15) dengan dukungan update panjang, dan dimensi 161×77×8,2 mm seberat 213 g.",
    image:"samsung-galaxy-a55.jpg",
    link: "https://www.samsung.com/id/smartphones/galaxy-a/galaxy-a55-5g-awesome-iceblue-256gb-sm-a556elbcxid/"
  },
  {
    name:"Iphone 14",
    price:"Rp 9.699.000",
    specs:"layar Super Retina XDR OLED 6,1″ (2532×1170), chipset A15 Bionic, RAM 6 GB, dual-cam 12 MP, baterai ~3.279 mAh, Emergency SOS via satelit, iOS 16+.",
    image:"apple-iphone-14.jpg",
    link: "https://ibox.co.id/product/iphone-14-ibox-s8100074247"
  },
  {
    name:"Iphone 14 Pro Max",
    price:"Rp 17.499.000",
    specs:"layar 6,7″ LTPO Super Retina XDR 120 Hz, chipset A16 Bionic, RAM 6 GB, quad-cam 48 MP utama + tele + ultrawide, baterai ~4.323 mAh (29 jam video), Emergency SOS via satelit, iOS 16+, dan opsi penyimpanan hingga 1 TB.",
    image:"apple-iphone-14-pro-max-.jpg",
    link: "https://ibox.co.id/product/iphone-14-pro-max-ibox"
  },
  {
    name:"Iphone 15",
    price:"Rp 11.349.000",
    specs:"chip A16 Bionic, layar OLED Super Retina XDR 6,1″ 60 Hz dengan Dynamic Island & USB‑C, kamera ganda 48 MP + 12 MP ultrawide, baterai ~3.349 mAh, MagSafe & Qi2, dual eSIM, iOS (support dari iOS 17).",
    image:"apple-iphone-15.jpg",
    link: "https://ibox.co.id/product/iphone-15-ibox-s8100122762"
  },
  {
    name:"Iphone 15 Pro Max",
    price:"Rp 19.670.000",
    specs:"chip A17 Pro, layar LTPO OLED 6,7″ 120 Hz ProMotion + Always‑On + Dynamic Island, triple-camera 48 MP + 12 MP ultrawide + 12 MP periskop zoom 5×, baterai ~4.441 mAh (29 jam video), port USB‑C 3Gbps, bodi titanium & Action Button, RAM 8 GB, iOS 17+.",
    image:"apple-iphone-15-pro-max.jpg",
    link: "https://ibox.co.id/product/iphone-15-ibox-s8100122760"
  },
  {
    name:"Iphone 16",
    price:"Rp 14.499.000",
    specs:"menggunakan chip A18 (3 nm, 8 GB RAM), layar OLED Super Retina XDR 6,1″/6,7″, kamera utama 48 MP + ultrawide autofocus 48 MP, Wi‑Fi 7, Action Button & Camera Control, baterai ~3.561 mAh, USB‑C, dan dukungan AI “Apple Intelligence” di iOS 18+.",
    image:"apple-iphone-16.jpg",
    link: "https://ibox.co.id/product/IP-16-IB-CON"
  },
  {
    name:"Iphone 16 Pro Max",
    price:"Rp 33.249.000",
    specs:"chip A18 Pro (8 GB RAM), layar Super Retina XDR OLED 6,9″ 120 Hz Always‑On, kamera triple 48 MP utama + 48 MP ultrawide + 5× telefoto, Camera Control button, Wi‑Fi 7, USB‑C 3.2, desain titanium, peningkatan baterai hingga 33 jam video playback, dan dukungan Apple Intelligence.",
    image:"apple-iphone-16-pro-max.jpg",
    link: "https://ibox.co.id/product/IP-16PM-IB-CON-s8100102437"
  },
  {
    name: "Xiaomi Poco F7 Ultra",
    price: "Rp 7.999.000",
    specs: "Layar AMOLED 6.78 inci 1.5K 120Hz, Snapdragon 8 Gen 3, RAM 12GB/16GB, ROM 256GB/512GB, Kamera utama 50MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 32MP, Baterai 5000mAh 120W, MIUI 14 berbasis Android 14.",
    image: "xiaomi-poco-f7-ultra.jpg",
    link: "https://www.mi.com/global/poco-f7-ultra"
  },
  {
  name: "Xiaomi Poco F7 Pro",
  price: "Rp 6.999.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 120Hz, Snapdragon 8 Gen 3, RAM 12GB, ROM 256GB, Kamera utama 50MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 20MP, Baterai 5000mAh 120W, MIUI 14 Android 14.",
  image: "xiaomi-poco-f7-pro.jpg",
  link: "https://www.mi.co.id/id/product/poco-f7-pro/"
},
{
  name: "Xiaomi Redmi Note 14 Pro+",
  price: "Rp 5.499.000",
  specs: "Layar AMOLED 6.67 inci Full HD+ 120Hz, Dimensity 9200+, RAM 8GB/12GB, ROM 256GB/512GB, Kamera utama 200MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 16MP, Baterai 5000mAh 120W, MIUI 14 Android 14.",
  image: "xiaomi-redmi-note-14-pro-plus-5g-gl.jpg",
  link: "https://www.mi.co.id/id/product/redmi-note-14-pro-plus-5g/"
},
{
  name: "Xiaomi Redmi Note 14 Pro",
  price: "Rp 4.999.000",
  specs: "Layar AMOLED 6.67 inci Full HD+ 120Hz, Snapdragon 7s Gen 2, RAM 8GB, ROM 256GB, Kamera utama 200MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 16MP, Baterai 5000mAh 67W, MIUI 14 Android 14.",
  image: "xiaomi-redmi-note-14-pro-5g-gl.jpg",
  link: "https://www.mi.co.id/id/product/redmi-note-14-pro-5g/"
},
{
  name: "Xiaomi 15s Pro",
  price: "Rp 12.999.000",
  specs: "Layar LTPO AMOLED 6.73 inci QHD+ 120Hz, Snapdragon 8 Gen 3, RAM 12GB, ROM 512GB, Kamera utama 50MP (1 inch sensor) + 50MP ultrawide + 50MP telephoto, Kamera depan 32MP, Baterai 5000mAh 120W, HyperOS Android 14.",
  image: "xiaomi-15s-pro.jpg",
  link: "https://m.mi.com/commodity/detail/21305"
},
{
  name: "Xiaomi 15 Pro",
  price: "Rp 11.999.000",
  specs: "Layar LTPO AMOLED 6.73 inci QHD+ 120Hz, Snapdragon 8 Gen 3, RAM 12GB, ROM 256GB/512GB, Kamera utama 50MP (1 inch sensor) + 50MP ultrawide + 50MP telephoto, Kamera depan 32MP, Baterai 5000mAh 120W, HyperOS Android 14.",
  image: "xiaomi-15-pro.jpg",
  link: "https://www.mi.co.id/id/product/xiaomi-15/"
},
{
  name: "Xiaomi 15",
  price: "Rp 9.999.000",
  specs: "Layar AMOLED 6.36 inci Full HD+ 120Hz, Snapdragon 8 Gen 3, RAM 8GB/12GB, ROM 256GB, Kamera utama 50MP (OIS) + 12MP ultrawide + 10MP telephoto, Kamera depan 32MP, Baterai 4500mAh 67W, HyperOS Android 14.",
  image: "xiaomi-15.jpg",
  link: "https://www.mi.co.id/id/product/xiaomi-15/"
},
{
  name: "Xiaomi 14T Pro",
  price: "Rp 8.999.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 144Hz, Dimensity 9200+, RAM 12GB, ROM 512GB, Kamera utama 50MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 20MP, Baterai 5000mAh 120W, HyperOS Android 14.",
  image: "xiaomi-14t-pro.jpg",
  link: "https://www.mi.co.id/id/product/xiaomi-14t-pro/"
},
{
  name: "Xiaomi 14T",
  price: "Rp 7.499.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 120Hz, Dimensity 8200 Ultra, RAM 8GB, ROM 256GB, Kamera utama 50MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 20MP, Baterai 5000mAh 67W, HyperOS Android 14.",
  image: "xiaomi-14t.jpg",
  link: "https://www.mi.co.id/id/product/xiaomi-14t/specs/"
},
{
  name: "Xiaomi Poco F6 Pro",
  price: "Rp 6.999.000",
  specs: "Layar AMOLED 6.67 inci 2K 120Hz, Snapdragon 8 Gen 2, RAM 12GB, ROM 256GB/512GB, Kamera utama 50MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 16MP, Baterai 5000mAh 120W, MIUI 14 Android 14.",
  image: "xiaomi-poco-f6-pro.jpg",
  link: "https://www.po.co/global/product/poco-f6-pro/"
},
{
  name: "Xiaomi F6",
  price: "Rp 5.499.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 120Hz, Snapdragon 8s Gen 3, RAM 8GB, ROM 256GB, Kamera utama 50MP (OIS) + 8MP ultrawide, Kamera depan 16MP, Baterai 5000mAh 90W, MIUI 14 Android 14.",
  image: "xiaomi-poco-f6.jpg",
  link: "https://www.mi.co.id/id/product/poco-f6/"
},
{
  name: "Xiaomi Poco X6 Pro",
  price: "Rp 4.499.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 120Hz, Dimensity 8300 Ultra, RAM 8GB, ROM 256GB, Kamera utama 64MP (OIS) + 8MP ultrawide + 2MP macro, Kamera depan 16MP, Baterai 5000mAh 67W, MIUI 14 Android 14.",
  image: "xiaomi-poco-x6-pro.jpg",
  link: "https://www.mi.co.id/id/product/poco-x6-pro/"
},
{
  name: "Xiaomi 13T Pro",
  price: "Rp 7.999.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 144Hz, Dimensity 9200+, RAM 12GB, ROM 512GB, Kamera utama 50MP (OIS) + 50MP telephoto + 12MP ultrawide, Kamera depan 20MP, MIUI 14 Android 13, Baterai 5000mAh 120W.",
  image: "xiaomi-13t-pro.jpg",
  link: "https://www.mi.com/global/product/xiaomi-13t-pro-leica/"
},
{
  name: "Xiaomi 13T",
  price: "Rp 6.499.000",
  specs: "Layar AMOLED 6.67 inci 1.5K 144Hz, Dimensity 8200 Ultra, RAM 8GB, ROM 256GB, Kamera utama 50MP (OIS) + 50MP telephoto + 12MP ultrawide, Kamera depan 20MP, MIUI 14 Android 13, Baterai 5000mAh 67W.",
  image: "xiaomi-13t.jpg",
  link: "https://www.mi.co.id/id/product/xiaomi-13t-leica/"
},
  {
    name:"Realme GT7",
    price:"Rp 10.999.000",
    specs:"Realme GT 7 hadir dengan MediaTek Dimensity 9400e, layar 6,78″ LTPO AMOLED 120 Hz hingga 6.000 nits, RAM hingga 16 GB + storage 256/512 GB, triple-camera (50 MP OIS + 50 MP tele 2× + 8 MP ultrawide), selfie 32 MP, baterai 7.000 mAh dengan fast charge 120 W, pendingin graphene, IP69, Wi‑Fi 7, NFC, Android 15 (Realme UI 6) dengan 4 tahun OS + 6 tahun security updates.",
    image:"realme-gt-7.jpg",
    link: "https://www.realme.com/id/realme-gt-7-5g"
  },
  {
    name:"Realme 14",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"Realme C71",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"Realme 14T",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"Realme C75x",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"Realme C75",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  },
  {
    name:"",
    price:"",
    specs:"",
    image:"",
    link: ""
  }
];

let history = [];

function displayPhones(filteredPhones) {
  const phoneList = document.getElementById("phoneList");
  phoneList.innerHTML = "";

  filteredPhones.forEach(phone => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <img src="${phone.image}" alt="${phone.name}">
  <h3>${phone.name}</h3>
  <p><strong>Harga:</strong> ${phone.price}</p>
  <p><strong>Spesifikasi:</strong> ${phone.specs}</p>
  <a href="${phone.link}" target="_blank">Beli Sekarang</a>
`;
    phoneList.appendChild(card);
  });
}

function searchPhone() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  if (query.trim() !== "" && !history.includes(query)) {
    history.unshift(query);
    updateHistory();
  }

  const filtered = phones.filter(phone => phone.name.toLowerCase().includes(query));
  displayPhones(filtered);
}

function updateHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => {
      document.getElementById("searchInput").value = item;
      searchPhone();
    };
    historyList.appendChild(li);
  });
}

function clearHistory() {
  history = [];
  updateHistory();
}

// Tampilkan semua ponsel saat pertama kali dibuka
if(document.getElementById("phoneList")){
  displayPhones(phones);

  // Ambil parameter search dari URL
  const params = new URLSearchParams(window.location.search);
  const searchParam = params.get('search');

  if(searchParam){
    document.getElementById("searchInput").value = searchParam;
    searchPhone();
  }
}