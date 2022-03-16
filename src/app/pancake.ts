export interface Pancake{
    id : number
    description : string
    name : string
    photo : UserPhoto
}

export interface UserPhoto{
    // Nom de la photo sur le disque
    filePath : string;
    // Route dans le tel
    webViewPath : string;
}

export interface PancakeAddOptions{
    name:string;
    descr:string;
    photo:UserPhoto;
}

export interface Location{
    lati:number;
    longi:number;
}

export const listeCrepes = [
    {
        id : 1,
        description : "Decription 1",
        name : "Crêpe Mikado",
        photo : {
            filePath:"https://p0.piqsels.com/preview/892/298/320/hot-chocolate-spoon-fork-knive-thumbnail.jpg",
            webViewPath:"https://p0.piqsels.com/preview/892/298/320/hot-chocolate-spoon-fork-knive-thumbnail.jpg"
        }
    },
    {
        id : 2,
        description : "Decription 2",
        name : "Crêpe Suzette",
        photo : {
            filePath:"https://www.contrepoints.org/wp-content/uploads/2018/03/Crepe-by-Richard-LeeCC-BY-NC-ND-2.0-1200x800.jpg",
            webViewPath:"https://www.contrepoints.org/wp-content/uploads/2018/03/Crepe-by-Richard-LeeCC-BY-NC-ND-2.0-1200x800.jpg"
        }
    },
    {
        id : 3,
        description : "Decription 3",
        name : "Crêpe Nutella",
        photo : {
            filePath:"https://live.staticflickr.com/7055/7079813741_003384162b_b.jpg",
            webViewPath:"https://live.staticflickr.com/7055/7079813741_003384162b_b.jpg"
        }
    }
]