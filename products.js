const { text } = require("express");
const mongoose = require("mongoose");
const products = [
  {
    productId: 1,
    name: "Mediana Leave-in-conditioning Milk - 250ml",
    brand: "Mediana",
    smbrand: "Similar Products from Mediana",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742295059/mediana-leave-in-conditioning_xzbh0f.jpg",
    ],
    salesprice: 1999,
    initialprice: 5000,
    percent: -60,
    details: {
      info: [
        {
          content:
            "Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.Mediana LEAVE-IN CONDITIONING MILK with 4 NATURAL HAIR BOOSTERS & PROTEIN, MILK & ESSENTIAL OILS is Effectively made to protect your hair(Natural /Synthetic)from damage. It stops hair breakage, stimulates rapid hair growth and detangles hair in less than 2 mins.",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "ME961ST3K67ZZNAFAMZ" },
      { key: "Product Line", value: "JETO" },
      { key: "Weight (Kg)", value: "0.3" },
    ],
    keyfeature: [
      "Protects Hair from damages",
      "Stop hair breakage",
      "Stimulate rapid hair growth",
      "Detangle hair",
      "Makes hair shine and attraCtive",
    ],
    ratings: {
      rating: 4.4,
      review: 46,
    },
    direction: [
      "Home",
      "Health & Beauty",
      "Beauty & Personal Care",
      "Hair Care",
      "Styling Products",
      "Detanglers",
      "Leave-in-conditioning Milk - 250ml",
    ],
    sellerinfo: "Jeto",
  },
  {
    productId: 2,
    name: "Ace Elec 20000 MAh Utra Slim Portable Power Bank",
    brand: "Ace Elec",
    smbrand: "Similar Products from Ace Elec",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294986/ace-elec-powerbank-1_urm0dh.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294986/ace-elec-powerbank-2_jnpkg0.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294985/ace-elec-powerbank-3_sgqtwa.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294985/ace-elec-powerbank-4_t8zlpx.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294985/ace-elec-powerbank-5_dfx70k.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742294985/ace-elec-powerbank-6_s6nxzz.jpg",
    ],
    salesprice: 8500,
    initialprice: 15000,
    percent: -31,
    details: {
      info: [
        { type: "bold", content: "Ace Elec Power-Bank" },
        {
          type: "text",
          content:
            "PowerCore Slim 20000, Ultra Slim Portable Charger, Compact 20000mAh External Battery, High-Speed PowerIQ Charging Technology for Mobile phones, ipad, and more The New Generation Power-Bank P2W (20000mAh) is light, convenient and portable. The dual USB output ports support multiple charging protocols, making it a partner in your travels that won't let you down.The Power-Bank P2W (20000mAh) can charge at up to 18W (12V, 1.5A/9V, 2.0A), cutting back significantly on charging time. Order for this Power-Bank P2W, 20000mAh online from Jumia Nigeria and have it delivered to you",
        },
      ],
      description: [
        "Super good service：we use only the highest-grade materials, so we do have the confidence to provide industry-leading 3 years warranty.",
        "High-speed Charging：Outpace your mates and charge 1.4x faster through our exclusive UPower+ technology. Support charging and discharging simultaneously.",
        "Ultra Slim：Fashionable appearance outlook design, ultra slim body. The thinnest 20000mAh power-bank on the market, easily slips it into any of your pockets or bags. Built-in multiple protections.",
        "Versatile Charging: Power-Bank P2W exclusive PowerIQ and VoltageBoost technology combine to deliver the fastest possible charge for any device, while the trickle-charging mode is the best way to charge low-power devices.",
        "Certified Safe: MultiProtect is Power-Bank P2W safety system, providing superior protection for you and your devices.",
        "Handy Flashlight: Simply click the power button twice to turn on/off it. Helpful for reading camping blackout or emergency.",
      ],
      genspec: [
        "Brand: Ace Elec",
        "Model: P2W",
        "Material: Fireproof  ABS+PC",
        " Capacity: 20000mAh ",
        "Input interface: Micro USB 5V 2.1A",
        "Output USB: 2 USB (USB-A) 5V 2.1A",
        "Dimensions: 135 * 65 * 25mm",
        " Color:Black/White",
      ],
      techparam: [
        "Battery Type: Lithium polymer batteries",
        " Input: 5.0V 2.1A",
        "Output: 5.1V 2.1A ",
        "Unique Tech: Quick Charge 3.0",
      ],
    },
    specifications: [
      { key: "SKU", value: "GE779EA3TXI2ZNAFAMZ" },
      { key: "Product Line", value: "Zeemak Ltd - AC" },
      { key: "Color", value: "Black" },
      { key: "Product Type", value: "Power Bank" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "Model: P2W",
      "Material: Fireproof ABS+PC",
      "Capacity: 20000mAh",
      " Input interface: Micro USB 5V 2.1A",
      "Output USB: 2 USB (USB-A) 5V 2.1A",
      " Dimensions: 135 * 65 * 25mm",
      "Color:Black/White",
    ],
    boxcontent: {
      general: ["1 * Dual USB 20000mAh Power Bank1*charge cable"],
    },
    ratings: {
      rating: 4.5,
      review: 331,
    },
    direction: [
      "Home",
      "Phones & Tablets",
      "Mobile Phone Accessories",
      "Batteries & Battery Packs",
      "Portable Power Banks",
      "20000 MAh Ultra Slim Portable Power Bank",
    ],
    sellerinfo: "Zeemak Ltd - AC",
  },
  {
    productId: 3,
    name: "Temptation EAU DE PARFUM TEMPTATION 100ML FOR MEN",
    brand: "Temptation",
    smbrand: "Similar products from Temptation",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299742/temptation-perfume_s3d673.jpg",
    ],
    salesprice: 4500,
    initialprice: 7000,
    percent: -36,
    details: {
      info: [
        { type: "text", content: "This" },
        { type: "bold", content: "Eau Du Parfum" },
        {
          type: "text",
          content:
            " is Luxurious and Sensuous. Its romantic scent is a dazzling, oriental with floral aroma. A romantic blend of Asian fruit with subtle undertones of musk and raspberry.",
        },
        {
          type: "text",
          content:
            "It has a romantic scent that makes you dazzle all day. Suitable for everyday use with a lasting effect.",
        },
        {
          type: "text",
          content:
            "This 100ml perfume smells great and awesome, a great addition for your daily use.",
        },
        { type: "text", content: "Lightweight and affordable." },
        { type: "text", content: "Need a perfume? This is perfect for you." },
        { type: "text", content: "Smell good, feel great and look awesome." },
      ],
    },
    specifications: [
      { key: "SKU", value: "TE552PF4PDQSENAFAMZ" },
      { key: "Product Line", value: "JETO" },
      { key: "Model", value: "Temptation" },
      { key: "Weight (Kg)", value: "0.1" },
    ],
    keyfeature: [
      "Long Lasting and Nice Fragnance",
      "Temptation",
      "100ml",
      "Eau De Perfume",
      "Men Perfume",
      "Fresh and Aromatic",
      "Affordable Price",
    ],
    boxcontent: {
      general: ["1 X Temptation Perfume 100ml"],
    },
    ratings: {
      rating: 3.9,
      review: 631,
    },
    direction: [
      "Home",
      "Health & Beauty",
      "Beauty & Personal Care",
      "Fragrances",
      "Men's",
      "Eau de Parfum",
      "EAU DE PARFUM TEMPTATION 100ML FOR MEN",
    ],
    sellerinfo: "Jeto",
  },
  {
    productId: 4,
    name: "Water-soluble Aromatherapy Essential Oil-10ML (6 In A Pack)",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299963/water-soluble-1_mug5h2.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299964/water-soluble-2_kvqnm9.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299965/water-soluble-3_pcpbuq.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299966/water-soluble-4_e1hqfv.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299967/water-soluble-5_uzxkux.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299968/water-soluble-6_qhgf1m.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742299969/water-soluble-7_wtzxr6.jpg",
    ],
    salesprice: 5488,
    initialprice: 10761,
    percent: -49,
    details: {
      description: [
        "Aromatherapy care is popular worldwide and highly favored by women who love beauty. It can nourish the skin and relieve stress. Essential oil has various therapeutic uses, as it can accelerate cell metabolism, strengthen the immune system, and eliminate cellular toxins. Our oil set contains six flavors, such as lavender, orange, peppermint, lemon, eucalyptus and sandalwood. When you have too much work pressure, you can add it to the humidifier, which can relieve a lot. Choose your favorite scent type and enjoy your life!",
      ],
      feature: [
        "【MULTIPLE FRAGRANCES】The set contains 6 different scented essential oils: lavender, orange, peppermint, eucalyptus, sandalwood and lemon. You can choose the most suitable bottle based on your favorite fragrance or its efficacy.",
        "【NO NASTIES】Made of pure natural materials, free from harmful solvents, this essential oil set is gentle and non-irritating, safe and healthy, non-toxic and harmless, with a long-lasting fragrance.",
        "【WATER-SOLUBILITY】It is a kind of essential oil which is soluble in water and more widely used in various scenarios. For instance, it’s very suitable for humidifiers.",
        "【VARIOUS METHODS OF APPLICATION】You can use this oil in humidifier, or for aromatherapy, residual fragrance stone, dried flowers, etc. No matter which way you choose, it will bring you a long-lasting fragrance, making you feel happy and refreshed.",
        "【GIFT BOX PACKAGE】Whether it's for friends, family or even yourself, it could be a perfect gift. In your spare time, choosing a bottle of oil to use is definitely a sense of a ritual beyond busy life.",
      ],
      genspec: [
        "Item Name: Essential Oil Gift Set",
        "Material:  Oil",
        "Net Capacity: 10ml",
        "Product Flavor Type: Lavender / Oranges / Peppermint / Lemon / Eucalyptus / Sandalwood",
        "Color: Multi-color",
        "Item Dimension: 6.2*2.5*2.5cm / 2.44*0.98*0.98in (Single Bottle)",
        "Package Size:17*9.4*3.5cm / 6.69*3.7*1.38in (Gift Box)\n6.6*2.8*2.8cm / 2.6*1.1*1.1in (Product)",
        "G. W: 310g / 10.93oz",
        "N.W.: 43g / 1.52oz (Single Bottle)",
      ],
      package: ["6 * Oil", "1 * Box"],
      note: [
        `Size information is just for reference only, please allow 1-2cm (0.4-0.8") differences due to manual measurement, thanks.`,
        " Item color displayed in photos may be showing slightly different on your monitor since monitors are not calibrated the same.",
      ],
    },
    specifications: [
      { key: "SKU", value: "GE779ST3V5O61NAFAMZ" },
      { key: "Model", value: "10ML" },
      { key: "Size (L x W x H cm)", value: "17 x 9.4 x 3.5" },
      { key: "Weight (kg)", value: "0.31" },
      { key: "Color", value: "Brown" },
    ],
    keyfeature: [
      "【MULTIPLE FRAGRANCES】",
      "The set contains 6 different scented essential oils: lavender, orange, peppermint, eucalyptus, sandalwood and lemon. You can choose the most suitable bottle based on your favorite fragrance or its efficacy.",
      "【NO NASTIES】",
      "Made of pure natural materials, free from harmful solvents, this essential oil set is gentle and non-irritating, safe and healthy, non-toxic and harmless, with a long-lasting fragrance.",
      "【WATER-SOLUBILITY】",
      "It is a kind of essential oil which is soluble in water and more widely used in various scenarios. For instance, it’s very suitable for humidifiers.",
      "【VARIOUS METHODS OF APPLICATION】",
      "You can use this oil in humidifier, or for aromatherapy, residual fragrance stone, dried flowers, etc. No matter which way you choose, it will bring you a long-lasting fragrance, making you feel happy and refreshed.",
      "【GIFT BOX PACKAGE】",
      "Whether it's for friends, family or even yourself, it could be a perfect gift. In your spare time, choosing a bottle of oil to use is definitely a sense of a ritual beyond busy life.",
    ],
    boxcontent: {
      package: ["6 * Oil", "1 * Box"],
      note: [
        `Size information is just for reference only, please allow 1-2cm (0.4-0.8") differences due to manual measurement, thanks.`,
        " Item color displayed in photos may be showing slightly different on your monitor since monitors are not calibrated the same.",
      ],
    },
    ratings: {
      rating: 4.3,
      review: 151,
    },
    direction: [
      "Home",
      "Health & Beauty",
      "Beauty & Personal Care",
      "Fragrances",
      "Aromatherapy",
      "Oils",
      "Water-soluble Aromatherapy Essential Oil-10ML (6 In A Pack)",
    ],
    sellerinfo: "FansWedy-SEA-COD",
  },
  {
    productId: 5,
    name: "itel 1.83' Sones Smart Watch Native Storm ISW011 (Water Proof)",
    brand: "Itel",
    smbrand: "Similar products from Itel",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742382213/itel-sones-watch-1_ivoqla.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742382213/itel-sones-watch-2_gnasam.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742382215/itel-sones-watch-3_fb3ow7.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742382217/itel-sones-watch-4_xmupjm.jpg",
    ],
    salesprice: 17500,
    initialprice: 30000,
    percent: -42,
    details: {
      info: [
        {
          type: "bold",
          content:
            "Please read, and like and follow our store ( SHELTA CONNECTS) for more stock updates.",
        },
        { type: "bullet", content: "All-Day Tracking" },
        {
          type: "text",
          content:
            "Monitors your steps, distance, calories, active minutes & time and sleep quality to help you better understand yourself.",
        },
        { type: "bullet", content: "IP67 Waterproof" },
        {
          type: "text",
          content:
            "Thanks to Smartwatch 1 IP67 waterproof, now you can wash hands, run in the rain and recover in the cold shower with the device on your wrist.",
        },
        { type: "bullet", content: "20 Days Standby Time" },
        {
          type: "text",
          content:
            "Adopting leading power-saving technology, Smartwatch 1 supports up to 20 days standby time.",
        },
        { type: "bullet", content: "HD Colour Screen" },
        {
          type: "text",
          content:
            "Enjoy bright colours and clarity on this high definition screen.",
        },
        { type: "bullet", content: "Real-Time Notifications" },
        {
          type: "text",
          content:
            "Get access to your texts, calls, alerts and notifications from apps by simply raising your wrist.",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "IT724EA5LXQT8NAFAMZ" },
      { key: "Product Line", value: "Shelta connects" },
      { key: "Model", value: "Isw-011" },
      { key: "Production Country", value: "China" },
      { key: "Weight (Kg)", value: "0.2" },
      { key: "Certifications", value: "Hong Kong Made" },
      { key: "Color", value: "n/a" },
      { key: "Main Material", value: "N/A" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "Model Name:ISW-011",
      "Screen: 1.83' IPS 240*284",
      "Battery: 220mAh",
      "BT version: V5.3",
      "Input port: Magnetic attraction charging",
      "Color: Black",
      "Other function: ",
      "Voice assistant",
      "Message notification",
      "Find phone",
      "Remote camera",
      "Muti-dial theme",
      "Stopwatch",
      "Female menstrual cycle reminder",
    ],
    boxcontent: {
      general: ["one smart watch", "one smart watch charger"],
    },
    ratings: {
      rating: 4,
      review: 11,
    },
    direction: [
      "Home",
      "Phones & Tablets",
      "Mobile Phpone Accessories",
      "Smart Watches",
      "1.83' Sones Smart Watch Native Storm Water Proof Black (ISW-O11)",
    ],
    sellerinfo: "itel NG Accessory-COD",
  },
  {
    productId: 6,
    name: "Century 20 Litres Manual Microwave With Grill (CMV 20L-F)",
    brand: "Century",
    smbrand: "Similar Products from Century",
    images:
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742463569/century-microwave_zg3ajx.jpg",
    salesprice: 97000,
    initialprice: 99500,
    percent: -3,
    details: {
      info: [
        {
          type: "text",
          content:
            "The Century 20 Litres Manual Microwave With Grill (CMV 20L-F) is a versatile kitchen appliance designed to elevate your cooking experience. With a sleek and compact design, this microwave fits seamlessly into any kitchen, making it perfect for both small spaces and larger setups.",
        },
        {
          type: "text",
          content:
            "Featuring a generous 20-litre capacity, the CMV 20L-F is ideal for reheating leftovers, defrosting frozen meals, or cooking a variety of dishes with ease. The manual control panel provides users with a straightforward, user-friendly interface, allowing for precise adjustments in cooking time and power levels.",
        },
        {
          type: "text",
          content:
            "One of the standout features of this model is its grill function. This allows you to achieve that perfect crispy finish on your dishes, from grilled meats to toasted sandwiches, all in one appliance. The combination of microwave and grill functions offers flexibility, enabling you to prepare meals quickly while still achieving delicious results.",
        },
        {
          type: "text",
          content:
            "The microwave boasts multiple power levels, ensuring that you can customize the cooking process according to the dish you are preparing. The robust interior is easy to clean and maintain, while the durable exterior guarantees longevity.",
        },
        {
          type: "text",
          content:
            "Safety is also a priority, with a door safety lock that prevents operation when the door is open and an auto shut-off feature that adds an extra layer of protection.",
        },
        {
          type: "text",
          content:
            "In summary, the Century 20 Litres Manual Microwave With Grill (CMV 20L-F) is the perfect addition to any kitchen, combining convenience, versatility, and safety into one powerful appliance. Whether you’re a busy professional or a home chef, this microwave is designed to meet all your cooking needs.",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "CE125HA567UOQNAFAMZ" },
      { key: "Product Line", value: "CENTURY ELECTRONICS" },
      { key: "Model", value: "CMW 20L-F" },
      { key: "Weight (Kg)", value: "5.9" },
      { key: "Color", value: "SILVER" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "6 Microwave power levels ",
      "Output Power 700W",
      "Grill Cooking ",
      "3 Combination Cooking Feature",
      "Rapid Heating",
      "Metal Rack for Grill ",
      "Defrost option ",
      "Rotatable glass tray",
    ],
    boxcontent: {
      general: ["20L CENTURY MICROWAVE AND PRODUCT MANUAL"],
    },
    ratings: {
      rating: 2.5,
      review: 2,
    },
    direction: [
      "Home",
      "Home & Office",
      "Home & Kitchen",
      "Kitchen & Dining",
      "Small Appliances",
      "Microwave Ovens",
      "20 Litres Manual Microwave With Grill (CMV 20L-F)",
    ],
    sellerinfo: "Century Appliances",
  },
  {
    productId: 7,
    name: "Osc Signature MENS Quality 100% Cotton R-Neck 5-In-1 T-Shirts Long Sleeve Bundle",
    brand: "Osc Signature",
    smbrand: "Similar products from Osc Signature",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742465564/osc-signatures-men-sleeve_vgkhea.jpg",
    ],
    salesprice: 14402,
    initialprice: 24004,
    percent: -40,
    details: {
      info: [
        { type: "bold", content: "OSC apparel is your one stop" },
        {
          type: "text",
          content:
            "shop for all your fashion needs. Here at OSC we have developed a fashion sensation that has endeared us to our customers. We specialize in all forms of garment making at any level of sophistication. Our lines for Polo will amaze you and are very affordable, we also have a commercial production that serves every industry that needs uniforms. we are number one in pattern making and we have several designs that fit into your daily corporate and casual lifestyle at best prices. We will continue to combine affordability and quality to allow for access to our designs at all levels. ",
        },
        {
          type: "text",
          content:
            "This item is our OSC Smart R-Neck 5-In-1 Premium T-shirt Bundle ",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "OS359MW66QSZ3NAFAMZ" },
      { key: "Product Line", value: "OSC Apparel" },
      { key: "Model", value: "T-shirt" },
      { key: "Weight (Kg)", value: "0.5" },
      { key: "Color", value: "Black" },
      { key: "Main Material", value: "100% Cotton" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: ["T-shirt", "Nice Fit", "All Sizes", "Black"],
    ratings: {
      rating: 3.5,
      review: 2,
    },
    direction: [
      "Home",
      "Fashion",
      "Men's Clothing",
      "Clothing",
      "T-Shirts & Tanks",
      "T-shirts",
      "MENS Quality 100% Cotton R-Neck 5-In-1 T-Shirts Long Sleeve Bundle",
    ],
    sellerinfo: "Jumia",
  },
  {
    productId: 8,
    name: "Skyrun 1HP-Split Air Conditioner (KF-25GWC-CT/D)-White",
    brand: "Skrun",
    smbrand: "Similar Products from Skyrun",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742467286/skyrun-ac-1_u0zqyj.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742467287/skyrun-ac-2_mz6vft.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742467287/skyrun-ac-3_vj98tg.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742467287/skyrun-ac-4_geen90.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742467287/skyrun-ac-5_ycubpf.jpg",
    ],
    salesprice: 306990,
    initialprice: 601941,
    percent: -49,
    details: {
      description: [
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743521429/skyrundesc_ufnhcj.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743521430/skyrundesc2_hl55io.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743521429/skyrundesc3_japtac.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743521429/skyrundesc4_goxtt9.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743521429/skyrundesc5_h9o9k2.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743544398/skyrundesc6_xxushi.jpg",
      ],
      info: [
        { type: "text", content: "SKYRUN" },
        { type: "bold", content: "KF-25GWC-CT/D 1HP Air Conditioner" },
        { type: "bold", content: "3m Copper Connecting Pipe for Free" },
        {
          type: "text",
          content:
            "Quick Cooling：30S rapid cooling, providing you with comfortable temperature in time.",
        },
        {
          type: "text",
          content:
            "Low Noise: With the help of air tunnel optimization technology, big diameter fan and high efficiency PG motor, the indoor unit can deliver a better air distribution and airflow with noise low to 20dB, providing you with comfortable environment.",
        },
        {
          type: "text",
          content:
            "Sleep System: Using deep sleep technology, quiet and comfortable, help you improve your sleep quality.",
        },
        {
          type: "text",
          content:
            "Long-distance Air Flow: The air-flow distance can reach 12m> 10 meters, the highest standard of other products in the market.",
        },
        {
          type: "text",
          content:
            "Dual Side Installed： Thoughtful design, connection piping & drainage hose can be installed on the left or right side, giving you more choices.",
        },
        {
          type: "text",
          content:
            "Energy saving： Energy-saving design saves electricity and money.",
        },
        {
          type: "text",
          content:
            "Brand story： SKYRUN was established in 2005. It is a local manufacturing company in Nigeria. There are 6 high-efficiency production plants in the country. Products include TVs, Washing Machines, Refrigerators, Air Conditioners, Smart Electric Meters, Small Appliances, etc. And the Smart Electric Meters received a manufacturing certificate issued by nerc in 2016. SKYRUN is a leading supplier of technology and services in Nigeria. SKYRUN has a nationwide sales network and after-sales service system, and always puts user experience first. SKYRUN's brand philosophy is 'Make a better life'.",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "SK821HA57I74LNAFAMZ" },
      { key: "Product Line", value: "Skyrun Official Store-Sea-COD" },
      { key: "Model", value: "KF-25GWC-CT/D" },
      {
        key: "Size (L x W x H cm)",
        value: "Indoor：72*29*19/ Outdoor 63*50.5*23.8",
      },
      { key: "Weight (kg)", value: "20" },
      { key: "Color", value: "white" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "Maximum input power: 1400W.",
      "Energy efficiency ratio: 3.0",
      "Air volume: 680mᵌ",
      "The noise value of the internal and external : 38 / 50dB (A)",
      "Refrigerant: R410a",
      "Auto restart function",
      "Rapid cooling",
      "Installed of copper pipes（3 meters）-Free",
      "Intelligent temperature control",
      "low noise",
      "Energy-efficient compressor",
    ],
    boxcontent: {
      general: [
        "Indoor unit ",
        "outdoor unit",
        "instruction manual",
        "remote control",
        "remote control bracket",
        "expansion tube",
        "screw",
        "water pipe",
        "indoor and outdoor connection line",
        "indoor and outdoor connection tube",
        "2 AA batteries",
        "putty",
      ],
    },
    ratings: {
      rating: 4.3,
      review: 3,
    },
    direction: [
      "Home",
      "Home & Office",
      "Large Appliances & Home Improvement",
      "Large Appliances",
      "Air Conditioners & Accessories",
      "Air Conditioners",
      "1HP-Split Air Conditioner (KF-25GWC-CT/D)-White",
    ],
    sellerinfo: "Skyrun Official Store-Sea-COD",
  },
  {
    productId: 9,
    name: 'Hisense 55" Inches UHD 4K SMART TV (55A6N) - Black + 1 Year Warranty',
    brand: "Hisense",
    smrand: "Similar products from Hisense",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-1_ehtquw.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-2_sgxhfk.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-3_dt8bkq.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-4_npj8dd.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-5_jnbgxg.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742476957/hisense-55inches-smart-tv-6_whxp3j.jpg",
    ],
    salesprice: 535000,
    initialprice: 570655,
    percent: -6,
    deatils: {
      description: [
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743511322/hisensedesc_bpof3r.jpg",
      ],
      info: [
        {
          type: "text",
          content:
            "Choose the perfect size for your space and enjoy 4K UHD picture quality.",
        },
        { type: "bold", content: "Product Dimensions" },
        {
          type: "text",
          content:
            "Product dimension (without stand) - 48.5×28.0×2.9 inch” (L x W x H)",
        },
        {
          type: "text",
          content: 'Actual Screen Size (measured diagonally) - 54.6" inch',
        },
        { type: "text", content: 'Screen type - LCD Class - 55" class' },
        { type: "bold", content: "Type of TV" },
        { type: "text", content: "Smart TV - Yes" },
        { type: "text", content: "Works with Alexa - Yes" },
        { type: "text", content: "Google Assistant built-in - Yes" },
        { type: "text", content: "App Store - Yes (Google Play App Store)" },
        { type: "bold", content: "Picture Quality" },
        { type: "text", content: "Screen resolution - 3840 x 2160p" },
        { type: "text", content: "Local dimming - No" },
        { type: "text", content: "Motion Rate - 120" },
        { type: "text", content: "Display aspect ratio - 16:9" },
        { type: "text", content: "Wide Color Gamut - No" },
        { type: "text", content: "HDR-compatible - Dolby Vision HDR & HDR10" },
        { type: "bold", content: "Audio" },
        { type: "text", content: "Audio output power (watts) -8W x 2" },
        { type: "text", content: "Audio technologies - DTS Virtual:X" },
        { type: "text", content: "Languages" },
        { type: "text", content: "On-Screen Display - English/French/Spanish" },
        { type: "bold", content: "Power" },
        { type: "text", content: "Power consumption - 110W" },
        { type: "text", content: "Standby consumption - 0.5W" },
        { type: "text", content: "Power supply - AC 120V, 50/60Hz" },
        { type: "text", content: "Connectivity" },
        {
          type: "text",
          content: "Wireless built-in - Yes (802.11ac 2.4GHz/5GHz)",
        },
        { type: "text", content: "Bluetooth ®  - Yes" },
        { type: "bold", content: "Ports" },
        { type: "text", content: "HDMI -3" },
        { type: "text", content: "Ethernet (LAN) - Yes" },
        { type: "text", content: "USB - 2 (2.0)" },
        { type: "text", content: "RF antenna - 1 L/R" },
        { type: "text", content: "audio input for composite  - 1" },
        { type: "text", content: "Digital audio output - 1" },
        { type: "text", content: "Optical Earphone/audio output - 1" },
      ],
    },
    specifications: [
      { key: "SKU", value: "HI368EL03JJV6NAFAMZ" },
      { key: "Model", value: "55A6K" },
      { key: "Weight (Kg)", value: "8" },
      { key: "Color", value: "Black" },
      { key: "Product Type", value: "Televisions" },
      { key: "Display Size (inches)", value: "55.0" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "​55 Inches",
      "Vidaa OS",
      "Smart TV  - Yes",
      "Web Browser  - Yes",
      "Google Assistant built-in  - Yes",
      "Works with Alexa  - Yes",
      "Built-in apps  - Yes",
      "Screen resolution 3840 x 2160p",
      "4K upscaling Yes",
      "Backlight type Full Array LED",
      'Panel type 55" Full Array LED Backlight LCD',
      "Resolution type 4K",
      "HDR-compatible Dolby Vision HDR & HDR10",
      "Motion Rate 120",
      "App Store  - Yes, 4000+ streaming channels",
    ],
    ratings: {
      rating: 4.6,
      review: 99,
    },
    direction: [
      "Home",
      "Electronics",
      "Television & Video",
      "Televisions",
      "50 - 65 Inches TVs",
      '55" Inches UHD 4K SMART TV (55A6N) - Black + 1 Year Warranty',
    ],
    sellerinfo: "Jumia",
  },
  {
    productId: 10,
    name: "Nexus 4-Burner Gas Cooker GCCR-NX-5055BC (3 + 1)",
    brand: "Nexus",
    smbrand: "Similar products from Nexus",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742895612/nexus-gas-cooker-1_b8y0iu.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742895612/nexus-gas-cooker-2_dlyhmp.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742895612/nexus-gas-cooker-3_kd1wgh.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742895613/nexus-gas-cooker-4_lkuovv.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742895613/nexus-gas-cooker-5_nu6euo.jpg",
    ],
    salesprice: 152250,
    initialprice: 157610,
    percent: -3,
    details: {
      description: [
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743511108/nexusdesc_sxof95.jpg",
      ],
      info: [
        {
          type: "text",
          content:
            "The Nexus Gas cooker 3 + 1 NX-5055BC is gas-efficient, durable, easy-to-use & clean. Enjoy unlimited value for your money and save cooking time when you use this multipurpose gas cooker. This Nexus Gas cooker 3 + 1 NX-5055BC has some amazing features; 3 Gas + 1 Electric hot plate, It only comes with a wire grate and not an oven tray.",
        },
        {
          type: "text",
          content:
            "The Nexus Gas Cooker GCCR-NX-5055BC(3+1) is ideal for cooking all kinds of food while its oven has the capacity to bake things like lasagna, cakes, pastries, pies, and every other thing you can think of. The Nexus Gas Cooker GCCR-NX-5055BC(3+1) comes with an automatic cut-off timer that allows you to set the time on whatever you put into the oven. Say goodbye to burnt chickens and pies.",
        },
        {
          type: "text",
          content:
            "This cooker features a stylish exterior and stainless steel body which is easy to clean. Cooking is easy and fun with this incredible appliance, it stands out from its kind with its numerous incredible features. It comes with four burners which enables you to cook four meals at once.",
        },
        {
          type: "text",
          content:
            "It is designed with stainless steel material, which is one of the finest materials used in making cooking appliances. The pot support on this gas cooker gives you the assurance of stability as you cook and helps you minimize spills and messes.",
        },
        {
          type: "text",
          content:
            "Buy Nexus Gas cooker 3 + 1 NX-5055BC in Nigeria at the best prices to start cooking faster and better!",
        },
      ],
    },
    specifications: [
      { key: "SKU", value: "NE493HA169PDMNAFAMZ" },
      { key: "Model", value: "GCCR-NX-5055BC (3 + 1)" },
      { key: "Weight (kg)", value: "15" },
      { key: "Color", value: "Black" },
      { key: "Product Type", value: "Gas Cookers" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "3 Gas + 1 Electric Hotplate",
      "Oven with Glass Door",
      "Oven Rack",
      "Gas Efficient",
      "Easy-to-Clean",
      "Easy-to-Use",
    ],
    ratings: {
      rating: 4.1,
      review: 314,
    },
    direction: [
      "Home",
      "Home & Office",
      "Small & Cooking Appliances",
      "Cooking Appliances",
      "Cookers",
      "Gas Cookers",
      "4-Burner Gas Cooker GCCR-NX-5055BC (3 + 1)",
    ],
    sellerinfo: "Jumia",
  },
  {
    productId: 11,
    name: "ECOFLOW RIVER 2 Pro 768Wh 800W Portable Power Station",
    brand: "ECOFLOW",
    smbrand: "Similar products from ECOFLOW",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-1_bvsupp.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-2_z1gac0.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-3_fuxiif.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-4_ckg8pb.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-5_zycxma.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-6_zbx2bo.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742897282/ecoflow-river-2-portable-power-station-7_gfcvur.jpg",
    ],
    salesprice: 500999,
    initialprice: 1058627,
    percent: -53,
    details: {
      info: [
        {
          type: "text",
          content:
            "EcoFlow RIVER 2 Pro is a high-capacity portable power station designed for home backup, camping, RV trips, and outdoor work. With 70-minute fast charging via AC, you can quickly restore power during emergencies or on the go. The 1600W output supports 80% of household appliances, including refrigerators, coffee makers, and power tools, making it perfect for home office power backup during outages. Featuring 10 ports, including USB-C, AC, and DC outlets, portable generators can charge multiple devices at once, from laptops and smartphones to CPAP machines. The LFP battery lasts over 3000 cycles, ensuring 10 years of reliable use, while its advanced protection system safeguards against voltage and temperature fluctuations. Use solar energy for off-grid adventures with 220W solar panel compatibility, fully recharging in 3.5 hours—ideal for a outdoor generator for camping, van life, and remote job sites. Weighing just 7.8kg, its lightweight, portable design with a built-in handle makes it easy to carry anywhere, whether for outdoor photography, emergency preparedness, or travel. Stay powered anywhere with safe, efficient, and eco-friendly energy.",
        },
      ],
      description: [
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743509718/ecoflowdesc_zyfgx0.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743509718/ecoflowdesc2_lc0jgh.jpg",
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1743509718/ecoflowdesc3_r7nqkj.jpg",
      ],
      exlink: {
        video: "https://www.youtube.com/embed/lMWYYQF4jrw",
      },
    },
    specifications: [
      { key: "SKU", value: "EC981GP3F1994NAFAMZ" },
      { key: "Product Line", value: "ECOFLOW Official Store-COD" },
      { key: "Model", value: "River 2 pro" },
      { key: "Production Country", value: "China" },
      { key: "Size (L x W x H cm)", value: "27x 26 x 22.6" },
      { key: "Weight (kg)", value: "7.8" },
      { key: "Color", value: "Black" },
      { key: "Product Type", value: "Power Stations" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "[Fastest Charging in the Industry] Fully recharge using an AC outlet in only 70 minutes with EcoFlow’s X-Stream fast charging technology.",
      "[Power 80% Of Your Appliances] With an output of up to 1600W, run 80% off all your appliances, even high wattage ones. With 10 outlets, from 300W AC outlets to USB-C, simultaneously charge or run all your devices without worrying about overloading. ",
      "[LFP Long-Life Battery] Using LFP battery cells, use and recharge RIVER 2 Pro more than 3000 times before hitting 80%. That’s almost 10 years of regular use. RIVER 2 Pro includes advanced protection, monitoring voltage, current, and temperature to keep your LFP battery running for years. ",
      "[Fast Solar Charging] Use clean, green renewable energy to recharge RIVER 2 Pro, in as fast as 3.5 hours with 220W solar input. ",
      "[Light & Portable] With a lightweight of only 7.8kg, RIVER 2 Pro is the ideal outdoor product for all your off-grid adventures. With a built-in handle, this portable battery is easy and convenient to take anywhere you need power.",
    ],
    boxcontent: {
      general: [
        "RIVER 2 Pro, AC charging cable, car charging cable, user manual",
      ],
    },
    ratings: {
      rating: 4.6,
      review: 160,
    },
    direction: [
      "Home",
      "Garden & Outdoors",
      "Generators & Portable Power",
      "Generators",
      "RIVER 2 Pro 768Wh 800W Portable Power Station",
    ],
    sellerinfo: "ECOFLOW Official Store-COD",
  },
  {
    productId: 12,
    name: "ADIDAS Core Sneakers Kids Grand Court K",
    brand: "ADIDAS",
    smbrand: "Similar products from ADIDAS",
    images: [
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900357/adidas-core-sneakers-1_ieyvts.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900357/adidas-core-sneakers-2_qkvv6c.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900357/adidas-core-sneakers-3_rovpa0.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900357/adidas-core-sneakers-4_jpzzjw.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900357/adidas-core-sneakers-5_qzgzm8.jpg",
      "https://res.cloudinary.com/dhbckmvio/image/upload/v1742900358/adidas-core-sneakers-6_ainh4b.jpg",
    ],
    salesprice: 42854,
    initialprice: 61220,
    percent: -30,
    details: {
      info: [
        {
          type: "text",
          content:
            "A modern update to 70s style. These court-inspired shoes have a smooth leather-like upper with contrast 3-Stripes. A lightweight sockliner provides comfort as they take on their day.",
        },
      ],
      description: [
        "https://res.cloudinary.com/dhbckmvio/image/upload/v1742901283/shoe-size-list_pe8wq6.jpg",
      ],
    },
    specifications: [
      { key: "SKU", value: "AD002FS0AKI6DNAFAMZ" },
      { key: "Product Line", value: "adidas Official Store" },
      { key: "Model", value: "EF0103" },
      { key: "Weight (kg)", value: "0.6" },
      { key: "Color", value: "FTWR WHITE/CORE BLACK/FTWR WHITE" },
      { key: "Main Material", value: "SYNTHETICS" },
      { key: "Shop Type", value: "Jumia Mall" },
    ],
    keyfeature: [
      "Lace closure",
      "Synthetic leather upper",
      "Rubber outsole; Textile lining",
      "Lightweight EVA sockliner",
      "EF0103",
    ],
    ratings: {
      rating: 4.6,
      review: 52,
    },
    direction: [
      "Home",
      "Fashion",
      "Kid's Fashion",
      "Boys",
      "Shoes",
      "Sneakers",
      "Low Cut",
      "Core Sneakers Kids Grand Court K",
    ],
    sellerinfo: "MOJAA MALL",
  },
];
module.exports = products;
