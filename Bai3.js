let Tivi = function (volume, kenh) {
    this.connectRemote = function (Remote) {
        this.Remote = Remote;
    };
    this.volume = volume;
    this.bat = function () {
        this.Remote.turnon();
    };
    this.tat = function () {
        this.Remote.turnoff();
    };
    this.TangVolume = function () {
        return this.Remote.vl() + 2;
    };
    this.GiamVolume = function () {
        return this.Remote.vl() - 2;
    };
    this.chuyenkenh = function () {
        return this.kenh = function () {
            this.kenh = kenh;
        }
    }
};
let Remote = function () {
    this.turnoff = function () {
        this.status = true;
    }
    this.turnon = function () {
        this.status = false;
    }
    this.vl = function () {
        return this.volume;
    }
};
let tivi = new Tivi(50, 7);
let remote1 = new Remote();
tivi.connectRemote(remote1);

function BatTV() {
    remote1.turnon();
    document.getElementById("trangthaitivi").innerHTML = "Bật";
}
function TatTV() {
    remote1.turnoff();
    document.getElementById("trangthaitivi").innerHTML = "Tắt";

}

