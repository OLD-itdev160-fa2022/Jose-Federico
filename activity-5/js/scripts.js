(function() {

    var data = [
        {
            name: 'CSS peek',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 2310961,
            stars: 69,
            price: 'free',
            selector: 'p1'
        },
        {
            name: 'Open in Browser',
            description: 'This Visual Studio Code extension does exactly what it says: it enables you to view an HTML file in-browser. ',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
            downloads: 4427246,
            stars: 66,
            price: 'free',
            selector: 'p2'
        },
        {
            name: 'Trailing Spaces',
            description: 'As the name describes, it enables you to highlight trailing spaces and remove them quickly.',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 787240,
            stars: 39,
            price: 'free',
            selector: 'p3'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        }

        this.getFormattedStarts = function() {
            return this.stars.toLocaleString();
        }
    }

    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {

        var selector = package.selector,
            nameEL = getEl(selector + '-name'),
            descEL = getEl(selector + '-description'),
            authEL = getEl(selector + '-author'),
            downEL = getEl(selector + '-downloads'),
            starEL = getEl(selector + '-stars');

            nameEL.textContent = package.name;
            descEL.textContent = package.description;
            authEL.textContent = package.author;
            downEL.textContent = package.getFormattedDownloads();
            starEL.textContent = package.getFormattedStarts();
    }

    var dateEL = getEl('date');
    dateEL.textContent = getTodaysDate();

    var peek = new Package(data[0]);
    writePackageInfo(peek);
    var open = new Package(data[1]);
    writePackageInfo(open);
    var trailing = new Package(data[2]);
    writePackageInfo(trailing);

}());