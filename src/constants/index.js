import {
    Card1,
    Card2,
    Card,
    CardA,
    CardB,
    CardC,
    CardD,
    avatarA,
    avatarB,
    avatarC,
    avatarD,
    apple,
    ibm,
    android,
    basecamp,
    apiary,
    airbnb,
    Macbook,
    Boards,
    forks,
    alien,
    infinity,
} from '../assets'

const footer = [
    {
        name: "Company",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    },
    {
        name: "Resources",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    },
    {
        name: "About",
        links: [
            "Home",
            "Examples",
            "Pricing",
            'Updates',
        ]
    }
]

const navlinks = [
    {
        name: "Home",
        title: "Home",
    },
    {
        name: "Product",
        title: "Product",
    },
    {
        name: "About",
        title: "About",
    },
    {
        name: "Contact",
        title: "Contact",
    },
]

const testimonials = [
    {
        icon: avatarA,
        name: 'Claire Bell',
        role: 'Designer',
        review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year'
    },
    {
        icon: avatarB,
        name: 'Francisco Lane',
        role: 'Designer',
        review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    },
    {
        icon: avatarC,
        name: 'Ralph Fisher',
        role: 'Designer',
        review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    },
    {
        icon: avatarD,
        name: 'Jorge Murphy',
        role: 'Designer',
        review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    },
]

const galleryTop = [
    {
        name: 'cardd',
        icon: CardD,
    },
    {
        name: 'cardc',
        icon: CardC,
    },
    {
        name: 'cardb',
        icon: CardB,
    },
    {
        name: 'carda',
        icon: CardA,
    },
]

const galleryBottom = [
    {
        name: 'card',
        icon: Card,
    },
    {
        name: 'card1',
        icon: Card1,
    },
    {
        name: 'car2',
        icon: Card2,
    },
]

const partners = [
   { icon: apple},
   { icon: apiary},
   { icon: android},
   { icon: basecamp},
   { icon: airbnb},
   {icon: ibm},
]

const content = [
    {
        name: 'Work',
        text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
        button: 'Sign Up',
        icon: Macbook,
    },
    {
        name: 'Design with real data',
        text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
        button: 'Try For Free',
        icon: Boards,
    }
]

const features = [
    {
        icon: forks,
        title: 'A single source of truth',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    },
    {
        icon: alien,
        title: 'Intuitive interface',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    },
    {
        icon: infinity,
        title: 'Or with rules',
        text: 'When you add work to your Slate calendar we automatically calculate useful insights',
    }
]


export {
    features,
    footer,
    navlinks,
    testimonials,
    galleryTop,
    galleryBottom,
    partners,
    content,
}