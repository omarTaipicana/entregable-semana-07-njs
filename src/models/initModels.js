const Users = require("./users.models")
const Movies = require("./movies.models")
const Series = require("./series.models")
const Seasons = require("./seasons.models")
const Episodes = require("./episodes.models")
const MovieGenres = require("./movies_genres.models")
const SerieGenres = require("./series_genres.models")
const Genres = require("./genres.models")

const initModels = () => {
    MovieGenres.belongsTo(Movies)
    Movies.hasMany(MovieGenres)

    MovieGenres.belongsTo(Genres)
    Genres.hasMany(MovieGenres)

    Episodes.belongsTo(Seasons)
    Seasons.hasMany(Episodes)

    SerieGenres.belongsTo(Series)
    Series.hasMany(SerieGenres)

    SerieGenres.belongsTo(Genres)
    Genres.hasMany(SerieGenres)

    Seasons.belongsTo(Series)
    Series.hasMany(Seasons)
}

module.exports = initModels