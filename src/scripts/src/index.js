import '../../styles/src/index.sass';
import jQuery from 'jquery';
import Launch from './components/launch';

class SpacexDB {
    constructor() {
        this.$launches = document.getElementById('launches');
        this.api = 'https://api.spacexdata.com/v3/launches';
    }

    getLaunches() {
        fetch(this.api)
            .then(response => response.json())
            .then(data => this.showLaunches(data))
            .catch(err => console.error(err));
    }

    showLaunches(launches) {
        if(launches.length) {
            launches.forEach((launch) => {
                this.$launches.appendChild(new Launch(launch).create());
            })
        }
    }
}

let db = new SpacexDB();

db.getLaunches();
