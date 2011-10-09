/*!
 * node-azure
 * Copyright(c) 2011 Paul O'Fallon <paul@ofallonfamily.com>
 * MIT Licensed
 */

var crypto = require('crypto');
var dateFormat = require('dateformat');
var sax = require("sax");

var azureutil = require("./util");
    
function Container (b,options) {
  this.options = options;
  this.name = b;
}

Container.listContainers = function(options, callback) {

};

Container.createContainer = function(b,options,callback) {
  
};

Container.removeContainer = function(b,options,callback) {
  
};

Container.prototype.list = function(options,callback) {
  
};

Container.prototype.put = function(s,options,callback) {
  
};

Container.prototype.get = function(b,options,callback) {
  
};

Container.prototype.snapshot = function(b,options,callback) {
  
};

Container.prototype.copy = function(b1,b2,options,callback) {
  
};

Container.prototype.del = function(b,options,callback) {
  
};