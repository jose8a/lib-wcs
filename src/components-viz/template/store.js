import * as d3 from 'd3';

const Store = {
  dataStorageId: 'chartData',
  dataset: [],

  datasetUrl: [
    "https://",
    "raw.githubusercontent.com",
    "/freeCodeCamp",
    "/ProjectReferenceData",
    "/master",
    "/GDP-data.json"
  ],

  updateData: async function updateData() {
    return d3.json(this.datasetUrl.join(''));
  },

  getData: async function getData() {
    const oldData = localStorage.getItem(this.dataStorageId);
    let response = null;

    if (!!oldData) {
      // parse and store the browser-cached data
      this.dataset = JSON.parse(oldData);

    } else {
      // else: retrieve new data, and then put in localStorage
      response = await this.updateData();
      this.dataset = [...response.data];

      localStorage.setItem(
        this.dataStorageId,
        JSON.stringify(this.dataset)
      );
    }

    return this.dataset;
  }
}

//Object.freeze(Store);
export default Store;

