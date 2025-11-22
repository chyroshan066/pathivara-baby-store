export interface Children {
    children: React.ReactNode;
}

export interface ClassName {
    className?: string
}

export interface Title {
    title?: string;
}

export interface Message {
    message: string;
}

export interface IsVisible {
    isVisible: boolean;
}

export interface AlertState extends Title, Message, IsVisible {
    type: "success" | "error";
}

export interface Name {
    name: string;
}

export interface Description {
    description: string;
}

export interface Email {
    email: string;
}

export interface Text {
    text: string;
}

export interface Icon {
    icon: string;
}

export interface ImgSrc {
    imgSrc: string;
}

interface Href {
    href: string;
}

export interface Link extends Name, Href {}
export interface Category extends Name, ImgSrc {}
export interface Contact extends Text, Href {}

export interface Product extends Name, ImgSrc {
    // prevPrice: number;
    // discountedPrice: number;
    // discount: number;
}