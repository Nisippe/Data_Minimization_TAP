// Mocking the Feed object with newFeedItem properties
const Feed = {
newFeedItem: {
    EntryUrl: "http://example.com/article"
}
};

// Mocking the Dropbox object with methods for adding and creating files
const Dropbox = {
addFileFromUrl: {
    setFilename: function(fileName) {
    console.log(`Filename for file from URL set to: ${fileName}`);
    }
},
createTextFileDb: {
    setFilename: function(fileName) {
    console.log(`Filename for text file set to: ${fileName}`);
    },
    setBody: function(body) {
    console.log(`Body for text file set to: ${body}`);
    }
}
};

var sourceUrl = Feed.newFeedItem.EntryUrl;

if (!sourceUrl) {
Dropbox.addFileFromUrl.setFilename('');
Dropbox.createTextFileDb.setFilename('');
Dropbox.createTextFileDb.setBody('');
} else {
var fileName = sourceUrl.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
var finalUrl = '[InternetShortcut]\r\nURL=' + sourceUrl + '\r\nIconIndex=0';

Dropbox.addFileFromUrl.setFilename(fileName);
Dropbox.createTextFileDb.setFilename(fileName + '.url');
Dropbox.createTextFileDb.setBody(finalUrl);
}