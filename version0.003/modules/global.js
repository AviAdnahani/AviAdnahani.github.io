function setTag(sorce) {
    var tag = document.createElement(sorce['tag']);
    for (const key in sorce) {
        if (key != 'tag' & key != 'perent_tag') {
            tag.setAttribute(key, sorce[key]);
        }
    }
    document.getElementsByTagName(sorce['perent_tag'])[0].appendChild(tag);
}

export {setTag};
