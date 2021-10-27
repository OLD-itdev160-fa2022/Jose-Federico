(function () {
    let pumpkin = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum Necessitatibus soluta, nemo est labore dolor ex facilis? Magni voluptates provident possimus! Dolorum, vitae ex nihil veniam magnam blanditiis aliquid?88';
    var data = [
        {
            header: 'The Best Pumpkins',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum Necessitatibus soluta, nemo est labore dolor ex facilis? Magni voluptates provident possimus! Dolorum, vitae ex nihil veniam magnam blanditiis aliquid?88',
            selector: 't1'
        },
        {
            header: 'Apple Picking Too',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum Necessitatibus soluta, nemo est labore dolor ex facilis? Magni voluptates provident possimus! Dolorum, vitae ex nihil veniam magnam blanditiis aliquid?88',
            selector: 't2'
        },{
            header: 'Also a Petting Zoo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum Necessitatibus soluta, nemo est labore dolor ex facilis? Magni voluptates provident possimus! Dolorum, vitae ex nihil veniam magnam blanditiis aliquid?88',
            selector: 't3'
        }
    ]

    
    function Package(data) {
        this.header = data.header;
        this.description = data.description;
        this.selector = data.selector;
    }

    var writePackageInfo = function (package) {

        var selector = package.selector,
            headerEL = getEl(selector + '-header'),
            descEL = getEl(selector + '-description');

        headerEL.textContent = package.header;
        descEL.textContent = package.description;

    }
    var getEl = function (id) {
        return document.getElementById(id);
    }


    var test = new Package(data[0]);
    writePackageInfo(test);
    var test2 = new Package(data[1]);
    writePackageInfo(test2);
    var test3 = new Package(data[2]);
    writePackageInfo(test3);
}());