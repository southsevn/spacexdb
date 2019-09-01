export default class Launch {
    constructor(data) {
        this.data = data;
        this.create();
    }
    createImage(src, wrapper = 'div') {
        let $image = document.createElement('img');
        $image.setAttribute('src', src);

        let $wrapper = document.createElement(wrapper);
        $wrapper.classList = 'image';
        $wrapper.appendChild($image);

        return $wrapper;
    };

    createContent(href, name, elem = 'div') {
        let $href = document.createElement('a');
        let $meta = document.createElement('div');
        let $date = document.createElement('span');
        let $description = document.createElement('div');
        let $elem = document.createElement(elem);


        $description.classList = 'description';

        $href.setAttribute('href', href);
        $href.setAttribute('target', '_blank');
        $href.classList = 'header';
        $href.innerText = name;

        $elem.classList.add('content');
        $elem.appendChild($href);
        $elem.appendChild($description);
        return $elem;
    }

    create() {
        let $elem = document.createElement('li');

        $elem.classList = 'ui fluid card';

        if(this.data.links.flickr_images[0]) {
            $elem.appendChild(this.createImage(this.data.links.flickr_images[1]));
        }

        $elem.appendChild(this.createContent(this.data.links.wikipedia, this.data.mission_name));
        return $elem;
    }
}
