"use strict";
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "./pages/api/events/index.js":
/*!***********************************!*\
  !*** ./pages/api/events/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  events
} = __webpack_require__(/*! ./data.json */ "./pages/api/events/data.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} is not allowed`
    });
  }
});

/***/ }),

/***/ "./pages/api/events/data.json":
/*!************************************!*\
  !*** ./pages/api/events/data.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"events":[{"id":"1","name":"Throwback Thursdays with DJ Manny Duke","slug":"throwback-thursdays-with-dj-manny-duke","venue":"Horizon Club","address":"919 3rd Ave New York, New York(NY), 10022","performers":"DJ Manny Duke","date":"June 09, 2021","time":"10:00 PM EST","description":"Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90\'s and 2000\'s","image":"/images/sample/event1.jpg"},{"id":"2","name":"Boom Dance Festival Experience","slug":"boom-dance-festival-experience","venue":"Blackjacks","address":"966 Lexington Ave New York, New York(NY), 10021","performers":"DJ LUCK & MC NEAT, NICKY BLACKMARKET, DJ NICKY BLACKMARKET, RATPACK","date":"June 2, 2021","time":"8:00 PM EST","description":"It\'s looking more and more like we will be seeing events return in the summer! To celebrate this we are arranging a festival experience to say good bye to lock down! We will also be celebrating the fact Zoom Dance is one year old!","image":"/images/sample/event2.jpg"},{"id":"3","name":"Encore Night Boat Party","slug":"encore-night-boat-party","venue":"Encore","address":"675 Water St New York, New York(NY), 10002","performers":"Bad Boy Bill","date":"June 11, 2021","time":"7:00 PM EST","description":"Who is ready to party? I mean in the middle of the water, a boat with good music and drinks. If thats you then you have made it to the right place.","image":"/images/sample/event3.jpg"},{"id":"4","name":"Jam Concert Live","slug":"jam-concert-live","venue":"Club Ozone","address":"70 W 115th St New York, New York(NY), 10026","performers":"DJ RNB","date":"June 20, 2021","time":"10:00 PM EST","description":"The most diverse dj on the east coast, DJ RNB team up once again to bring you the next installment in the high energy, Jam Concert Live series!","image":"/images/sample/event4.jpg"},{"id":"5","name":"UnMute Rock Festival","slug":"unmute-rock-festival","venue":"Studio 54","address":"55 La Salle St #12K New York, New York(NY), 10027","performers":"Big Wednesday, Black Pyre, Calling Apollo","date":"June 30, 2021","time":"8:00 PM EST","description":"With bands from around the UK ready to send the roof into orbit, get ready for the loudest Welsh festival: the inaugural UnMute 2021.","image":"/images/sample/event5.jpg"},{"id":"6","name":"Soul Kitchen Party","slug":"soul-kitchen-party","venue":"Onyx Club","address":"60 Gramercy Park N #2 New York, New York(NY), 10010","performers":"A-Trak, Nightmares on Wax, Rakim, Jay Electronica","date":"July 2, 2021","time":"8:00 PM EST","description":"Dope party which features Hip Hop legends, emerging artists and world-class turntablists","image":"/images/sample/event6.jpg"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/events/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2V2ZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFhQyxtQkFBTyxDQUFDLGlEQUFELENBQTFCOztBQUVBLGlFQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3RCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sTUFBckI7QUFDSCxHQUZELE1BRU87QUFDSEcsSUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQUosSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsTUFBQUEsT0FBTyxFQUFHLFVBQVNOLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNIO0FBQ0osQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC8uL3BhZ2VzL2FwaS9ldmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBldmVudHMgfSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJylcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGV2ZW50cylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IGlzIG5vdCBhbGxvd2VkYCB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJldmVudHMiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInNldEhlYWRlciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9