
exports.up = function(knex) {   
    return knex.schema.createTable("irrigationSetting", (table) => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.integer("userId").references("id").inTable("user").onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("irrigationSetting");
};
