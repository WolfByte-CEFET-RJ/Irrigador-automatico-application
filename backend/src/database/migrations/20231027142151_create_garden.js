
exports.up = function(knex) {
    return knex.schema.createTable("garden", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description");
        table.string("identifier").notNullable(); //rever lógica
        table.integer("userId").unsigned().references("id").inTable("user").onDelete("CASCADE");
        table.integer("configId").unsigned().references("id").inTable("irrigationSetting").onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("garden");
};
