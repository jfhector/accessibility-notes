const Ajv = require('ajv');
var ajv = new Ajv;

var valid = ajv.validate(require('./schemas/guideline_schema.json'), require('./sample_guideline.json'));

if (valid) {
    console.log("./sample_guideline.json is valid for ./schemas/guideline.json");
} else {
    console.log(ajv.errors);
}
