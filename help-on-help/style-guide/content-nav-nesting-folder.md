# Set up sidebar navigation page order

The order and positioning of pages in the left sidebar navigation tree is governed by YAML headers in each `/doc` markdown file.

There are two exceptions:
* Pages with **no** header YAML are ignored and not loaded into the sidebar navigation
* Pages with **no** parent page are added to the navigation root

IMPORTANT: the folder structure is ignored

## Before you begin

* [Theme guidance on page order and navigation](https://just-the-docs.github.io/just-the-docs/docs/navigation-structure/)

## Three-level navigation depth

The theme supports 3 level of pages

| Level | Description | Optional pages you can add | Example |
|---|---|---|---|
| Home | HTML homepage | One or more L1 pages | /index.md |
| L1 | Appears at navigation root. | One or more L2 pages | /docs/cloud/cloud-home.md |
| L2 | Appears beneath L1 page | One or more L3 pages | /docs/cloud/cloud-databases/cloud-db-manage.md |
| L3 | Appears beneath L2 page | /docs/cloud/cloud-databases/cloud-db-create-custom.md |

Nesting requires the following YAML keys to be defined in the page header:

| Key | Description |Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| title | Page title in nav |yes | yes | yes |
| has_children: [true|false] | `true` indicates page has children | For 1+ L2 pages | For 1+ L3 pages | n/a |
| parent | Page one level up in the navigation under which the current page belongs | n/a | L1 title | L2 title |
| grandparent | Page that contains the parent | n/a | n/a | L1 title |

## Example YAML

### Homepage `/index.md`

This is a special page with a different layout and can only contain HTML.

```yaml
title: FeatureBase help
layout: home          # remote theme specific layout
has_children: false   # no L1 pages beneath
nav_order: 1          # first item in navigation
has_toc: false        # no auto-generated TOC of L1 pages beneath
```

### Level 1 with no L2 pages

```yaml
title: page title        # page title appears in navigation
layout: default          # standard layout for all pages
has_children: false      # page has no L2 pages
nav_order: 1             # page order in navigation
has_toc: false           # auto-generated list of L2 pages
```

## Level 1 with L2 subpages

```yaml
title: L1 page title    # Page title that appears in nav
layout: default
has_children: true      # L2 pages appear beneath page in nav
nav_order: 3            # position in nav
has_toc: false          # no auto-generated list of L2 pages
```

## Level 2 with no L3 pages

```yaml
title: L2 page title     # page title for nav
layout: default
parent: L1 page title    # L1 page title (requires has_children: true in L1 page)
has_children: false      # no children for this page
nav_order: 3
has_toc: false           # no auto generated list of L3 pages
```

## Level 2 with L3 pages

```yaml
title: L2 page title    # page title for nav
layout: default
parent: L1 page title   # L1 page title (requires has_children: true in L1 page)
has_children: true      # Indicates has level 3 pages beneath
nav_order: 3
has_toc: false          # No auto-generate TOC of child pages
```

## Level 3 page

```yaml
title: L3 page title          # page title for nav
layout: default
parent: L2 page title         # L2 page title (requires has_children: true in L2 page)
grand_parent: L1 page title   # L1 page title (requires has_children: true in L1 page)
nav_order: 3
```
