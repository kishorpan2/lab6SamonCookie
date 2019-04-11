'use strict';
//Object for the location 1
var hourList = ['6am','7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSale: 6.3,
  locationName: 'Pike Place Market',
  custEachHour: [],
  cookiesEachHr: [],
  totalCookieForDay: 0
};
pike.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hourList.length; i++) {
    this.custEachHour.push(rand(this.minCustPerHour, this.maxCustPerHour));
  }
};
pike.calcCookiesEachHour = function() {
  for (var i = 0; i < hourList.length; i++) {
    var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    this.cookiesEachHr.push(oneHour);
    this.totalCookieForDay += oneHour;
  }
};

pike.render = function() {
  var ulEl = document.getElementById('pikeplace');
  for (var i = 0; i < hourList.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hourList[i]}: ${this.cookiesEachHr[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookieForDay} cookies`;
  ulEl.appendChild(liEl);
};


function rand(minCustPerHour, maxCustPerHour) {
  // following line line MDN Math.random docs
  return Math.floor(parseInt((Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour));
}

pike.calcCustomersEachHour();
pike.calcCookiesEachHour();
pike.render();

var seattle = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSale: 2.3,
  locationName: 'Pike Place Market',
  custEachHour: [],
  cookiesEachHr: [],
  totalCookieForDay: 0
};
seattle.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hourList.length; i++) {
    this.custEachHour.push((rand(this.minCustPerHour, this.maxCustPerHour)));
  }
};
seattle.calcCookiesEachHour = function() {
  for (var i = 0; i < hourList.length; i++) {
    var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    this.cookiesEachHr.push(oneHour);
    this.totalCookieForDay += oneHour;
  }
};
seattle.render = function() {
  var ulEl = document.getElementById('seattle');
  for (var i = 0; i < hourList.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hourList[i]}: ${this.cookiesEachHr[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookieForDay} cookies`;
  ulEl.appendChild(liEl);
};


function rand(minCustPerHour, maxCustPerHour) {
  // following line line MDN Math.random docs
  return Math.floor(parseInt((Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour));
}

seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();

var capitol = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSale: 2.3,
  locationName: 'Pike Place Market',
  custEachHour: [],
  cookiesEachHr: [],
  totalCookieForDay: 0
};
capitol.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hourList.length; i++) {
    this.custEachHour.push(rand(this.minCustPerHour, this.maxCustPerHour));
  }
};

capitol.calcCookiesEachHour = function() {
  for (var i = 0; i < hourList.length; i++) {
    var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    this.cookiesEachHr.push(oneHour);
    this.totalCookieForDay += oneHour;
  }
};

capitol.render = function() {
  var ulEl = document.getElementById('capitol');
  for (var i = 0; i < hourList.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hourList[i]}: ${this.cookiesEachHr[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookieForDay} cookies`;
  ulEl.appendChild(liEl);
};


function rando(minCustPerHour, maxCustPerHour) {
  // following line line MDN Math.random docs
  return Math.floor(parseInt((Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour));
}

capitol.calcCustomersEachHour();
capitol.calcCookiesEachHour();
capitol.render();

var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSale: 4.3,
  locationName: 'Pike Place Market',
  custEachHour: [],
  cookiesEachHr: [],
  totalCookieForDay: 0
};
alki.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hourList.length; i++) {
    this.custEachHour.push(rand(this.minCustPerHour, this.maxCustPerHour));
  }
};

alki.calcCookiesEachHour = function() {
  for (var i = 0; i < hourList.length; i++) {
    var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    this.cookiesEachHr.push(oneHour);
    this.totalCookieForDay += oneHour;
  }
};

alki.render = function() {
  var ulEl = document.getElementById('alki');
  for (var i = 0; i < hourList.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hourList[i]}: ${this.cookiesEachHr[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookieForDay} cookies`;
  ulEl.appendChild(liEl);
};


function rand(minCustPerHour, maxCustPerHour) {
  // following line line MDN Math.random docs
  return Math.floor(parseInt((Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour));
}

alki.calcCustomersEachHour();
alki.calcCookiesEachHour();
alki.render();

var seatac = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSale: 1.2,
  locationName: 'Seatac Airport',
  custEachHour: [],
  cookiesEachHr: [],
  totalCookieForDay: 0
};
seatac.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hourList.length; i++) {
    this.custEachHour.push(rand(this.minCustPerHour, this.maxCustPerHour));
  }
};

seatac.calcCookiesEachHour = function() {
  for (var i = 0; i < hourList.length; i++) {
    var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    this.cookiesEachHr.push(oneHour);
    this.totalCookieForDay += oneHour;
  }
};

seatac.render = function() {
  var ulEl = document.getElementById('seatac');
  for (var i = 0; i < hourList.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hourList[i]}: ${this.cookiesEachHr[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookieForDay} cookies`;
  ulEl.appendChild(liEl);
};


function rand(minCustPerHour, maxCustPerHour) {
  // following line line MDN Math.random docs
  return Math.floor(parseInt((Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour));
}

seatac.calcCustomersEachHour();
seatac.calcCookiesEachHour();
seatac.render();
