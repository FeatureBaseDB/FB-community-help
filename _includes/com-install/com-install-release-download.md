## Step 2 - Download the release

Right-click the appropriate release on the GitHub releases page, then download to your `/downloads` directory.

Alternatively, you can download using the terminal.

* Open a terminal
* Create the installation directory:

```sh
mkdir featurebase
```

* CD to the `/featurebase` directory
* Run the following command after substituting correct values for:
  * `<version>`
  * `<os>` -- linux or darwin (MacOS)
  * `<processor>`

```
curl -L https://github.com/FeatureBaseDB/featurebase/releases/download/v<version>/featurebase-v<version>-<os>-<processor>64.tar.gz -o featurebase.tar.gz
```
