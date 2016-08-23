export class Movie {

    public type:string = 'movie';

    constructor(public name: string,
                public duration: number,
                public rating: number,
                public director: string) {
    }
}