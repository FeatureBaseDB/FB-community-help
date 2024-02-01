---
title: Material Icons
---

The Cloud product uses Material Icons.

## Theme modifications

| File | Modification |
|---|---|
| `/_includes/head_custom.html` | `<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet">` |
| `/_sass/custom/custom.html` | `.material-icons.md-18 { font-size: 18px; }`

* added material icons stylesheet ref to `/_includes/head_custom.html`
* added material icons stylesheet style to

## Icon source

https://fonts.google.com/icons

**IMPORTANT** Do not use icons from [mui.com](https://mui.com/material-ui/material-icons/) because the codes are **incorrect** and will not render properly.

## Usage

```
<span class="material-icons md-18">icon_name</span>
```

## Icons used in Cloud and Community GUI

Icon source = [Material icons filled](https://fonts.google.com/icons?icon.style=Filled&icon.set=Material+Icons)

| Menu item/page | icon | Renders as |
|---|---|---|
| Announcement (top right) | `<span class="material-icons md-18">sms_failed</span>` | <span class="material-icons md-18">sms_failed</span> |
| Home | `<span class="material-icons md-18">home</span>` | <span class="material-icons md-18">Home</span> |
| Databases | `<span class="material-icons md-18">dynamic_feed</span>` | <span class="material-icons md-18">DynamicFeed</span> |
| Tables | `<span class="material-icons md-18">table_view</span>` | <span class="material-icons md-18">table_view</span> |
| Data sources | `<span class="material-icons md-18">cloud_upload</span>`| <span class="material-icons md-18">cloud_upload</span> |
| Query | `<span class="material-icons md-18">manage_search</span>` | <span class="material-icons md-18">manage_search</span> |
| Configuration | `<span class="material-icons md-18">settings</span>` | <span class="material-icons md-18">settings</span> |
| Get Help | `<span class="material-icons md-18">help_outline</span>` | <span class="material-icons md-18">help_outline</span> |
| Search field cancel | `<span class="material-icons md-18">cancel</span>` | <span class="material-icons md-18">cancel</span> |
| Grid 3 vertical dot submenu | `<span class="material-icons md-18">more_vert</span>` | <span class="material-icons md-18">more_vert</span> |
| Query > Run query | `<span class="material-icons md-18">play_circle_filled</span>` | <span class="material-icons md-18">play_circle_filled</span> |
| Query > History > Folder icon | `<span class="material-icons md-18">folder_open</span>` | <span class="material-icons md-18">folder_open</span> |

## Icons exclusively used in help

These icons appear in the page footer `/_includes/footer_custom`

| Purpose | Icon source |
|---|---|
| Support link | <span class="material-icons md-18">support_agent</span> |
| Help issue | <span class="material-icons md-18">bug_report</span> |
| Contact FeatureBase | <span class="material-icons md-18">outgoing_mail</span> |
