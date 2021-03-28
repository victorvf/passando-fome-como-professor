/*
    Carinha responsável por convertor todo o nosso código para uma forma que
    todos os browsers entendam.
*/
module.exports = {
    presets: [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {runtime: "automatic"},
        ]
    ]
}
