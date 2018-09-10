'use strict';

module.exports = function (Charts) {

    var request = require("request")

    /* Get the Json of Sources / Pie-Charts */
    Charts.getSourcesValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/bqcqc"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                for (var temp of body) {
                    temp.y = Math.floor(Math.random() * 673.23);
                }
                callback(error, body);

            }
            // var random = request.num[Math.floor(Math.random() * num.length)];
            // console.log(random)
        })
    }
    Charts.getSources = function (from_date, to_date, callback) {
        var self = this;
        self.getSourcesValidation(from_date, to_date, callback);
    }

    /* Get the Json of Sources Trend / Spark-Line-Charts */
    Charts.getSourcesTrendValidation = function (last_week, callback) {
        var url = "https://api.myjson.com/bins/enlb8"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                // console.log(body.data);
                for (var temp of body) {
                    // console.log(temp.data);
                    for (var obj of temp.data) {
                        console.log(obj.count);
                        obj.count = Math.floor(Math.random() * 60936);
                        console.log(obj.count);
                    }
                }
                callback(error, body);
            }
        })
    }
    Charts.getSourcesTrend = function (last_week, callback) {
        var self = this;
        self.getSourcesTrendValidation(last_week, callback);
    }

    /* Get the Json of Pumps Yield / Gantt-Charts */
    Charts.getPumpsYieldValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/i8y0w"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                for (var temp of body) {
                    temp.x = Math.floor(Math.random() * 12);
                    temp.x2 = Math.floor(Math.random() * 18);
                    temp.yieldValue = Math.floor(Math.random() * 389);
                    temp.yieldPercentage = Math.floor(Math.random() * 268);
                    temp.partialFill = (Math.floor(Math.random() * 3)+5)/ 9;
                }
                console.log(body);
                callback(error, body);
            }
        })
    }
    Charts.getPumpsYield = function (from_date, to_date, callback) {
        var self = this;
        self.getPumpsYieldValidation(from_date, to_date, callback);
    }


    /* Get the Json of Water Demand / Usage-Charts */
    Charts.getWaterDemandValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/qex4k"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                // console.log(body.datasets)
                for (var temp of body.datasets) {
                    console.log(temp.data[0]);
                    for (var i = 0; i < temp.data.length; i++) {
                        // console.log(temp.data[i])
                        temp.data[i] = Math.floor(Math.random() * 834);
                        console.log(temp.data[i]);
                    }
                }
                callback(error, body);
            }
            console.lg
        })
    }
    Charts.getWaterDemand = function (from_date, to_date, callback) {
        var self = this;
        self.getWaterDemandValidation(from_date, to_date, callback);
    }

    /* Get the Json of Block Level / Tree-map */
    Charts.getBlockLevelValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/huchg"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                // console.log(body.children);
                for (var temp of body.children) {
                    // console.log("temp",temp)
                    for (var key of temp.children) {
                        // console.log("key",key)
                        for (var i = 0; i < key.children.length; i++) {
                            // console.log(key.children[i].size)
                            key.children[i].size = Math.floor(Math.random() * 834);
                        }

                    }
                    // console.log(temp.children);
                    // temp.children = Math.floor(Math.random() * 834);
                    // console.log(temp.children);
                    // for (var  obj of temp.data ){
                    //     console.log(obj.count);
                    //     obj.count = Math.floor(Math.random() * 60936);
                    //     console.log(obj.count);
                    // }
                }
                callback(error, body);
            }
        })
    }
    Charts.getBlockLevel = function (from_date, to_date, callback) {
        var self = this;
        self.getBlockLevelValidation(from_date, to_date, callback);
    }

    /* Get the Json of High Users / Bubble-charts */
    Charts.getHighUsersValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/mlgz8"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                for (var temp of body.children) {
                    // console.log("temp",temp)
                    for (var key of temp.children) {
                        // console.log(key.size)
                        key.size = Math.floor(Math.random() * 8344);
                    }

                }
                callback(error, body);
            }
        })
    }
    Charts.getHighUsers = function (from_date, to_date, callback) {
        var self = this;
        self.getHighUsersValidation(from_date, to_date, callback);
    }

    /* Get the Json of Water Map / Heat-Map */
    Charts.getWaterMapHeatMapValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/dopr8"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                for (var temp of body) {
                    temp.Value = Math.floor(Math.random() * 3467);
                }
                callback(error, body);
            }
        })
    }
    Charts.getWaterMapHeatMap = function (from_date, to_date, callback) {
        var self = this;
        self.getWaterMapHeatMapValidation(from_date, to_date, callback);
    }

    /* Get the Json of Water Map / Heat-Map */
    Charts.getWaterMapHistogramValidation = function (from_date, to_date, callback) {
        var url = "https://api.myjson.com/bins/ghzl8"
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                for (var temp of body) {
                    // console.log(temp.data);
                    for (var obj of temp.data) {
                        console.log(obj.count);
                        obj.count = Math.floor(Math.random() * 45000);
                        console.log(obj.count);
                    }
                }
                callback(error, body);
            }
        })
    }
    Charts.getWaterMapHistogram = function (from_date, to_date, callback) {
        var self = this;
        self.getWaterMapHistogramValidation(from_date, to_date, callback);
    }
};
