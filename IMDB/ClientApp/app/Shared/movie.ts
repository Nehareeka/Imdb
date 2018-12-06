export interface IProducerName {
    sex: string;
    dob: Date;
    bio: string;
    name: string;
}

export interface IMovie {
    name: string;
    producerName: IProducerName;
    releaseYear: Date;
    plot: string;
    poster: string;
}
