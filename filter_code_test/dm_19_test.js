const Feed = {
    newFeedItem: {
        EntryImageUrl: "http://example.com/image.jpg",
        EntryUrl: "http://example.com/feed-item"
    }
};

const Dropbox = {
    addFileFromUrl: {
        skip: () => console.log("Skipping addFileFromUrl."),
        setFilename: (filename) => console.log(`File name set to: ${filename}`)
    },
    createTextFileDb: {
        skip: () => console.log("Skipping createTextFileDb."),
        setFilename: (filename) => console.log(`Text file name set to: ${filename}`),
        setBody: (body) => console.log(`Text file body set to: ${body}`)
    }
};

if (!Feed.newFeedItem.EntryImageUrl) {
    Dropbox.addFileFromUrl.skip();
    Dropbox.createTextFileDb.skip();
} else {
    var filteredName = Feed.newFeedItem.EntryImageUrl.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    

    var url = '\r\nURL=' + Feed.newFeedItem.EntryUrl + '\r\nIconIndex=0';
    
    Dropbox.addFileFromUrl.setFilename(filteredName);
    Dropbox.createTextFileDb.setFilename(filteredName + '.url');
    Dropbox.createTextFileDb.setBody(url);
}
