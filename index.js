module.exports = function(app) {
    // Adding the configured cache headers
    Object.values(app.models).forEach((model) => {
        if (model.settings.setCustomHeaders) {
            model.afterRemote('**', (ctx, result, next) => {
                Object.entries(model.settings.customHeaders).forEach((entry) => {
                    ctx.res.set(entry[0], entry[1]);
                });
                next();
            });
        }
    });
};
