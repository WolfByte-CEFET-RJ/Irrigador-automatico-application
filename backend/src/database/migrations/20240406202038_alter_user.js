
exports.up = function(knex) {
    return knex.schema.alterTable("user", async (table) => {
        table.integer("code").defaultTo(null);
        table.timestamp("expirationDate").defaultTo(null);
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("user", async (table) => {
        table.dropColumn("code");
        table.dropColumn("expirationDate");
    })
};