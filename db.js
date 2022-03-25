const axios = require('axios');
const config = require('./config.json')
            
class dbAPI {
    constructor(cluster, database, collection, base_url = 'https://data.mongodb-api.com/app/data-tinll/endpoint/data/beta', method = 'POST', headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': config.MongoAPI
    }) {
        this.cluster = cluster;
        this.database = database;
        this.collection = collection;
        this.base_url = base_url;
        this.method = method;
        this.headers = headers;
    }

    sendRequest(data, endpoint) {
        var header_data = JSON.stringify(Object.assign({
            dataSource: this.cluster,
            database: this.database,
            collection: this.collection
        }, data))

        return axios({
                method: this.method,
                url: (this.base_url + endpoint),
                headers: this.headers,
                data: header_data

            }).then(function(response) {
                return response.data
            })
            .catch(function(error) {
                return error;
            });
    };

    readFor(filter, projection = {}, sort = {}, limit = 1000, skip = 0) {
        return this.sendRequest({
            filter: filter,
            projection: projection,
            sort: sort,
            limit: limit,
            skip: skip
        }, "/action/find")
    }

    insertFor(documents) {
        return this.sendRequest({
            documents: documents
        }, "/action/insertMany")
    }

    replaceFor(filter, replacement, upsert = false) {
        return this.sendRequest({
            filter: filter,
            replacement: replacement,
            upsert: upsert
        }, "/action/replaceOne")
    }

    updateFor(filter, update, upsert = false) {
        return this.sendRequest({
            filter: filter,
            update: update,
            upsert: upsert
        }, "/action/updateMany")
    }

    deleteFor(filter) {
        return this.sendRequest({
            filter: filter
        }, "/action/deleteMany")
    }

    aggregateFor(pipeline) {
        return this.sendRequest({
            pipeline: pipeline
        }, "/action/aggregate")
    }
}

module.exports = {
    dbAPI
}
