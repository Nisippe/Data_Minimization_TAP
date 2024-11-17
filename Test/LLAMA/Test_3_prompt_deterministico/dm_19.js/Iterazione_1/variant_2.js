// Mocking the Feed object with newFeedItem properties
const Feed = {
newFeedItem: {
    EntryUrl: "http://example.com/article"
}
};

// Mocking the Dropbox object with methods for adding and creating files
const Dropbox = {
addFileFromUrl: {
    skip: function() {
    console.log("Skipped adding file from URL.");
    },
    setFilename: function(fileName) {
    console.log(`Filename for file from URL set to: ${fileName}`);
    }
},
createTextFileDb: {
    skip: function() {
    console.log("Skipped creating text file.");
    },
    setFilename: function(fileName) {
    console.log(`Filename for text file set to: ${fileName}`);
    },
    setBody: function(body) {
    console.log(`Body for text file set to: ${body}`);
    }
}
};

var sourceUrl = Feed.newFeedItem.EntryUrl;

var fileName = sourceUrl.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

if (!sourceUrl) {
Dropbox.addFileFromUrl.skip();
Dropbox.createTextFileDb.skip();
} else {
Dropbox.addFileFromUrl.setFilename(fileName);
Dropbox.createTextFileDb.setFilename(fileName + '.url');
Dropbox.createTextFileDb.setBody('[InternetShortcut]\r\nURL=' + sourceUrl + '\r\nIconIndex=0');
}