export interface Card {
    id: number;
    image: string;
    // image: StaticImageData;  <-- allows import from Next.js
    heading: string;
    text: string;
    subtext: string
    symbol: string

}

export interface Select {
    id: number;
    image: string;
    // image: StaticImageData;  <-- allows import from Next.js
    heading: string;
    text: string;
}

export interface Work {
    id: number;
    image: string;
    // image: StaticImageData;  <-- allows import from Next.js
    heading: string;
}
