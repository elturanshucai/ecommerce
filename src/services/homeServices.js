import images, { newArrivalImages } from "../images"

export const getHeroImages = () => {
    let array = [
        images.hero,
        images.hero,
        images.hero,
        images.hero
    ]
    return array;
}

export const getNewArrivals = (page) => {
    let startIndex = 0 + page * 6
    let lastIndex = startIndex + 6
    const data = [
        {
            id: 1,
            rating: 5,
            isLiked: false,
            photo: newArrivalImages.arrival1,
            title: 'Lorem ipsum',
            price: 18.15
        },
        {
            id: 2,
            rating: null,
            isLiked: false,
            photo: newArrivalImages.arrival2,
            title: 'Lorem ipsum',
            price: 18.15
        },
        {
            id: 3,
            rating: 4,
            isLiked: true,
            photo: newArrivalImages.arrival3,
            title: 'Lorem ipsum',
            price: 30
        },
        {
            id: 4,
            rating: 3,
            isLiked: false,
            photo: newArrivalImages.arrival4,
            title: 'Lorem ipsum',
            price: 25.60
        },
        {
            id: 5,
            rating: null,
            isLiked: false,
            photo: newArrivalImages.arrival5,
            title: 'Lorem ipsum',
            price: 18.15
        },
        {
            id: 6,
            rating: 5,
            isLiked: false,
            photo: newArrivalImages.arrival6,
            title: 'Lorem ipsum',
            price: 6.90
        },
        {
            id: 7,
            rating: 5,
            isLiked: false,
            photo: newArrivalImages.arrival1,
            title: 'Lorem ipsum',
            price: 18.15
        },
        {
            id: 8,
            rating: 1,
            isLiked: false,
            photo: newArrivalImages.arrival3,
            title: 'Lorem ipsum',
            price: 8
        },
        {
            id: 9,
            rating: 5,
            isLiked: false,
            photo: newArrivalImages.arrival6,
            title: 'Lorem ipsum',
            price: 15.05
        },
        {
            id: 10,
            rating: 4,
            isLiked: true,
            photo: newArrivalImages.arrival4,
            title: 'Lorem ipsum',
            price: 18
        },
    ]

    let newData = {}
    newData.data = data.slice(startIndex, lastIndex)
    newData.totalLength = data.length

    return newData;
}

export const getNewnessData = () => {
    let data = [
        newArrivalImages.summerColl,
        newArrivalImages.dealWeek,
        newArrivalImages.newColl,
        newArrivalImages.forNewEmail
    ]

    return data;
}