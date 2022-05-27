export interface IPeliculas {
    _id?:         string,
    type:        Type,
    url:         string,
    src:         string,
    srcBig?:     string,
    cover:       string,
    titulo:      string,
    texto?:      string,
    logo:        string,
    description: string,
    trailer?:    string,
    details:     Details,
    logoCover?:  string,
    date?:       string,
    height?:     string
}

export interface Details {
    duration?:        string,
    releaseDate:      string,
    genre:            string[],
    rating:           number,
    starring?:        string[],
    season?:          number,
    subtitles:        boolean,
    audioDescription: boolean,
    photosensitive:   boolean,
    sinopsis:         string
}

export interface Type {
    cover:  boolean,
    new:    boolean,
    coming: boolean
}
