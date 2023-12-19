import { useSelector } from "react-redux";
import images from "../images"

export const getHeroImages = () => {
    let array = [
        images.hero,
        images.hero,
        images.hero,
        images.hero
    ]
    return array;
}

export const getNewnessData = () => {
    let data = [
        images.summerColl,
        images.dealWeek,
        images.newColl,
        images.forNewEmail
    ]

    return data;
}

export const getPopularCategories = () => {
    let data = [
        {
            id: 1,
            photo: images.tops,
            title: "Tops"
        },
        {
            id: 2,
            photo: images.tshirts,
            title: "T-shirts"
        },
        {
            id: 3,
            photo: images.caps,
            title: "Caps"
        },
        {
            id: 4,
            photo: images.sandals,
            title: "Sandals"
        },
        {
            id: 5,
            photo: images.jackets,
            title: "Jackets"
        },
        {
            id: 6,
            photo: images.coats,
            title: "Coats"
        }
    ]

    return data;
}

export const likeProductItem = (id, component) => {
    let productItem = {}
    switch (component) {
        case 'newArrivals':
            break
        case 'trendingNow':
            break
        default:
            break;
    }
}