class Url {

  constructor(baseUrl) {
    this.url = baseUrl + "?";
  }



  withParam(key, value) {
    this.url = this.url + key + "=" + value + "&"
    return this;
  }

  build() {
    return this.url;
  }

}

export default Url;
