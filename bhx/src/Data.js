const list = [
    {
        name: "THỊT, CÁ, TRỨNG, HẢI SẢN",
        sub: ["Thịt các loại", "Cá,hải sản", "Trứng gà,vịt,cút"],
        id: 1,
    },
    {
        name: "RAU, CỦ, TRÁI CÂY",
        sub: ["Rau xanh các loại", "Củ các loại", "Trái cây các loại"],
        id: 2,
    },
    {
        name: "THỰC PHẨM ĐÔNG-MÁT",
        sub: ['Kem các loại', 'Xúc xích,lạp xưởng,chả lụa,cá-bò viên', 'Há cảo,sủi cảo'],
        id: 3,
    },
    {
        name: "MÌ, MIẾN, CHÁO, PHỞ",
        sub: ['Mì,Phở,Bún ăn liền', 'Hủ tiếu,miến, bánh canh', 'Cháo gói,cháo tươi'],
        id: 4,
    },
    {
        name: "GẠO, BỘT, ĐỒ KHÔ",
        sub: ['Gạo,bột các loại', 'Đồ hộp các loại', 'Đồ chay'],
        id: 5,
    },
    {
        name: "DẦU ĂN, NƯỚC CHẤM",
        sub: ['Dầu ăn', 'Đường các loại', 'Hạt nêm,bột ngọt,bột canh'],
        id: 6,
    },
    {
        name: "SỮA CÁC LOẠI",
        sub: ['Sữa tươi', 'Sữa chua uống liền', 'Sữa hạt,đậu,lúa mạch,ngũ cốc'],
        id: 7,
    },
    {
        name: "BIA, NƯỚC GIẢI KHÁT",
        sub: ['Bia,nước có cồn', 'Rượu các loại', 'Nước tăng lực,bù khoáng'],
        id: 8,
    },
    {
        name: "BÁNH KẸO CÁC LOẠI",
        sub: ['Bánh quy,bánh xốp', 'Bánh tươi,bánh mềm', 'Kẹo,mứt,thạch các loại'],
        id: 9,
    },
    {
        name: "SẢN PHẨM CHO MẸ VÀ BÉ",
        sub: ['Dầu tắm-gội cho bé', 'Giặt-xả cho bé', 'Bình sữa,khăn sữa, Đồ chơi...'],
        id: 10,
    },
    {
        name: "ĐỒ DÙNG GIA ĐÌNH",
        sub: ['Dầu tắm-gội cho bé', 'Giặt-xả cho bé', 'Bình sữa,khăn sữa, Đồ chơi...'],
        id: 40,
    },
    {
        name: "VỆ SINH NHÀ CỬA",
        sub: ['Dầu tắm-gội cho bé', 'Giặt-xả cho bé', 'Bình sữa,khăn sữa, Đồ chơi...'],
        id: 41,
    }
];

const data = [
    {
        content: 'Thịt heo các loại',
        image: require('../src/assets/image/thit-heo.png'),
        id: 11
    },
    {
        content: 'Kem các loại',
        image: require('../src/assets/image/kem.png'),
        id: 12
    },
    {
        content: 'Giấy vệ sinh',
        image: require('../src/assets/image/giay.png'),
        id: 13
    },
    {
        content: 'Nước giặt',
        image: require('../src/assets/image/nuoc-giat.png'),
        id: 14
    },
    {
        content: 'Mì ăn liền',
        image: require('../src/assets/image/mi.png'),
        id: 15
    },
    {
        content: 'Nước mắm',
        image: require('../src/assets/image/nuoc-mam.png'),
        id: 16
    },
    {
        content: 'Nước ngọt',
        image: require('../src/assets/image/nuoc-ngot.png'),
        id: 17
    },
    {
        content: 'Rau củ,trái cây',
        image: require('../src/assets/image/rau-cu.png'),
        id: 18
    },
    {
        content: 'Sữa tươi',
        image: require('../src/assets/image/sua.png'),
        id: 19
    }
];

const products = [
    {
        name: 'Bánh xốp nhân phô mai Nabati hộp 340g',
        image: require('../src/assets/image/banh-xop-nhan-pho-mai.png'),
        price: ' 39000 ',
        sale: '-15%',
        id: 20,
        newProduct: true
    },
    {
        name: 'Sữa tươi có đường Vinamilk Happy Star bịch 220ml',
        image: require('../src/assets/image/sua-dinh-duong.png'),
        price: ' 15000 ',
        sale: '-21%',
        id: 21,
        newProduct: true
    },
    {
        name: 'Hạt nêm chay nấm hương Knor gói 170g',
        image: require('../src/assets/image/hat-nem.png'),
        price: ' 30000 ',
        sale: '-24%',
        id: 22,
        newProduct: true
    },
    {
        name: 'Đường tinh luyện Lin gói 1kg',
        image: require('../src/assets/image/duong-tin.png'),
        price: ' 10000 ',
        sale: '-24%',
        id: 23,
        newProduct: true
    },
    {
        name: 'Nấm hải sản',
        image: require('../src/assets/image/nam-hai-san.png'),
        price: ' 38000 ',
        sale: '-24%',
        id: 24,
        newProduct: true
    },
    {
        name: 'Miến Phú Hương sườn 58g',
        image: require('../src/assets/image/mien-phu-huong.png'),
        price: ' 30000 ',
        sale: '-24%',
        id: 25,
        newProduct: true
    },
    {
        name: 'Sữa chua TH True Yogurt',
        image: require('../src/assets/image/sua-chua.png'),
        price: ' 30000 ',
        sale: '-24%',
        id: 26,
        newProduct: true
    },
    {
        name: 'Chả giò chay cao cấp nấm kim châm Phi Long hộp 500g',
        image: require('../src/assets/image/cha-gio-chay.png'),
        price: ' 60000 ',
        sale: '-24%',
        id: 27,
        newProduct: true
    },
    {
        name: 'Bánh xquy bơ Danisa hộp 340g',
        image: require('../src/assets/image/banh-danisa.png'),
        price: ' 139000 ',
        sale: '-15%',
        id: 28,
        type: "BÁNH KẸO CÁC LOẠI"
    },
    {
        name: 'Mít sấy Rộp Rộp gói 250g',
        image: require('../src/assets/image/mit.png'),
        price: ' 44000 ',
        sale: '-21%',
        id: 29,
        type: "BÁNH KẸO CÁC LOẠI"
    },
    {
        name: 'Trái cây sấy giòn Vinamit gói 270g',
        image: require('../src/assets/image/trai-cay.png'),
        price: ' 30000 ',
        sale: '-24%',
        id: 30,
        type: "BÁNH KẸO CÁC LOẠI"
    },
    {
        name: 'Bánh quy bơ LU hộp 500g',
        image: require('../src/assets/image/banh-quy.png'),
        price: ' 230000 ',
        sale: '-24%',
        id: 31,
        type: "BÁNH KẸO CÁC LOẠI"
    },

    {
        name: 'Thùng bia 24 chai Hoegaarden 330ml',
        image: require('../src/assets/image/bia-1.png'),
        price: ' 430000 ',
        sale: '-24%',
        id: 32,
        type: 'BIA, NƯỚC GIẢI KHÁT'
    },
    {
        name: 'Khay 24 lon bia Heineken Silver 330ml',
        image: require('../src/assets/image/bia-2.png'),
        price: ' 439000 ',
        sale: '-15%',
        id: 33,
        type: 'BIA, NƯỚC GIẢI KHÁT'
    },
    {
        name: 'Khay 24 lon bia Heineken Sleek 330ml',
        image: require('../src/assets/image/bia-3.png'),
        price: ' 445000 ',
        sale: '-21%',
        id: 34,
        type: 'BIA, NƯỚC GIẢI KHÁT'
    },
    {
        name: 'Thùng 24 lon bia Tiger Crystal 330ml',
        image: require('../src/assets/image/bia-4.png'),
        price: ' 410000 ',
        sale: '-24%',
        id: 35,
        type: 'BIA, NƯỚC GIẢI KHÁT'
    },

    {
        name: 'Cá basa cắt khúc khay 500g',
        image: require('../src/assets/image/ca-basa.png'),
        price: ' 230000 ',
        sale: '-24%',
        id: 36,
        type: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
    },
    {
        name: 'Ba rọi heo nhập khẩu đông lạnh 500g',
        image: require('../src/assets/image/ba-roi.png'),
        price: ' 43000 ',
        sale: '-15%',
        id: 37,
        type: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
    },
    {
        name: 'Cá nục bông hấp vỉ 300g',
        image: require('../src/assets/image/ca-nuc.png'),
        price: ' 145000 ',
        sale: '-21%',
        id: 38,
        type: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
    },
    {
        name: 'Hộp trứng vịt xanh 4KFarm',
        image: require('../src/assets/image/hop-trung.png'),
        price: ' 60000 ',
        sale: '-24%',
        id: 39,
        type: 'THỊT, CÁ, TRỨNG, HẢI SẢN',
    },
    {
        name: 'Nấm kim châm Hàn Quốc 150g',
        image: require('../src/assets/image/nam-kim-cham.png'),
        price: ' 145000 ',
        sale: '-21%',
        id: 42,
        type: 'RAU, CỦ, TRÁI CÂY',
    },
    {
        name: 'Nấm đùi gà vỉ 200g',
        image: require('../src/assets/image/nam-dui-ga.png'),
        price: ' 145000 ',
        sale: '-21%',
        id: 43,
        type: 'RAU, CỦ, TRÁI CÂY',
    },
    {
        name: 'Nho xanh nhập khẩu hộp 500g',
        image: require('../src/assets/image/nho-xanh.png'),
        price: ' 145000 ',
        sale: '-21%',
        id: 44,
        type: 'RAU, CỦ, TRÁI CÂY',
    },
    {
        name: 'Táo Dazzle nhập khẩu New Zealand túi 1kg',
        image: require('../src/assets/image/tao.png'),
        price: ' 145000 ',
        sale: '-21%',
        id: 45,
        type: 'RAU, CỦ, TRÁI CÂY',
    }
]

const address = [
    { 
        ward : 'Cổ Nhuế 2',
        district : 'Bắc Từ Liêm',
        city : 'Hà Nội'
    },
    { 
        ward : 'Cổ Nhuế 1',
        district : 'Bắc Từ Liêm',
        city : 'Hà Nội'
    },
    { 
        ward : 'Xuân Đỉnh',
        district : 'Bắc Từ Liêm',
        city : 'Hà Nội'
    },
    { 
        ward : 'Mỹ Đình',
        district : 'Nam Từ Liêm',
        city : 'Hà Nội'
    },
]

export { list, data, products,address}