import { Card } from "../types/cards"
import Man from "@/app/src/img/Man.png"
import Money from "@/app/src/img/Money.png"
import Cap from "@/app/src/img/Cap.png"
import Aeroplane from "@/app/src/img/Aeroplane.png"

const cards: Card[] = [
    {
        id: 1,
        image: Money.src,
        heading: "Track your immigration application",
        text: "Create and manage your visa application Upload required documents securely Communicate with your consultant",
        subtext: "Start Now",
        symbol: Aeroplane.src

    },
     {
        id: 2,
        image: Money.src,
        heading: "GIC Program Madeeasy",
        text: "Create and fund your GIC account with ease Upload required documents securely Communicate with your consultant",
        subtext: "Start Now",
        symbol: Aeroplane.src

    },
     {
        id: 3,
        image: Man.src,
        heading: "Manage your client’s portfolio",
        text: "View all client’s application Review and approve documents Message clients directly Receive payments",
        subtext: "Start Now",
        symbol: Aeroplane.src

    },
     {
        id: 4,
        image: Cap.src,
        heading: "Pay tuition fees with ease",
        text: "Pay tuition in Canada with Naira securely No rate hassel , no hidden fees 24/7 support",
        subtext: "Start Now",
        symbol: Aeroplane.src

    },
]

export default cards;