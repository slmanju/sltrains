/**
 * Created by manjula on 10/29/17.
 */
const express = require("express");
const moment = require("moment");
const request = require("request");
const secret = require("./secret");

var ALL_STATIONS = {};

const API = {
    GET_ALL: "https://api.lankagate.gov.lk:8243/railway/1.0/station/getAll?lang=en",
    SEARCH_TRAIN: "https://api.lankagate.gov.lk:8243/railway/1.0/train/searchTrain",
    GET_PRICE: "https://api.lankagate.gov.lk:8243/railway/1.0/ticket/getPrice"
};

const AUTH = {
    Authorization : "Bearer " + secret.bearer
};

function getSearchUrl(req) {
    var searchDate = req.body.date || moment();
    searchDate = moment(searchDate).format("YYYY-MM-DD");
    return API.SEARCH_TRAIN + "?" +
        "startStationID=" + req.body.fromStation +
        "&endStationID=" + req.body.toStation +
        "&searchDate=" + searchDate +
        "&startTime=" + req.body.startTime +
        "&endTime=" + req.body.endtime +
        "&lang=en";
}

function getPriceUrl(req) {
    return API.GET_PRICE + "?" +
    "startStationID=" + req.body.fromStation +
    "&endStationID=" + req.body.toStation +
    "&lang=en";
}

function findAll() {
    request({
            url: API.GET_ALL, headers: AUTH
        }, function (error, response, body) {
            if (error) return new Error("Stations could not be loaded");
            console.log("all station names are collected");
            ALL_STATIONS = JSON.parse(body).RESULTS.stationList;
        }
    );
}

function findTrains(req, res, next, callback) {
    request({
            url: getSearchUrl(req), headers: AUTH
        }, function (error, response, body) {
            if (error) return next(new Error("We are sorry. Could not connect to railway service."));
            const trains = JSON.parse(body).RESULTS.directTrains.trainsList;
            callback(req, res, next, trains);
        }
    );
}

function findPrices(req, res, next, trains) {
    request({
        url: getPriceUrl(req), headers: AUTH
    }, function (err, response, body) {
        if (err) return next(new Error("We are sorry. Could not connect to railway service."));
        const prices = JSON.parse(body).RESULTS.priceList;
        res.render("result", {
            trains: trains,
            prices: prices
        });
    });
}

exports.search_get = function (req, res) {
    res.render("search", { stations: ALL_STATIONS });
};

exports.search_post = function (req, res, next) {
    findTrains(req, res, next, findPrices);
};

findAll();
