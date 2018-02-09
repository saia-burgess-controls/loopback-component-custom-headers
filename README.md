# Loopback Component Custom Headers

Sets cache headers according to the model configuration

Add the following configuration to your model configuration if you want to enable
custom headers.

```
MyModel {
    "options": {
        "setCustomHeaders": true,
        "customHeaders": {
            "Cache-Control": "public, max-age=86400",
            "Vary": "User-Agent"
        }
    }
}
```
Pameters:

* setCustomHeaders: Boolean enables the feature for the given model.
* customHeaders: Object adds all configured headers to the response where the key is the name of the header and the value the header value.
