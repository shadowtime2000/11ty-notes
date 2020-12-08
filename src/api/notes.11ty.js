module.exports.data = function () {
    return {
        permalink: "/api/notes.json"
    }
}

module.exports.render = function (data) {
    let urls = [];
    for (let key in data.collections.notes) {
        urls.push({
            url: data.collections.notes[key].filePathStem,
            description: data.collections.notes[key].data.description,
            title: data.collections.notes[key].data.title
        });
    }
    return JSON.stringify(urls);
}