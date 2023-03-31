"use strict";
(() => {
var exports = {};
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "airtable"
const external_airtable_namespaceObject = require("airtable");
var external_airtable_default = /*#__PURE__*/__webpack_require__.n(external_airtable_namespaceObject);
;// CONCATENATED MODULE: ./lib/airtable.ts

external_airtable_default().configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = external_airtable_default().base(process.env.AIRTABLE_BASE_ID);
async function getAllProducts() {
    const products = await new Promise((resolve, reject)=>{
        const products = [];
        const select = {
            filterByFormula: ``,
            offset: 0
        };
        base("products").select(select).eachPage((records, fetchNextPage)=>{
            records.map((record)=>{
                let attachments = record.get("images");
                products.push({
                    name: record.get("name"),
                    link: record.get("link") || null,
                    creator: record.get("creator") || null,
                    summary: record.get("summary") || null,
                    description: record.get("description") || null,
                    images: attachments.map((img)=>img.url) || [],
                    postedAt: record.get("postedAt"),
                    tags: record.get("tags") || []
                });
            });
            fetchNextPage();
        }, function done(err) {
            if (err) {
                console.error(err);
                reject();
                return;
            }
            resolve(products);
        });
    });
    return products;
}
async function sendSubmission({ name , link , description , email  }) {
    const response = await new Promise((resolve, reject)=>{
        const submittedAt = new Date().toISOString();
        base("submissions").create([
            {
                fields: {
                    name,
                    link,
                    description,
                    email,
                    submittedAt
                }
            }
        ], (err, records)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(records?.map((r)=>r.id));
        });
    });
    console.log(`sendSubmission response: ${JSON.stringify(response)}`);
    return response;
}


;// CONCATENATED MODULE: ./pages/api/submission.ts

async function handler(req, res) {
    if (req.method === "POST") {
        if (!req.body) {
            return res.status(400).json({
                error: "Invalid body"
            });
        }
        const body = JSON.parse(req.body);
        if (body.email && !validateEmail(body.email)) {
            return res.status(400).json({
                error: "Invalid email"
            });
        }
        if (!body.description) {
            return res.status(400).json({
                error: "Invalid description"
            });
        }
        const response = await sendSubmission(body);
        res.status(200).json(response);
        return;
    }
    res.status(400).json({
        error: "Method not allowed"
    });
}
// The most basic email validation
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(68));
module.exports = __webpack_exports__;

})();