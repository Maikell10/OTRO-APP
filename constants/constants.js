const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Eligue tu Comida Favorita",
        description:
            "Cuando tu ordenas OTRO Delivery, tendrás la mejor atención en productos de calidad",
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Delivery a Donde Estés",
        description:
            "Hacemos que pedir comida sea una experiencia rápida, simple y placentera.",
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Recibe la Mejor Comida",
        description:
            "Recibirás la mejor comida en tus manos. Con la mejor atención esperando una próxima orden.",
    },
];

const screens = {
    main_layout: "MainLayout",
    home: "OTRO Delivery",
    my_wallet: "Wallet",
    search: "Buscar",
    cart: "Carrito",
    favourite: "Favoritos",
    notification: "Notificación",
};

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
];

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins",
    },
    {
        id: 3,
        label: "30 Mins",
    },
];

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    },
];

const tags = [
    {
        id: 1,
        label: "Hamburguesas",
    },
    {
        id: 2,
        label: "Comida Rápida",
    },
    {
        id: 3,
        label: "Pizza",
    },
    {
        id: 4,
        label: "Asiática",
    },
    {
        id: 5,
        label: "Postres",
    },
    {
        id: 6,
        label: "Desayuno",
    },
    {
        id: 7,
        label: "Vegetables",
    },
    {
        id: 8,
        label: "Taccos",
    },
];

const track_order_status = [
    {
        id: 1,
        title: "Orden Confirmada",
        sub_title: "Tu orden ha sido recibida!",
    },
    {
        id: 2,
        title: "Orden Preparada",
        sub_title: "Tu orden ha sido preparada",
    },
    {
        id: 3,
        title: "Delivery en Progreso",
        sub_title: "Espera un momento! Tu pedido va en camino",
    },
    {
        id: 4,
        title: "Entregado",
        sub_title: "Disfruta tu Pedido!",
    },
    {
        id: 5,
        title: "Califícanos",
        sub_title: "Ayúdanos a mejorar nuestro servicio",
    },
];

const GOOGLE_MAP_API_KEY = "AIzaSyBO49mmbW858MgZzrOowngolR_r0VvvRsw";

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    track_order_status,
    GOOGLE_MAP_API_KEY,
};
