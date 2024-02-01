# Regenerating SQL SVGs

Backus-Naur form (BNF) images are used to explain syntax for reference pages found in `/sql-guide`.

These instructions explain how to generate `.svg` BNF images, then move them to the required images folder found in `/assets/images/sql-guide`

The following files perform specific functions:

| Filename | Description |
|---|---|
| `sql3.ebnf` | BNF design source file where changes can be made |
| `makebnf.sh` | Shell script that generates sql3.html from sql3.ebnf |
| `extract.css` | CSS stylesheet used by `extract.py` to generate `.svg` files |
| `extract.py` | Python file that generates `.svg` files based on `extract.css` and `sql3.html` and saves to parent folder `/help-on-help` |
| `move-svg-to-images.sh` | Shell script that moves generated `.svg` files from `/help-on-help` to required destination `/assets/images/sql-guide` |

## Before you begin

* Install python3
* Install `npn` if not already installed
* Install `pip` or `conda` if not already installed
* Clone `/featurebase-docs` and create an appropriate branch.

## Step 1 - install dependencies if required

Use `pip` or `conda` to install dependencies if these are not already installed.

* CD to the `/usr` directory.
* Run the following commands:

| Dependency | Directory | Command |
|---|---|
| `ebnf2railroad` | `sudo npm install -g ebnf2railroad` |
| `bs4` | `[pip|conda] install bs4` |
| `lxml` | `[pip|conda] install lxml` |

## Step 2 - Make changes to source file

Make required alterations to the `sql3.ebnf` file

## Step 3 - generate the sql3.html file

Run the `makebnf` script:

```
bash ./makebnf.sh
```

NOTE: The build script may report `missing reference...` before reporting success: `📜 Document created at ./sql3.html`

## Step 3 - Extract the images from the sql3.html file

NOTE: You can also run `python extract.py` if required.

Run the extract script:

```
python3 extract.py`
```

## Step 4 - confirm the images are updated

* Navigate to `/assets/images/sql-guide/` and confirm the intended images have been updated.